"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";

interface ProductModalProps {
  item: {
    name: string;
    description: string;
    style: string;
    image: string;
  };
  category: string;
  children: React.ReactNode;
}

export default function ProductModal({ item, category, children }: ProductModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 data-[state=open]:animate-fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto bg-ivory rounded-xl shadow-2xl data-[state=open]:animate-fade-in-up">
          {/* Close Button */}
          <Dialog.Close className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-clay hover:text-basalt transition-colors shadow-md">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </Dialog.Close>

          <div className="md:flex">
            {/* Image */}
            <div className="md:w-1/2 relative aspect-square md:aspect-auto">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover md:rounded-l-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 p-8 md:p-10">
              <div className="text-sm text-sienna/70 bg-sienna/10 px-3 py-1 rounded inline-block mb-4">
                {item.style}
              </div>

              <Dialog.Title className="font-display text-3xl md:text-4xl text-basalt mb-2">
                {item.name}
              </Dialog.Title>

              <div className="text-sm text-clay/60 mb-6">{category}</div>

              <Dialog.Description className="text-[16px] text-clay leading-relaxed mb-8">
                {item.description}
              </Dialog.Description>

              {/* Features */}
              <div className="border-t border-ecru pt-6 mb-8">
                <h4 className="font-medium text-basalt mb-4">Available Options</h4>
                <ul className="space-y-2 text-[15px] text-clay">
                  <li className="flex items-start gap-2">
                    <span className="text-sienna mt-1">•</span>
                    <span>Custom dimensions to fit your space</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sienna mt-1">•</span>
                    <span>6 stone colors: Cream, Buff, Gray, Charcoal, Terra, White</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sienna mt-1">•</span>
                    <span>3 texture finishes: Classic, Old World, Rustic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sienna mt-1">•</span>
                    <span>Hand-finished in Atascadero, California</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <a
                href={`/contact?product=${encodeURIComponent(item.name)}`}
                className="btn no-underline inline-block w-full text-center"
              >
                Inquire About This Piece
              </a>

              <p className="text-[13px] text-clay/60 text-center mt-4">
                We typically respond within 1-2 business days
              </p>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
