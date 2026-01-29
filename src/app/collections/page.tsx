import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

const collections = {
  mantels: {
    title: "Fireplace Mantels",
    description: "Hand-carved limestone mantels with classical proportions. Each surround designed not merely to frame a fire, but to anchor a room—proportioned to architecture, light, and the human scale of gathering.",
    items: [
      {
        name: "Heritage",
        description: "English Georgian tradition—restrained elegance, balanced proportions, and details that reveal themselves slowly.",
        style: "Traditional",
        image: "/images/collections/mantels/heritage.jpg"
      },
      {
        name: "Provence",
        description: "Inspired by the limestone farmhouses of southern France. Gentle curves replace sharp geometry, carrying the weathered grace of centuries.",
        style: "French Country",
        image: "/images/collections/mantels/provence.jpg"
      },
      {
        name: "Pacifica",
        description: "Clean lines meet California light. The Pacifica strips ornament to its essence, allowing the stone itself to speak.",
        style: "Contemporary",
        image: "/images/collections/mantels/pacifica.jpg"
      },
      {
        name: "Cambridge",
        description: "Academic elegance translated into stone. Gothic and Tudor traditions for libraries, studies, and rooms where serious thinking happens.",
        style: "Tudor Gothic",
        image: "/images/collections/mantels/cambridge.jpg"
      },
      {
        name: "French Chateau",
        description: "The grandeur of the Loire Valley. Ornate carved details—acanthus scrolls, shell motifs, classical moldings—unapologetic beauty.",
        style: "Old World",
        image: "/images/collections/mantels/french-chateau.jpg"
      },
      {
        name: "Royal Acanthus",
        description: "Deeply carved foliage spiraling from corbel brackets, creating interplay of light and shadow. Architecture as living sculpture.",
        style: "Classical",
        image: "/images/collections/mantels/royal-acanthus.jpg"
      },
      {
        name: "Milagro",
        description: "Spanish Colonial warmth meets California craft. Sun-baked simplicity of mission architecture with gentle arches.",
        style: "Spanish Colonial",
        image: "/images/collections/mantels/milagro.jpg"
      },
      {
        name: "Tangled",
        description: "Organic geometry carved in stone. Interlocking vine and branch motifs—naturalistic yet composed, wild yet controlled.",
        style: "Arts & Crafts",
        image: "/images/collections/mantels/tangled.jpg"
      }
    ]
  },
  architectural: {
    title: "Architectural Elements",
    description: "Load-bearing elegance in classical orders. Columns, corbels, and capitals engineered for structural integrity while maintaining proportions used since antiquity.",
    items: [
      {
        name: "Columns",
        description: "Doric, Ionic, and Corinthian orders. Entasis curves calculated to the same ratios used in antiquity, capitals carved with jeweler's precision.",
        style: "Classical Orders",
        image: "/images/collections/architectural/columns.jpg"
      },
      {
        name: "Corbels",
        description: "Where structure meets ornament. Brackets that support physical loads while carrying visual weight—from simple chamfered blocks to ornate acanthus scrolls.",
        style: "Functional Art",
        image: "/images/collections/architectural/corbels.png"
      },
      {
        name: "Balustrades",
        description: "Defining the edge where terrace meets sky. Turned balusters and carved rail systems bringing Italian villa proportions to California gardens.",
        style: "Garden & Entry",
        image: "/images/collections/architectural/balustrades.jpg"
      },
      {
        name: "Pilaster Caps",
        description: "Where the pilaster meets the entablature, proportion becomes critical. All classical orders available, sized to match pilaster widths.",
        style: "Classical Details",
        image: "/images/collections/architectural/pilaster-caps.png"
      },
      {
        name: "Crown Molding",
        description: "The crown completes the composition. Profiles from simple cyma curves to elaborate egg-and-dart enrichments.",
        style: "Interior & Exterior",
        image: "/images/collections/architectural/crown-molding.png"
      },
      {
        name: "Door & Window Trims",
        description: "The frame announces what follows. From simple architraves to pedimented entries, establishing architectural language.",
        style: "Entry & Fenestration",
        image: "/images/collections/architectural/door-trims.png"
      }
    ]
  },
  outdoor: {
    title: "Outdoor & Garden",
    description: "Weathered grace for courtyards and water features. Elements engineered for exposure, finished to age beautifully through seasons of sun and fog.",
    items: [
      {
        name: "Outdoor Fireplaces",
        description: "The hearth moves to the garden. Surrounds that bring gathering power to terraces, patios, and pool houses.",
        style: "Terrace & Patio",
        image: "/images/collections/outdoor/outdoor-fireplaces.png"
      },
      {
        name: "Fire Pits",
        description: "Fire at the center. Cast stone surrounds that anchor outdoor rooms and extend the evening.",
        style: "Gathering Spaces",
        image: "/images/collections/outdoor/fire-pits.png"
      },
      {
        name: "Fountains",
        description: "Water speaks in stone. From simple wall spouts to elaborate tiered centerpieces, bringing movement and sound to courtyards.",
        style: "Water Features",
        image: "/images/collections/outdoor/fountains.png"
      },
      {
        name: "Benches",
        description: "Stone invites pause. Garden benches with visual weight and permanence, placed where the walk naturally stops.",
        style: "Garden Seating",
        image: "/images/collections/outdoor/benches.png"
      },
      {
        name: "Pavers",
        description: "The ground underfoot deserves intention. Aged limestone character for paths, patios, and entries.",
        style: "Hardscape",
        image: "/images/collections/outdoor/pavers.png"
      }
    ]
  },
  functional: {
    title: "Functional Elements",
    description: "Every detail considered. Treads, sills, and caps that perform their duty while speaking the building's architectural language.",
    items: [
      {
        name: "Kitchen Hoods",
        description: "The range deserves a crown. French country and Tuscan farmhouse character for the heart of the home.",
        style: "Culinary Spaces",
        image: "/images/collections/functional/kitchen-hoods.png"
      },
      {
        name: "Stair Treads",
        description: "Each step measured. Solidity of stone for the vertical journey, nosing profiles calculated for comfort.",
        style: "Stairs & Landings",
        image: "/images/collections/functional/treads.png"
      },
      {
        name: "Window Sills",
        description: "The sill receives the weather. Sloped for drainage, finished for permanence.",
        style: "Fenestration",
        image: "/images/collections/functional/sills.png"
      },
      {
        name: "Wall Caps",
        description: "The wall deserves completion. Protection and visual termination where masonry meets sky.",
        style: "Wall Termination",
        image: "/images/collections/functional/wall-caps.png"
      }
    ]
  }
};

