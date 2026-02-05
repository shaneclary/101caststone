import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO — Full-bleed image sets the brand impression */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 will-change-transform animate-pan-bg">
          <Image
            src="/images/hero/winecountry.jpg"
            alt="Wine country estate with architectural cast stone elements"
            fill
            className="object-cover object-[center_85%] transition-transform duration-[40000ms] ease-linear"
            priority
            quality={90}
          />
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="text-center px-6 animate-fade-in-up max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-clay/90 tracking-tight">
            Where Craft Becomes Legacy
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-clay/80 leading-relaxed">
            Architectural cast stone, hand-finished with 21st-century precision. Designed for estates,
            cathedrals, and visionaries who prefer silence to spectacle.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/commissions" className="px-6 py-3 bg-sienna text-ivory rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-500 no-underline">
              Explore Commissions
            </a>
            <a href="/process" className="px-6 py-3 border border-sienna text-sienna rounded-lg hover:bg-sienna/10 hover:scale-[1.01] transition-all duration-500 no-underline">
              Our Process
            </a>
          </div>
        </div>
      </section>

      {/* SIGNATURE PRODUCTS CAROUSEL */}
      <section id="signature-collections" className="py-24 bg-[#f5efe4]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-4xl md:text-5xl mb-16 text-clay">Signature Collections</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Monumental Mantels", desc: "Hand-carved limestone fireplaces with classical proportions", img: "/images/collections/mantels/cambridge.jpg", href: "/collections#mantels" },
              { name: "Architectural Columns", desc: "Load-bearing elegance in Doric, Ionic, and Corinthian orders", img: "/images/collections/architectural/columns.jpg", href: "/collections#architectural" },
              { name: "Garden Ornaments", desc: "Weathered finishes for courtyards and water features", img: "/images/collections/outdoor/fountains.jpg", href: "/collections#outdoor" }
            ].map((product, i) => (
              <a key={i} href={product.href} className="group relative overflow-hidden rounded-lg bg-ivory border border-[#e8dfcf] hover:shadow-2xl transition-all duration-700 no-underline">
                <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-clay/10 to-sienna/5">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl mb-3 text-clay">{product.name}</h3>
                  <p className="text-clay/70 leading-relaxed">{product.desc}</p>
                  <span className="mt-6 inline-block text-sienna hover:text-sienna/70 transition-colors font-medium">
                    Explore Collection →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CRAFTSMANSHIP SHOWCASE */}
      <section id="workshop" className="relative h-screen bg-gradient-to-b from-ivory to-[#f5efe4] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sienna rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-clay rounded-full blur-3xl animate-pulse delay-700" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h2 className="font-display text-5xl md:text-6xl mb-8 text-clay">The Workshop</h2>
          <p className="text-xl text-clay/80 leading-relaxed mb-12">
            Where ancient techniques meet 21st-century precision. Every piece begins with dialogue, refined through moulding, cast with mineral permanence, and finished by hand.
          </p>
          <button className="px-8 py-4 bg-sienna text-ivory rounded-lg hover:bg-sienna/90 transition-all duration-500 text-lg font-medium">
            Step Inside Our Atelier
          </button>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="mx-auto max-w-6xl px-6 py-24 grid gap-8 md:grid-cols-3">
        {[
          { t: "Mantels & Fireplaces", d: "Proportioned to room, light, and life.", delay: "animate-delay-100" },
          { t: "Columns & Lintels", d: "Classical geometry, contemporary tolerances.", delay: "animate-delay-200" },
          { t: "Garden & Water", d: "Weathered grace for courtyards and fountains.", delay: "animate-delay-300" },
        ].map((x) => (
          <div
            key={x.t}
            className={`rounded-lg2 border border-[#e8dfcf90] bg-[#f7f3ed] p-10 shadow-[0_10px_30px_rgba(60,58,54,0.06)] opacity-0 animate-fade-in-up ${x.delay}`}
          >
            <div className="font-display text-2xl">{x.t}</div>
            <p className="mt-3 text-[16px] text-clay">{x.d}</p>
          </div>
        ))}
      </section>

      {/* PROCESS STRIP */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-lg2 bg-[#f5efe4] border border-[#e3d9c8] p-10 md:p-12 shadow-lintel opacity-0 animate-fade-in-up">
          <h2 className="font-display text-4xl tracking-[-0.01em]">The Lintel Method</h2>
          <ol className="mt-8 grid gap-8 md:grid-cols-4 text-[16px] text-clay">
            <li><span className="font-medium text-sienna">Dialogue</span> — we listen and draw.</li>
            <li><span className="font-medium text-sienna">Mould</span> — engineered for accuracy.</li>
            <li><span className="font-medium text-sienna">Cast</span> — mineral body, living surface.</li>
            <li><span className="font-medium text-sienna">Finish</span> — hand-tooled to whisper.</li>
          </ol>
        </div>
      </section>

      {/* FEATURED PROJECTS MASONRY */}
      <section className="py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-4xl md:text-5xl mb-4 text-clay">Featured Installations</h2>
          <p className="text-center text-clay/70 mb-16 max-w-2xl mx-auto">From private estates to public monuments</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {[
              { title: "Napa Valley Estate", category: "Residential", span: "md:col-span-2 md:row-span-2", img: "/images/gallery/project-1.jpg" },
              { title: "Cathedral Restoration", category: "Ecclesiastical", span: "", img: "/images/gallery/project-2.jpg" },
              { title: "Boutique Hotel Lobby", category: "Commercial", span: "", img: "/images/gallery/project-3.jpg" },
              { title: "Private Garden", category: "Landscape", span: "md:col-span-2", img: "/images/gallery/project-4.jpg" },
              { title: "Museum Entrance", category: "Institutional", span: "", img: "/images/gallery/project-5.jpg" },
              { title: "Historic Manor", category: "Restoration", span: "md:row-span-2", img: "/images/gallery/project-6.jpg" }
            ].map((project, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-lg hover:shadow-xl transition-all duration-700 cursor-pointer ${project.span}`}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-xs text-ivory/70 mb-1">{project.category}</span>
                  <h3 className="font-display text-xl text-ivory">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#f5efe4]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center space-y-12">
            {[
              { quote: "101 Cast Stone transformed our estate. Each mantel tells a story of craftsmanship that will outlast generations.", author: "Helena M.", project: "Sonoma Valley Estate" },
              { quote: "The precision is remarkable. Classical forms rendered with tolerances tighter than modern steel.", author: "David K.", project: "Pacific Heights Residence" }
            ].map((testimonial, i) => (
              <div key={i} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${i * 200}ms` }}>
                <blockquote className="font-display italic text-2xl md:text-3xl text-clay/90 leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="text-sienna font-medium">{testimonial.author}</div>
                <div className="text-clay/60 text-sm">{testimonial.project}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative h-[70vh] grid md:grid-cols-2 overflow-hidden">
        {/* Visual Side */}
        <div className="relative bg-gradient-to-br from-clay via-sienna to-clay overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-ivory rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-ivory rounded-full blur-3xl" />
          </div>
          <div className="relative h-full flex items-center justify-center px-12">
            <div className="relative w-full max-w-md h-64 opacity-80">
              <Image
                src="/images/logos/101timelesslogo.png"
                alt="101 Cast Stone"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="flex flex-col justify-center items-center space-y-8 px-12 bg-ivory">
          <h2 className="font-display text-4xl md:text-5xl text-clay text-center leading-tight">
            Begin Your Design Journey
          </h2>
          <p className="text-clay/70 text-center max-w-md leading-relaxed">
            From initial consultation to final installation, we guide you through every step of creating architectural elements that endure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-sienna text-ivory rounded-lg hover:bg-sienna/90 transition-all duration-500 text-center font-medium no-underline"
            >
              Schedule Consultation
            </a>
            <a
              href="/process"
              className="px-8 py-4 border-2 border-clay text-clay rounded-lg hover:bg-clay/5 transition-all duration-500 text-center font-medium no-underline"
            >
              View Our Process
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
