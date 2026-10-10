import Link from "next/link";

interface Action {
  label: string;
  href: string;
}

interface ClosingCtaProps {
  heading: string;
  body: string;
  primary?: Action;
  secondary?: Action;
}

/** The one closing band every page ends on: basalt, heading left, the next step right. */
export default function ClosingCta({
  heading,
  body,
  primary = { label: "Begin a Conversation", href: "/contact" },
  secondary = { label: "Call (805) 610-9278", href: "tel:+18056109278" },
}: ClosingCtaProps) {
  return (
    <section className="bg-basalt text-ivory-50" aria-labelledby="closing-heading">
      <div className="wrap grid gap-8 py-20 md:grid-cols-12 md:items-end md:py-28">
        <h2 id="closing-heading" className="text-balance text-ivory-50 md:col-span-7">
          {heading}
        </h2>
        <div className="md:col-span-5">
          <p className="text-body text-ivory/80">{body}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href={primary.href} className="btn btn-inverse">
              {primary.label}
            </Link>
            {secondary.href.startsWith("tel:") ? (
              <a href={secondary.href} className="btn btn-inverse-secondary">
                {secondary.label}
              </a>
            ) : (
              <Link href={secondary.href} className="btn btn-inverse-secondary">
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
