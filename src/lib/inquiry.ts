// Project inquiry: shared by the contact form (client) and /api/inquiry (server).
// Kept dependency-free so it runs under `node --test` without a bundler.

export const INQUIRY_EMAIL = "info@101caststone.com";

export const ROLE_OPTIONS = ["Homeowner", "Architect or designer", "Builder or contractor", "Other"] as const;

export const PROJECT_TYPE_OPTIONS = [
  "Fireplace mantel",
  "Architectural elements",
  "Outdoor & garden",
  "Kitchen hood",
  "Functional elements",
  "Custom piece",
  "Not sure yet",
] as const;

export const TIMELINE_OPTIONS = ["Within 3 months", "3–6 months", "6–12 months", "Just planning"] as const;

export type InquiryField =
  | "name"
  | "email"
  | "phone"
  | "role"
  | "projectType"
  | "product"
  | "location"
  | "timeline"
  | "message";

export type Inquiry = Record<InquiryField, string>;

export type InquiryErrors = Partial<Record<InquiryField, string>>;

export type ValidationOutcome =
  | { ok: true; inquiry: Inquiry; isSpam: boolean }
  | { ok: false; errors: InquiryErrors };

const MAX_LENGTH: Record<InquiryField, number> = {
  name: 120,
  email: 254,
  phone: 40,
  role: 60,
  projectType: 60,
  product: 120,
  location: 120,
  timeline: 60,
  message: 5000,
};

const SINGLE_LINE_FIELDS: InquiryField[] = ["name", "email", "phone", "role", "projectType", "product", "location", "timeline"];

const OPTION_FIELDS: Partial<Record<InquiryField, readonly string[]>> = {
  role: ROLE_OPTIONS,
  projectType: PROJECT_TYPE_OPTIONS,
  timeline: TIMELINE_OPTIONS,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readField(source: Record<string, unknown>, field: InquiryField): string {
  const raw = source[field];
  if (typeof raw !== "string") return "";
  const trimmed = raw.trim();
  return SINGLE_LINE_FIELDS.includes(field) ? trimmed.replace(/[\r\n]+/g, " ") : trimmed;
}

/** Validates untrusted input (form state or a JSON request body). `website` is the honeypot. */
export function validateInquiry(input: unknown): ValidationOutcome {
  const source = input !== null && typeof input === "object" ? (input as Record<string, unknown>) : {};
  const inquiry = Object.fromEntries(
    (Object.keys(MAX_LENGTH) as InquiryField[]).map((field) => [field, readField(source, field)])
  ) as Inquiry;

  const errors: InquiryErrors = {};
  if (!inquiry.name) errors.name = "Please tell us your name.";
  if (!inquiry.email) errors.email = "Please add an email so we can reply.";
  else if (!EMAIL_PATTERN.test(inquiry.email)) errors.email = "That email address doesn't look complete.";
  if (!inquiry.message) errors.message = "A few words about your project help us prepare.";

  for (const field of Object.keys(OPTION_FIELDS) as InquiryField[]) {
    const allowed = OPTION_FIELDS[field];
    if (inquiry[field] && allowed && !allowed.includes(inquiry[field])) errors[field] = "Please choose one of the listed options.";
  }
  for (const field of Object.keys(MAX_LENGTH) as InquiryField[]) {
    if (inquiry[field].length > MAX_LENGTH[field]) errors[field] = `Please keep this under ${MAX_LENGTH[field]} characters.`;
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };
  const honeypot = typeof source.website === "string" ? source.website.trim() : "";
  return { ok: true, inquiry, isSpam: honeypot.length > 0 };
}

const BODY_LABELS: [InquiryField, string][] = [
  ["name", "Name"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["role", "I am a"],
  ["projectType", "Project type"],
  ["product", "Product"],
  ["location", "Project location"],
  ["timeline", "Timeline"],
];

export function composeInquiryEmail(inquiry: Inquiry): { subject: string; text: string } {
  const topic = inquiry.product || inquiry.projectType;
  const subject = topic ? `Project inquiry: ${topic} (${inquiry.name})` : `Project inquiry (${inquiry.name})`;
  const details = BODY_LABELS.filter(([field]) => inquiry[field]).map(([field, label]) => `${label}: ${inquiry[field]}`);
  return { subject, text: `${details.join("\n")}\n\n${inquiry.message}` };
}

/** Fallback for when the inquiry service is unavailable: hands the same message to the visitor's mail app. */
export function buildMailtoHref(inquiry: Inquiry): string {
  const { subject, text } = composeInquiryEmail(inquiry);
  return `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
}
