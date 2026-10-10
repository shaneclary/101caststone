"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { stepIndex, swipeDirection } from "@/lib/gallery";
import type { GalleryPhoto } from "@/data/products";

interface PhotoGalleryProps {
  photos: GalleryPhoto[];
  /** Accessible name for the gallery, e.g. "Provence photos". */
  label: string;
  initialIndex?: number;
  sizes?: string;
  /** Classes for the main frame; defaults to a 4:3 box. */
  frameClassName?: string;
  /** Classes for the thumbnail strip (e.g. side padding inside a dialog). */
  thumbsClassName?: string;
  priority?: boolean;
}

const ARROW_BUTTON =
  "absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-clay hover:text-basalt shadow-md flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sienna-700 focus-visible:ring-offset-2";

/** True when slide `i` is the current photo or a neighbour (with wrap), so only three images load at a time. */
function isNear(i: number, index: number, count: number) {
  return i === index || i === stepIndex(index, 1, count) || i === stepIndex(index, -1, count);
}

export default function PhotoGallery({
  photos,
  label,
  initialIndex = 0,
  sizes = "(max-width: 768px) 100vw, 50vw",
  frameClassName = "aspect-[4/3]",
  thumbsClassName = "",
  priority = false,
}: PhotoGalleryProps) {
  const count = photos.length;
  const [index, setIndex] = useState(() => Math.min(Math.max(initialIndex, 0), Math.max(count - 1, 0)));
  const [pointerStart, setPointerStart] = useState<{ x: number; y: number } | null>(null);

  const step = (delta: number) => setIndex((current) => stepIndex(current, delta, count));

  // Keep the current thumbnail centred in its strip; scrolls only the strip, never the page.
  const thumbsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const strip = thumbsRef.current;
    const thumb = strip?.children[index] as HTMLElement | undefined;
    if (!strip || !thumb) return;
    strip.scrollTo({ left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2, behavior: "smooth" });
  }, [index]);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    }
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (!pointerStart) return;
    const direction = swipeDirection(event.clientX - pointerStart.x, event.clientY - pointerStart.y);
    setPointerStart(null);
    if (direction === "next") step(1);
    if (direction === "prev") step(-1);
  }

  if (count === 0) return null;
  const current = photos[index];

  return (
    <div role="group" aria-roledescription="carousel" aria-label={label} onKeyDown={onKeyDown}>
      {/* Neighbouring photos stay mounted and cross-fade, so stepping is instant without loading the whole set */}
      <div
        className={`relative overflow-hidden bg-ivory-200 touch-pan-y select-none ${frameClassName}`}
        onPointerDown={(event) => setPointerStart({ x: event.clientX, y: event.clientY })}
        onPointerUp={onPointerUp}
        onPointerCancel={() => setPointerStart(null)}
      >
        {photos.map((photo, i) =>
          isNear(i, index, count) ? (
            <div
              key={photo.src}
              aria-hidden={i !== index}
              className={`absolute inset-0 transition-opacity duration-300 ${i === index ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={sizes}
                className="object-contain"
                priority={priority && i === index}
                draggable={false}
              />
            </div>
          ) : null
        )}

        {count > 1 && (
          <>
            <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className={`${ARROW_BUTTON} left-3`}>
              <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button type="button" onClick={() => step(1)} aria-label="Next photo" className={`${ARROW_BUTTON} right-3`}>
              <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
            <span aria-hidden="true" className="absolute bottom-3 right-3 rounded-full bg-basalt/75 px-2.5 py-1 text-[12px] text-ivory-50 tabular-nums">
              {index + 1} / {count}
            </span>
          </>
        )}
      </div>

      {count > 1 && (
        <>
          <p aria-live="polite" className="sr-only">
            Photo {index + 1} of {count}: {current.alt}
          </p>
          <div ref={thumbsRef} className={`relative mt-3 flex gap-2 overflow-x-auto pb-1 ${thumbsClassName}`}>
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                aria-label={`Show photo ${i + 1} of ${count}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => setIndex(i)}
                className={`relative h-14 w-[4.67rem] shrink-0 overflow-hidden rounded-md border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sienna-700 focus-visible:ring-offset-2 ${
                  i === index ? "border-sienna-700 ring-1 ring-sienna-700" : "border-[#e3d9c8] hover:border-sienna-700"
                }`}
              >
                <Image src={photo.src} alt="" fill sizes="80px" className="object-cover" draggable={false} />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
