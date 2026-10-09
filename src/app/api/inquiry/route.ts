import { NextResponse } from "next/server";
import { INQUIRY_EMAIL, composeInquiryEmail, validateInquiry } from "@/lib/inquiry";

// Generous for a 5,000-character message plus the other fields, small enough to refuse junk early.
const MAX_BODY_LENGTH = 20000;

/**
 * Receives the contact-page inquiry and emails it to the studio through Resend.
 * Without RESEND_API_KEY and INQUIRY_FROM_EMAIL it answers 503, and the form hands the
 * message to the visitor's email app instead. Inquiry content is never logged.
 */
export async function POST(request: Request) {
  // JSON only: a cross-site form can't send it without a CORS preflight this route never approves.
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return NextResponse.json({ error: "unsupported_media_type" }, { status: 415 });
  }
  if (Number(request.headers.get("content-length")) > MAX_BODY_LENGTH) {
    return NextResponse.json({ error: "too_large" }, { status: 413 });
  }
  const body = await request.text();
  if (body.length > MAX_BODY_LENGTH) {
    return NextResponse.json({ error: "too_large" }, { status: 413 });
  }

  let input: unknown;
  try {
    input = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const outcome = validateInquiry(input);
  if (!outcome.ok) {
    return NextResponse.json({ errors: outcome.errors }, { status: 400 });
  }
  // Honeypot filled in: look successful to the bot, send nothing.
  if (outcome.isSpam) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM_EMAIL;
  const to = process.env.INQUIRY_TO_EMAIL || INQUIRY_EMAIL;
  if (!apiKey || !from) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const { subject, text } = composeInquiryEmail(outcome.inquiry);
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to: [to], reply_to: outcome.inquiry.email, subject, text }),
    });
    if (!response.ok) {
      console.error(`Inquiry email not sent: Resend responded with status ${response.status}`);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
  } catch {
    console.error("Inquiry email not sent: Resend could not be reached");
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
