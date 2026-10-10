"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useRef, useState, type MouseEvent } from "react";
import PhotoGallery from "@/components/PhotoGallery";
import { focusGalleryOnOpen, revealFocusedControl } from "@/components/dialogFocus";
import type { GalleryPhoto } from "@/data/products";

export interface PortfolioPhoto extends GalleryPhoto {
  /** Masonry footprint: wide spans two columns, tall spans two rows. */
  span?: "normal" | "wide" | "tall";
}

const SPAN_CLASS = {
  normal: "",
  wide: "md:col-span-2",
  tall: "md:row-span-2",
} as const;

const TILE =
  "group relative overflow-hidden rounded-lg bg-ivory-200 border border-[#e8dfcf90] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sienna-700 focus-visible:ring-offset-2";

/**
 * A featured photo above a masonry grid of installation photos. Any photo opens a lightbox
 * that steps through the whole set, featured photo first.
 */
export default function PortfolioGrid({ featured, photos, label }: { featured?: PortfolioPhoto; photos: PortfolioPhoto[]; label: string }) {
  const all = featured ? [featured, ...photos] : photos;
  const offset = featured ? 1 : 0;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Plain buttons, not Dialog.Trigger: Radix keeps one trigger ref per dialog, so with 31 triggers
  // closing would return focus to the last tile. The tile that opened the lightbox gets it instead.
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const trigger = (index: number) => ({
    type: "button" as const,
    "aria-haspopup": "dialog" as const,
    onClick: (event: MouseEvent<HTMLButtonElement>) => {
      openerRef.current = event.currentTarget;
      setOpenIndex(index);
    },
    "aria-label": `Open photo ${index + 1} of ${all.length}: ${all[index].alt}`,
  });

  return (
    <Dialog.Root open={openIndex !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
      {featured && (
        <button {...trigger(0)} className={`${TILE} block w-full aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9]`}>
          <Image src={featured.src} alt={featured.alt} fill priority sizes="(max-width: 1152px) 100vw, 1152px" className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
        </button>
      )}

      <div className={`grid grid-cols-2 md:grid-cols-4 md:grid-flow-dense gap-4 auto-rows-[200px] md:auto-rows-[240px] ${featured ? "mt-4" : ""}`}>
        {photos.map((photo, i) => (
          <button key={photo.src} {...trigger(i + offset)} className={`${TILE} ${SPAN_CLASS[photo.span ?? "normal"]}`}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={photo.span === "wide" ? "(max-width: 768px) 50vw, 576px" : "(max-width: 768px) 50vw, 288px"}
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-basalt/90 backdrop-blur-sm data-[state=open]:animate-fade-in" />
        <Dialog.Content
          aria-describedby={undefined}
          onOpenAutoFocus={focusGalleryOnOpen}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            openerRef.current?.focus();
          }}
          onFocus={revealFocusedControl}
          className="fixed left-1/2 top-1/2 z-50 w-[96vw] max-w-6xl -translate-x-1/2 -translate-y-1/2 rounded-xl bg-ivory p-3 shadow-2xl data-[state=open]:animate-fade-in-up focus:outline-none"
        >
          <Dialog.Title className="sr-only">{label}</Dialog.Title>
          <Dialog.Close
            aria-label="Close"
            className="absolute top-5 right-5 md:-top-3 md:-right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-clay shadow-md hover:text-basalt transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sienna-700"
          >
            <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </Dialog.Close>
          {openIndex !== null && (
            <PhotoGallery
              photos={all}
              label={label}
              initialIndex={openIndex}
              sizes="(max-width: 1152px) 96vw, 1152px"
              frameClassName="h-[60vh] supports-[height:100dvh]:h-[60dvh] md:h-[72vh] md:supports-[height:100dvh]:h-[72dvh] rounded-lg"
            />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
