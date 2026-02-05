"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Script from "next/script";
import Image from "next/image";

// Product data with dimensions for real-world scale
const arProducts = [
  // Mantels
  { id: "heritage", name: "Heritage", category: "Fireplace Mantels", style: "Traditional", dimensions: "60\"W x 48\"H x 8\"D", image: "/images/collections/mantels/heritage.jpg", model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  { id: "provence", name: "Provence", category: "Fireplace Mantels", style: "French Country", dimensions: "72\"W x 52\"H x 10\"D", image: "/images/collections/mantels/provence.jpg", model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  { id: "pacifica", name: "Pacifica", category: "Fireplace Mantels", style: "Contemporary", dimensions: "66\"W x 42\"H x 6\"D", image: "/images/collections/mantels/pacifica.jpg", model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  { id: "cambridge", name: "Cambridge", category: "Fireplace Mantels", style: "Tudor Gothic", dimensions: "64\"W x 50\"H x 9\"D", image: "/images/collections/mantels/cambridge.jpg", model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  { id: "french-chateau", name: "French Chateau", category: "Fireplace Mantels", style: "Old World", dimensions: "78\"W x 56\"H x 12\"D", image: "/images/collections/mantels/french-chateau.jpg", model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  { id: "royal-acanthus", name: "Royal Acanthus", category: "Fireplace Mantels", style: "Classical", dimensions: "70\"W x 54\"H x 11\"D", image: "/images/collections/mantels/royal-acanthus.jpg", model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  { id: "milagro", name: "Milagro", category: "Fireplace Mantels", style: "Spanish Colonial", dimensions: "62\"W x 46\"H x 8\"D", image: "/images/collections/mantels/milagro.jpg", model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  { id: "tangled", name: "Tangled", category: "Fireplace Mantels", style: "Arts & Crafts", dimensions: "58\"W x 44\"H x 7\"D", image: "/images/collections/mantels/tangled.jpg", model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  // Architectural
  { id: "columns", name: "Columns", category: "Architectural Elements", style: "Classical Orders", dimensions: "12\"D x 96\"H", image: "/images/collections/architectural/columns.jpg", model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  { id: "corbels", name: "Corbels", category: "Architectural Elements", style: "Functional Art", dimensions: "8\"W x 12\"H x 10\"D", image: "/images/collections/architectural/corbels.jpg", model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  { id: "balustrades", name: "Balustrades", category: "Architectural Elements", style: "Garden & Entry", dimensions: "6\"W x 30\"H", image: "/images/collections/architectural/balustrades.jpg", model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  { id: "pilaster-caps", name: "Pilaster Caps", category: "Architectural Elements", style: "Classical Details", dimensions: "14\"W x 8\"H x 4\"D", image: "/images/collections/architectural/pilaster-caps.jpg", model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  // Outdoor
  { id: "outdoor-fireplaces", name: "Outdoor Fireplaces", category: "Outdoor & Garden", style: "Terrace & Patio", dimensions: "84\"W x 72\"H x 24\"D", image: "/images/collections/outdoor/outdoor-fireplaces.jpg", model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  { id: "fire-pits", name: "Fire Pits", category: "Outdoor & Garden", style: "Gathering Spaces", dimensions: "48\"D x 18\"H", image: "/images/collections/outdoor/fire-pits.jpg", model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  { id: "fountains", name: "Fountains", category: "Outdoor & Garden", style: "Water Features", dimensions: "36\"D x 60\"H", image: "/images/collections/outdoor/fountains.jpg", model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  { id: "benches", name: "Benches", category: "Outdoor & Garden", style: "Garden Seating", dimensions: "60\"W x 18\"H x 20\"D", image: "/images/collections/outdoor/benches.jpg", model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  // Functional
  { id: "kitchen-hoods", name: "Kitchen Hoods", category: "Functional Elements", style: "Culinary Spaces", dimensions: "48\"W x 36\"H x 24\"D", image: "/images/collections/functional/kitchen-hoods.jpg", model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  { id: "stair-treads", name: "Stair Treads", category: "Functional Elements", style: "Stairs & Landings", dimensions: "48\"W x 2\"H x 12\"D", image: "/images/collections/functional/treads.jpg", model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
];

const categories = ["All", "Fireplace Mantels", "Architectural Elements", "Outdoor & Garden", "Functional Elements"];

type Product = typeof arProducts[0];

export default function WebARPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [isInAR, setIsInAR] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const modelViewerRef = useRef<HTMLElement | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Filter products by category
  const filteredProducts = activeCategory === "All"
    ? arProducts
    : arProducts.filter(p => p.category === activeCategory);

  // Get products to display (favorites or filtered)
  const displayProducts = showFavorites
    ? arProducts.filter(p => favorites.includes(p.id))
    : filteredProducts;

  const currentProduct = displayProducts[currentIndex] || displayProducts[0];

  // Load favorites from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("ar-favorites");
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("ar-favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigateProduct(-1);
      if (e.key === "ArrowRight") navigateProduct(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  // Setup model-viewer event listeners
  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;

    const handleARStatus = (event: Event) => {
      const detail = (event as CustomEvent).detail;
      setIsInAR(detail.status === "session-started");
    };

    const handleLoad = () => setIsLoading(false);
    const handleLoadStart = () => setIsLoading(true);

    modelViewer.addEventListener("ar-status", handleARStatus);
    modelViewer.addEventListener("load", handleLoad);
    modelViewer.addEventListener("model-visibility", handleLoadStart);

    // Prevent slider interactions from affecting AR scene
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("beforexrselect", (e) => e.preventDefault());
    }

    return () => {
      modelViewer.removeEventListener("ar-status", handleARStatus);
      modelViewer.removeEventListener("load", handleLoad);
      modelViewer.removeEventListener("model-visibility", handleLoadStart);
    };
  }, []);

  const navigateProduct = useCallback((direction: number) => {
    setCurrentIndex((prev) => {
      const newIndex = prev + direction;
      if (newIndex < 0) return displayProducts.length - 1;
      if (newIndex >= displayProducts.length) return 0;
      return newIndex;
    });
  }, [displayProducts.length]);

  const selectProduct = (index: number) => {
    setCurrentIndex(index);
    // Scroll thumbnail into view
    const thumbnail = document.getElementById(`thumb-${index}`);
    thumbnail?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const toggleFavorite = (productId: string) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const isFavorite = (productId: string) => favorites.includes(productId);

  // Touch swipe handling
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      navigateProduct(diff > 0 ? 1 : -1);
    }
  };

  return (
    <>
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
        strategy="afterInteractive"
      />

      <div className="bg-ivory min-h-screen">
        {/* Compact Hero */}
        <section className="py-12 bg-gradient-to-b from-[#f5efe4] to-ivory">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-sienna/10 text-sienna px-4 py-2 rounded-full text-sm mb-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h2v2H7V7zm8 0h2v2h-2V7zm-8 8h2v2H7v-2zm8 0h2v2h-2v-2z"/>
              </svg>
              Augmented Reality
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-clay mb-4">Preview in Your Space</h1>
            <p className="text-lg text-clay/70 max-w-xl mx-auto">
              Browse products, switch between them in AR, and save your favorites for comparison.
            </p>
          </div>
        </section>

        {/* Main AR Experience */}
        <section className="bg-white border-y border-[#e8dfcf]">
          <div className="mx-auto max-w-6xl">
            {/* Category Filter Bar */}
            <div className="flex items-center gap-2 px-4 py-3 overflow-x-auto border-b border-[#e8dfcf] bg-[#faf8f5]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setCurrentIndex(0); setShowFavorites(false); }}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                    activeCategory === cat && !showFavorites
                      ? "bg-clay text-ivory"
                      : "bg-white text-clay border border-[#e8dfcf] hover:border-sienna/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
              <div className="w-px h-6 bg-[#e8dfcf] mx-2" />
              <button
                onClick={() => { setShowFavorites(!showFavorites); setCurrentIndex(0); }}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
                  showFavorites
                    ? "bg-sienna text-ivory"
                    : "bg-white text-clay border border-[#e8dfcf] hover:border-sienna/50"
                }`}
              >
                <svg className="w-4 h-4" fill={showFavorites ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Saved ({favorites.length})
              </button>
            </div>

            {displayProducts.length === 0 ? (
              <div className="py-20 text-center">
                <svg className="w-16 h-16 mx-auto text-clay/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <h3 className="font-display text-2xl text-clay mb-2">No Saved Products</h3>
                <p className="text-clay/60">Click the heart icon on products to save them for comparison.</p>
              </div>
            ) : (
              <div className="grid lg:grid-cols-[1fr,320px]">
                {/* 3D Viewer Panel */}
                <div
                  className="relative bg-gradient-to-br from-[#f5efe4] to-[#ebe4d8]"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Loading Overlay */}
                  {isLoading && (
                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10">
                      <div className="text-center">
                        <div className="w-12 h-12 border-4 border-sienna/20 border-t-sienna rounded-full animate-spin mb-3" />
                        <p className="text-clay/70 text-sm">Loading 3D model...</p>
                      </div>
                    </div>
                  )}

                  {/* Model Viewer */}
                  {/* @ts-expect-error - model-viewer is a web component */}
                  <model-viewer
                    ref={modelViewerRef}
                    id="ar-viewer"
                    src={currentProduct?.model}
                    alt={`3D model of ${currentProduct?.name}`}
                    ar
                    ar-modes="webxr scene-viewer quick-look"
                    ar-scale="fixed"
                    camera-controls
                    touch-action="pan-y"
                    shadow-intensity="1"
                    shadow-softness="1"
                    exposure="1"
                    auto-rotate
                    auto-rotate-delay="3000"
                    interaction-prompt="none"
                    style={{ width: "100%", height: "65vh", minHeight: "400px" }}
                  >
                    {/* Progress Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-clay/10" slot="progress-bar">
                      <div className="h-full bg-sienna transition-all duration-300" style={{ width: isLoading ? "60%" : "100%" }} />
                    </div>

                    {/* Custom AR Button */}
                    <button
                      slot="ar-button"
                      className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-clay text-ivory px-6 py-3 rounded-xl font-medium flex items-center gap-3 hover:bg-sienna transition-colors shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h2v2H7V7zm8 0h2v2h-2V7zm-8 8h2v2H7v-2zm8 0h2v2h-2v-2z"/>
                      </svg>
                      View in Your Space
                    </button>

                    {/* DOM Overlay - Product Carousel (visible in AR via WebXR) */}
                    <div
                      ref={sliderRef}
                      slot="poster"
                      className={`absolute bottom-0 left-0 right-0 transition-opacity duration-300 ${isInAR ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                      <div className="bg-gradient-to-t from-black/60 to-transparent p-4 pt-8">
                        <div className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory">
                          {displayProducts.map((product, idx) => (
                            <button
                              key={product.id}
                              onClick={() => selectProduct(idx)}
                              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all snap-center ${
                                idx === currentIndex ? 'border-white scale-110' : 'border-transparent opacity-70'
                              }`}
                            >
                              <Image src={product.image} alt={product.name} width={64} height={64} className="object-cover w-full h-full" />
                            </button>
                          ))}
                        </div>
                        <p className="text-white text-center text-sm mt-2">Swipe to change product</p>
                      </div>
                    </div>
                  {/* @ts-expect-error - model-viewer is a web component */}
                  </model-viewer>

                  {/* Navigation Arrows (visible outside AR) */}
                  {!isInAR && displayProducts.length > 1 && (
                    <>
                      <button
                        onClick={() => navigateProduct(-1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-clay hover:bg-white transition-colors"
                        aria-label="Previous product"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => navigateProduct(1)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-clay hover:bg-white transition-colors"
                        aria-label="Next product"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* Product Counter */}
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1.5 rounded-full text-sm text-clay shadow">
                    {currentIndex + 1} / {displayProducts.length}
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(currentProduct.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center transition-colors hover:bg-white"
                    aria-label={isFavorite(currentProduct.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <svg
                      className={`w-5 h-5 transition-colors ${isFavorite(currentProduct.id) ? 'text-red-500 fill-current' : 'text-clay'}`}
                      fill={isFavorite(currentProduct.id) ? "currentColor" : "none"}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>

                  {/* QR Code Button (Desktop) */}
                  <button
                    onClick={() => setShowQR(true)}
                    className="hidden md:flex absolute bottom-4 right-4 bg-white/90 px-4 py-2 rounded-lg shadow-lg items-center gap-2 text-sm text-clay hover:bg-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h2M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                    Open on Mobile
                  </button>
                </div>

                {/* Product Info Sidebar */}
                <div className="border-l border-[#e8dfcf] bg-[#faf8f5] p-6 flex flex-col">
                  {/* Current Product Info */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs text-sienna bg-sienna/10 px-2 py-1 rounded">{currentProduct?.category}</span>
                    </div>
                    <h2 className="font-display text-3xl text-clay mb-1">{currentProduct?.name}</h2>
                    <p className="text-clay/70 text-sm mb-3">{currentProduct?.style}</p>
                    <div className="flex items-center gap-2 text-sm text-clay/60">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      {currentProduct?.dimensions}
                    </div>
                  </div>

                  {/* Thumbnail Carousel */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-clay mb-3">Browse Products</h3>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {displayProducts.map((product, idx) => (
                        <button
                          key={product.id}
                          id={`thumb-${idx}`}
                          onClick={() => selectProduct(idx)}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                            idx === currentIndex
                              ? 'border-sienna ring-2 ring-sienna/20'
                              : 'border-[#e8dfcf] hover:border-sienna/50'
                          }`}
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-3 mt-auto">
                    <button
                      onClick={() => toggleFavorite(currentProduct.id)}
                      className={`w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                        isFavorite(currentProduct.id)
                          ? 'bg-red-50 text-red-600 border border-red-200'
                          : 'bg-white text-clay border border-[#e8dfcf] hover:border-sienna/50'
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill={isFavorite(currentProduct.id) ? "currentColor" : "none"}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {isFavorite(currentProduct.id) ? 'Saved' : 'Save for Later'}
                    </button>

                    <a
                      href={`/contact?product=${currentProduct?.id}`}
                      className="w-full py-3 bg-sienna text-ivory rounded-lg font-medium hover:bg-sienna/90 transition-colors flex items-center justify-center gap-2 no-underline"
                    >
                      Request Quote
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>

                  {/* Keyboard Hint */}
                  <p className="text-xs text-clay/40 text-center mt-4 hidden lg:block">
                    Use ← → arrow keys to navigate
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-12 bg-[#f5efe4]">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="font-display text-2xl text-clay mb-8 text-center">Tips for Best Results</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", title: "Good Lighting", desc: "AR works best in well-lit spaces" },
                { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", title: "Clear Floor", desc: "Ensure floor area is visible to camera" },
                { icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4", title: "Move Around", desc: "Walk around to see all angles" },
                { icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", title: "Mobile Device", desc: "Use phone or tablet for AR" },
              ].map((tip, i) => (
                <div key={i} className="bg-white rounded-lg p-5 border border-[#e8dfcf] text-center">
                  <svg className="w-8 h-8 mx-auto mb-3 text-sienna" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tip.icon} />
                  </svg>
                  <h3 className="font-medium text-clay mb-1">{tip.title}</h3>
                  <p className="text-sm text-clay/60">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Device Compatibility */}
        <section className="py-12 bg-ivory">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-2xl text-clay mb-4">Device Compatibility</h2>
            <p className="text-clay/70 mb-6">
              AR requires a compatible smartphone or tablet with camera access.
            </p>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-clay/5 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-clay" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <p className="text-sm text-clay">iOS 12+</p>
                <p className="text-xs text-clay/50">iPhone, iPad</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-clay/5 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-clay" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.523 2.047a.5.5 0 00-.27.073l-1.689.986a1.24 1.24 0 01-1.154.065l-1.64-.746a.5.5 0 00-.54.058l-1.408 1.154a1.24 1.24 0 01-1.097.222L8.14 3.38a.5.5 0 00-.484.171l-.97 1.37a1.24 1.24 0 01-.954.498l-1.713.13a.5.5 0 00-.386.331l-.475 1.658a1.24 1.24 0 01-.692.775l-1.553.693a.5.5 0 00-.233.455l.112 1.765a1.24 1.24 0 01-.337 1.04L.127 13.43a.5.5 0 00-.058.54l.746 1.64a1.24 1.24 0 01-.065 1.155l-.986 1.688a.5.5 0 00.114.61l1.28 1.143a1.24 1.24 0 01.385 1.1l-.242 1.698a.5.5 0 00.268.512l1.534.846a1.24 1.24 0 01.59.946l.242 1.716a.5.5 0 00.405.412l1.708.296a1.24 1.24 0 01.885.65l.775 1.545a.5.5 0 00.5.262l1.73-.178a1.24 1.24 0 011.072.3l1.208 1.268a.5.5 0 00.556.114l1.574-.67a1.24 1.24 0 011.131.09l1.45 1.07a.5.5 0 00.567-.022l1.336-1.02a1.24 1.24 0 011.12-.167l1.613.564a.5.5 0 00.536-.154l.957-1.21a1.24 1.24 0 01.97-.46l1.706-.062a.5.5 0 00.456-.332l.516-1.503a1.24 1.24 0 01.73-.75l1.585-.59a.5.5 0 00.302-.484l-.066-1.707a1.24 1.24 0 01.4-1.015l1.272-1.14a.5.5 0 00.091-.612l-.824-1.474a1.24 1.24 0 01-.016-1.157l.884-1.656a.5.5 0 00-.132-.595l-1.345-1.13a1.24 1.24 0 01-.453-1.04l.118-1.714a.5.5 0 00-.3-.488l-1.56-.703a1.24 1.24 0 01-.675-.867l-.359-1.68a.5.5 0 00-.433-.386l-1.716-.163a1.24 1.24 0 01-.967-.572l-.88-1.474a.5.5 0 00-.52-.224l-1.67.38a1.24 1.24 0 01-1.105-.27l-1.17-1.166a.5.5 0 00-.301-.147zM12 6a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8z"/>
                  </svg>
                </div>
                <p className="text-sm text-clay">Android 8+</p>
                <p className="text-xs text-clay/50">Chrome browser</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#f5efe4]">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-3xl text-clay mb-4">Found Something You Love?</h2>
            <p className="text-lg text-clay/70 mb-8 max-w-xl mx-auto">
              Let&apos;s discuss dimensions, finishes, and customizations to make it perfect for your space.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-clay text-ivory rounded-lg hover:bg-sienna transition-all font-medium no-underline"
            >
              Start a Conversation
            </a>
          </div>
        </section>
      </div>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowQR(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center" onClick={e => e.stopPropagation()}>
            <h3 className="font-display text-2xl text-clay mb-4">Open on Mobile</h3>
            <div className="bg-[#f5efe4] rounded-lg p-6 mb-4">
              {/* QR Code Placeholder - In production, use a QR library */}
              <div className="w-48 h-48 mx-auto bg-white rounded-lg flex items-center justify-center border-2 border-dashed border-clay/20">
                <div className="text-center text-clay/50">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h2M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                  <p className="text-sm">QR Code</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-clay/70 mb-4">
              Scan with your phone&apos;s camera to open this AR experience on mobile.
            </p>
            <button
              onClick={() => setShowQR(false)}
              className="w-full py-3 bg-clay text-ivory rounded-lg font-medium hover:bg-sienna transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
