import type { Metadata } from "next";
import Link from "next/link";
import ClosingCta from "@/components/ClosingCta";
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
    <div className="bg-ivory">
      <section className="pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="wrap">
          <SectionTitle>Technical Information</SectionTitle>
          <p className="max-w-prose text-lead text-clay">
            Drawings, worksheets and brochures: technical documents for consumers, architects and installers.
          </p>

          <section className="mt-16 max-w-3xl" aria-labelledby="documents-heading">
            <h2 id="documents-heading" className="text-heading md:text-heading">
              Documents
            </h2>
            <p className="mt-3 text-body text-clay">Documents are sent on request.</p>
            <ul className="mt-6 border-t border-nickel/40">
              {technicalDocuments.map((doc) => (
                <li key={doc} className="flex items-center justify-between gap-6 border-b border-nickel/40 py-3">
                  <span className="text-body text-basalt">{doc}</span>
                  <Link
                    href={`/contact?product=${encodeURIComponent(doc)}#inquiry`}
                    className="text-link inline-flex min-h-[44px] shrink-0 items-center text-small font-medium"
                  >
                    Request<span className="sr-only"> the {doc}</span>&nbsp;<span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-prose text-body text-clay">
              If you are out of our area, measure your fireplace with the Fireplace Surround Worksheet. Once you have taken
              the measurements, our sales staff will review the worksheet with you to confirm accuracy.
            </p>
          </section>

          <section id="specification" className="mt-20 max-w-3xl">
            <ProductSpec isMantel={true} headingLevel={2} headingClassName="mb-6 text-heading md:text-heading" />
          </section>

          <section className="mt-20 max-w-3xl" aria-labelledby="custom-heading">
            <h2 id="custom-heading" className="mb-5 text-heading md:text-heading">
              Custom work
            </h2>
            <div className="max-w-prose space-y-4 text-body text-clay">
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
        </div>
      </section>

      <ClosingCta
        heading="Discuss your project"
        body="Contact us to discuss our custom solutions to your specific requirements. Questions about measuring, installation or care are answered in the FAQ."
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />
    </div>
  );
}
