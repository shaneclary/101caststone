"use client";

import { useState } from "react";
import Script from "next/script";
import Image from "next/image";

// Product categories with items available for AR preview
const arCategories = {
  mantels: {
    title: "Fireplace Mantels",
    description: "Place our hand-carved limestone mantels in your space to see how they'll anchor your room.",
    items: [
      { name: "Heritage", style: "Traditional", image: "/images/collections/mantels/heritage.jpg" },
      { name: "Provence", style: "French Country", image: "/images/collections/mantels/provence.jpg" },
      { name: "Pacifica", style: "Contemporary", image: "/images/collections/mantels/pacifica.jpg" },
      { name: "Cambridge", style: "Tudor Gothic", image: "/images/collections/mantels/cambridge.jpg" },
      { name: "French Chateau", style: "Old World", image: "/images/collections/mantels/french-chateau.jpg" },
      { name: "Royal Acanthus", style: "Classical", image: "/images/collections/mantels/royal-acanthus.jpg" },
      { name: "Milagro", style: "Spanish Colonial", image: "/images/collections/mantels/milagro.jpg" },
      { name: "Tangled", style: "Arts & Crafts", image: "/images/collections/mantels/tangled.jpg" },
    ]
  },
  architectural: {
    title: "Architectural Elements",
    description: "Visualize columns, corbels, and capitals in your architecture before commissioning.",
    items: [
      { name: "Columns", style: "Classical Orders", image: "/images/collections/architectural/columns.jpg" },
      { name: "Corbels", style: "Functional Art", image: "/images/collections/architectural/corbels.jpg" },
      { name: "Balustrades", style: "Garden & Entry", image: "/images/collections/architectural/balustrades.jpg" },
      { name: "Pilaster Caps", style: "Classical Details", image: "/images/collections/architectural/pilaster-caps.jpg" },
      { name: "Crown Molding", style: "Interior & Exterior", image: "/images/collections/architectural/crown-molding.jpg" },
      { name: "Door & Window Trims", style: "Entry & Fenestration", image: "/images/collections/architectural/door-trims.jpg" },
    ]
  },
  outdoor: {
    title: "Outdoor & Garden",
    description: "Preview outdoor fireplaces, fountains, and garden elements in your landscape.",
    items: [
      { name: "Outdoor Fireplaces", style: "Terrace & Patio", image: "/images/collections/outdoor/outdoor-fireplaces.jpg" },
      { name: "Fire Pits", style: "Gathering Spaces", image: "/images/collections/outdoor/fire-pits.jpg" },
      { name: "Fountains", style: "Water Features", image: "/images/collections/outdoor/fountains.jpg" },
      { name: "Benches", style: "Garden Seating", image: "/images/collections/outdoor/benches.jpg" },
    ]
  },
  functional: {
    title: "Functional Elements",
    description: "See kitchen hoods, stair treads, and architectural details in your home.",
    items: [
      { name: "Kitchen Hoods", style: "Culinary Spaces", image: "/images/collections/functional/kitchen-hoods.jpg" },
      { name: "Stair Treads", style: "Stairs & Landings", image: "/images/collections/functional/treads.jpg" },
      { name: "Window Sills", style: "Fenestration", image: "/images/collections/functional/sills.jpg" },
      { name: "Wall Caps", style: "Wall Termination", image: "/images/collections/functional/wall-caps.jpg" },
    ]
  }
};

type CategoryKey = keyof typeof arCategories;

interface SelectedProduct {
  name: string;
  style: string;
  image: string;
  category: string;
}

