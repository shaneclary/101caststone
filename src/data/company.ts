// Company facts shared across pages. Every line restates the original 101 Cast Stone site
// (About, Home, Products, FAQ, Design & Manufacturing Process and Technical Info pages).

export const customers = [
  "American Premier Homes",
  "Daou Winery",
  "Midland Pacific Builders",
  "Barefoot Pools",
  "Embers Fireplaces & Grills",
  "Nostalgic's Inc",
  "City of Atascadero",
  "Fordens",
  "Paso Robles Community Church",
  "City of Paso Robles",
  "Gary Kramer Guitar Cellars",
  "Shea Homes",
  "Coastal Community Builders",
  "Halsell Builders",
  "Stalwork Construction",
];

export const services = [
  {
    title: "Architectural cast stone",
    text: "Custom cast stone that serves as architectural features, trim, ornamentation and facing for buildings, in standard and custom styles and dimensions.",
    href: "/collections#architectural",
  },
  {
    title: "Fireplace surrounds and mantels",
    text: "A full line of fireplace surrounds and mantels in a wide variety of styles, quoted with installation by our team.",
    href: "/collections#mantels",
  },
  {
    title: "Stone masonry",
    text: "Natural stone and stone veneer, for the interior or exterior of your home.",
    href: "/commissions#stone-masonry",
  },
];

export const technicalDocuments = [
  "Fireplace Surround Worksheet",
  "Cast Stone Product Installation sheet",
  "Cast Stone Fireplace Installation sheet",
];

/** FAQ: "please allow 2 to 3 weeks for production and installation of your fireplace mantel". */
export const mantelLeadTime =
  "Please allow 2 to 3 weeks for production and installation of a fireplace mantel. If you need a different time frame, let us know and we will do whatever we can to accommodate you.";

export interface SpecRow {
  label: string;
  value: string;
  /** Only shown for fireplace products (mantels and outdoor fireplaces). */
  fireplaceOnly?: boolean;
  /** Only shown for mantels: the wording names a fireplace mantel. */
  mantelsOnly?: boolean;
}

export const specification: SpecRow[] = [
  {
    label: "Material",
    value:
      "Modern-day cast stone: Portland cement, crushed quartz, color pigment, fiberglass reinforcing materials and polymer, packed by hand into the mould.",
  },
  { label: "Fire", value: "Non-combustible; can be used directly next to the firebox opening.", fireplaceOnly: true },
  {
    label: "Colors and textures",
    value: "Seven standard colors and three texture finishes (Classic, Old World, Rustic). Custom colors and finishes on request.",
  },
  { label: "Dimensions", value: "Standard and custom styles and dimensions." },
  {
    label: "Installation",
    value:
      "Fireplace products are quoted with installation by our team. Many products may be installed by others as long as our installation requirements are followed.",
  },
  {
    label: "Delivery",
    value: "Our crew delivers at the time of installation. If installation is not being provided, alternate delivery options are available.",
    mantelsOnly: true,
  },
  { label: "Lead time", value: "Allow 2 to 3 weeks for production and installation of a fireplace mantel.", mantelsOnly: true },
  {
    label: "Sealing",
    value:
      "Recommended but not required. Cast stone is porous and therefore subject to staining; we can provide the appropriate sealer at installation or seal the piece after it has cured.",
  },
  { label: "Care", value: "Clean with lukewarm water and a clean white cloth." },
  { label: "Finishing", value: "No finish is required. If you want an artist to antique or faux-finish the piece, it will accept their materials." },
];

/** The original Home and Products pages make the case for cast stone in these words. */
export const whyCastStone = [
  "Cast stone serves as an appealing, durable and cost-effective alternative to natural cut limestone, brownstone, sandstone, bluestone, granite, slate, travertine and other natural building stones.",
  "As a result of our attention to detail and our finishing techniques, in many cases our cast stone is nearly indistinguishable from real stone.",
  "Cast stone is non-combustible and can be used directly next to the firebox opening, which removes the need for the extra surround a wood or plaster mantel requires.",
];

export const showroom = {
  name: "Atascadero Showroom",
  street: "1720 El Camino Real",
  locality: "Atascadero, CA 93422",
  hours: "Monday–Friday, 8am to 5pm",
  weekend: "Weekend appointments available",
};
