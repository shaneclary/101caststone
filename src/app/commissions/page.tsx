import SectionTitle from "@/components/SectionTitle";

const commissionCategories = [
  {
    title: "Mantels & Fireplaces",
    description: "Hand-carved limestone mantels with classical proportions. Heritage, Provence, Pacifica, Cambridge, French Chateau, Royal Acanthus, Milagro, and Tangled collections—or fully custom designs proportioned to your room, light, and ceiling height.",
    features: ["Custom sizing to architectural requirements", "Seven stone colors available", "Three texture finishes", "2-4 week design phase"],
    delay: "animate-delay-100"
  },
  {
    title: "Columns & Capitals",
    description: "Load-bearing elegance in Doric, Ionic, and Corinthian orders. Entasis curves calculated to classical ratios, capitals carved with precision. Full and half-round, fluted or smooth.",
    features: ["All classical orders", "Structural or decorative", "Custom heights and diameters", "Matching pilaster caps"],
    delay: "animate-delay-200"
  },
  {
    title: "Architectural Details",
    description: "Corbels, balustrades, crown molding, door and window trims. The details that transform construction into architecture—each element speaking the building's language.",
    features: ["Corbels for structural support", "Complete balustrade systems", "Multiple crown profiles", "Pedimented entries"],
    delay: "animate-delay-300"
  },
  {
    title: "Outdoor & Garden",
    description: "Outdoor fireplaces, fire pits, fountains, and benches. Engineered for weather exposure, finished to age beautifully through seasons. Weathered grace for courtyards and water features.",
    features: ["Weather-resistant formulation", "Aged finishes available", "Custom fountain designs", "Matching seating walls"],
    delay: "animate-delay-400"
  },
  {
    title: "Kitchen Hoods",
    description: "The range deserves a crown. Cast stone hoods bringing French country and Tuscan farmhouse character to the heart of the home. Carved corbel supports, proportions that anchor the cooking space.",
    features: ["Multiple hood profiles", "Carved corbel options", "Works with pro vent systems", "Custom dimensions standard"],
    delay: "animate-delay-500"
  },
  {
    title: "Functional Elements",
    description: "Treads, sills, wall caps, and pavers. Every detail considered—surfaces that perform their duty while speaking the building's architectural language.",
    features: ["Stair treads and risers", "Sloped sills for drainage", "Wall cap profiles", "Tumbled-edge pavers"],
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
            to create pieces that endure for generations. Materials sourced for permanence and patina.
            Mockups and moulds engineered before pour. Hand finishing for edges that whisper, not shout.
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
                className={`rounded-lg border border-[#e8dfcf] bg-white p-8 shadow-[0_10px_30px_rgba(60,58,54,0.06)] hover:shadow-xl transition-shadow duration-500 opacity-0 animate-fade-in-up ${category.delay}`}
              >
                <h3 className="font-display text-2xl mb-4 text-clay">{category.title}</h3>
                <p className="text-clay/80 text-sm leading-relaxed mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature, i) => (
                    <li key={i} className="text-sm text-clay/70 flex items-start">
                      <span className="text-sienna mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-[#f5efe4]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl text-clay mb-12 text-center">The Commission Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Dialogue", desc: "We listen first. Understanding the architecture, the setting, the vision that drives the project." },
              { step: "02", title: "Mould", desc: "Custom moulds engineered for precision. Whether matching existing profiles or creating new vocabularies." },
              { step: "03", title: "Cast", desc: "Mineral aggregates, careful formulation. The pour fills the mould; the cure develops strength." },
              { step: "04", title: "Finish", desc: "Hand-tooled edges. Applied patinas where appropriate. The surface refined until it whispers." }
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="text-4xl font-display text-sienna/30 mb-2">{phase.step}</div>
                <div className="font-display text-xl text-clay mb-3">{phase.title}</div>
                <p className="text-sm text-clay/70 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl text-clay mb-6">Ready to Begin?</h2>
          <p className="text-lg text-clay/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Begin a quiet dialogue about your project. We&apos;re here to listen, advise, and translate your vision into stone that endures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-sienna text-ivory rounded-lg hover:bg-sienna/90 transition-all duration-500 font-medium no-underline"
            >
              Begin a Conversation
            </a>
            <a
              href="/collections"
              className="px-8 py-4 border-2 border-clay text-clay rounded-lg hover:bg-clay/5 transition-all duration-500 font-medium no-underline"
            >
              View Collections
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
