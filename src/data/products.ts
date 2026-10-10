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
  // Mantels follow the original site's grouping: Contemporary, Traditional, Old World.
  mantels: {
    title: "Fireplace Mantels",
    description: "A full line of cast stone fireplace surrounds and mantels in a wide variety of styles, from Contemporary to Old World. Every design comes in seven colors and three texture finishes, in standard or custom dimensions.",
    items: [
      {
        name: "Contemporary Surround",
        description: "A flat, beveled surround, mitered at the corners like a picture frame. No shelf, no carving; shown around linear and standard fireboxes.",
        style: "Contemporary",
        image: "/images/products/contemporary-surround/card.jpg",
        gallery: [
          { src: "/images/products/contemporary-surround/01.jpg", alt: "Wide rectangular fireplace surround with a beveled picture-frame profile around a linear firebox, above a low raised hearth, on a grey wall beside a window" },
          { src: "/images/products/contemporary-surround/02.jpg", alt: "Beveled rectangular fireplace surround around a long linear fireplace, between dark bookcases, with a television mounted above" },
          { src: "/images/products/contemporary-surround/03.jpg", alt: "Living room with armchairs and a coffee table facing a white beveled fireplace surround set into a wall of stacked stone with built-in shelves and a television" },
          { src: "/images/products/contemporary-surround/04.jpg", alt: "Beveled rectangular fireplace surround around a standard firebox with a log set, on a wood-look floor, with a television mounted above" },
          { src: "/images/products/contemporary-surround/05.jpg", alt: "Close-up angled view of a beveled fireplace surround around a black firebox beside a dark bookcase" }
        ]
      },
      {
        name: "Genoa",
        description: "A flat, square-edged surround with a stepped inner border and no shelf. Shown with a raised hearth of matching slabs, straight or angled for a corner.",
        style: "Contemporary",
        image: "/images/products/genoa/card.jpg",
        gallery: [
          { src: "/images/products/genoa/01.jpg", alt: "Smooth, square-edged fireplace surround with a stepped frame profile set across a corner, over an angled raised hearth, with a dark wood floor" },
          { src: "/images/products/genoa/02.jpg", alt: "Straight-on view of a rectangular fireplace surround with a stepped inner frame and a raised hearth in an empty carpeted room" },
          { src: "/images/products/genoa/03.jpg", alt: "Angled view of a rectangular fireplace surround with a stepped frame and raised hearth beside dark cabinetry" },
          { src: "/images/products/genoa/04.jpg", alt: "Rectangular fireplace surround with a stepped frame between two wall niches, with the firebox covered" }
        ]
      },
      {
        name: "Heritage",
        description: "Flat pilasters with recessed panels carry a plain frieze and a stepped, molded shelf. The opening is square-headed or softened by a shallow arch.",
        style: "Traditional",
        image: "/images/products/heritage/card.jpg",
        gallery: [
          { src: "/images/products/heritage/01.jpg", alt: "Three-quarter view of a pale stone fireplace mantel with flat paneled pilasters, a plain frieze and a stepped shelf, set on a raised stone hearth beside a window on a light wood floor" },
          { src: "/images/products/heritage/02.jpg", alt: "Front view of a stone mantel whose frieze has a shallow arched molding over an arched black firebox door, with paneled pilasters and a raised hearth on a wood floor" },
          { src: "/images/products/heritage/03.jpg", alt: "Stone mantel with paneled pilasters and a tall overmantel panel, a fire burning behind an arched black screen, plantation shutters on either side and a potted plant at left" },
          { src: "/images/products/heritage/04.jpg", alt: "Close angled view of a stone mantel corner showing the recessed pilaster panel, the stepped shelf moldings and the pitted surface texture" },
          { src: "/images/products/heritage/05.jpg", alt: "Front view of a pale stone mantel with paneled pilasters between white built-in cabinets, candles and pumpkins on the shelf, on a dark wood floor" },
          { src: "/images/products/heritage/06.jpg", alt: "Sitting room with a white mantel with paneled pilasters and an arched inner molding, a framed painting and flowers above, striped armchairs and tall candlesticks on either side" }
        ]
      },
      {
        name: "Milagro",
        description: "A wide, rounded molding frames a rectangular opening. It is topped with a simple molded shelf, or left as a frame alone.",
        style: "Traditional",
        image: "/images/products/milagro/card.jpg",
        gallery: [
          { src: "/images/products/milagro/01.jpg", alt: "Front view of a cream stone mantel with a simple molded shelf and a wide rounded frame around a rectangular black firebox, standing on a raised stone hearth on a grey wood-look floor" },
          { src: "/images/products/milagro/02.jpg", alt: "Front view of a pale stone mantel with a molded shelf, wide rounded frame and square plinth feet around a black firebox, on a flat stone hearth in a white room with two windows" },
          { src: "/images/products/milagro/03.jpg", alt: "Close front view of a wide stepped stone frame with a thin shelf on top surrounding a rectangular black glass firebox, on a flat stone hearth" },
          { src: "/images/products/milagro/04.jpg", alt: "Cream stone mantel with molded shelf and rounded frame on a raised hearth, with three framed landscape paintings and small objects on the shelf, in a beige-walled room" },
          { src: "/images/products/milagro/05.jpg", alt: "Outdoor covered loggia with a plaster chimney, a stone frame without a shelf around a screened firebox, a raised stone hearth and two black lanterns on the wall" },
          { src: "/images/products/milagro/06.jpg", alt: "Angled view of a tan stone frame without a shelf around a wide rectangular gas firebox with logs, on a dark wood floor" }
        ]
      },
      {
        name: "Pacifica",
        description: "A raised arched band frames the opening within a stepped rectangular surround. A molded cornice shelf above, plain plinth blocks below.",
        style: "Traditional",
        image: "/images/products/pacifica/card.jpg",
        gallery: [
          { src: "/images/products/pacifica/01.jpg", alt: "Front view of a cream stone mantel with a molded shelf, a stepped rectangular frame and a raised arched band around an arched black firebox door, standing on a raised stone hearth block with carpet and wood floor in front" },
          { src: "/images/products/pacifica/02.jpg", alt: "Three-quarter view of a white stone mantel with a molded cornice shelf and an arched inner frame around a black firebox, on a flat stone hearth pad over a hardwood floor" },
          { src: "/images/products/pacifica/03.jpg", alt: "Close front view of a stone mantel showing the stepped outer frame, the raised segmental arch over the opening and the plain plinth blocks at the base of each jamb" },
          { src: "/images/products/pacifica/04.jpg", alt: "Sitting room with a cream stone mantel with an arched inner frame between two dark cabinets with lamps, a framed painting above and two black leather armchairs in front" },
          { src: "/images/products/pacifica/05.jpg", alt: "Close view of a white stone mantel with an arched inner band framing a black scrolled wrought-iron firebox door" },
          { src: "/images/products/pacifica/06.jpg", alt: "Living room with a cream stone mantel with an arched opening between two windows with sheer curtains, a framed print and candles above and two dark leather armchairs" }
        ]
      },
      {
        name: "Provence",
        description: "Gentle curves replace sharp geometry. The jambs sweep up into a deep molded shelf; on some pieces the frieze lifts in a shallow arch.",
        style: "Traditional",
        image: "/images/products/provence/card.jpg",
        gallery: [
          { src: "/images/products/provence/01.jpg", alt: "Close three-quarter view of a cream stone mantel with a deep molded shelf and a gently arched frieze; the jambs curve outward at the top beneath the shelf, around a black glass firebox on a low stone hearth" },
          { src: "/images/products/provence/02.jpg", alt: "Front view of a tan stone mantel with a thick molded shelf over straight jambs that curve outward at the top, around a black gas insert, on a wood floor against a white wall" },
          { src: "/images/products/provence/03.jpg", alt: "Angled close view of a stone mantel with a molded shelf over jambs that curve outward at the top, a fire burning in a herringbone-lined firebox, on a light wood floor" },
          { src: "/images/products/provence/04.jpg", alt: "White stone mantel with a thin molded shelf and curved legs set between dark built-in cabinets, with a glass-fronted gas firebox" },
          { src: "/images/products/provence/05.jpg", alt: "Outdoor covered patio with a stucco chimney, a cream stone mantel with curved legs and a raised stone hearth, terracotta tile floor and folding glass doors" },
          { src: "/images/products/provence/06.jpg", alt: "Tall white tiled chimney breast with a white stone mantel whose jambs curve in under the shelf, in a double-height room with black-framed windows" }
        ]
      },
      {
        name: "Santa Barbara",
        description: "Smooth jambs curve outward to carry a molded shelf over a plain frieze. Shown in white on a raised hearth.",
        style: "Traditional",
        image: "/images/products/santa-barbara/card.jpg",
        gallery: [
          { src: "/images/products/santa-barbara/01.jpg", alt: "White fireplace mantel with a molded shelf over a plain frieze; straight jambs curve outward at the top, around a herringbone-tiled firebox with a log set, on a raised hearth" }
        ]
      },
      {
        name: "Royal Acanthus",
        description: "Deep-relief foliage spirals from the corbel brackets, creating an interplay of light and shadow. A frieze of repeating leaves runs beneath the shelf.",
        style: "Old World",
        image: "/images/products/royal-acanthus/card.jpg",
        gallery: [
          { src: "/images/products/royal-acanthus/01.jpg", alt: "Fireplace mantel with a carved band of repeating fan-shaped leaf motifs under the shelf and two large scrolled corbels carved with leaves, around a brass-framed fireplace insert on a raised hearth, with plantation shutters on either side" },
          { src: "/images/products/royal-acanthus/02.jpg", alt: "Close-up of a fireplace mantel's carved frieze of repeating fan-shaped leaves and a deeply carved leaf scroll corbel beside a black insert" },
          { src: "/images/products/royal-acanthus/03.jpg", alt: "Fireplace mantel in a dark ochre-brown finish with a carved leaf frieze and leaf-carved scrolled corbels, around a black insert with a log set, on a tile hearth over a patterned rug" },
          { src: "/images/products/royal-acanthus/04.jpg", alt: "Angled view of a fireplace mantel with a carved leaf frieze and leaf-carved scrolled corbels in a room with patterned wallpaper and a television above" },
          { src: "/images/products/royal-acanthus/05.jpg", alt: "Angled view of a fireplace mantel in a tan finish with a carved leaf frieze and scrolled corbels, with a glass-fronted insert" },
          { src: "/images/products/royal-acanthus/06.jpg", alt: "Straight-on view of a fireplace mantel with a carved frieze band and scrolled corbels on a shallow hearth in an empty room" }
        ]
      },
      {
        name: "Cambridge",
        description: "Tall scroll corbels, leaf-carved on the face, carry a deep molded shelf over a plain frieze. Each corbel ends in a rolled volute above a square plinth.",
        style: "Old World",
        image: "/images/products/cambridge/card.jpg",
        gallery: [
          { src: "/images/products/cambridge/01.jpg", alt: "Fireplace mantel with a molded shelf and two tall scrolled corbels carved with leaves, framing a black fireplace insert on a raised stone hearth, beside a window" },
          { src: "/images/products/cambridge/02.jpg", alt: "Straight-on view of a fireplace mantel with leaf-carved scrolled corbels and a molded shelf, with an arched-door insert, on a raised hearth" },
          { src: "/images/products/cambridge/03.jpg", alt: "Fireplace mantel with leaf-carved scrolled corbels and a molded shelf in a furnished living room with grey walls, a coffee table and tall vases" },
          { src: "/images/products/cambridge/04.jpg", alt: "Fireplace mantel with leaf-carved scrolled corbels between built-in shelves, with a television mounted above" },
          { src: "/images/products/cambridge/05.jpg", alt: "Fireplace mantel with leaf-carved scrolled corbels on a tall chimney breast in a living room with built-in shelves and a chandelier" }
        ]
      },
      {
        name: "Chateau",
        description: "A deep molded shelf crowns a tall, plain frieze. The jambs curve outward beneath it and rest on stepped bases.",
        style: "Old World",
        image: "/images/products/french-chateau/card.jpg",
        gallery: [
          { src: "/images/products/french-chateau/01.jpg", alt: "Fireplace mantel with a wide molded shelf over a smooth frieze; plain jambs curve outward at the top and rest on small stepped bases, around a black-framed insert with a log set, on a stone hearth beside wood cabinetry" },
          { src: "/images/products/french-chateau/02.jpg", alt: "Fireplace mantel with a molded shelf and curved legs in a furnished room with arched mirrors, lamps and a television above" },
          { src: "/images/products/french-chateau/03.jpg", alt: "Straight-on view of a fireplace mantel with a molded shelf, smooth frieze and curved legs on a raised hearth slab" },
          { src: "/images/products/french-chateau/04.jpg", alt: "Angled view of a fireplace mantel with a heavily pitted, mottled surface, a molded shelf and curved legs, around an arched-door insert" },
          { src: "/images/products/french-chateau/05.jpg", alt: "Dining room with a long table set in blue, and a fireplace mantel on a tall chimney breast beneath a framed painting, with arched glass doors to one side" },
          { src: "/images/products/french-chateau/06.jpg", alt: "Fireplace mantel with a molded shelf and curved legs around a black insert with a log set, on a tile floor, with a television mounted above" }
        ]
      },
      {
        name: "Tangled",
        description: "Fluted scroll corbels carry a molded shelf—Old World presence with a quiet, rhythmic profile. The frieze runs straight or lifts in a shallow arch.",
        style: "Old World",
        image: "/images/products/tangled/card.jpg",
        gallery: [
          { src: "/images/products/tangled/01.jpg", alt: "Fireplace mantel with a molded shelf, a gently arched frieze over the opening and two fluted scrolled corbels, around a black fireplace screen on a flat stone hearth, with a round mirror above and shutters on either side" },
          { src: "/images/products/tangled/02.jpg", alt: "Angled view of a fireplace mantel with a mottled surface, an arched frieze and fluted scrolled corbels, on a large raised hearth of matching slabs, with daylight from a window" },
          { src: "/images/products/tangled/03.jpg", alt: "Close-up of a fireplace mantel's straight frieze and fluted scrolled corbels around a black glass fireplace screen" },
          { src: "/images/products/tangled/04.jpg", alt: "Fireplace mantel with a straight frieze and fluted scrolled corbels on a raised hearth, with a framed seascape painting above and figurines on the shelf" },
          { src: "/images/products/tangled/05.jpg", alt: "Fireplace mantel with an arched frieze and fluted scrolled corbels beside built-in cabinetry, with an arched-top painting above" },
          { src: "/images/products/tangled/06.jpg", alt: "Fireplace mantel with a straight frieze and fluted scrolled corbels at the base of a tall tapered chimney breast between two windows" }
        ]
      }
    ]
  },
  architectural: {
    title: "Architectural Elements",
    description: "Feature, trim and ornament for facades, terraces and rooms. Cast stone in standard and custom styles and dimensions, offered in seven colors and three texture finishes.",
    items: [
      {
        name: "Columns",
        description: "Round, square and spiral-twisted shafts with plain molded or leaf-carved capitals. Set at entries, between arched windows and indoors.",
        style: "Round, Square, Twisted",
        image: "/images/products/columns/card.jpg",
        gallery: [
          { src: "/images/products/columns/01.jpg", alt: "Two columns with leaf-carved capitals flank an arched iron entry door; a balustrade with a pineapple-topped post and a curved stair rail run along the steps in front." },
          { src: "/images/products/columns/02.jpg", alt: "A pair of smooth round columns on a stone-clad pedestal supporting a covered drive-through at a stucco building with tile roofs." },
          { src: "/images/products/columns/03.jpg", alt: "Close view of a spiral-twisted column with a leaf-carved capital set between two arched windows." },
          { src: "/images/products/columns/04.jpg", alt: "A square column with a molded cap and base at an arched entry, beside a palm tree and a flagstone walkway." },
          { src: "/images/products/columns/05.jpg", alt: "Three arched windows framed by molded surrounds, with two spiral-twisted columns between them above a continuous sill." },
          { src: "/images/products/columns/06.jpg", alt: "Two tall round columns in a living room, with a fireplace mantel and arched overmantel panel on the far wall." }
        ]
      },
      {
        name: "Corbels",
        description: "Scrolled and leaf-carved brackets beneath molded top blocks, one banded in egg-and-dart. Set in pairs under kitchen hoods.",
        style: "Scroll & Leaf",
        image: "/images/products/corbels/card.jpg",
        gallery: [
          { src: "/images/products/corbels/01.jpg", alt: "Carved bracket with an egg-and-dart band along the top block, a leaf scroll on the face and a bead at the lower tip." },
          { src: "/images/products/corbels/02.jpg", alt: "Scrolled bracket with a plain top block and a large spiral curl." },
          { src: "/images/products/corbels/03.jpg", alt: "Tall tapering bracket with layered leaves and a small scroll at the base." },
          { src: "/images/products/corbels/05.jpg", alt: "Two leaf-carved brackets supporting a kitchen hood with a leaf-patterned band, between dark wood cabinets." },
          { src: "/images/products/corbels/06.jpg", alt: "Kitchen hood with a molded cornice and two small carved brackets above a patterned tile backsplash and range." }
        ]
      },
      {
        name: "Balustrades",
        description: "Defining the edge where terrace meets sky. Turned balusters between molded rails and paneled piers, run straight, curved or down a stair.",
        style: "Terrace & Entry",
        image: "/images/products/balustrades/card.jpg",
        gallery: [
          { src: "/images/products/balustrades/01.jpg", alt: "A balustrade of turned balusters with a molded rail and paneled end pier wrapping an entry porch, below two columns with leaf-carved capitals and an arched iron door." },
          { src: "/images/products/balustrades/02.jpg", alt: "Close view of turned balusters and a molded rail on a tiled terrace, with a potted tree and red foliage behind." },
          { src: "/images/products/balustrades/03.jpg", alt: "A curving balustrade run with turned balusters and paneled piers on a terrace overlooking trees." },
          { src: "/images/products/balustrades/04.jpg", alt: "Upper-storey loggia with a balustrade running between square pillars, under a tiled roof with a bracketed cornice." },
          { src: "/images/products/balustrades/05.jpg", alt: "A long balustrade run of turned balusters along a terrace edge, with tiled rooftops beyond." },
          { src: "/images/products/balustrades/06.jpg", alt: "Balustrade with pineapple-topped posts and a curved stair rail descending beside an entry with two columns." }
        ]
      },
      {
        name: "Pilaster Caps",
        description: "Flat and peaked caps with molded edges, finishing square piers at gates and entries. Some carry a ball or pineapple finial on a stepped base.",
        style: "Pier Caps & Finials",
        image: "/images/products/pilaster-caps/card.jpg",
        gallery: [
          { src: "/images/products/pilaster-caps/01.jpg", alt: "A peaked cap with molded edges on a tall square pier beside a road, with rolling hills and farmland behind." },
          { src: "/images/products/pilaster-caps/02.jpg", alt: "A square pier with a flat molded cap, a lion-head ornament and a tile address plaque, with lavender and hills behind." },
          { src: "/images/products/pilaster-caps/03.jpg", alt: "Several square caps with molded ogee edges stacked one on another, photographed close up." },
          { src: "/images/products/pilaster-caps/04.jpg", alt: "A ball finial on a stepped square base sitting on a flat cap, in front of hedging." },
          { src: "/images/products/pilaster-caps/05.jpg", alt: "A white square pier with a molded cap carrying a lantern, next to an iron gate and a driveway." },
          { src: "/images/products/pilaster-caps/06.jpg", alt: "A pineapple finial on a stepped cap topping a stone-clad pier with the letters RR." }
        ]
      },
      {
        name: "Crown Molding",
        description: "The crown completes the composition. Profiles range from plain and stepped to scrolling leaf friezes and repeating leaf bands.",
        style: "Leaf & Stepped",
        image: "/images/products/crown-molding/card.jpg",
        gallery: [
          { src: "/images/products/crown-molding/01.jpg", alt: "Close view of a molding with a scrolling leaf frieze and a twisted rope band above, under a plain cornice." },
          { src: "/images/products/crown-molding/02.jpg", alt: "A molding with a repeating leaf-and-dart band under a plain cornice, meeting a white ceiling." },
          { src: "/images/products/crown-molding/03.jpg", alt: "Close view of a high-relief carved section with a large curling leaf scroll and a fan-shaped leaf motif." },
          { src: "/images/products/crown-molding/04.jpg", alt: "Close view of a plain stepped molding profile with a pitted surface texture." }
        ]
      },
      {
        name: "Door & Window Trims",
        description: "The frame announces what follows. Arched and flat-headed surrounds for doors and windows, some with a keystone, paneled pilasters or engaged columns.",
        style: "Entry & Fenestration",
        image: "/images/products/door-window-trims/card.jpg",
        gallery: [
          { src: "/images/products/door-window-trims/01.jpg", alt: "Two-storey stucco facade with a pilastered door surround, flat entablature and keystone around an arched wood door, with shuttered windows and arched openings either side." },
          { src: "/images/products/door-window-trims/02.jpg", alt: "Arched double wood door framed by a surround with engaged columns, a molded entablature and two lanterns." },
          { src: "/images/products/door-window-trims/03.jpg", alt: "A window surround with eared corners and a projecting sill on a stucco wall, with roof tiles below." },
          { src: "/images/products/door-window-trims/04.jpg", alt: "A tall arched surround around a dark paneled door with a long pull handle." },
          { src: "/images/products/door-window-trims/05.jpg", alt: "Red stucco house with an arched entry surround with keystone and molded surrounds around two arched windows." },
          { src: "/images/products/door-window-trims/06.jpg", alt: "House facade with an entry surround and flat entablature around an arched wood door, molded window trims and a tiled roof." }
        ]
      }
    ]
  },
  outdoor: {
    title: "Outdoor & Garden",
    description: "Fire, water, seating and paving for patios, courtyards and gardens. Cast stone, alongside natural stone and veneer masonry.",
    items: [
      {
        name: "Outdoor Fireplaces",
        description: "The hearth moves to the garden. Arched surrounds, mantel shelves, raised hearths and chimney caps in cast stone, set in stacked stone or stucco on patios and under pergolas.",
        style: "Patio & Pergola",
        image: "/images/products/outdoor-fireplaces/card.jpg",
        gallery: [
          { src: "/images/products/outdoor-fireplaces/01.jpg", alt: "Outdoor fireplace faced in stacked stone with a smooth arched surround, a herringbone brick firebox and a wide hearth ledge" },
          { src: "/images/products/outdoor-fireplaces/02.jpg", alt: "Outdoor fireplace with a tall stacked-stone chimney, an arched surround with a curved top rail and a raised hearth bench running along a planted garden bed" },
          { src: "/images/products/outdoor-fireplaces/03.jpg", alt: "Smooth rendered outdoor fireplace with a tapered chimney, an arched molded opening and a curved low seat wall with a flat cap, under a timber pergola" },
          { src: "/images/products/outdoor-fireplaces/04.jpg", alt: "Outdoor fireplace with a lit fire, a mantel shelf on plain jambs and a tiled firebox edge, set into a stone wall beneath a timber pergola with a picnic table in front" },
          { src: "/images/products/outdoor-fireplaces/05.jpg", alt: "Outdoor fireplace in pale split-face stone with a flat shelf above the opening, a projecting hearth slab and a small capped chimney, on a paver patio against a block wall" },
          { src: "/images/products/outdoor-fireplaces/06.jpg", alt: "White rendered outdoor fireplace with a wood mantel beam on corbel blocks, diamond-set painted tiles, an arched brick-lined firebox with a lit fire and a curved hearth" }
        ]
      },
      {
        name: "Fire Pits",
        description: "Fire at the center. Freestanding round bowls, smooth caps for stone-faced pits, and coping for the seat walls that curve around them.",
        style: "Bowls & Rings",
        image: "/images/products/fire-pits/card.jpg",
        gallery: [
          { src: "/images/products/fire-pits/01.jpg", alt: "Round bowl-shaped fire pit with a wide flat rim and a metal burner ring inside, on a cobble-paver patio with cushioned chairs behind" },
          { src: "/images/products/fire-pits/02.jpg", alt: "Curved rendered seat walls with flat coping and two capped piers framing a round rubble-stone fire pit on a stone-tile patio, with a patterned tile step riser" },
          { src: "/images/products/fire-pits/03.jpg", alt: "Courtyard with a low round fire pit faced in stone with a smooth flat cap, herringbone brick paving, a stone-faced outdoor kitchen and a pergola on round columns" },
          { src: "/images/products/fire-pits/04.jpg", alt: "Dark bowl fire pit holding firewood on a concrete patio between wicker armchairs with cushions, with an umbrella and grill behind" },
          { src: "/images/products/fire-pits/05.jpg", alt: "Square fire pit with a slate-slab top and stacked-stone sides, a round gas burner ring set in lava rock, on a stamped-concrete patio" }
        ]
      },
      {
        name: "Fountains",
        description: "Water speaks in stone. Quatrefoil, octagonal and round basins with pedestal bowls or a spouted pillar, and a wall fountain with a scalloped bowl.",
        style: "Basins & Wall Fountains",
        image: "/images/products/fountains/card.jpg",
        gallery: [
          { src: "/images/products/fountains/01.jpg", alt: "Courtyard fountain with a quatrefoil-shaped molded basin, a shallow upper bowl on a short pedestal and a central water jet, in brick paving with blue-tiled walls behind" },
          { src: "/images/products/fountains/02.jpg", alt: "Quatrefoil basin fountain with a tiered bowl and water jet in front of an arched iron-and-glass entry door with lanterns either side, on herringbone brick" },
          { src: "/images/products/fountains/03.jpg", alt: "Octagonal basin fountain with a tall central column and four iron spouts pouring water, in a gravel garden with wildflowers, hills and oaks beyond" },
          { src: "/images/products/fountains/04.jpg", alt: "Wall fountain with a curved tiled back panel, a central medallion, a scalloped wall-mounted bowl and a blue tile band, over a bench wall with two low wing walls on a paver terrace" },
          { src: "/images/products/fountains/05.jpg", alt: "Round raised basin with a flat coping and a two-tier pedestal fountain at the centre, beside a palm and a drive" }
        ]
      },
      {
        name: "Benches & Seat Walls",
        description: "Stone invites pause. A straight bench with a beveled slab seat on fluted pedestal legs, and curved seat walls finished with round-edged caps.",
        style: "Custom Work",
        image: "/images/products/benches/card.jpg",
        gallery: [
          { src: "/images/products/benches/01.jpg", alt: "Straight garden bench with a plain rectangular slab seat on two fluted, scroll-profile pedestal legs, on a lawn beside a tree with potted flowers" },
          { src: "/images/products/benches/02.jpg", alt: "Curved seat wall with a smooth rounded-edge cap on a stone-faced base, bordering a flagstone-and-pebble terrace around a tree trunk" },
          { src: "/images/products/benches/03.jpg", alt: "Curved rendered seat wall with a flat seat and inset patterned tiles, below an arched window and a stacked-stone wall, on a paver patio" },
          { src: "/images/products/benches/04.jpg", alt: "Pineapple finial on a square pier cap over a field-stone pier with two gold letters, against a blue sky" }
        ]
      },
      {
        name: "Pavers",
        description: "The ground underfoot deserves intention. Large smooth-faced square pavers with crisp edges, laid in a grass-jointed grid, and diagonal-set square tile for wall cladding.",
        style: "Paving & Cladding",
        image: "/images/products/pavers/card.jpg",
        gallery: [
          { src: "/images/products/pavers/01.jpg", alt: "Large square pale pavers laid in a grid with strips of lawn between them, beside blue-and-white tiled columns and a covered patio" },
          { src: "/images/products/pavers/02.jpg", alt: "Grid of large square pavers set in grass leading toward a pool edge, with an arched tiled loggia at left and a wide valley view beyond" },
          { src: "/images/products/pavers/03.jpg", alt: "Outdoor shower corner clad in square tiles set on the diagonal with molded edge trim, a small framed niche and chrome fixtures, against white stucco with a stone base" }
        ]
      }
    ]
  },
  functional: {
    title: "Functional Elements",
    description: "Kitchen hoods, stair treads, window sills and wall caps. Cast stone in standard and custom dimensions, offered in seven colors and three texture finishes.",
    items: [
      {
        name: "Kitchen Hoods",
        description: "The range deserves a crown. Tapered hoods with molded bands, left plain or carved with a leaf frieze, some resting on leaf-carved corbels, and a paneled hood on curved jambs.",
        style: "Plain & Leaf-Carved",
        image: "/images/products/kitchen-hoods/card.jpg",
        gallery: [
          { src: "/images/products/kitchen-hoods/01.jpg", alt: "Tapered kitchen hood with a stepped crown at the top, a molded band and two carved leaf corbels, over a patterned tile backsplash and a gas range, between two windows" },
          { src: "/images/products/kitchen-hoods/02.jpg", alt: "Tapered hood with a molded band and a carved leaf frieze, mounted between two white-framed windows above a granite backsplash and range" },
          { src: "/images/products/kitchen-hoods/03.jpg", alt: "White tapered hood with a stepped top, a molded base and an iron scroll ornament, between dark wood cabinets over a diamond-set tile backsplash with a pot filler" },
          { src: "/images/products/kitchen-hoods/04.jpg", alt: "Pale hood with curved shoulders and a plain face over a blue-and-white patterned tile backsplash and a blue range, with white cabinets" },
          { src: "/images/products/kitchen-hoods/05.jpg", alt: "Tapered hood with a molded band, a leaf-and-dart frieze and two large carved acanthus corbels, between dark cabinets" },
          { src: "/images/products/kitchen-hoods/06.jpg", alt: "Hood with a carved leaf-and-dart band, a molded shelf and small carved corbels over a painted vineyard tile mural, between dark cabinets" }
        ]
      },
      {
        name: "Stair Treads",
        description: "Each step measured. Bullnose treads for straight interior flights and curved entry steps, some set over patterned tile risers.",
        style: "Straight & Curved",
        image: "/images/products/stair-treads/card.jpg",
        gallery: [
          { src: "/images/products/stair-treads/01.jpg", alt: "Two curved entry steps with rounded bullnose treads and patterned tile risers leading to a carved wood front door with a doormat" },
          { src: "/images/products/stair-treads/02.jpg", alt: "Straight interior staircase with bullnose treads, patterned tile risers edged with wood and an iron balustrade" },
          { src: "/images/products/stair-treads/03.jpg", alt: "Wide curved exterior steps with bullnose treads sweeping up to a porch, bordered by a curved low wall with a rounded cap on a stone-faced base" }
        ]
      },
      {
        name: "Window Sills",
        description: "The sill receives the weather. Projecting molded sills, set under single windows, run continuously beneath a pair, or carried on stepped corbel blocks.",
        style: "Single & Continuous",
        image: "/images/products/window-sills/card.jpg",
        gallery: [
          { src: "/images/products/window-sills/01.jpg", alt: "Three windows on a textured ochre wall, each with a projecting molded sill and matching head trim and dark louvered shutters, in low sunlight" },
          { src: "/images/products/window-sills/02.jpg", alt: "Close view of a molded window sill supported by two stepped corbel blocks beneath a brown-framed window on smooth plaster" },
          { src: "/images/products/window-sills/03.jpg", alt: "Pair of casement windows, one open, with a slim molded sill running beneath both, under a tile roof eave" },
          { src: "/images/products/window-sills/04.jpg", alt: "Bank of blue-framed windows on a curved ochre wall, each with a molded sill, with tall grasses in front" }
        ]
      },
      {
        name: "Wall Caps",
        description: "The wall deserves completion. Flat caps mitered at the corners, curved caps with a rounded edge, and pier caps with a molded overhang.",
        style: "Flat & Rounded",
        image: "/images/products/wall-caps/card.jpg",
        gallery: [
          { src: "/images/products/wall-caps/01.jpg", alt: "Curved wall cap with a rounded edge running along steps and a terrace, with a second capped stone wall, a rail fence and oak pasture beyond" },
          { src: "/images/products/wall-caps/02.jpg", alt: "Stepped stucco retaining walls with flat caps and mitred corners in a mulched planting bed below a row of windows" },
          { src: "/images/products/wall-caps/03.jpg", alt: "Square pier cap with a chamfered edge under an iron lantern, with a lower wall cap and a second pier cap beyond, against a blue sky" },
          { src: "/images/products/wall-caps/04.jpg", alt: "Curving balustrade with a rounded rail cap and turned balusters on a terrace, with a white building and trees behind" }
        ]
      }
    ]
  }
};