export default function WebARPage() {
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("mantels");

  return (
    <>
      {/* Load Google Model Viewer */}
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"
        strategy="afterInteractive"
      />

      <div className="bg-ivory min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-[#f5efe4] to-ivory">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-sienna/10 text-sienna px-4 py-2 rounded-full text-sm mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Augmented Reality Experience
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-clay mb-6">Web AR Preview</h1>
            <p className="text-xl text-clay/80 max-w-2xl mx-auto leading-relaxed">
              Place our cast stone pieces in your own space using augmented reality.
              Walk around, see the scale, verify the fit—all from your phone.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-[#f5efe4]">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="font-display text-3xl text-clay mb-10 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-sienna/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-display text-sienna">1</span>
                </div>
                <h3 className="font-medium text-clay mb-2">Select a Product</h3>
                <p className="text-sm text-clay/70">Choose from our collection of mantels, columns, fountains, and more.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-sienna/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-display text-sienna">2</span>
                </div>
                <h3 className="font-medium text-clay mb-2">View in 3D</h3>
                <p className="text-sm text-clay/70">Rotate, zoom, and examine every detail of the cast stone piece.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-sienna/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-display text-sienna">3</span>
                </div>
                <h3 className="font-medium text-clay mb-2">Place in Your Space</h3>
                <p className="text-sm text-clay/70">Tap &quot;View in Your Space&quot; to see it in your room through AR.</p>
              </div>
            </div>
          </div>
        </section>

        {/* AR Viewer Section */}
        {selectedProduct && (
          <section className="py-12 bg-white border-y border-[#e8dfcf]">
            <div className="mx-auto max-w-4xl px-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-display text-3xl text-clay">{selectedProduct.name}</h2>
                  <p className="text-clay/70">{selectedProduct.category} &middot; {selectedProduct.style}</p>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-clay/60 hover:text-clay transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* 3D Model Viewer */}
              <div className="bg-[#f5efe4] rounded-lg overflow-hidden">
                {/* @ts-expect-error - model-viewer is a web component */}
                <model-viewer
                  src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
                  ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
                  alt={`A 3D model of the ${selectedProduct.name} cast stone piece`}
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  camera-controls
                  shadow-intensity="1"
                  ar-scale="fixed"
                  auto-rotate
                  style={{ width: "100%", height: "60vh", backgroundColor: "#f5efe4" }}
                >
                  <button
                    slot="ar-button"
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-clay text-ivory px-6 py-3 rounded-lg font-medium flex items-center gap-3 hover:bg-sienna transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h2v2H7V7zm8 0h2v2h-2V7zm-8 8h2v2H7v-2zm8 0h2v2h-2v-2z"/>
                    </svg>
                    View in Your Space
                  </button>
                {/* @ts-expect-error - model-viewer is a web component */}
                </model-viewer>
              </div>

              <div className="mt-6 text-center">
                <p className="text-clay/70 text-sm mb-4">
                  Use your phone to place this piece in your living room, garden, or kitchen.
                  Walk around it to see the depth, texture, and verify the fit.
                </p>
                <p className="text-clay/50 text-xs">
                  <strong>On Desktop?</strong> Visit this page on your mobile device to enable AR viewing.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Category Tabs */}
        <section className="py-12 bg-ivory">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-3xl text-clay mb-8 text-center">
              {selectedProduct ? "Select Another Product" : "Select a Product to Preview"}
            </h2>

            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {Object.entries(arCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key as CategoryKey)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCategory === key
                      ? "bg-sienna text-ivory"
                      : "bg-white text-clay border border-[#e8dfcf] hover:border-sienna/50"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* Category Description */}
            <p className="text-center text-clay/70 mb-10 max-w-2xl mx-auto">
              {arCategories[activeCategory].description}
            </p>

            {/* Product Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {arCategories[activeCategory].items.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setSelectedProduct({ ...item, category: arCategories[activeCategory].title })}
                  className={`group relative overflow-hidden rounded-lg bg-white border transition-all duration-300 text-left ${
                    selectedProduct?.name === item.name
                      ? "border-sienna shadow-lg ring-2 ring-sienna/20"
                      : "border-[#e8dfcf] hover:shadow-xl hover:border-sienna/30"
                  }`}
                >
                  {/* Product Image */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-clay/5 to-sienna/5">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* AR Badge */}
                    <div className="absolute top-3 right-3 bg-clay/80 text-ivory px-2 py-1 rounded text-xs flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h2v2H7V7zm8 0h2v2h-2V7zm-8 8h2v2H7v-2zm8 0h2v2h-2v-2z"/>
                      </svg>
                      AR
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-display text-lg text-clay">{item.name}</h3>
                    </div>
                    <span className="text-xs text-sienna/70">{item.style}</span>
                    <div className="mt-3 text-sienna text-sm font-medium group-hover:text-sienna/70 transition-colors flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Preview in AR
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Notice */}
        <section className="py-12 bg-[#f5efe4]">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="bg-white rounded-lg p-8 border border-[#e8dfcf]">
              <svg className="w-12 h-12 mx-auto mb-4 text-sienna" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h3 className="font-display text-2xl text-clay mb-3">Best on Mobile</h3>
              <p className="text-clay/70 mb-4">
                AR viewing requires a smartphone or tablet with camera access.
                For the best experience, visit this page on your mobile device.
              </p>
              <p className="text-sm text-clay/50">
                Works with iOS Safari (iPhone/iPad) and Android Chrome devices manufactured after 2018.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-ivory">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-4xl text-clay mb-6">Ready to Begin?</h2>
            <p className="text-lg text-clay/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Once you&apos;ve visualized your piece, let&apos;s discuss dimensions, finishes, and making it uniquely yours.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-sienna text-ivory rounded-lg hover:bg-sienna/90 transition-all duration-500 font-medium no-underline"
            >
              Start a Conversation
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
