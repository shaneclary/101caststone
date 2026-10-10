import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import InquiryForm from "@/components/InquiryForm";
import { showroom } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact & Visit the Atascadero Showroom",
  description:
    "Send a project inquiry or visit the showroom at 1720 El Camino Real, Atascadero, CA 93422. Email info@101caststone.com. Open Monday to Friday, 8am to 5pm; weekend appointments available.",
  alternates: { canonical: "/contact" },
};

const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=1720+El+Camino+Real%2C+Atascadero%2C+CA+93422";

const VALUE = "text-body text-basalt no-underline hover:underline underline-offset-4";

export default function Contact({ searchParams }: { searchParams: { product?: string | string[] } }) {
  // "Inquire About This Piece" links here with ?product=<name>; it only prefills the form.
  const requested = Array.isArray(searchParams.product) ? searchParams.product[0] : searchParams.product;
  // Slice by code points so a long value never ends in half an emoji.
  const product = requested ? Array.from(requested.trim()).slice(0, 120).join("") || undefined : undefined;

  return (
    <div className="wrap pb-20 pt-12 md:pb-28 md:pt-20">
      <SectionTitle>Begin a Conversation</SectionTitle>
      <p className="max-w-prose text-lead text-clay">
        Every commission starts with listening. Tell us about the space and what you have in mind, and our design
        team will work through the project with you.
      </p>

      <div className="mt-12 grid gap-12 md:grid-cols-[5fr_7fr] lg:gap-16">
        {/* Contact information */}
        <div>
          <h2 className="mb-8 text-heading md:text-heading">Contact Information</h2>

          <dl className="space-y-7">
            <div>
              <dt className="eyebrow mb-2">{showroom.name}</dt>
              <dd>
                <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className={`block ${VALUE}`}>
                  {showroom.street}
                  <br />
                  {showroom.locality}
                  <span className="mt-1 block text-small text-sienna-700">
                    Get directions <span aria-hidden="true">→</span>
                    <span className="sr-only"> (opens Google Maps in a new tab)</span>
                  </span>
                </a>
              </dd>
            </div>

            <div>
              <dt className="eyebrow mb-2">Phone</dt>
              <dd>
                <a href="tel:+18056109278" className={VALUE}>
                  (805) 610-9278
                </a>
              </dd>
            </div>

            <div>
              <dt className="eyebrow mb-2">Email</dt>
              <dd>
                <a href="mailto:info@101caststone.com" className={VALUE}>
                  info@101caststone.com
                </a>
              </dd>
            </div>

            <div className="border-t border-ecru pt-7">
              <dt className="eyebrow mb-2">Factory Showroom Hours</dt>
              <dd className="text-body text-basalt">
                {showroom.hours}
                <br />
                {showroom.weekend}
              </dd>
            </div>
          </dl>

          <p className="mt-7 border-t border-ecru pt-7 text-small text-clay">
            Visitors are welcome at the showroom to see the pieces, colors and textures and talk through a project in
            person. Local to our area of California? Our sales staff will visit your home or jobsite to verify
            measurements.
          </p>
        </div>

        {/* Project Inquiry: rendered visible from the start, since it is the page's main action.
            Arriving from a piece ("Inquire About This Piece"), phones see the form before the contact details. */}
        <div id="inquiry" className={product ? "scroll-mt-28 order-first md:order-none" : "scroll-mt-28"}>
          <div className="card p-6 hover:border-ecru sm:p-8 md:p-10">
            <h2 className="mb-3 text-heading md:text-heading">Project Inquiry</h2>
            <p className="mb-6 text-small text-clay">
              Share what you have in mind, with the timeline and the architectural context.
            </p>
            <InquiryForm initialProduct={product} />
            <p className="mt-6 border-t border-ecru pt-6 text-small text-clay">
              Prefer email, or have inspiration images or drawings to share?{" "}
              <a href="mailto:info@101caststone.com" className="text-link underline decoration-nickel underline-offset-4">
                info@101caststone.com
              </a>
            </p>
          </div>

          <p className="mt-6 text-small text-clay">
            Questions about measuring, installation or care?{" "}
            <Link href="/faq" className="text-link underline decoration-nickel underline-offset-4">
              Read the FAQ
            </Link>
            . Architects and builders:{" "}
            <Link href="/technical-info" className="text-link underline decoration-nickel underline-offset-4">
              technical information
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
