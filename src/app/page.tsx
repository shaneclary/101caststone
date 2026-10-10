import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero/winecountry.jpg";
import ClosingCta from "@/components/ClosingCta";
import { customers, showroom } from "@/data/company";
import { collections, type CollectionKey } from "@/data/products";

export const metadata: Metadata = {
  title: { absolute: "101 Cast Stone | Cast Stone Mantels & Architectural Elements, Atascadero" },
  alternates: { canonical: "/" },
};

const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=1720+El+Camino+Real%2C+Atascadero%2C+CA+93422";

// One card per collection; each photo is the card photo of a piece in that collection.
const COLLECTION_CARDS: { key: CollectionKey; image: string }[] = [
  { key: "mantels", image: "/images/products/tangled/card.jpg" },
  { key: "architectural", image: "/images/products/columns/card.jpg" },
  { key: "outdoor", image: "/images/products/fountains/card.jpg" },
  { key: "functional", image: "/images/products/kitchen-hoods/card.jpg" },
];

// The four steps of the Lintel Method, in the words of the owner's Design & Manufacturing Process page.
const LINTEL_STEPS = [
  { name: "Dialogue", text: "Our design team works through the project with you, from our existing designs or something entirely new." },
  { name: "Mould", text: "New or modified moulds are made in our own mould shop." },
  { name: "Cast", text: "Mixed in the color you specify and packed by hand into the mould, then backed with fiberglass." },
  { name: "Finish", text: "Cured, checked by Quality Control, then delivered and installed by our crew." },
];

// Installations from the curated portfolio (src/data/portfolio.ts); captions name only what is visible.
const INSTALLATIONS = [
  { src: "/images/works/16.jpg", caption: "Fireplace mantel", alt: "Cream fireplace mantel with acanthus-leaf corbels against a charcoal wall, styled with a carved square panel, candlesticks and a striped vase.", span: "md:col-span-2 md:row-span-2", sizes: "(max-width: 768px) 50vw, 640px" },
  { src: "/images/works/05.jpg", caption: "Kitchen hood", alt: "Cream range hood with a carved leaf band along its lower edge, between dark wood cabinets, above a tiled backsplash with an arched mosaic niche.", span: "", sizes: "(max-width: 768px) 50vw, 320px" },
  { src: "/images/works/01.jpg", caption: "Entry surround and columns", alt: "Arched double wood doors in a pale surround with a round column on each side and a moulded cornice above, flanked by two black wall lanterns.", span: "md:row-span-2", sizes: "(max-width: 768px) 50vw, 320px" },
  { src: "/images/works/08.jpg", caption: "Window surrounds and twisted columns", alt: "Three arched windows in a pale moulded surround, divided by two twisted rope columns resting on a projecting sill, on a smooth plaster wall.", span: "", sizes: "(max-width: 768px) 50vw, 320px" },
  { src: "/images/works/22.jpg", caption: "Pergola columns", alt: "Pergola on four round columns with square pedestals, casting striped shade over a pale paved patio with curved bench walls, with large trees behind.", span: "md:col-span-2", sizes: "(max-width: 768px) 50vw, 640px" },
  { src: "/images/works/11.jpg", caption: "Outdoor fireplace", alt: "Outdoor fireplace with a wood fire burning in a moulded firebox surround, a mantel shelf and a log-storage niche, under a slatted pergola.", span: "md:col-span-2", sizes: "(max-width: 768px) 50vw, 640px" },
];

