import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Contact & Visit Our Atascadero Studio",
  description:
    "Send a project inquiry or visit our studio at 1720 El Camino Real, Atascadero, CA 93422. Email info@101caststone.com. Open Mon–Fri 8am–5pm.",
  alternates: { canonical: "/contact" },
};

const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=1720+El+Camino+Real%2C+Atascadero%2C+CA+93422";

export default function Contact({ searchParams }: { searchParams: { product?: string | string[] } }) {
  // "Inquire About This Piece" links here with ?product=<name>; it only prefills the form.
  const requested = Array.isArray(searchParams.product) ? searchParams.product[0] : searchParams.product;
  const product = requested?.trim().slice(0, 120) || undefined;

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle>Begin a Conversation</SectionTitle>
      <p className="mt-6 max-w-prose text-clay text-[18px] leading-[1.85]">
        Every commission starts with listening. Share your vision, and we&apos;ll craft something extraordinary together.
      </p>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        {/* Contact Information */}
        <div className="opacity-0 animate-fade-in-up">
          <h2 className="font-display text-2xl tracking-normal mb-8 text-basalt">Contact Information</h2>

          <div className="space-y-6 text-clay">
            <div>
              <div className="font-medium text-basalt mb-1">Studio Location</div>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[16px] leading-relaxed hover:text-sienna transition-colors"
              >
                1720 El Camino Real<br />
                Atascadero, CA 93422
                <span className="block mt-1 text-[14px] text-sienna-700">
                  Get directions →<span className="sr-only"> (opens Google Maps in a new tab)</span>
                </span>
              </a>
            </div>

            <div>
              <div className="font-medium text-basalt mb-1">Phone</div>
              <a
                href="tel:+18056109278"
                className="text-[16px] text-sienna-700 hover:text-basalt transition-colors"
              >
                (805) 610-9278
              </a>
            </div>

            <div>
              <div className="font-medium text-basalt mb-1">Email</div>
              <a
                href="mailto:info@101caststone.com"
                className="text-[16px] text-sienna-700 hover:text-basalt transition-colors"
              >
                info@101caststone.com
              </a>
            </div>

            <div className="pt-4 border-t border-ecru">
              <div className="font-medium text-basalt mb-1">Hours</div>
              <p className="text-[16px] leading-relaxed">
                Monday – Friday: 8am – 5pm<br />
                Saturday: By appointment<br />
                Sunday: Closed
              </p>
            </div>

            <div className="pt-4 border-t border-ecru">
              <p className="text-[15px] text-clay italic leading-relaxed">
                Serving California and nationwide since 2001. We welcome visits to our Atascadero studio
                to view samples and discuss your project in person.
              </p>
            </div>
          </div>
        </div>

        {/* Project Inquiry: rendered visible from the start, since it is the page's main action */}
        <div>
          <div className="rounded-lg border border-[#e3d9c8] bg-[#f7f3ed] p-6 sm:p-8 md:p-10 shadow-lintel">
            <h2 className="font-display text-2xl tracking-normal mb-4 text-basalt">Project Inquiry</h2>
            <p className="text-[16px] text-clay mb-6 leading-[1.7]">
              Share details about your vision, including timeline and architectural context.
            </p>
            <InquiryForm initialProduct={product} />
            <p className="mt-6 pt-6 border-t border-[#e3d9c8] text-[15px] text-clay leading-relaxed">
              Prefer email, or have inspiration images or drawings to share?{" "}
              <a
                href="mailto:info@101caststone.com"
                className="text-sienna-700 hover:text-basalt transition-colors"
              >
                info@101caststone.com
              </a>
            </p>
          </div>

          <p className="mt-6 text-[16px] text-clay leading-relaxed">
            Questions about measuring, installation or care?{" "}
            <Link href="/faq" className="text-sienna-700 hover:text-basalt transition-colors">
              Read our FAQ
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
