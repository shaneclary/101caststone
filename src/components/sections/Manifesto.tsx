'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up')
          }
        })
      },
      { threshold: 0.2 }
    )

    const elements = sectionRef.current?.querySelectorAll('.fade-in-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="section-padding bg-warm-white"
      aria-label="Our manifesto"
    >
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="fade-in-on-scroll opacity-0">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-luxury group">
              {/* Placeholder image - replace with actual craftsman image */}
              <div className="w-full h-full bg-gradient-to-br from-aged-bronze to-slate-gray flex items-center justify-center">
                <div className="text-center text-warm-white p-8">
                  <div className="text-6xl mb-4">🏛️</div>
                  <p className="font-cormorant text-2xl">
                    Master Craftsman
                    <br />
                    at Work
                  </p>
                  <p className="font-inter text-sm mt-4 opacity-80">
                    Replace with actual photography
                  </p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Caption */}
            <p className="mt-4 text-center font-italiana italic text-slate-gray text-sm">
              Hand-carving acanthus leaf details, preserving 2,500 years of tradition
            </p>
          </div>

          {/* Content Column */}
          <div className="fade-in-on-scroll opacity-0 space-y-6">
            {/* Ornamental Divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent to-tuscan-terracotta flex-1" />
              <span className="text-tuscan-terracotta text-2xl">❖</span>
              <div className="h-px bg-gradient-to-l from-transparent to-tuscan-terracotta flex-1" />
            </div>

            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
              Where Heritage Meets Precision
            </h2>

            <div className="space-y-4">
              <p className="font-inter text-lg leading-relaxed text-slate-gray">
                Every column, every cornice tells a story—where Italian tradition
                meets California craftsmanship. For 19 years, we&apos;ve honored the
                old-world masters while embracing modern precision.
              </p>

              <p className="font-inter text-lg leading-relaxed text-slate-gray">
                Our cast stone architectural elements don&apos;t just decorate spaces;
                they transform them into timeless works of art. Each piece is a
                dialogue between ancient Rome&apos;s grandeur and contemporary innovation.
              </p>

              <p className="font-inter text-lg leading-relaxed text-slate-gray">
                We believe that true luxury whispers. It doesn&apos;t shout. Our
                products speak through the language of proportion, the poetry of
                texture, and the elegance of restraint.
              </p>
            </div>

            {/* Key Values */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="space-y-2">
                <div className="text-3xl text-tuscan-terracotta">🎨</div>
                <h3 className="font-cormorant text-xl font-semibold text-charcoal">
                  Artisan Craftsmanship
                </h3>
                <p className="font-inter text-sm text-slate-gray">
                  Hand-finished details that machines cannot replicate
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-3xl text-aged-bronze">⚙️</div>
                <h3 className="font-cormorant text-xl font-semibold text-charcoal">
                  Engineering Excellence
                </h3>
                <p className="font-inter text-sm text-slate-gray">
                  Load-bearing, weather-resistant, built to last centuries
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-3xl text-olive-green">🌿</div>
                <h3 className="font-cormorant text-xl font-semibold text-charcoal">
                  Sustainable Materials
                </h3>
                <p className="font-inter text-sm text-slate-gray">
                  Eco-friendly cast stone with minimal environmental impact
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-3xl text-deep-navy">✨</div>
                <h3 className="font-cormorant text-xl font-semibold text-charcoal">
                  Timeless Design
                </h3>
                <p className="font-inter text-sm text-slate-gray">
                  Classical proportions that never go out of style
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
