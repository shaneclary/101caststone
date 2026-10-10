import type { Metadata } from "next";
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
    a: "Everything we make is made of modern-day cast stone. The mix includes Portland cement, crushed quartz, color pigment, fiberglass reinforcing materials and polymer. The result is stronger than, and similar in appearance to, natural stone, and it is non-combustible, so it can be used directly next to the firebox opening.",
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
      <Link href={faq.link.href} className="text-sienna-700 hover:text-basalt transition-colors">
        {faq.link.text}
      </Link>
      {after}
    </>
  );
}

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <p className="mt-6 max-w-prose text-clay text-[18px] leading-[1.85]">
        Here are the answers to common questions that we receive about our cast stone products.
      </p>
      <p className="mt-4 max-w-prose text-[16px] text-clay">
        Technical documents for consumers, architects and installers are on our{" "}
        <Link href="/technical-info" className="text-sienna-700 hover:text-basalt transition-colors">
          technical information
        </Link>{" "}
        page.
      </p>

      <div className="mt-12 max-w-3xl border-t border-ecru">
        {faqs.map((faq) => (
          <details key={faq.q} className="group border-b border-ecru">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 font-display text-xl leading-snug text-basalt [&::-webkit-details-marker]:hidden">
              <span>{faq.q}</span>
              <span aria-hidden="true" className="shrink-0 text-sienna-700 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="-mt-2 pb-6 max-w-prose text-[16px] text-clay leading-relaxed">
              <Answer faq={faq} />
            </p>
          </details>
        ))}
      </div>

      <section className="mt-16 max-w-3xl rounded-lg border border-[#e3d9c8] bg-[#f7f3ed] p-6 sm:p-8 md:p-10 shadow-lintel">
        <h2 className="font-display text-2xl tracking-normal text-basalt">Still have a question?</h2>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-sienna-700 text-ivory-50 font-medium no-underline hover:shadow-lg transition-all duration-500"
          >
            Contact us
          </Link>
          <p className="text-[16px] text-clay">
            Or call{" "}
            <a href="tel:+18056109278" className="text-sienna-700 hover:text-basalt transition-colors">
              (805) 610-9278
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
