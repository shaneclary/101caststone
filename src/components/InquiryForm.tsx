"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import {
  PROJECT_TYPE_OPTIONS,
  ROLE_OPTIONS,
  TIMELINE_OPTIONS,
  buildMailtoHref,
  validateInquiry,
  type Inquiry,
  type InquiryErrors,
  type InquiryField,
} from "@/lib/inquiry";

type FormValues = Inquiry & { website: string };
type Status = "editing" | "sending" | "sent" | "fallback";

// Order of the fields on the page; the first invalid one receives focus.
const FIELD_ORDER: InquiryField[] = ["name", "email", "phone", "role", "projectType", "product", "location", "timeline", "message"];

const PHONE_HREF = "tel:+18056109278";
const PHONE_DISPLAY = "(805) 610-9278";

const PRIMARY_BUTTON =
  "inline-block w-full sm:w-auto text-center px-8 py-4 rounded-lg bg-sienna-700 text-ivory-50 font-medium no-underline hover:shadow-lg transition-all duration-500";
const SECONDARY_BUTTON =
  "inline-block w-full sm:w-auto text-center px-8 py-4 border-2 border-clay text-clay rounded-lg hover:bg-clay/5 transition-all duration-500 font-medium";
const LABEL = "block text-basalt text-[15px] font-medium";
const CONTROL = "mt-2 block w-full rounded-lg bg-white px-4 py-3 text-[16px] text-basalt focus:ring-2";
const CONTROL_OK = "border-sienna focus:border-sienna-700 focus:ring-sienna-700/30";
const CONTROL_INVALID = "border-[#9b2c2c] focus:border-[#9b2c2c] focus:ring-[#9b2c2c]/20";
const HELP = "mt-1 text-[14px] leading-relaxed text-clay";
const ERROR = "mt-2 text-[14px] text-[#9b2c2c]";
const PANEL = "rounded-lg border border-[#e3d9c8] bg-white p-6 sm:p-8";
const PANEL_HEADING = "font-display text-2xl text-basalt focus:outline-none";
const RESULT_HEADING_ID = "inquiry-result";

const fieldId = (field: InquiryField) => `inquiry-${field}`;
const errorId = (field: InquiryField) => `inquiry-${field}-error`;

