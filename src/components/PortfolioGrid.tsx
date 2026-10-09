"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import PhotoGallery from "@/components/PhotoGallery";
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

/** Masonry grid of installation photos; any tile opens a lightbox that steps through the whole set. */
export default function PortfolioGrid({ photos, label }: { photos: PortfolioPhoto[]; label: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Dialog.Root open={openIndex !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
        {photos.map((photo, index) => (
          <Dialog.Trigger asChild key={photo.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Open photo ${index + 1} of ${photos.length}: ${photo.alt}`}
              className={`group relative overflow-hidden rounded-lg bg-ivory-200 border border-[#e8dfcf90] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sienna-700 focus-visible:ring-offset-2 ${SPAN_CLASS[photo.span ?? "normal"]}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={photo.span === "wide" ? "(max-width: 768px) 50vw, 640px" : "(max-width: 768px) 50vw, 320px"}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </button>
          </Dialog.Trigger>
        ))}
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-basalt/90 backdrop-blur-sm data-[state=open]:animate-fade-in" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed left-1/2 top-1/2 z-50 w-[96vw] max-w-6xl -translate-x-1/2 -translate-y-1/2 rounded-xl bg-ivory p-3 shadow-2xl data-[state=open]:animate-fade-in-up focus:outline-none"
        >
          <Dialog.Title className="sr-only">{label}</Dialog.Title>
          <Dialog.Close
            aria-label="Close"
            className="absolute -top-3 -right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-clay shadow-md hover:text-basalt transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sienna-700"
          >
            <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </Dialog.Close>
          {openIndex !== null && (
            <PhotoGallery
              photos={photos}
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