export default function Home() {
  return (
    <>
      {/* HERO: the photo sets the impression; the statement sits on its lower-left from md up and below it on phones */}
      <section className="relative bg-ivory p-4 md:h-[calc(100svh-5rem)] md:p-6 lg:p-8 [@media(max-height:500px)]:h-auto">
        <div className="relative h-[50svh] w-full overflow-hidden rounded bg-ecru md:h-full">
          <Image
            src={heroImg}
            alt="A couple with a glass of red wine beside a lit fireplace with a pale stone mantel set in a fieldstone chimney wall, a dining room behind them"
            fill
            placeholder="blur"
            className="animate-pan-bg object-cover object-[center_85%] portrait:object-[78%_85%] md:object-[68%_80%]"
            priority
          />
        </div>
        <div className="px-2 pb-6 pt-10 text-center md:absolute md:bottom-14 md:left-14 md:max-w-[34rem] md:rounded md:bg-ivory/[0.92] md:p-10 md:text-left md:backdrop-blur-sm lg:bottom-20 lg:left-20">
          <p className="eyebrow mb-4">101 Cast Stone · Atascadero, California</p>
          <h1 className="text-balance">Cast stone, made by hand on the Central Coast.</h1>
          <p className="mx-auto mt-4 max-w-md text-body text-clay md:mx-0">
            Fireplace mantels, columns, balustrades and architectural trim, cast in seven standard colors and three
            textures in our Atascadero workshop.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <Link href="/collections#mantels" className="btn btn-primary">
              View the Mantels
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Begin a Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="py-20 md:py-28" aria-labelledby="collections-heading">
        <div className="wrap">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">The Collections</p>
              <h2 id="collections-heading" className="text-balance">Twenty-six pieces, four collections.</h2>
            </div>
            <Link href="/collections" className="text-link text-small font-medium">
              All collections <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {COLLECTION_CARDS.map(({ key, image }) => {
              const collection = collections[key];
              return (
                <li key={key}>
                  <Link href={`/collections#${key}`} className="group block no-underline">
                    <div className="relative aspect-[4/5] overflow-hidden rounded bg-ivory-200">
                      {/* Decorative: the link is named by its heading */}
                      <Image src={image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px" className="img-drift object-cover" />
                    </div>
                    <p className="eyebrow mt-5">{collection.items.length} pieces</p>
                    <h3 className="mt-1 text-basalt group-hover:text-sienna-700">{collection.title}</h3>
                    <p className="mt-2 line-clamp-3 text-small text-clay">{collection.description}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* THE WORKSHOP: a real photo of the manufacturing floor and the four steps */}
      <section id="workshop" className="bg-ecru/50 py-20 md:py-28" aria-labelledby="workshop-heading">
        <div className="wrap grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <div className="relative aspect-[3/2] overflow-hidden rounded bg-ivory-200">
              <Image
                src="/images/process/workshop-floor.jpg"
                alt="Rows of moulds on the floor being filled by hand, with shelves of moulds behind"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded bg-ivory-200">
                <Image src="/images/process/mould-shop.jpg" alt="Mould material being cut on a band saw in the mould shop" fill sizes="(max-width: 768px) 50vw, 340px" className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded bg-ivory-200">
                <Image src="/images/process/mould-detail.jpg" alt="Close view of a molded profile beside its mould" fill sizes="(max-width: 768px) 50vw, 340px" className="object-cover" />
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <p className="eyebrow mb-3">The Workshop</p>
            <h2 id="workshop-heading" className="text-balance">Packed by hand into the mould.</h2>
            <p className="mt-5 text-body text-clay">
              A material first used around 1138 in Carcassonne, France, made the modern way: Portland cement, crushed
              quartz and color pigment, packed by hand into moulds from our own mould shop, backed with fiberglass and
              checked by Quality Control before delivery.
            </p>
            <h3 className="mt-10 font-sans text-eyebrow uppercase tracking-[0.16em] text-sienna-700">The Lintel Method</h3>
            <ol className="mt-3 divide-y divide-nickel/40 border-y border-nickel/40">
              {LINTEL_STEPS.map((step, i) => (
                <li key={step.name} className="flex gap-5 py-4">
                  <span className="w-6 shrink-0 pt-1 font-display text-lg text-sienna">{i + 1}</span>
                  <div>
                    <span className="font-display text-xl text-basalt">{step.name}</span>
                    <p className="mt-1 text-small text-clay">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link href="/process" className="btn btn-secondary mt-8">
              See the Process
            </Link>
          </div>
        </div>
      </section>

      {/* INSTALLATIONS from the portfolio; captions always visible */}
      <section className="py-20 md:py-28" aria-labelledby="installations-heading">
        <div className="wrap">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">Works</p>
              <h2 id="installations-heading" className="text-balance">Selected installations.</h2>
            </div>
            <Link href="/works" className="text-link text-small font-medium">
              All works <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:grid-flow-dense md:gap-4">
            {INSTALLATIONS.map((tile) => (
              <Link key={tile.src} href="/works" className={`group relative overflow-hidden rounded bg-ivory-200 no-underline ${tile.span}`}>
                <Image src={tile.src} alt={tile.alt} fill sizes={tile.sizes} className="img-drift object-cover" />
                <span className="absolute bottom-3 left-3 rounded bg-ivory-50/90 px-2.5 py-1 text-caption text-basalt backdrop-blur-sm">
                  {tile.caption}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMERS: the names on the owner's About page */}
      <section className="border-y border-ecru bg-ivory-50 py-16 md:py-20" aria-labelledby="customers-heading">
        <div className="wrap grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-3">Customers</p>
            <h2 id="customers-heading" className="text-heading md:text-heading">Past and current customers</h2>
            <p className="mt-3 text-small text-clay">
              A wide array of projects for developers, building contractors and residential customers.
            </p>
            <Link href="/about" className="text-link mt-4 inline-block text-small font-medium">
              About 101 Cast Stone <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-small text-basalt sm:grid-cols-3 md:col-span-8">
            {customers.map((customer) => (
              <li key={customer}>{customer}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* SHOWROOM */}
      <section id="showroom" className="py-20 md:py-28" aria-labelledby="showroom-heading">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow mb-3">Visit</p>
            <h2 id="showroom-heading" className="text-balance">The {showroom.name.replace(" Showroom", "")} showroom.</h2>
            <p className="mt-5 text-body text-clay">
              See the pieces, the colors and the textures in person, and talk through your project with our design team.
            </p>
          </div>
          <dl className="grid gap-8 sm:grid-cols-3 md:col-span-7 md:pt-2">
            <div>
              <dt className="eyebrow mb-2">Address</dt>
              <dd className="text-body text-basalt">
                <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="no-underline hover:underline underline-offset-4">
                  {showroom.street}
                  <br />
                  {showroom.locality}
                  <span className="sr-only"> (opens Google Maps in a new tab)</span>
                </a>
                <span className="mt-2 block text-small text-sienna-700">Get directions <span aria-hidden="true">→</span></span>
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">Factory Showroom Hours</dt>
              <dd className="text-body text-basalt">{showroom.hours}</dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">Appointments</dt>
              <dd className="text-body text-basalt">
                {showroom.weekend}
                <Link href="/contact?product=Showroom%20visit#inquiry" className="text-link mt-2 block text-small font-medium">
                  Request a weekend appointment <span aria-hidden="true">→</span>
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <ClosingCta
        heading="Begin a Conversation"
        body="Every commission begins as dialogue. Tell us about the room, the opening or the garden, and our design team will work through the project with you."
      />
    </>
  );
}