export default function InquiryForm({ initialProduct }: { initialProduct?: string }) {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    role: "",
    projectType: "",
    product: initialProduct ?? "",
    location: "",
    timeline: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<Status>("editing");
  const [submitted, setSubmitted] = useState<Inquiry | null>(null);

  // Element to focus once the next render is on screen (first invalid field, or a result heading).
  const focusAfterRender = useRef<string | null>(null);
  useEffect(() => {
    if (!focusAfterRender.current) return;
    document.getElementById(focusAfterRender.current)?.focus();
    focusAfterRender.current = null;
  });

  function update(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (name in errors) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name as InquiryField];
        return next;
      });
    }
  }

  function showErrors(found: InquiryErrors) {
    setErrors(found);
    const first = FIELD_ORDER.find((field) => found[field]);
    focusAfterRender.current = first ? fieldId(first) : null;
  }

  function showResult(next: Status) {
    setStatus(next);
    focusAfterRender.current = RESULT_HEADING_ID;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const outcome = validateInquiry(values);
    if (!outcome.ok) {
      showErrors(outcome.errors);
      return;
    }

    setErrors({});
    setSubmitted(outcome.inquiry);
    setStatus("sending");
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        showResult("sent");
        return;
      }
      if (response.status === 400) {
        const data: { errors?: Record<string, unknown> } | null = await response.json().catch(() => null);
        const serverErrors = data?.errors;
        if (serverErrors && FIELD_ORDER.some((field) => typeof serverErrors[field] === "string")) {
          setStatus("editing");
          showErrors(serverErrors as InquiryErrors);
          return;
        }
      }
      // Not configured (503), email provider failed (502) or anything else: hand off to the email app.
      showResult("fallback");
    } catch {
      showResult("fallback");
    }
  }

  function backToForm() {
    setStatus("editing");
    focusAfterRender.current = fieldId("name");
  }

  if (status === "sent" && submitted) {
    return (
      <div role="status" className={PANEL}>
        <h3 id={RESULT_HEADING_ID} tabIndex={-1} className={PANEL_HEADING}>
          Thank you, {submitted.name}.
        </h3>
        <p className="mt-4 text-[16px] leading-[1.7] text-clay">We typically respond within 1–2 business days.</p>
        <p className="mt-2 text-[16px] leading-[1.7] text-clay">
          Prefer to talk? Call{" "}
          <a href={PHONE_HREF} className="text-sienna-700 hover:text-basalt transition-colors">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>
    );
  }

  if (status === "fallback" && submitted) {
    return (
      <div role="status" className={PANEL}>
        <h3 id={RESULT_HEADING_ID} tabIndex={-1} className={PANEL_HEADING}>
          Almost there
        </h3>
        <p className="mt-4 text-[16px] leading-[1.7] text-clay">
          Your inquiry hasn&apos;t been sent yet. Send it from your email app — everything you entered is filled in.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={buildMailtoHref(submitted)} className={PRIMARY_BUTTON}>
            Open in email app
          </a>
          <button type="button" onClick={backToForm} className={SECONDARY_BUTTON}>
            Back to the form
          </button>
        </div>
        <p className="mt-4 text-[16px] leading-[1.7] text-clay">
          Or call{" "}
          <a href={PHONE_HREF} className="text-sienna-700 hover:text-basalt transition-colors">
            {PHONE_DISPLAY}
          </a>
        </p>
      </div>
    );
  }

  // Shared props for every visible control: id, value, error state and descriptions.
  function control(field: InquiryField, helpId?: string) {
    const error = errors[field];
    return {
      id: fieldId(field),
      name: field,
      value: values[field],
      onChange: update,
      "aria-invalid": error ? true : undefined,
      "aria-describedby": [helpId, error ? errorId(field) : undefined].filter(Boolean).join(" ") || undefined,
      className: `${CONTROL} ${error ? CONTROL_INVALID : CONTROL_OK}`,
    };
  }

  function renderLabel(field: InquiryField, text: string, required = false) {
    return (
      <label htmlFor={fieldId(field)} className={LABEL}>
        {text}
        {required && (
          <span aria-hidden="true" className="text-sienna-700">
            {" *"}
          </span>
        )}
      </label>
    );
  }

  function renderError(field: InquiryField) {
    return errors[field] ? (
      <p id={errorId(field)} className={ERROR}>
        {errors[field]}
      </p>
    ) : null;
  }

  // method="post" keeps entries out of the URL if someone submits before the script has loaded.
  return (
    <form method="post" noValidate onSubmit={handleSubmit} className="space-y-6">
      <p className="text-[14px] text-clay">Fields marked * are required.</p>

      <div>
        {renderLabel("name", "Name", true)}
        <input type="text" autoComplete="name" required {...control("name")} />
        {renderError("name")}
      </div>

      <div>
        {renderLabel("email", "Email", true)}
        <input type="email" autoComplete="email" spellCheck={false} required {...control("email")} />
        {renderError("email")}
      </div>

      <div>
        {renderLabel("phone", "Phone")}
        <input type="tel" autoComplete="tel" {...control("phone")} />
        {renderError("phone")}
      </div>

      <div>
        {renderLabel("role", "I am a")}
        <select {...control("role")}>
          <option value="">Select…</option>
          {ROLE_OPTIONS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        {renderError("role")}
      </div>

      <div>
        {renderLabel("projectType", "Project type")}
        <select {...control("projectType")}>
          <option value="">Select…</option>
          {PROJECT_TYPE_OPTIONS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        {renderError("projectType")}
      </div>

      <div>
        {renderLabel("product", "Piece of interest")}
        <input type="text" autoComplete="off" {...control("product")} />
        {renderError("product")}
      </div>

      <div>
        {renderLabel("location", "Project city or ZIP")}
        <input type="text" {...control("location")} />
        {renderError("location")}
      </div>

      <div>
        {renderLabel("timeline", "Timeline")}
        <select {...control("timeline")}>
          <option value="">Select…</option>
          {TIMELINE_OPTIONS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        {renderError("timeline")}
      </div>

      <div>
        {renderLabel("message", "Message", true)}
        <p id="inquiry-message-help" className={HELP}>
          Tell us about the space and what you have in mind. For a mantel, the firebox opening size (W × H) helps.
        </p>
        <textarea rows={6} required {...control("message", "inquiry-message-help")} />
        {renderError("message")}
      </div>

      {/* Honeypot: hidden from people and assistive tech; bots that fill it are dropped by /api/inquiry. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="inquiry-website">Website</label>
        <input
          id="inquiry-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={update}
        />
      </div>

      <div>
        <button type="submit" disabled={status === "sending"} className={`${PRIMARY_BUTTON} disabled:cursor-wait`}>
          {status === "sending" ? "Sending…" : "Send Inquiry"}
        </button>
        <p className="mt-4 text-[14px] text-clay">We typically respond within 1–2 business days.</p>
      </div>
    </form>
  );
}
