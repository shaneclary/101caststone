"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import PhotoGallery from "@/components/PhotoGallery";
import { collections, type Product } from "@/data/products";

interface ProductModalProps {
  item: Product;
  category: string;
  children: React.ReactNode;
  // Optional controlled mode (e.g. to sync with the URL hash); uncontrolled when omitted
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function ProductModal({ item, category, children, open, onOpenChange }: ProductModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 data-[state=open]:animate-fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[95vw] max-w-4xl max-h-[90vh] supports-[height:100dvh]:max-h-[90dvh] overflow-y-auto bg-ivory rounded-xl shadow-2xl data-[state=open]:animate-fade-in-up">
          {/* Close Button: sticky so it stays reachable while the dialog scrolls; -mb-14 = mt-4 + h-10 */}
          <Dialog.Close aria-label="Close" className="sticky top-4 float-right mr-4 mt-4 -mb-14 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-clay hover:text-basalt transition-colors shadow-md">
            <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                  frameClassName="aspect-[4/3] md:aspect-square md:rounded-lg"
                  thumbsClassName="px-4 md:px-0"
                  sizes="(max-width: 768px) 100vw, 430px"
                  priority
                />
              </div>
            ) : (
              <div className="relative aspect-[4/3] md:aspect-auto md:w-1/2 bg-ivory-200">
                <Image
                  src={item.image}
                  alt={`${item.name} – ${category}, cast stone`}
                  fill
                  className="object-contain md:rounded-l-xl [@media(max-height:500px)]:object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}

            {/* Content */}
            <div className="md:w-1/2 p-8 md:p-10">
              {/* /[0.08] not /10: on the ivory dialog a 10% tint leaves sienna-700 text at 4.499:1 */}
              <div className="text-sm text-sienna-700 bg-sienna/[0.08] px-3 py-1 rounded inline-block mb-4">
                {item.style}
              </div>

              <Dialog.Title className="font-display text-3xl md:text-4xl text-basalt mb-2">
                {item.name}
              </Dialog.Title>

              <div className="text-sm text-clay mb-6">{category}</div>

              <Dialog.Description className="text-[16px] text-clay leading-relaxed mb-8">
                {item.description}
              </Dialog.Description>

              {/* Features */}
              <div className="border-t border-ecru pt-6 mb-8">
                <h3 className="font-sans text-[18px] leading-[1.85] font-medium text-basalt mb-4">Available Options</h3>
                <ul className="space-y-2 text-[15px] text-clay">
                  {/* Wording from the live site's products, colors and FAQ pages */}
                  {[
                    "Standard and custom styles and dimensions",
                    "Seven standard colors and three texture finishes: Classic, Old World, Rustic",
                    "Custom colors and finishes on request",
                    ...(category === collections.mantels.title
                      ? [
                          "Non-combustible: can be used directly next to the firebox opening",
                          "Quoted with installation by our team",
                        ]
                      : []),
                    "Packed by hand and cast in Atascadero, California",
                  ].map((option) => (
                    <li key={option} className="flex items-start gap-2">
                      <span aria-hidden="true" className="text-sienna-700 mt-1">•</span>
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA: pinned to the bottom of the scrolling dialog on phones */}
              <div className="sticky bottom-0 -mx-8 px-8 py-4 bg-ivory border-t border-ecru md:static md:mx-0 md:px-0 md:py-0 md:border-0">
                <Link
                  href={`/contact?product=${encodeURIComponent(item.name)}`}
                  className="block w-full text-center px-8 py-4 rounded-lg bg-sienna-700 text-ivory-50 font-medium no-underline hover:shadow-lg transition-all duration-500"
                >
                  Inquire About This Piece
                </Link>
              </div>

              <p className="text-[13px] text-clay text-center mt-4">
                We typically respond within 1–2 business days.
              </p>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
