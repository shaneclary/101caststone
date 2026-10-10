import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ClosingCta from "@/components/ClosingCta";
import SectionTitle from "@/components/SectionTitle";
import { whyCastStone } from "@/data/company";

export const metadata: Metadata = {
  title: "Commissions: Custom Cast Stone",
  description:
    "Mantels and fireplaces, columns and capitals, architectural details, outdoor and garden pieces, kitchen hoods, functional elements and stone masonry. Each commission begins as dialogue.",
  alternates: { canonical: "/commissions" },
};

// anchor: the matching category section on /collections; image: a piece from that category
const commissionCategories = [
  {
    title: "Mantels & Fireplaces",
    description:
      "A full line of cast stone fireplace surrounds and mantels, from Contemporary to Old World: Contemporary Surround, Genoa, Heritage, Milagro, Pacifica, Provence, Santa Barbara, Royal Acanthus, Cambridge, Chateau and Tangled. Or a custom configuration of current designs, or something entirely new.",
    features: ["Standard and custom dimensions", "Seven standard colors", "Three texture finishes", "Quoted with installation by our team"],
    anchor: "mantels",
    image: "/images/products/royal-acanthus/card.jpg",
  },
  {
    title: "Columns & Capitals",
    description: "Round, square and spiral-twisted shafts with plain molded or leaf capitals, for entries, porches and interiors.",
    features: ["Round, square and twisted shafts", "Plain or leaf capitals", "Standard and custom dimensions", "Pier caps and finials"],
    anchor: "architectural",
    image: "/images/products/columns/card.jpg",
  },
  {
    title: "Architectural Details",
    description: "Corbels, balustrades, crown molding, door and window surrounds: the trim, ornament and facing that finish a building.",
    features: ["Scrolled and leaf corbels", "Balusters, rails and piers", "Plain to leaf crown profiles", "Arched and flat-headed surrounds"],
    anchor: "architectural",
    image: "/images/products/door-window-trims/02.jpg",
  },
  {
    title: "Outdoor & Garden",
    description: "Outdoor fireplaces, fire pits, fountains, benches, seat walls and pavers for patios, courtyards and gardens.",
    features: ["Arched surrounds and raised hearths", "Fountains and basins", "Benches and seat walls", "Large-format pavers"],
    anchor: "outdoor",
    image: "/images/products/outdoor-fireplaces/card.jpg",
  },
  {
    title: "Kitchen Hoods",
    description: "Tapered cast stone hoods with molded bands, left plain or finished with a leaf frieze, some resting on leaf corbels.",
    features: ["Tapered and paneled profiles", "Leaf corbel options", "Plain or leaf friezes", "Standard and custom dimensions"],
    anchor: "functional",
    image: "/images/products/kitchen-hoods/card.jpg",
  },
  {
    title: "Functional Elements",
    description: "Stair treads, window sills and wall caps: the surfaces that take the weather and the footfall.",
    features: ["Bullnose stair treads", "Molded window sills", "Flat and rounded wall caps"],
    anchor: "functional",
    image: "/images/products/stair-treads/card.jpg",
  },
];

// From the original site: "We also specialize in Stone Masonry ... natural stone or stone veneer"
const stoneMasonry = {
  title: "Stone Masonry",
  description: "Natural stone and stone veneer, for the interior or exterior of your home.",
  features: ["Natural stone", "Stone veneer", "Interior and exterior"],
  image: "/images/works/13.jpg",
  alt: "Stacked-stone entry tower with a pale arched door surround, a pale band beneath three small windows, a decorative iron transom and a deep bracketed roof overhang against a blue sky.",
};

// Descriptions restate the original site's Design & Manufacturing Process page.
const PHASES = [
  { title: "Dialogue", desc: "Our sales and design professionals work with you to determine the project requirements and the items you are looking for." },
  { title: "Mould", desc: "Any moulds that need to be created or modified are made in our custom mould shop." },
  { title: "Cast", desc: "The cast stone is mixed in the color you specify and packed by hand into the mould, followed by fiberglass reinforcement." },
  { title: "Finish", desc: "After curing, each piece is checked by Quality Control before delivery and installation are scheduled with you." },
];

const FEATURE = "flex items-start gap-2 text-small text-clay";

