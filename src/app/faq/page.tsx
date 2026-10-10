import type { Metadata } from "next";
import ClosingCta from "@/components/ClosingCta";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { mantelLeadTime } from "@/data/company";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Ordering, measuring, lead time, installation, materials, sealing and care for 101 Cast Stone mantels and architectural cast stone.",
  alternates: { canonical: "/faq" },
};

type Faq = {
  q: string;
  a: string;
  // Optional link on a phrase that appears in the answer.
  link?: { text: string; href: string };
};

// Answers restate the owner's FAQ from the previous site. Demolition (no answer on the old page), the
// "in use for over 70 years" and price comparison in "made of", and the color count are left out until
// the owner reconciles them with the current copy.
const faqs: Faq[] = [
  {
    q: "How do I order a fireplace mantel?",
    a: "Contact us via phone, email or the contact form on this website, and we will walk you through the entire exciting process of creating the fireplace products of your choice.",
    link: { text: "contact form", href: "/contact" },
  },
  {
    q: "How do I measure my fireplace?",
    a: "If you are local to our area of California, our sales staff will schedule an appointment to visit your residence or jobsite to verify the measurements. If you are out of the area, ask us for our Fireplace Surround Worksheet; once you have taken the measurements, our sales staff will review the worksheet with you to confirm accuracy.",
    link: { text: "Fireplace Surround Worksheet", href: "/technical-info" },
  },
  {
    q: "What is the lead time for my mantel?",
    a: mantelLeadTime,
  },
  {
    q: "Who installs the fireplace products?",
    a: "All of our fireplace products are quoted with installation by our team of professionals. However, if you would like to complete the installation yourself, many of our products may be installed by others as long as our installation requirements are adhered to.",
  },
  {
    q: "Is there a finish required?",
    a: "No. However, if you wish to have an artist antique or faux finish the mantel, our products will accept their materials.",
  },
  {
    q: "How long will cast stone last?",
    a: "Cast stone has been a prime building material for hundreds of years with a very long life span. The earliest known use of cast stone dates to around 1138 A.D. in Carcassonne, France.",
  },
  {
    q: "Do I need to seal the fireplace mantel?",
    a: "Sealing is recommended but not required. Cast stone products are porous and therefore subject to staining. We can provide you with the appropriate sealer at the time of installation or can arrange to seal the package after the product has cured.",
  },
  {
    q: "How do I clean my cast stone?",
    a: "With lukewarm water and a clean white cloth.",
  },
  {
    q: "What is the fireplace mantel made of?",
    a: "Everything we make is made of modern-day cast stone. The mix includes Portland cement, crushed quartz, color pigment, fiberglass reinforcing materials and polymer. The result is stronger than, and similar in appearance to, natural stone.",
  },
  {
    q: "Can cast stone be used next to the firebox?",
    a: "Cast stone is a non-combustible product and can be used directly next to the firebox opening. This eliminates the need and cost of other interior surrounds that are required with a wood or plaster mantel.",
  },
  {
    q: "Do you do custom work?",
    a: "Definitely! If you are unable to find a style you are looking for in our standard product line, we will be happy to work with you and explore other possible options.",
  },
  {
    q: "Are there different colors & finishes available?",
    a: "Yes. We have a number of standard colors and different finish styles available to choose from. We can also create custom colors if needed.",
    link: { text: "standard colors and different finish styles", href: "/collections#finishes" },
  },
  {
    q: "What if the firebox opening does not seem to fit the standard mantel dimensions?",
    a: "If the fireplace mantel you desire does not appear to fit your firebox, we can work with our design team to come up with the best solution to alter the mantel in such a manner that will retain the integrity of the design.",
  },
  {
    q: "How is the fireplace mantel delivered?",
    a: "Our crew will deliver the mantel at the time of installation. If installation is not being provided, alternate delivery options are available.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

function Answer({ faq }: { faq: Faq }) {
  if (!faq.link) return <>{faq.a}</>;
  const [before, after] = faq.a.split(faq.link.text);
  return (
    <>
      {before}
      <Link href={faq.link.href} className="text-link underline decoration-nickel underline-offset-4">
        {faq.link.text}
      </Link>
      {after}
    </>
  );
}

export default function FaqPage() {
  return (
    <div className="bg-ivory">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <section className="pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="wrap">
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <p className="max-w-prose text-lead text-clay">
            Answers to the questions we hear most about ordering, measuring, installation, materials and care.
          </p>
          <p className="mt-4 max-w-prose text-body text-clay">
            Technical documents for consumers, architects and installers are on the{" "}
            <Link href="/technical-info" className="text-link underline decoration-nickel underline-offset-4">
              technical information
            </Link>{" "}
            page.
          </p>

          <div className="mt-12 max-w-3xl border-t border-nickel/40">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border-b border-nickel/40">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 font-display text-xl leading-snug text-basalt hover:text-sienna-700 [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <svg
                    aria-hidden="true"
                    className="mt-1.5 h-4 w-4 shrink-0 text-sienna-700 transition-transform duration-300 group-open:rotate-45"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                  >
                    <path d="M8 2v12M2 8h12" />
                  </svg>
                </summary>
                <p className="-mt-1 max-w-prose pb-6 text-body text-clay">
                  <Answer faq={faq} />
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        heading="Still have a question?"
        body="Call us Monday to Friday, 8am to 5pm, or send a note and we will walk you through the process."
      />
    </div>
  );
}
