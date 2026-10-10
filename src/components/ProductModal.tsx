"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import PhotoGallery from "@/components/PhotoGallery";
import { focusGalleryOnOpen, revealFocusedControl } from "@/components/dialogFocus";
import { ProductOptions } from "@/components/ProductSpec";
import { isFireplaceProduct, slugify, type Product } from "@/data/products";

interface ProductModalProps {
  item: Product;
  category: string;
  children: React.ReactNode;
  // Optional controlled mode (e.g. to sync with the URL hash); uncontrolled when omitted
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

/** Quick view of a piece: photos, the description and the facts in brief; the product page carries the full specification. */
export default function ProductModal({ item, category, children, open, onOpenChange }: ProductModalProps) {
  const slug = slugify(item.name);
  const isFireplace = isFireplaceProduct(slug);
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-basalt/70 backdrop-blur-sm data-[state=open]:animate-fade-in" />
        <Dialog.Content
          onOpenAutoFocus={focusGalleryOnOpen}
          onFocus={revealFocusedControl}
          className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[95vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded bg-ivory shadow-2xl supports-[height:100dvh]:max-h-[90dvh] data-[state=open]:animate-rise"
        >
          {/* Close Button: sticky so it stays reachable while the dialog scrolls; -mb-14 = mt-4 + h-10 */}
          <Dialog.Close
            aria-label="Close"
            className="sticky top-4 z-10 float-right -mb-14 mr-4 mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-ivory-50/90 text-basalt shadow-md hover:bg-ivory-50 hover:text-sienna-700"
          >
            <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </Dialog.Close>

          <div className="md:flex">
            {/* Photos: contained (never cropped) on a toned panel that also shows while they load */}
            {item.gallery && item.gallery.length > 0 ? (
              <div className="md:w-1/2 md:p-6 md:pr-0">
                <PhotoGallery
                  photos={item.gallery}
                  label={`${item.name} photos`}
                  frameClassName="aspect-[4/3] md:aspect-square md:rounded"
                  thumbsClassName="px-4 md:px-0"
                  sizes="(max-width: 768px) 100vw, 430px"
                  priority
                />
              </div>
            ) : (
              <div className="relative aspect-[4/3] bg-ivory-200 md:aspect-auto md:w-1/2">
                <Image
                  src={item.image}
                  alt={`${item.name} – ${category}, cast stone`}
                  fill
                  className="object-contain md:rounded-l [@media(max-height:500px)]:object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-8 md:w-1/2 md:p-10">
              <p className="eyebrow mb-3">
                {item.style} · {category}
              </p>

              <Dialog.Title className="font-display text-3xl leading-tight text-basalt md:text-[2.25rem]">{item.name}</Dialog.Title>

              <Dialog.Description className="mt-5 text-body text-clay">{item.description}</Dialog.Description>

              <ProductOptions isFireplace={isFireplace} headingLevel={3} className="mt-8" />

              <p className="mt-6 text-small">
                <Link href={`/collections/${slug}`} className="text-link font-medium">
                  Full page and specification<span className="sr-only"> for {item.name}</span>&nbsp;<span aria-hidden="true">→</span>
                </Link>
              </p>

              {/* CTA: pinned to the bottom of the scrolling dialog on short screens */}
              <div className="sticky bottom-0 -mx-8 mt-8 border-t border-ecru bg-ivory px-8 py-4 md:-mx-10 md:px-10">
                <Link href={`/contact?product=${encodeURIComponent(item.name)}#inquiry`} className="btn btn-primary w-full">
                  Inquire About This Piece
                </Link>
                <p className="mt-3 text-center text-caption text-clay">We typically respond within 1–2 business days.</p>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
