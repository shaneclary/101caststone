import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ClosingCta from "@/components/ClosingCta";
import SectionTitle from "@/components/SectionTitle";
import { customers, services, showroom, technicalDocuments } from "@/data/company";

export const metadata: Metadata = {
  title: "About 101 Cast Stone",
  description:
    "101 Cast Stone in Atascadero, California: custom cast stone, fireplace surrounds and mantels, and stone masonry for developers, builders and homeowners.",
  alternates: { canonical: "/about" },
};

// All copy below restates the original 101 Cast Stone site (About, Home and Products pages); the shared
// facts (customers, services, technical documents, showroom) live in src/data/company.ts.

export default function About() {
  return (
    <div className="bg-ivory">
      <section className="pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="wrap">
          <SectionTitle>About 101 Cast Stone</SectionTitle>
          <p className="max-w-prose text-lead text-clay">
            101 Cast Stone designs and makes cast stone in Atascadero, on California&apos;s Central Coast, for developers,
            building contractors and residential customers.
          </p>

          <div className="mt-16 grid gap-10 md:grid-cols-12 md:items-center md:gap-16">
            <figure className="md:col-span-7">
              <div className="relative aspect-[3/2] overflow-hidden rounded bg-ivory-200">
                <Image
                  src="/images/process/workshop-floor.jpg"
                  alt="Workshop floor with rows of moulds being filled, shelves of moulds and bags of material behind"
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-caption text-clay">The manufacturing floor.</figcaption>
            </figure>
            <div className="md:col-span-5">
              <p className="eyebrow mb-3">Our founder</p>
              <h2 className="text-balance">Clark Baird</h2>
              <div className="mt-5 max-w-prose space-y-4 text-body text-clay">
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
          </div>

          <section className="mt-20" aria-labelledby="services-heading">
            <h2 id="services-heading" className="mb-8 text-heading md:text-heading">
              What we make
            </h2>
            <ul className="grid gap-x-8 gap-y-8 border-t border-nickel/40 md:grid-cols-3">
              {services.map((service) => (
                <li key={service.title} className="relative pt-6 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-4 has-[:focus-visible]:outline-sienna-700">
                  <h3 className="text-xl">
                    {/* The title link covers the whole item (after:inset-0) */}
                    <Link href={service.href} className="text-basalt no-underline hover:text-sienna-700 after:absolute after:inset-0">
                      {service.title} <span aria-hidden="true" className="text-sienna-700">→</span>
                    </Link>
                  </h3>
                  <p className="mt-3 text-small text-clay">{service.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-20" aria-labelledby="customers-heading">
            <h2 id="customers-heading" className="mb-3 text-heading md:text-heading">
              Past and current customers
            </h2>
            <p className="mb-8 text-body text-clay">A few of the builders, businesses and public bodies we have worked with.</p>
            <ul className="grid grid-cols-1 gap-x-8 border-t border-ecru sm:grid-cols-2 md:grid-cols-3">
              {customers.map((customer) => (
                <li key={customer} className="border-b border-ecru py-3 text-body text-basalt">
                  {customer}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-20 grid gap-12 md:grid-cols-2" aria-label="Credentials and documents">
            <div>
              <h2 className="mb-4 text-heading md:text-heading">Licensed</h2>
              <p className="text-body text-clay">License #892542.</p>
            </div>
            <div>
              <h2 className="mb-4 text-heading md:text-heading">For architects and builders</h2>
              <p className="mb-4 text-body text-clay">Technical documents for consumers, architects and installers:</p>
              <ul className="space-y-2 text-body text-clay">
                {technicalDocuments.map((doc) => (
                  <li key={doc} className="flex items-start gap-2">
                    <span aria-hidden="true" className="text-sienna-700">•</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-small font-medium">
                <Link href="/technical-info" className="text-link">
                  Technical information <span aria-hidden="true">→</span>
                </Link>
                <Link href="/contact?product=Technical%20documents#inquiry" className="text-link">
                  Request the documents <span aria-hidden="true">→</span>
                </Link>
              </p>
            </div>
          </section>

          <section className="mt-20 border-t border-nickel/40 pt-10" aria-labelledby="showroom-heading">
            <h2 id="showroom-heading" className="text-heading md:text-heading">Visit the {showroom.name.replace(" Showroom", "")} showroom</h2>
            <p className="mt-3 text-body text-clay">
              {showroom.street}, {showroom.locality} · {showroom.hours} · {showroom.weekend}
            </p>
            <Link href="/contact?product=Showroom%20visit#inquiry" className="text-link mt-3 inline-block text-small font-medium">
              Request a weekend appointment <span aria-hidden="true">→</span>
            </Link>
          </section>
        </div>
      </section>

      <ClosingCta
        heading="Begin a Conversation"
        body="Tell us about your project and we will walk you through the process, from design to installation."
        secondary={{ label: "See the Works", href: "/works" }}
      />
    </div>
  );
}
