import type { Metadata } from "next";
import Link from "next/link";
import PortfolioGrid from "@/components/PortfolioGrid";
import SectionTitle from "@/components/SectionTitle";
import { featuredWork, works } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Recent Cast Stone Installations",
  description: "Selected commissions in mantels, columns, and landscape pieces—each proportioned to its light, room, and purpose.",
  alternates: { canonical: "/works" },
};

export default function Works() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle>Recent Works</SectionTitle>
      <p className="mt-6 max-w-prose text-clay text-[18px] leading-[1.85]">
        Selected commissions in mantels, columns, and landscape pieces—each proportioned to its light, room, and purpose.
      </p>

      {/* Portfolio: any photo opens a lightbox that steps through the whole set */}
      <div className="mt-16">
        <PortfolioGrid featured={featuredWork} photos={works} label="Recent works photos" />
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center opacity-0 animate-fade-in-up animate-delay-500">
        <p className="text-clay text-[17px] leading-relaxed max-w-2xl mx-auto">
          Every project begins with a conversation about your space, your vision, and the legacy you wish to create.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-6 px-8 py-4 rounded-lg bg-sienna-700 text-ivory-50 font-medium no-underline hover:shadow-lg transition-all duration-500"
        >
          Start Your Project
        </Link>
      </div>
    </div>
  );
}
