import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { whyCastStone } from "@/data/company";

export const metadata: Metadata = {
  title: "Custom Cast Stone Commissions",
  description: "Custom mantels and fireplaces, columns and capitals, architectural details, outdoor and garden pieces, kitchen hoods, functional elements and stone masonry. Each commission begins as dialogue.",
  alternates: { canonical: "/commissions" },
};

// anchor: the matching category section on /collections
const commissionCategories = [
  {
    title: "Mantels & Fireplaces",
    description: "A full line of cast stone fireplace surrounds and mantels, from Contemporary to Old World: Contemporary Surround, Genoa, Heritage, Milagro, Pacifica, Provence, Santa Barbara, Royal Acanthus, Cambridge, Chateau and Tangled. Or a custom configuration of current designs, or something entirely new.",
    features: ["Standard and custom dimensions", "Seven stone colors available", "Three texture finishes", "Quoted with installation by our team"],
    anchor: "mantels",
    delay: "animate-delay-100"
  },
  {
    title: "Columns & Capitals",
    description: "Round, square and spiral-twisted shafts with plain molded or leaf-carved capitals, for entries, porches, pergolas and interiors.",
    features: ["Round, square and twisted shafts", "Plain or leaf-carved capitals", "Standard and custom dimensions", "Pier caps and finials"],
    anchor: "architectural",
    delay: "animate-delay-200"
  },
  {
    title: "Architectural Details",
    description: "Corbels, balustrades, crown molding, door and window trims. The details that transform construction into architecture—each element speaking the building's language.",
    features: ["Scrolled and leaf-carved corbels", "Balusters, rails and piers", "Plain to leaf-carved crown profiles", "Arched and flat-headed surrounds"],
    anchor: "architectural",
    delay: "animate-delay-300"
  },
  {
    title: "Outdoor & Garden",
    description: "Outdoor fireplaces, fire pits, fountains, benches, seat walls and pavers for patios, courtyards and gardens. Weathered grace for courtyards and water features.",
    features: ["Arched surrounds and raised hearths", "Custom fountain designs", "Benches and seat walls", "Large-format pavers", "Old World and Rustic textures"],
    anchor: "outdoor",
    delay: "animate-delay-400"
  },
  {
    title: "Kitchen Hoods",
    description: "The range deserves a crown. Tapered cast stone hoods with molded bands, left plain or carved with a leaf frieze, some resting on leaf-carved corbels.",
    features: ["Tapered and paneled profiles", "Leaf-carved corbel options", "Plain or leaf-carved friezes", "Standard and custom dimensions"],
    anchor: "functional",
    delay: "animate-delay-500"
  },
  {
    title: "Functional Elements",
    description: "Treads, sills and wall caps. Every detail considered—surfaces that perform their duty while speaking the building's architectural language.",
    features: ["Bullnose stair treads", "Molded window sills", "Flat and rounded wall caps"],
    anchor: "functional",
    delay: "animate-delay-600"
  },
  {
    // From the original site: "We also specialize in Stone Masonry ... natural stone or stone veneer"
    title: "Stone Masonry",
    id: "stone-masonry",
    description: "Natural stone and stone veneer to bring the look and feel of stone to the interior or exterior of your home.",
    features: ["Natural stone", "Stone veneer", "Interior and exterior"],
    delay: "animate-delay-600"
  }
];

export default function Commissions() {
  return (
    <div className="bg-ivory">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[#f5efe4] to-ivory">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>Begin a Commission</SectionTitle>
          <p className="mt-6 max-w-3xl text-clay text-lg leading-relaxed">
            Each commission begins as dialogue. We listen to your vision, your space, your story.
            From concept to installation, we work alongside architects, designers, and homeowners
            to create pieces that endure for generations.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {commissionCategories.map((category) => (
              <div
                key={category.title}
                id={category.id}
                className={`flex flex-col scroll-mt-28 md:scroll-mt-40 target:ring-2 target:ring-sienna/40 rounded-lg border border-[#e8dfcf] bg-white p-8 shadow-[0_10px_30px_rgba(60,58,54,0.06)] hover:shadow-xl transition-shadow duration-500 opacity-0 animate-fade-in-up ${category.delay}`}
              >
                <h2 className="font-display text-2xl tracking-normal mb-4 text-clay">{category.title}</h2>
                <p className="text-clay text-sm leading-relaxed mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature, i) => (
                    <li key={i} className="text-sm text-clay flex items-start">
                      <span className="text-sienna-700 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6 flex gap-6 text-sm font-medium">
                  {category.anchor && (
                    <Link href={`/collections#${category.anchor}`} className="text-sienna-700 hover:text-basalt transition-colors no-underline">
                      View pieces<span className="sr-only"> of {category.title}</span> <span aria-hidden="true">→</span>
                    </Link>
                  )}
                  <Link href={`/contact?product=${encodeURIComponent(category.title)}#inquiry`} className="text-sienna-700 hover:text-basalt transition-colors no-underline">
                    Inquire<span className="sr-only"> about {category.title}</span> <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why cast stone: the original Home and Products pages, via src/data/company.ts */}
      <section className="pb-16" aria-labelledby="why-cast-stone-heading">
        <div className="mx-auto max-w-7xl px-6">
          <h2 id="why-cast-stone-heading" className="font-display text-2xl tracking-normal text-basalt mb-8">
            Why cast stone
          </h2>
          <ul className="grid gap-8 md:grid-cols-3">
            {whyCastStone.map((reason) => (
              <li key={reason} className="border-t border-ecru pt-4 text-[16px] text-clay leading-relaxed">
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-[#f5efe4]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl text-clay mb-12 text-center">The Commission Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              // Descriptions restate the original site's Design & Manufacturing Process page.
              { step: "01", title: "Dialogue", desc: "Our sales and design professionals work with you to determine the project requirements and the items you are looking for." },
              { step: "02", title: "Mould", desc: "Any moulds that need to be created or modified are made in our custom mould shop." },
              { step: "03", title: "Cast", desc: "The cast stone is mixed in the color you specify and packed by hand into the mould, followed by fiberglass reinforcement." },
              { step: "04", title: "Finish", desc: "After curing, each piece is checked by Quality Control before delivery and installation are scheduled with you." }
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="text-4xl font-display text-sienna mb-2">{phase.step}</div>
                <div className="font-display text-xl text-clay mb-3">{phase.title}</div>
                <p className="text-sm text-clay leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl text-clay mb-6">Ready to Begin?</h2>
          <p className="text-lg text-clay mb-8 max-w-2xl mx-auto leading-relaxed">
            Begin a quiet dialogue about your project. We&apos;re here to listen, advise, and translate your vision into stone that endures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-sienna-700 text-ivory-50 rounded-lg hover:shadow-lg transition-all duration-500 font-medium no-underline"
            >
              Begin a Conversation
            </Link>
            <Link
              href="/collections"
              className="px-8 py-4 border-2 border-clay text-clay rounded-lg hover:bg-clay/5 transition-all duration-500 font-medium no-underline"
            >
              View Collections
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
