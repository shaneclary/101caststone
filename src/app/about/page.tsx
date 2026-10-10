import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { customers, services, showroom, technicalDocuments } from "@/data/company";

export const metadata: Metadata = {
  title: "About the Studio",
  description:
    "101 Cast Stone in Atascadero, California: custom cast stone, fireplace surrounds and mantels, and stone masonry for developers, builders and homeowners.",
  alternates: { canonical: "/about" },
};

// All copy below restates the original 101 Cast Stone site (About, Home and Products pages); the shared
// facts (customers, services, technical documents, showroom) live in src/data/company.ts.

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle>About the Studio</SectionTitle>
      <p className="mt-6 max-w-prose text-clay text-[18px] leading-[1.85]">
        101 Cast Stone designs and makes cast stone in Atascadero, on California&apos;s Central Coast, for developers,
        building contractors and residential customers.
      </p>

      <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-display text-2xl tracking-normal text-basalt mb-6">Our founder</h2>
          <div className="space-y-4 text-clay text-[16px] leading-relaxed max-w-prose">
            <p>
              Clark Baird began his career at Sierra Concrete Design, a family-owned precast design and manufacturing
              business in Southern California, and later became its Area Sales Director for multiple regions of
              California.
            </p>
            <p>
              After moving to Atascadero, he saw the need for a high-end cast stone facility on the Central Coast and
              started 101 Cast Stone. Today the company has a staff of over 15 full- and part-time employees.
            </p>
          </div>
        </div>
        <figure>
          <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-[#e8dfcf90] bg-ivory-200">
            <Image
              src="/images/process/workshop-floor.jpg"
              alt="Workshop floor with rows of moulds being filled, shelves of moulds and bags of material behind"
              fill
              sizes="(max-width: 768px) 100vw, 528px"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-[14px] text-clay">The manufacturing floor.</figcaption>
        </figure>
      </div>

      <section className="mt-20" aria-labelledby="services-heading">
        <h2 id="services-heading" className="font-display text-2xl tracking-normal text-basalt mb-8">
          What we make
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="relative rounded-lg border border-[#e8dfcf] bg-white p-8 hover:shadow-lg transition-shadow duration-500 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-sienna/40"
            >
              <h3 className="font-display text-xl text-basalt mb-3">
                {/* The title link covers the whole card (after:inset-0) */}
                <Link
                  href={service.href}
                  className="text-basalt no-underline hover:text-sienna-700 transition-colors after:absolute after:inset-0"
                >
                  {service.title} <span aria-hidden="true" className="text-sienna-700">→</span>
                </Link>
              </h3>
              <p className="text-[15px] text-clay leading-relaxed">{service.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20" aria-labelledby="customers-heading">
        <h2 id="customers-heading" className="font-display text-2xl tracking-normal text-basalt mb-3">
          Past and current customers
        </h2>
        <p className="text-[16px] text-clay mb-8">A few of the builders, businesses and public bodies we have worked with.</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 border-t border-ecru">
          {customers.map((customer) => (
            <li key={customer} className="border-b border-ecru py-3 text-[16px] text-basalt">
              {customer}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20 grid gap-12 md:grid-cols-2" aria-label="Credentials and documents">
        <div>
          <h2 className="font-display text-2xl tracking-normal text-basalt mb-4">Licensed</h2>
          <p className="text-[16px] text-clay leading-relaxed">License #892542.</p>
        </div>
        <div>
          <h2 className="font-display text-2xl tracking-normal text-basalt mb-4">For architects and builders</h2>
          <p className="text-[16px] text-clay leading-relaxed mb-4">Technical documents for consumers, architects and installers:</p>
          <ul className="space-y-2 text-[16px] text-clay">
            {technicalDocuments.map((doc) => (
              <li key={doc} className="flex items-start gap-2">
                <span aria-hidden="true" className="text-sienna-700">•</span>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[16px] text-clay">
            <Link href="/technical-info" className="text-sienna-700 hover:text-basalt transition-colors">
              See technical information
            </Link>
            <Link href="/contact?product=Technical%20documents#inquiry" className="text-sienna-700 hover:text-basalt transition-colors">
              Request the documents
            </Link>
          </p>
        </div>
      </section>

      <div className="mt-20 rounded-lg2 bg-[#f5efe4] border border-[#e3d9c8] p-10 md:p-12 shadow-lintel text-center">
        <h2 className="font-display text-3xl tracking-normal text-basalt mb-4">Visit the Atascadero showroom</h2>
        <p className="text-clay text-[17px] leading-relaxed">
          {showroom.street}, {showroom.locality} · {showroom.hours} · {showroom.weekend}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="px-8 py-4 bg-sienna-700 text-ivory-50 rounded-lg hover:shadow-lg transition-all duration-500 font-medium no-underline">
            Begin a Conversation
          </Link>
          <Link href="/works" className="px-8 py-4 border-2 border-clay text-clay rounded-lg hover:bg-clay/5 transition-all duration-500 font-medium no-underline">
            See Recent Works
          </Link>
        </div>
      </div>
    </div>
  );
}
