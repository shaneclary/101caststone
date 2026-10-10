"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ClosingCta from "@/components/ClosingCta";
import ProductModal from "@/components/ProductModal";
import SectionTitle from "@/components/SectionTitle";
import { collections, groupByStyle, productSlugs, slugify, stoneColors, textureFinishes, type Product } from "@/data/products";

const CHIP =
  "rounded-full border border-clay/40 px-4 py-1.5 text-small text-basalt no-underline hover:border-basalt hover:bg-basalt hover:text-ivory-50";

export default function Collections() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  // Keep the open modal in sync with the URL hash. Read only after hydration;
  // category hashes (#mantels, #finishes…) just scroll and never open a modal.
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.slice(1);
      setOpenSlug(productSlugs.has(hash) ? hash : null);
    };
    // Deferred one task: on Back into /collections#<slug> the browser finishes restoring the
    // fragment first, so it no longer blurs the dialog's initial focus.
    const initialSync = window.setTimeout(sync, 0);
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.clearTimeout(initialSync);
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);

  // Plain state object: Next copies its own router state into the entry.
  const openItem = (slug: string) => {
    window.history.pushState({ modal: slug }, "", `#${slug}`);
    setOpenSlug(slug);
  };

  // Step back only over an entry this page pushed; a deep-linked visitor would otherwise leave the site.
  const closeItem = () => {
    setOpenSlug(null);
    if (window.history.state?.modal) window.history.back();
    else window.history.replaceState(null, "", window.location.pathname + window.location.search);
  };

  const renderCard = (item: Product, collectionTitle: string, Heading: "h3" | "h4") => {
    const slug = slugify(item.name);
    // The "View Details" trigger's ::after stretches over the card, so a tap anywhere opens the
    // piece; the product-page link sits above it (relative z-10) so it stays its own target.
    return (
      <article
        key={item.name}
        id={slug}
        className="group relative flex flex-col scroll-mt-28 md:scroll-mt-40 cursor-pointer rounded has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-4 has-[:focus-visible]:outline-sienna-700 target:outline target:outline-2 target:outline-offset-4 target:outline-sienna/50"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded bg-ivory-200">
          <Image
            src={item.image}
            alt={`${item.name} – ${collectionTitle}, cast stone`}
            fill
            className="img-drift object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 400px"
          />
        </div>

        <div className="flex flex-1 flex-col pt-4">
          {Heading === "h3" && <p className="eyebrow mb-1.5">{item.style}</p>}
          <Heading className="font-display text-xl leading-tight text-basalt sm:text-[22px]">{item.name}</Heading>
          {/* The dialog and the product page carry the full text; phones keep the catalogue compact */}
          <p className="mt-2 hidden text-small text-clay sm:line-clamp-3">{item.description}</p>
          <div className="mt-auto flex flex-col items-start gap-x-5 pt-2 text-small font-medium sm:flex-row sm:items-center">
            <ProductModal
              item={item}
              category={collectionTitle}
              open={openSlug === slug}
              onOpenChange={(open) => (open ? openItem(slug) : closeItem())}
            >
              <button className="text-link inline-flex min-h-[44px] items-center decoration-sienna underline-offset-4 after:absolute after:inset-0 group-hover:underline">
                View Details<span className="sr-only"> – {item.name}</span>&nbsp;<span aria-hidden="true">→</span>
              </button>
            </ProductModal>
            <Link
              href={`/collections/${slug}`}
              className="relative z-10 inline-flex min-h-[44px] items-center text-clay no-underline hover:text-basalt hover:underline underline-offset-4"
            >
              Product page<span className="sr-only"> for {item.name}</span>
            </Link>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="bg-ivory">
      <section className="pb-10 pt-12 md:pb-14 md:pt-20">
        <div className="wrap">
          <SectionTitle>Collections</SectionTitle>
          <p className="max-w-prose text-lead text-clay">
            Fireplace mantels, architectural elements, outdoor and garden pieces and functional elements. Each is cast
            in Atascadero in seven standard colors and three textures, in standard or custom dimensions.
          </p>
        </div>
      </section>

      {/* Category jump links (sticky from md up; on phones the bottom-nav tab returns here).
          Link, not <a>: Next pushes the hash entry with its own router state, so Back to it restores this page. */}
      <nav
        aria-label="Collection categories"
        className="border-y border-ecru bg-ivory/95 md:sticky md:top-20 md:z-40 md:backdrop-blur [@media(max-height:500px)]:static"
      >
        <div className="wrap flex gap-2 overflow-x-auto whitespace-nowrap py-3 lg:justify-center">
          {Object.entries(collections).map(([key, c]) => (
            <Link key={key} href={`#${key}`} className={CHIP}>
              {c.title}
            </Link>
          ))}
          <Link href="#finishes" className={CHIP}>
            Colors &amp; Textures
          </Link>
        </div>
      </nav>

      {/* Collections */}
      {Object.entries(collections).map(([key, collection], collectionIndex) => (
        <section key={key} id={key} className={`py-16 md:py-24 ${collectionIndex % 2 === 0 ? "bg-ivory" : "bg-ecru/50"}`}>
          <div className="wrap">
            <div className="mb-12 max-w-3xl">
              <h2>{collection.title}</h2>
              <p className="mt-4 text-body text-clay">{collection.description}</p>
            </div>

            {/* Mantels follow the original site's grouping under style sub-headings, so their card names step down to h4 */}
            {key === "mantels" ? (
              <div className="space-y-16">
                {groupByStyle(collection.items).map((group) => (
                  <div key={group.style}>
                    <h3 className="mb-6 border-b border-nickel/40 pb-3">{group.style}</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
                      {group.items.map((item) => renderCard(item, collection.title, "h4"))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
                {collection.items.map((item) => renderCard(item, collection.title, "h3"))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Stone Colors & Textures */}
      <section id="finishes" className="bg-ivory py-16 md:py-24">
        <div className="wrap">
          <div className="max-w-3xl">
            <h2>Colors &amp; Textures</h2>
            <p className="mt-4 text-body text-clay">
              Seven standard colors and three texture finishes. Custom colors and finishes on request.
            </p>
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6">Colors</h3>
              <ul className="grid grid-cols-3 gap-4">
                {stoneColors.map((color) => (
                  <li key={color.name}>
                    <div className="relative aspect-square overflow-hidden rounded border border-ecru bg-ivory-50">
                      <Image src={color.image} alt={`${color.name} color sample`} fill sizes="(max-width: 768px) 30vw, 170px" className="object-cover" />
                    </div>
                    <div className="mt-2 text-small font-medium text-basalt">{color.name}</div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-small text-clay">Three of the seven standard colors are shown. Screen color is approximate.</p>
            </div>

            <div>
              <h3 className="mb-6">Textures</h3>
              <ul className="divide-y divide-ecru border-y border-ecru">
                {textureFinishes.map((texture) => (
                  <li key={texture.name} className="flex items-center gap-5 py-4">
                    <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded">
                      <Image src={texture.image} alt={`${texture.name} texture sample`} fill sizes="128px" className="object-cover" />
                    </div>
                    <div>
                      <div className="font-display text-xl text-basalt">{texture.name}</div>
                      <div className="mt-1 text-small text-clay">{texture.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-small text-clay">Texture samples are shown in a single color.</p>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta
        heading="Begin a Commission"
        body="Each piece begins as dialogue. Tell us about your space and what you have in mind, and our design team will work through the project with you, from our standard designs or something entirely new."
      />
    </div>
  );
}
