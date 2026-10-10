import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ClosingCta from "@/components/ClosingCta";
import SectionTitle from "@/components/SectionTitle";
import { mantelLeadTime, specification } from "@/data/company";

export const metadata: Metadata = {
  title: "The Lintel Method: Dialogue, Mould, Cast, Finish",
  description:
    "How each piece is made in Atascadero: design with our team, new or modified moulds from our own mould shop, cast stone packed by hand, and every piece checked by Quality Control before delivery and installation.",
  alternates: { canonical: "/process" },
};

const specValue = (label: string) => specification.find((row) => row.label === label)?.value ?? "";
const material = specValue("Material");
const colors = specValue("Colors and textures");

// The manufacturing steps from the original 101 Cast Stone site, condensed.
const STEPS = [
  "Our design team works through your project requirements with you, starting from our existing designs, a custom configuration of current stock, or something entirely new.",
  "You review and confirm the final design before production begins.",
  "Any new or modified moulds are made in our in-house mould shop.",
  "Each piece is cast in the color you specify and packed by hand, with fiberglass reinforcement packed in behind it.",
  "After curing, every piece is inspected by Quality Control and staged until your full order is complete.",
  "We schedule delivery and installation with you. Fireplace products are quoted with installation by our team.",
];

const PHOTOS = [
  { src: "/images/process/mould-shop.jpg", alt: "Mould material being cut on a band saw", caption: "The in-house mould shop" },
  { src: "/images/process/workshop-floor.jpg", alt: "Rows of moulds on the floor being filled by hand, with shelves of moulds behind", caption: "Moulds being filled on the manufacturing floor" },
  { src: "/images/process/mould-detail.jpg", alt: "Close view of a molded profile beside its mould", caption: "A profile and its mould" },
];

export default function Process() {
  return (
    <div className="bg-ivory">
      <section className="pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="wrap">
          <SectionTitle>The Lintel Method</SectionTitle>
          <p className="max-w-prose text-lead text-clay">
            Dialogue, mould, cast, finish. Each piece is made by hand in Atascadero, from the first conversation to
            the day our crew installs it.
          </p>

          {/* Workshop photos from the original site's Design & Manufacturing Process page */}
          <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
            {PHOTOS.map((photo) => (
              <figure key={photo.src}>
                <div className="relative aspect-[4/3] overflow-hidden rounded bg-ivory-200">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
                </div>
                <figcaption className="mt-3 text-caption text-clay">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>

          {/* What to Expect */}
          <div className="mt-20 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow mb-3">What to expect</p>
              <h2 className="text-balance">Six steps, from drawing to installation.</h2>
            </div>
            <ol className="divide-y divide-nickel/40 border-y border-nickel/40 md:col-span-8">
              {STEPS.map((step, i) => (
                <li key={step} className="flex gap-6 py-5">
                  <span className="w-8 shrink-0 font-display text-2xl leading-none text-sienna">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-body text-clay">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Materials and lead time: the specification and FAQ wording in src/data/company.ts */}
          <div className="mt-20 grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-5 text-heading md:text-heading">Materials</h2>
              <ul className="max-w-prose space-y-4 text-body text-clay">
                <li>{material}</li>
                <li>
                  {colors}{" "}
                  <Link href="/collections#finishes" className="text-link underline decoration-nickel underline-offset-4">
                    See the standard colors and textures
                  </Link>
                  .
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-5 text-heading md:text-heading">Lead time</h2>
              <p className="max-w-prose text-body text-clay">{mantelLeadTime}</p>
              <p className="mt-6 text-small text-clay">
                Architects and installers:{" "}
                <Link href="/technical-info" className="text-link underline decoration-nickel underline-offset-4">
                  technical information
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-20 max-w-prose border-l-2 border-sienna pl-6 md:pl-8">
            <h2 className="mb-4 text-heading md:text-heading">Our Philosophy</h2>
            <p className="font-display text-2xl leading-snug text-basalt">
              Precision, not spectacle. Every column, lintel and mantel is proportioned to the room, the light and the
              people who live with it. The finest details are the ones you feel before you see them.
            </p>
          </div>
        </div>
      </section>

      <ClosingCta
        heading="Begin a Conversation"
        body="Questions about measuring, installation or care are answered in our FAQ. For everything else, tell us about the space and what you have in mind."
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />
    </div>
  );
}
