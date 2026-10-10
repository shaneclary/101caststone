"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ProductModal from "@/components/ProductModal";
import { collections, groupByStyle, productSlugs, slugify, stoneColors, textureFinishes, type Product } from "@/data/products";

export default function Collections() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  // Keep the open modal in sync with the URL hash. Read only after hydration;
  // category hashes (#mantels, #finishes…) just scroll and never open a modal.
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.slice(1);
      setOpenSlug(productSlugs.has(hash) ? hash : null);
    };
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
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
    // The trigger's ::after stretches over the card, so a tap anywhere opens the piece
    return (
      <div
        key={item.name}
        id={slug}
        className="group relative overflow-hidden rounded-lg bg-white border border-[#e8dfcf] hover:shadow-xl transition-all duration-500 cursor-pointer has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-sienna/40 scroll-mt-28 md:scroll-mt-40 target:ring-2 target:ring-sienna/40"
      >
        {/* Product Image */}
        <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-clay/5 to-sienna/5">
          <Image
            src={item.image}
            alt={`${item.name} – ${collectionTitle}, cast stone`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <Heading className="font-display text-xl text-clay">{item.name}</Heading>
            <span className="text-xs text-sienna-700 bg-sienna/10 px-2 py-1 rounded">
              {item.style}
            </span>
          </div>
          <p className="text-sm text-clay leading-relaxed">{item.description}</p>
          <ProductModal
            item={item}
            category={collectionTitle}
            open={openSlug === slug}
            onOpenChange={(open) => (open ? openItem(slug) : closeItem())}
          >
            <button className="mt-4 inline-flex min-h-[44px] items-center text-sienna-700 text-sm hover:text-basalt transition-colors after:absolute after:inset-0">
              View Details<span className="sr-only"> – {item.name}</span>&nbsp;<span aria-hidden="true">→</span>
            </button>
          </ProductModal>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-ivory">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-[#f5efe4] to-ivory">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-clay mb-6">Collections</h1>
          <p className="text-xl text-clay max-w-2xl mx-auto leading-relaxed">
            Architectural cast stone, hand-finished with California precision. Each element designed for proportion, patina, and permanence.
          </p>
        </div>
      </section>

      {/* Category jump links (sticky from md up; on phones the bottom-nav tab returns here) */}
      <nav aria-label="Collection categories" className="border-y border-[#e8dfcf] bg-ivory/95 md:sticky md:top-20 md:z-40 md:backdrop-blur [@media(max-height:500px)]:static">
        <div className="mx-auto max-w-7xl flex gap-2 overflow-x-auto whitespace-nowrap px-6 py-3 lg:justify-center">
          {Object.entries(collections).map(([key, c]) => (
            <a key={key} href={`#${key}`} className="rounded-full border border-clay/30 px-4 py-1.5 text-sm text-clay no-underline hover:border-sienna hover:text-basalt">{c.title}</a>
          ))}
          <a href="#finishes" className="rounded-full border border-clay/30 px-4 py-1.5 text-sm text-clay no-underline hover:border-sienna hover:text-basalt">Colors &amp; Finishes</a>
        </div>
      </nav>

      {/* Collections */}
      {Object.entries(collections).map(([key, collection], collectionIndex) => (
        <section key={key} id={key} className={`py-20 ${collectionIndex % 2 === 0 ? 'bg-ivory' : 'bg-[#f5efe4]'}`}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <h2 className="font-display text-4xl md:text-5xl text-clay mb-4">{collection.title}</h2>
              <p className="text-lg text-clay max-w-3xl leading-relaxed">{collection.description}</p>
            </div>

            {/* Mantels follow the original site's grouping under style sub-headings, so their card names step down to h4 */}
            {key === "mantels" ? (
              <div className="space-y-14">
                {groupByStyle(collection.items).map((group) => (
                  <div key={group.style}>
                    <h3 className="font-display text-2xl tracking-normal text-basalt mb-6">{group.style}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {group.items.map((item) => renderCard(item, collection.title, "h4"))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {collection.items.map((item) => renderCard(item, collection.title, "h3"))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Stone Colors & Finishes */}
      <section id="finishes" className="py-20 bg-[#f5efe4]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-4xl md:text-5xl text-clay mb-4 text-center">Stone Colors & Finishes</h2>
          <p className="text-lg text-clay max-w-2xl mx-auto text-center mb-16 leading-relaxed">
            Seven standard colors and three texture finishes. Custom colors and finishes on request.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Colors */}
            <div>
              <h3 className="font-display text-2xl text-basalt mb-6">Colors</h3>
              <ul className="grid grid-cols-3 gap-4">
                {stoneColors.map((color) => (
                  <li key={color.name}>
                    <div className="relative aspect-square overflow-hidden rounded-lg border border-[#e8dfcf] bg-white">
                      <Image src={color.image} alt={`${color.name} color sample`} fill sizes="(max-width: 768px) 30vw, 170px" className="object-cover" />
                    </div>
                    <div className="mt-2 text-[15px] font-medium text-basalt">{color.name}</div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[15px] text-clay leading-relaxed">
                Three of the seven standard colors are shown. Screen color is approximate.
              </p>
            </div>

            {/* Textures */}
            <div>
              <h3 className="font-display text-2xl text-basalt mb-6">Textures</h3>
              <ul className="space-y-4">
                {textureFinishes.map((texture) => (
                  <li key={texture.name} className="flex gap-4 items-center bg-white rounded-lg p-3 border border-[#e8dfcf]">
                    <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-md">
                      <Image src={texture.image} alt={`${texture.name} texture sample`} fill sizes="128px" className="object-cover" />
                    </div>
                    <div>
                      <div className="font-medium text-basalt text-lg">{texture.name}</div>
                      <div className="text-[15px] text-clay mt-1 leading-relaxed">{texture.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[15px] text-clay leading-relaxed">Texture samples are shown in a single color.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ivory">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl text-clay mb-6">Begin a Commission</h2>
          <p className="text-lg text-clay mb-8 max-w-2xl mx-auto leading-relaxed">
            Each piece begins as dialogue. We listen to your vision, your space, your story—then translate it into stone that endures for generations.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-sienna-700 text-ivory-50 rounded-lg hover:shadow-lg transition-all duration-500 font-medium no-underline"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
