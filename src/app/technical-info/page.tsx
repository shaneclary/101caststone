import type { Metadata } from "next";
import Link from "next/link";
import ProductSpec from "@/components/ProductSpec";
import SectionTitle from "@/components/SectionTitle";
import { technicalDocuments } from "@/data/company";

export const metadata: Metadata = {
  title: "Technical Information",
  description:
    "Drawings, worksheets and brochures: technical documents for consumers, architects and installers, and the cast stone specification.",
  alternates: { canonical: "/technical-info" },
};

// All copy restates the original site's Technical Info, FAQ and Design & Manufacturing Process pages.
export default function TechnicalInfo() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle>Technical Information</SectionTitle>
      {/* mt-8 clears the etched rule SectionTitle draws about 22px below the heading */}
      <p className="mt-8 font-display text-xl text-clay">Drawings, worksheets and brochures</p>
      <p className="mt-4 max-w-prose text-clay text-[18px] leading-[1.85]">
        Technical documents for consumers, architects and installers.
      </p>

      <section className="mt-16 max-w-3xl" aria-labelledby="documents-heading">
        <h2 id="documents-heading" className="font-display text-2xl tracking-normal text-basalt">
          Documents
        </h2>
        <p className="mt-3 text-[16px] text-clay">Documents are sent on request.</p>
        <ul className="mt-6 border-t border-ecru">
          {technicalDocuments.map((doc) => (
            <li key={doc} className="flex items-center justify-between gap-6 border-b border-ecru py-3">
              <span className="text-[16px] text-basalt">{doc}</span>
              <Link
                href={`/contact?product=${encodeURIComponent(doc)}#inquiry`}
                className="shrink-0 inline-flex min-h-[44px] items-center text-[16px] font-medium text-sienna-700 hover:text-basalt transition-colors no-underline"
              >
                Request<span className="sr-only"> the {doc}</span>&nbsp;<span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-prose text-[16px] text-clay leading-relaxed">
          If you are out of our area, measure your fireplace with the Fireplace Surround Worksheet. Once you have taken
          the measurements, our sales staff will review the worksheet with you to confirm accuracy.
        </p>
      </section>

      <section id="specification" className="mt-20 max-w-3xl">
        <ProductSpec
          isMantel={true}
          headingLevel={2}
          headingClassName="font-display text-2xl tracking-normal text-basalt mb-6"
        />
      </section>

      <section className="mt-20 max-w-3xl" aria-labelledby="custom-heading">
        <h2 id="custom-heading" className="font-display text-2xl tracking-normal text-basalt mb-6">
          Custom work
        </h2>
        <div className="space-y-4 max-w-prose text-[16px] text-clay leading-relaxed">
          <p>
            If you are unable to find a style you are looking for in our standard product line, we will be happy to work
            with you and explore other possible options.
          </p>
          <p>We can create a custom configuration using our current stock, or something completely new.</p>
          <p>
            If the fireplace mantel you desire does not appear to fit your firebox, we can work with our design team to
            come up with the best solution to alter the mantel in a way that retains the integrity of the design.
          </p>
        </div>
      </section>

      <section className="mt-20 max-w-3xl rounded-lg border border-[#e3d9c8] bg-[#f7f3ed] p-6 sm:p-8 md:p-10 shadow-lintel">
        <h2 className="font-display text-2xl tracking-normal text-basalt">Discuss your project</h2>
        <p className="mt-3 text-[16px] text-clay leading-relaxed">
          Contact us to discuss our custom solutions to your specific requirements.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-sienna-700 text-ivory-50 font-medium no-underline hover:shadow-lg transition-all duration-500"
          >
            Begin a Conversation
          </Link>
          <Link href="/faq" className="text-[16px] text-sienna-700 hover:text-basalt transition-colors">
            Read our FAQ
          </Link>
        </div>
      </section>
    </div>
  );
}
