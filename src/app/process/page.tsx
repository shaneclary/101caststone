import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { mantelLeadTime, specification } from "@/data/company";

export const metadata: Metadata = {
  title: "Our Process: Dialogue, Mould, Cast, Finish",
  description:
    "How each piece is made: design with our team, any new or modified moulds made in our custom mould shop, cast stone packed by hand, and every piece checked by Quality Control.",
  alternates: { canonical: "/process" },
};

const specValue = (label: string) => specification.find((row) => row.label === label)?.value ?? "";
const material = specValue("Material");
const colors = specValue("Colors and textures");

export default function Process() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-none">
        <SectionTitle>The Lintel Method</SectionTitle>
        <p className="text-clay mt-6 text-[18px] leading-[1.85] max-w-prose">
          Dialogue → Mould → Cast → Finish. Our process balances classical geometry with modern tolerances.
        </p>

        {/* Materials and lead time: the specification and FAQ wording in src/data/company.ts */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl tracking-normal text-basalt mb-6">Materials</h2>
            <ul className="space-y-4 text-clay text-[16px] leading-relaxed list-none max-w-prose">
              <li>{material}</li>
              <li>
                {colors}{" "}
                <Link href="/collections#finishes" className="text-sienna-700 hover:text-basalt transition-colors">
                  View the standard colors and finishes
                </Link>
                .
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl tracking-normal text-basalt mb-6">Lead time</h2>
            <ul className="space-y-4 text-clay text-[16px] leading-relaxed list-none max-w-prose">
              <li>{mantelLeadTime}</li>
              <li>Once your order is finished being made, we will schedule with you to deliver and install the items.</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-[16px] text-clay">
          Architects and installers:{" "}
          <Link href="/technical-info" className="text-sienna-700 hover:text-basalt transition-colors">
            see the technical information
          </Link>
          .
        </p>

        {/* What to Expect — the manufacturing steps from the original 101 Cast Stone site */}
        <div className="mt-20">
          <h2 className="font-display text-2xl tracking-normal text-basalt mb-6">What to Expect</h2>
          <ol className="space-y-4 text-clay text-[16px] list-decimal pl-5 max-w-prose">
            <li>Our design team works through your project requirements with you, starting from our existing designs, a custom configuration of current stock, or something entirely new.</li>
            <li>You review and confirm the final design before production begins.</li>
            <li>Any new or modified moulds are made in our in-house mould shop.</li>
            <li>Each piece is cast in the color you specify and hand-packed with fiberglass reinforcement.</li>
            <li>After curing, every piece is inspected by Quality Control and staged until your full order is complete.</li>
            <li>We schedule delivery and installation with you. Fireplace products are quoted with installation by our team of professionals.</li>
          </ol>
        </div>

        {/* Workshop photos from the original site's Design & Manufacturing Process page */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { src: "/images/process/mould-shop.jpg", alt: "Mould material being cut on a band saw", caption: "The in-house mould shop" },
            { src: "/images/process/workshop-floor.jpg", alt: "Rows of moulds on the floor being filled by hand, with shelves of moulds behind", caption: "Moulds being filled on the manufacturing floor" },
            { src: "/images/process/mould-detail.jpg", alt: "Close view of a molded profile beside its mould", caption: "A profile and its mould" },
          ].map((photo) => (
            <figure key={photo.src}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#e8dfcf90] bg-ivory-200">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 100vw, 352px" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-[14px] text-clay">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 rounded-lg2 bg-[#f5efe4] border border-[#e3d9c8] p-10 md:p-12 shadow-lintel opacity-0 animate-fade-in-up animate-delay-300">
          <h2 className="font-display text-2xl tracking-normal text-basalt mb-6">Our Philosophy</h2>
          <p className="text-clay text-[18px] leading-[1.85]">
            True craftsmanship lies not in spectacle, but in precision. Every column, every lintel,
            every mantel we create is proportioned not just to architectural standards, but to light,
            room, and human scale. We work with architects, designers, and homeowners who understand
            that the finest details are the ones you feel, not just see.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="font-display text-3xl text-clay mb-4">Ready to Begin?</h2>
          <p className="text-clay text-[17px] leading-relaxed max-w-2xl mx-auto">
            Every project begins with a conversation about your space, your vision, and the legacy you wish to create.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-sienna-700 text-ivory-50 rounded-lg hover:shadow-lg transition-all duration-500 font-medium no-underline">
              Begin a Conversation
            </Link>
            <Link href="/works" className="px-8 py-4 border-2 border-clay text-clay rounded-lg hover:bg-clay/5 transition-all duration-500 font-medium no-underline">
              See Recent Works
            </Link>
          </div>
          <p className="mt-8 text-[16px] text-clay">
            Questions about measuring, installation or care?{" "}
            <Link href="/faq" className="text-sienna-700 hover:text-basalt transition-colors">Read our FAQ</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
