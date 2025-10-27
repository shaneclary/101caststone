import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen flex flex-col justify-center md:justify-end pb-[36vh] md:pb-[40vh] overflow-hidden bg-loro-gradient">
        {/* Background Image with parallax drift */}
        <div className="absolute inset-0 -z-10 will-change-transform animate-pan-bg">
          <Image
            src="/images/hero/winecountry.jpg"
            alt="Wine country estate with architectural cast stone elements"
            fill
            className="object-cover object-[center_85%] transition-transform duration-[40000ms] ease-linear"
            priority
            quality={90}
          />
          {/* Gradient overlay for warmth & readability */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#EFE7DA]/90 via-[#EFE7DA]/35 to-transparent"
            aria-hidden
          />
        </div>

        {/* Text Block */}
        <div className="z-10 text-center md:text-left px-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-display mb-6 text-clay/90 tracking-tight">
            Where Craft Becomes Legacy
          </h1>
          <p className="max-w-2xl mx-auto md:mx-0 text-lg md:text-xl text-clay/80 leading-relaxed">
            Architectural cast stone, hand-finished with 21st-century precision. Designed for estates,
            cathedrals, and visionaries who prefer silence to spectacle.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="/commissions" className="px-6 py-3 bg-sienna text-ivory rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-500 no-underline">
              Explore Commissions
            </a>
            <a href="/process" className="px-6 py-3 border border-sienna text-sienna rounded-lg hover:bg-sienna/10 hover:scale-[1.01] transition-all duration-500 no-underline">
              Our Process
            </a>
          </div>
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
    </>
  );
}