// Three of the seven standard colors, cut from the owner's sample board; the other names are not legible there.
export const stoneColors = [
  { name: "Limestone", image: "/images/finishes/colors/limestone.jpg" },
  { name: "Bisque", image: "/images/finishes/colors/bisque.jpg" },
  { name: "Carmel Sand", image: "/images/finishes/colors/carmel-sand.jpg" },
];

// Texture photos from the live site; all three samples are cast in the same color.
export const textureFinishes = [
  { name: "Classic", desc: "The smoothest of the three: a fine, even surface.", image: "/images/finishes/textures/classic.jpg" },
  { name: "Old World", desc: "A softly weathered surface with shallow pitting.", image: "/images/finishes/textures/old-world.jpg" },
  { name: "Rustic", desc: "Deep pits and a broken surface for an immediately aged look.", image: "/images/finishes/textures/rustic.jpg" },
];

export const slugify = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** A product with its URL slug and the collection it belongs to. */
export interface ProductEntry {
  slug: string;
  product: Product;
  collectionKey: CollectionKey;
  collection: Collection;
}

/** Every product in catalogue order; the slug is the product page path (/collections/<slug>) and the dialog hash. */
export const productEntries: ProductEntry[] = (Object.entries(collections) as [CollectionKey, Collection][]).flatMap(
  ([collectionKey, collection]) =>
    collection.items.map((product) => ({ slug: slugify(product.name), product, collectionKey, collection }))
);