export default function Commissions() {
  return (
    <div className="bg-ivory">
      <section className="pb-12 pt-12 md:pb-16 md:pt-20">
        <div className="wrap">
          <SectionTitle>Commissions</SectionTitle>
          <p className="max-w-prose text-lead text-clay">
            Each commission begins as dialogue. We listen to your plans, your space and what you have in mind, then
            work alongside you, your architect and your builder from design to installation.
          </p>
        </div>
      </section>

      {/* Categories, each led by a photo of a piece in it */}
      <section className="pb-16 md:pb-24">
        <div className="wrap">
          <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {commissionCategories.map((category) => (
              <li key={category.title} className="group flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden rounded bg-ivory-200">
                  {/* Decorative: the heading names the card */}
                  <Image src={category.image} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px" className="img-drift object-cover" />
                </div>
                <h2 className="mt-5 text-heading md:text-heading">{category.title}</h2>
                <p className="mt-2 text-small text-clay">{category.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {category.features.map((feature) => (
                    <li key={feature} className={FEATURE}>
                      <span aria-hidden="true" className="text-sienna-700">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex gap-6 pt-5 text-small font-medium">
                  <Link href={`/collections#${category.anchor}`} className="text-link">
                    View pieces<span className="sr-only"> of {category.title}</span> <span aria-hidden="true">→</span>
                  </Link>
                  <Link href={`/contact?product=${encodeURIComponent(category.title)}#inquiry`} className="text-link">
                    Inquire<span className="sr-only"> about {category.title}</span> <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>

          {/* Stone masonry: the one non-cast-stone service, as a full-width band */}
          <section
            id="stone-masonry"
            aria-labelledby="stone-masonry-heading"
            className="mt-16 grid gap-8 border-t border-ecru pt-14 scroll-mt-28 md:scroll-mt-40 lg:grid-cols-12 lg:gap-12"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded bg-ivory-200 lg:col-span-5">
              <Image src={stoneMasonry.image} alt={stoneMasonry.alt} fill sizes="(max-width: 1024px) 100vw, 500px" className="object-cover" />
            </div>
            <div className="lg:col-span-7">
              <h2 id="stone-masonry-heading" className="text-heading md:text-heading">{stoneMasonry.title}</h2>
              <p className="mt-3 max-w-prose text-body text-clay">{stoneMasonry.description}</p>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-1.5">
                {stoneMasonry.features.map((feature) => (
                  <li key={feature} className={FEATURE}>
                    <span aria-hidden="true" className="text-sienna-700">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-6 text-small font-medium">
                <Link href="/works" className="text-link">
                  See the works <span aria-hidden="true">→</span>
                </Link>
                <Link href={`/contact?product=${encodeURIComponent(stoneMasonry.title)}#inquiry`} className="text-link">
                  Inquire<span className="sr-only"> about {stoneMasonry.title}</span> <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Why cast stone: the original Home and Products pages, via src/data/company.ts */}
      <section className="bg-ecru/50 py-16 md:py-24" aria-labelledby="why-cast-stone-heading">
        <div className="wrap">
          <p className="eyebrow mb-3">The material</p>
          <h2 id="why-cast-stone-heading" className="text-balance">Why cast stone.</h2>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {whyCastStone.map((reason) => (
              <li key={reason} className="border-t border-nickel/40 pt-5 text-body text-clay">
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process overview */}
      <section className="py-16 md:py-24" aria-labelledby="commission-process-heading">
        <div className="wrap">
          <p className="eyebrow mb-3">The Lintel Method</p>
          <h2 id="commission-process-heading" className="text-balance">How a commission is made.</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PHASES.map((phase, i) => (
              <li key={phase.title} className="border-t border-nickel/40 pt-5">
                <span className="font-display text-3xl leading-none text-sienna">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl">{phase.title}</h3>
                <p className="mt-2 text-small text-clay">{phase.desc}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-small">
            <Link href="/process" className="text-link font-medium">
              The full process <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>

      <ClosingCta
        heading="Begin a Commission"
        body="Tell us about the piece, the space and the timeline. Our design team will work through the project with you, from our standard designs or something entirely new."
        secondary={{ label: "View the Collections", href: "/collections" }}
      />
    </div>
  );
}
