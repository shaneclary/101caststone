// Product catalogue shared by the collections page, the product dialog and structured data.
// Copy comes from the live site (scraped-content) or the brand rewrite; photos are described by what they show.

export interface GalleryPhoto {
  src: string;
  alt: string;
}

export interface Product {
  name: string;
  description: string;
  style: string;
  image: string;
  /** Additional photos shown in the product dialog, in display order. */
  gallery?: GalleryPhoto[];
}

export interface Collection {
  title: string;
  description: string;
  items: Product[];
}

export type CollectionKey = "mantels" | "architectural" | "outdoor" | "functional";

export const collections: Record<CollectionKey, Collection> = {
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
        style: "Traditional",
        image: "/images/collections/mantels/provence.jpg"
      },
      {
        name: "Pacifica",
        description: "Clean lines meet California light. The Pacifica strips ornament to its essence, allowing the stone itself to speak.",
        style: "Traditional",
        image: "/images/collections/mantels/pacifica.jpg"
      },
      {
        name: "Cambridge",
        description: "Academic elegance translated into stone. Gothic and Tudor traditions for libraries, studies, and rooms where serious thinking happens.",
        style: "Old World",
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
        style: "Old World",
        image: "/images/collections/mantels/royal-acanthus.jpg"
      },
      {
        name: "Milagro",
        description: "Spanish Colonial warmth meets California craft. Sun-baked simplicity of mission architecture with gentle arches.",
        style: "Traditional",
        image: "/images/collections/mantels/milagro.jpg"
      },
      {
        name: "Tangled",
        description: "Fluted scroll corbels carry a molded shelf—Old World presence with a quiet, rhythmic profile.",
        style: "Old World",
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
        image: "/images/collections/architectural/corbels.jpg"
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
        image: "/images/collections/architectural/pilaster-caps.jpg"
      },
      {
        name: "Crown Molding",
        description: "The crown completes the composition. Profiles from simple cyma curves to elaborate egg-and-dart enrichments.",
        style: "Interior & Exterior",
        image: "/images/collections/architectural/crown-molding.jpg"
      },
      {
        name: "Door & Window Trims",
        description: "The frame announces what follows. From simple architraves to pedimented entries, establishing architectural language.",
        style: "Entry & Fenestration",
        image: "/images/collections/architectural/door-trims.jpg"
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
        image: "/images/collections/outdoor/outdoor-fireplaces.jpg"
      },
      {
        name: "Fire Pits",
        description: "Fire at the center. Cast stone surrounds that anchor outdoor rooms and extend the evening.",
        style: "Gathering Spaces",
        image: "/images/collections/outdoor/fire-pits.jpg"
      },
      {
        name: "Fountains",
        description: "Water speaks in stone. From simple wall spouts to elaborate tiered centerpieces, bringing movement and sound to courtyards.",
        style: "Water Features",
        image: "/images/collections/outdoor/fountains.jpg"
      },
      {
        name: "Benches",
        description: "Stone invites pause. Garden benches with visual weight and permanence, placed where the walk naturally stops.",
        style: "Garden Seating",
        image: "/images/collections/outdoor/benches.jpg"
      },
      {
        name: "Pavers",
        description: "The ground underfoot deserves intention. Aged limestone character for paths, patios, and entries.",
        style: "Hardscape",
        image: "/images/collections/outdoor/pavers.jpg"
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
        image: "/images/collections/functional/kitchen-hoods.jpg"
      },
      {
        name: "Stair Treads",
        description: "Each step measured. Solidity of stone for the vertical journey, nosing profiles calculated for comfort.",
        style: "Stairs & Landings",
        image: "/images/collections/functional/treads.jpg"
      },
      {
        name: "Window Sills",
        description: "The sill receives the weather. Sloped for drainage, finished for permanence.",
        style: "Fenestration",
        image: "/images/collections/functional/sills.jpg"
      },
      {
        name: "Wall Caps",
        description: "The wall deserves completion. Protection and visual termination where masonry meets sky.",
        style: "Wall Termination",
        image: "/images/collections/functional/wall-caps.jpg"
      }
    ]
  }
};

export const stoneColors = [
  { name: "Cream", desc: "Warm limestone tone, reminiscent of French châteaux" },
  { name: "Buff", desc: "Sandy warmth, evokes California mission heritage" },
  { name: "Gray", desc: "Cool neutrality, pairs with slate and lead" },
  { name: "Charcoal", desc: "Deep anchor tone for dramatic contrast" },
  { name: "Terra", desc: "Earth-red undertones, Spanish Colonial warmth" },
  { name: "White", desc: "Clean brightness, classical purity" },
];

export const textureFinishes = [
  { name: "Classic", desc: "Smooth, refined surface with minimal texture. Formal applications." },
  { name: "Old World", desc: "Medium texture suggesting age and weather. Balanced character." },
  { name: "Rustic", desc: "Heavy texture with tooling marks. Immediate aged presence." },
];

// Product deep links: /collections#<slug> opens that piece (legacy product URLs redirect here).
export const slugify = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
export const productSlugs = new Set(Object.values(collections).flatMap((c) => c.items.map((item) => slugify(item.name))));