export const productSlugs = new Set(productEntries.map((entry) => entry.slug));

export const getProductEntry = (slug: string) => productEntries.find((entry) => entry.slug === slug);

/** Groups items by their style field, in the order each style first appears (mantels: Contemporary, Traditional, Old World). */
export function groupByStyle(items: Product[]): { style: string; items: Product[] }[] {
  const groups = new Map<string, Product[]>();
  for (const item of items) groups.set(item.style, [...(groups.get(item.style) ?? []), item]);
  return Array.from(groups, ([style, grouped]) => ({ style, items: grouped }));
}

/**
 * Up to `limit` other pieces from the same collection: same-style pieces first, then the
 * pieces that follow in catalogue order (wrapping), so every piece is linked from its neighbours.
 */
export function relatedProducts(entry: ProductEntry, limit = 4): ProductEntry[] {
  const siblings = productEntries.filter((other) => other.collectionKey === entry.collectionKey);
  const start = siblings.findIndex((other) => other.slug === entry.slug);
  const following = [...siblings.slice(start + 1), ...siblings.slice(0, start)];
  const sameStyle = following.filter((other) => other.product.style === entry.product.style);
  const rest = following.filter((other) => other.product.style !== entry.product.style);
  return [...sameStyle, ...rest].slice(0, limit);
}