const stoneColors = [
  { name: "Cream", desc: "Warm limestone tone, reminiscent of French châteaux" },
  { name: "Buff", desc: "Sandy warmth, evokes California mission heritage" },
  { name: "Gray", desc: "Cool neutrality, pairs with slate and lead" },
  { name: "Charcoal", desc: "Deep anchor tone for dramatic contrast" },
  { name: "Terra", desc: "Earth-red undertones, Spanish Colonial warmth" },
  { name: "White", desc: "Clean brightness, classical purity" },
];

const textureFinishes = [
  { name: "Classic", desc: "Smooth, refined surface with minimal texture. Formal applications." },
  { name: "Old World", desc: "Medium texture suggesting age and weather. Balanced character." },
  { name: "Rustic", desc: "Heavy texture with tooling marks. Immediate aged presence." },
];

export default function Collections() {
  return (
    <div className="bg-ivory">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-[#f5efe4] to-ivory">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-clay mb-6">Collections</h1>
          <p className="text-xl text-clay/80 max-w-2xl mx-auto leading-relaxed">
            Architectural cast stone, hand-finished with California precision. Each element designed for proportion, patina, and permanence.
          </p>
        </div>
      </section>

      {/* Collections */}
      {Object.entries(collections).map(([key, collection], collectionIndex) => (
        <section key={key} className={`py-20 ${collectionIndex % 2 === 0 ? 'bg-ivory' : 'bg-[#f5efe4]'}`}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <h2 className="font-display text-4xl md:text-5xl text-clay mb-4">{collection.title}</h2>
              <p className="text-lg text-clay/80 max-w-3xl leading-relaxed">{collection.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {collection.items.map((item, i) => (
                <div
                  key={item.name}
                  className="group relative overflow-hidden rounded-lg bg-white border border-[#e8dfcf] hover:shadow-xl transition-all duration-500"
                >
                  {/* Product Image */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-clay/5 to-sienna/5">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-display text-xl text-clay">{item.name}</h3>
                      <span className="text-xs text-sienna/70 bg-sienna/10 px-2 py-1 rounded">
                        {item.style}
                      </span>
                    </div>
                    <p className="text-sm text-clay/70 leading-relaxed">{item.description}</p>
                    <button className="mt-4 text-sienna text-sm hover:text-sienna/70 transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Stone Colors & Finishes */}
      <section className="py-20 bg-[#f5efe4]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-4xl md:text-5xl text-clay mb-4 text-center">Stone Colors & Finishes</h2>
          <p className="text-lg text-clay/80 max-w-2xl mx-auto text-center mb-16 leading-relaxed">
            Seven colors and three textures, each developed for mineral permanence and graceful aging.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Colors */}
            <div>
              <h3 className="font-display text-2xl text-clay mb-6">Colors</h3>
              <div className="grid grid-cols-2 gap-4">
                {stoneColors.map((color) => (
                  <div key={color.name} className="bg-white rounded-lg p-4 border border-[#e8dfcf]">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-clay/20 to-sienna/20 mb-3" />
                    <div className="font-medium text-clay">{color.name}</div>
                    <div className="text-xs text-clay/60 mt-1">{color.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Textures */}
            <div>
              <h3 className="font-display text-2xl text-clay mb-6">Textures</h3>
              <div className="space-y-4">
                {textureFinishes.map((texture) => (
                  <div key={texture.name} className="bg-white rounded-lg p-6 border border-[#e8dfcf]">
                    <div className="font-medium text-clay text-lg">{texture.name}</div>
                    <div className="text-sm text-clay/70 mt-2">{texture.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ivory">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl text-clay mb-6">Begin a Commission</h2>
          <p className="text-lg text-clay/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Each piece begins as dialogue. We listen to your vision, your space, your story—then translate it into stone that endures for generations.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-sienna text-ivory rounded-lg hover:bg-sienna/90 transition-all duration-500 font-medium no-underline"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
