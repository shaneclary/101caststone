import { test } from "node:test";
import assert from "node:assert/strict";
import {
  INQUIRY_EMAIL,
  buildMailtoHref,
  composeInquiryEmail,
  validateInquiry,
} from "./inquiry.ts";

const complete = {
  name: "  Helena Marsh ",
  email: "Helena@Example.com ",
  phone: "(805) 555-0100",
  role: "Homeowner",
  projectType: "Fireplace mantel",
  product: "Provence",
  location: "Paso Robles, CA",
  timeline: "3–6 months",
  message: "Looking for a Provence mantel for a 42in firebox in our living room.",
  website: "",
};

test("accepts a complete inquiry and trims every field", () => {
  const outcome = validateInquiry(complete);
  assert.equal(outcome.ok, true);
  if (!outcome.ok) return;
  assert.equal(outcome.inquiry.name, "Helena Marsh");
  assert.equal(outcome.inquiry.email, "Helena@Example.com");
  assert.equal(outcome.inquiry.product, "Provence");
  assert.equal(outcome.isSpam, false);
});

test("requires name, a valid email and a message; everything else is optional", () => {
  const outcome = validateInquiry({ name: " ", email: "not-an-email", message: "" });
  assert.equal(outcome.ok, false);
  if (outcome.ok) return;
  assert.deepEqual(Object.keys(outcome.errors).sort(), ["email", "message", "name"]);

  const minimal = validateInquiry({ name: "Ana", email: "ana@example.com", message: "A mantel, please." });
  assert.equal(minimal.ok, true);
  if (!minimal.ok) return;
  assert.equal(minimal.inquiry.phone, "");
  assert.equal(minimal.inquiry.projectType, "");
});

test("rejects values outside the allowed option lists instead of passing them through", () => {
  const outcome = validateInquiry({ ...complete, role: "Hacker", projectType: "<script>", timeline: "yesterday" });
  assert.equal(outcome.ok, false);
  if (outcome.ok) return;
  assert.deepEqual(Object.keys(outcome.errors).sort(), ["projectType", "role", "timeline"]);
});

test("bounds field lengths so a single request cannot carry an unbounded payload", () => {
  const outcome = validateInquiry({ ...complete, name: "x".repeat(121), message: "y".repeat(5001) });
  assert.equal(outcome.ok, false);
  if (outcome.ok) return;
  assert.ok(outcome.errors.name);
  assert.ok(outcome.errors.message);
});

test("ignores non-string input without throwing", () => {
  const outcome = validateInquiry({ name: 42, email: ["a@b.co"], message: { text: "hi" } });
  assert.equal(outcome.ok, false);
  assert.equal(validateInquiry(null).ok, false);
  assert.equal(validateInquiry("name=a").ok, false);
});

test("flags a filled honeypot as spam but still validates the rest", () => {
  const outcome = validateInquiry({ ...complete, website: "http://spam.example" });
  assert.equal(outcome.ok, true);
  if (!outcome.ok) return;
  assert.equal(outcome.isSpam, true);
});

test("composes a subject that leads with the product, and a body listing only provided fields", () => {
  const outcome = validateInquiry({ name: "Ana", email: "ana@example.com", product: "Heritage", message: "Hello" });
  assert.equal(outcome.ok, true);
  if (!outcome.ok) return;
  const email = composeInquiryEmail(outcome.inquiry);
  assert.equal(email.subject, "Project inquiry: Heritage (Ana)");
  assert.match(email.text, /^Name: Ana$/m);
  assert.match(email.text, /^Product: Heritage$/m);
  assert.doesNotMatch(email.text, /^Phone:/m);
  assert.match(email.text, /Hello$/);
});

test("subject falls back to project type, then to a generic label", () => {
  const typed = validateInquiry({ name: "Ana", email: "ana@example.com", projectType: "Outdoor & garden", message: "Hi" });
  assert.equal(typed.ok, true);
  if (!typed.ok) return;
  assert.equal(composeInquiryEmail(typed.inquiry).subject, "Project inquiry: Outdoor & garden (Ana)");

  const bare = validateInquiry({ name: "Ana", email: "ana@example.com", message: "Hi" });
  assert.equal(bare.ok, true);
  if (!bare.ok) return;
  assert.equal(composeInquiryEmail(bare.inquiry).subject, "Project inquiry (Ana)");
});

test("strips line breaks from single-line fields so they cannot forge extra headers", () => {
  const outcome = validateInquiry({ ...complete, name: "Ana\r\nBcc: victim@example.com" });
  assert.equal(outcome.ok, true);
  if (!outcome.ok) return;
  assert.doesNotMatch(outcome.inquiry.name, /[\r\n]/);
  assert.doesNotMatch(composeInquiryEmail(outcome.inquiry).subject, /[\r\n]/);
});

test("builds a mailto link to the studio that round-trips subject and body", () => {
  const outcome = validateInquiry(complete);
  assert.equal(outcome.ok, true);
  if (!outcome.ok) return;
  const href = buildMailtoHref(outcome.inquiry);
  assert.ok(href.startsWith(`mailto:${INQUIRY_EMAIL}?`));
  const params = new URLSearchParams(href.slice(href.indexOf("?") + 1));
  const email = composeInquiryEmail(outcome.inquiry);
  assert.equal(params.get("subject"), email.subject);
  assert.equal(params.get("body"), email.text);
  assert.doesNotMatch(href, /\+/, "spaces must be %20, not +, for mail clients");
});
