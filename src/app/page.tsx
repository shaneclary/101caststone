import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero/winecountry.jpg";
import { services } from "@/data/company";

const PILLAR_DELAYS = ["animate-delay-100", "animate-delay-200", "animate-delay-300"];

export const metadata: Metadata = {
  title: { absolute: "101 Cast Stone | Cast Stone Mantels & Architectural Elements" },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* HERO — Full-bleed image sets the brand impression */}
      <section className="relative h-[60svh] [@media(max-height:500px)]:h-svh md:h-screen p-4 md:p-6 lg:p-8 bg-ivory">
        <div className="relative h-full w-full overflow-hidden rounded-lg bg-ecru">
          <Image
            src={heroImg}
            alt="A couple with a glass of red wine beside a lit fireplace with a pale stone mantel set in a fieldstone chimney wall"
            fill
            placeholder="blur"
            className="object-cover object-[center_85%] portrait:object-[78%_85%] animate-pan-bg"
            priority
          />
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="bg-ivory py-16 md:py-20">
        <div className="text-center px-6 animate-fade-in-up max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-clay/90 tracking-tight">
            Where Craft Becomes Legacy
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-clay leading-relaxed">
            Architectural cast stone, hand-finished with 21st-century precision. Designed for estates,
            private residences, and visionaries who prefer silence to spectacle.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/commissions" className="px-6 py-3 bg-sienna-700 text-ivory-50 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-500 no-underline">
              Explore Commissions
            </Link>
            <Link href="/process" className="px-6 py-3 border border-sienna text-sienna-700 rounded-lg hover:bg-sienna/10 hover:scale-[1.01] transition-all duration-500 no-underline">
              Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* SIGNATURE PRODUCTS CAROUSEL */}
      <section id="signature-collections" className="py-16 bg-[#f5efe4]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-4xl md:text-5xl mb-10 text-clay">Signature Collections</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Monumental Mantels", desc: "Cast stone fireplace surrounds and mantels, from Contemporary to Old World", img: "/images/collections/mantels/cambridge.jpg", href: "/collections#mantels" },
              { name: "Architectural Columns", desc: "Round, square and twisted columns with plain or leaf-carved capitals", img: "/images/products/columns/card.jpg", href: "/collections#architectural" },
              { name: "Garden Ornaments", desc: "Weathered finishes for courtyards and water features", img: "/images/collections/outdoor/fountains.jpg", href: "/collections#outdoor" }
            ].map((product, i) => (
              <Link key={i} href={product.href} className="group relative overflow-hidden rounded-lg bg-ivory border border-[#e8dfcf] hover:shadow-2xl transition-all duration-700 no-underline">
                <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-clay/10 to-sienna/5">
                  {/* Decorative: the card link is named by its h3 */}
                  <Image
                    src={product.img}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl mb-3 text-clay">{product.name}</h3>
                  <p className="text-clay leading-relaxed">{product.desc}</p>
                  <span className="mt-6 inline-block text-sienna-700 hover:text-basalt transition-colors font-medium">
                    Explore Collection <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CRAFTSMANSHIP SHOWCASE */}
      <section id="workshop" className="relative min-h-[70vh] py-16 bg-gradient-to-b from-ivory to-[#f5efe4] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sienna rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-clay rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h2 className="font-display text-5xl md:text-6xl mb-8 text-clay">The Workshop</h2>
          <p className="text-xl text-clay leading-relaxed mb-12">
            Where ancient techniques meet 21st-century precision. Every piece begins with dialogue, refined through moulding, cast with mineral permanence, and finished by hand.
          </p>
          <Link href="/process" className="inline-block px-8 py-4 bg-sienna-700 text-ivory-50 rounded-lg hover:shadow-lg transition-all duration-500 text-lg font-medium no-underline">
            Step Inside Our Atelier
          </Link>
        </div>
      </section>

      {/* THREE PILLARS — the three services named on the original site */}
      <section className="mx-auto max-w-6xl px-6 py-14 grid gap-6 md:grid-cols-3">
        {services.map((service, i) => (
          <Link
            key={service.title}
            href={service.href}
            className={`block no-underline rounded-lg2 border border-[#e8dfcf90] bg-[#f7f3ed] p-10 shadow-[0_10px_30px_rgba(60,58,54,0.06)] hover:shadow-lg opacity-0 animate-fade-in-up ${PILLAR_DELAYS[i] ?? ""}`}
          >
            <div className="font-display text-2xl">{service.title}</div>
            <p className="mt-3 text-[16px] text-clay">{service.text}</p>
          </Link>
        ))}
      </section>

      {/* PROCESS STRIP */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-lg2 bg-[#f5efe4] border border-[#e3d9c8] p-10 md:p-12 shadow-lintel opacity-0 animate-fade-in-up">
          <h2 className="font-display text-4xl tracking-[-0.01em]">The Lintel Method</h2>
          <ol className="mt-8 grid gap-8 md:grid-cols-4 text-[16px] text-clay">
            <li><span className="font-medium text-sienna-700">Dialogue</span> — we listen and draw.</li>
            <li><span className="font-medium text-sienna-700">Mould</span> — engineered for accuracy.</li>
            <li><span className="font-medium text-sienna-700">Cast</span> — mineral body, living surface.</li>
            <li><span className="font-medium text-sienna-700">Finish</span> — hand-tooled to whisper.</li>
          </ol>
        </div>
      </section>

      {/* FEATURED PROJECTS MASONRY — same titles as the matching photos on /works */}
      <section className="py-16 bg-ivory">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-4xl md:text-5xl mb-4 text-clay">Featured Installations</h2>
          <p className="text-center text-clay mb-10 max-w-2xl mx-auto">Selected installations</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {[
              { title: "Mantel & Overmantel", category: "Mantels", desc: "Fireplace mantel with overmantel shelf and raised hearth", span: "md:col-span-2 md:row-span-2", img: "/images/gallery/project-1.jpg", sizes: "(min-width: 1280px) 640px, 50vw" },
              { title: "Courtyard Fountain", category: "Fountains", desc: "Scalloped-basin fountain in a brick courtyard", span: "", img: "/images/gallery/project-2.jpg" },
              { title: "Corbel Mantel", category: "Mantels", desc: "Mantel with gently arched frieze and scrolled corbel legs", span: "", img: "/images/gallery/project-3.jpg" },
              { title: "Pergola Columns", category: "Columns", desc: "Columns supporting a garden pergola over a stone terrace", span: "md:col-span-2", img: "/images/gallery/project-4.jpg", sizes: "(min-width: 1280px) 640px, 50vw" },
              { title: "Garden Steps", category: "Masonry", desc: "Flagstone steps through a planted slope", span: "", img: "/images/gallery/project-5.jpg" },
              { title: "Stone Veneer Entry", category: "Masonry", desc: "Stone veneer wall around an arched entry door", span: "md:row-span-2", img: "/images/gallery/project-6.jpg", sizes: "(max-width: 768px) 50vw, 380px" }
            ].map((project) => (
              <Link
                key={project.img}
                href="/works"
                className={`group relative overflow-hidden rounded-lg hover:shadow-xl transition-all duration-700 no-underline ${project.span}`}
              >
                <Image
                  src={project.img}
                  alt={project.desc}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes={project.sizes ?? "(max-width: 768px) 50vw, 25vw"}
                />
                {/* Captions always show on touch screens; from md up they reveal on hover or keyboard focus */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent md:[@media(hover:hover)]:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100 transition-opacity duration-500">
                  <span className="text-xs text-ivory mb-1">{project.category}</span>
                  <h3 className="font-display text-xl text-ivory">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/works" className="text-sienna-700 hover:text-basalt transition-colors font-medium no-underline">
              View all works <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative min-h-[60vh] grid md:grid-cols-2 overflow-hidden">
        {/* Visual Side */}
        <div className="relative bg-gradient-to-br from-clay via-sienna to-clay overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-ivory rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-ivory rounded-full blur-3xl" />
          </div>
          <div className="relative h-full flex items-center justify-center px-12">
            <div className="relative w-full max-w-md h-40 md:h-64 opacity-80">
              <Image
                src="/images/logos/101timelesslogo.png"
                alt=""
                fill
                sizes="256px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="flex flex-col justify-center items-center space-y-8 px-12 py-16 md:py-0 bg-ivory">
          <h2 className="font-display text-4xl md:text-5xl text-clay text-center leading-tight">
            Begin Your Design Journey
          </h2>
          <p className="text-clay text-center max-w-md leading-relaxed">
            From initial consultation to final installation, we guide you through every step of creating architectural elements that endure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-sienna-700 text-ivory-50 rounded-lg hover:shadow-lg transition-all duration-500 text-center font-medium no-underline"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/process"
              className="px-8 py-4 border-2 border-clay text-clay rounded-lg hover:bg-clay/5 transition-all duration-500 text-center font-medium no-underline"
            >
              View Our Process
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
