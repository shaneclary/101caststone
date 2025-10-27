import SectionTitle from "@/components/SectionTitle";

export default function Process() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-none">
        <SectionTitle>The Lintel Method</SectionTitle>
        <p className="text-clay mt-6 text-[18px] leading-[1.85] max-w-prose">
          Dialogue → Mould → Cast → Finish. Our process balances classical geometry with modern tolerances.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div className="opacity-0 animate-fade-in-up">
            <h3 className="font-display text-2xl mb-6">Materials</h3>
            <ul className="space-y-4 text-clay text-[16px] list-none">
              <li>Materials sourced for permanence and patina.</li>
              <li>Mockups and moulds engineered before pour.</li>
              <li>Hand finishing for edges that whisper, not shout.</li>
              <li>Each piece designed for a specific architectural context.</li>
            </ul>
          </div>

          <div className="opacity-0 animate-fade-in-up animate-delay-200">
            <h3 className="font-display text-2xl mb-6">Timeline</h3>
            <ul className="space-y-4 text-clay text-[16px] list-none">
              <li>Initial consultation and site assessment</li>
              <li>Custom mould creation: 2-4 weeks</li>
              <li>Casting and curing: 3-6 weeks</li>
              <li>Hand finishing and detailing: 1-2 weeks</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 rounded-lg2 bg-[#f5efe4] border border-[#e3d9c8] p-10 md:p-12 shadow-lintel opacity-0 animate-fade-in-up animate-delay-300">
          <h3 className="font-display text-2xl mb-6">Our Philosophy</h3>
          <p className="text-clay text-[18px] leading-[1.85]">
            True craftsmanship lies not in spectacle, but in precision. Every column, every lintel,
            every mantel we create is proportioned not just to architectural standards, but to light,
            room, and human scale. We work with architects, designers, and homeowners who understand
            that the finest details are the ones you feel, not just see.
          </p>
        </div>
      </div>
    </div>
  );
}
