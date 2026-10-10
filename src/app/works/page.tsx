import type { Metadata } from "next";
import ClosingCta from "@/components/ClosingCta";
import PortfolioGrid from "@/components/PortfolioGrid";
import SectionTitle from "@/components/SectionTitle";
import { featuredWork, works } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Works: Cast Stone Installations",
  description: "Selected installations: fireplace mantels, columns and entries, kitchen hoods, outdoor fireplaces, fountains and garden pieces, each shown in place.",
  alternates: { canonical: "/works" },
};

export default function Works() {
  return (
    <div className="bg-ivory">
      <section className="pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="wrap">
          {/* Editorial header: title and intro beside the featured photo, shown whole at its native ratio */}
          <PortfolioGrid
            featured={featuredWork}
            featuredClassName="aspect-[4/3] md:col-span-7"
            photos={works}
            label="Works photos"
            header={
              <div className="md:col-span-5">
                <SectionTitle>Works</SectionTitle>
                <p className="max-w-prose text-lead text-clay">
                  Selected installations: mantels, columns and entries, kitchen hoods, outdoor fireplaces, fountains
                  and garden pieces, each shown in place. Any photo opens the full set.
                </p>
              </div>
            }
          />
        </div>
      </section>

      <ClosingCta
        heading="Begin a Conversation"
        body="Every project begins with a conversation about the space and what you have in mind. Our design team works through it with you, from our standard designs or something entirely new."
      />
    </div>
  );
}
