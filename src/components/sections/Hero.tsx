'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { smoothScrollTo } from '@/lib/utils'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Animate hero content on mount
    const heroContent = heroRef.current?.querySelector('.hero-content')
    if (heroContent) {
      heroContent.classList.add('animate-fade-in')
    }
  }, [])

  const scrollToProducts = () => {
    smoothScrollTo('signature-products', 80)
  }

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-travertine-cream via-warm-white to-travertine-cream"
      aria-label="Hero section"
    >
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232C2C2C' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-warm-white/50 to-warm-white" />

      {/* Hero Content */}
      <div className="hero-content relative z-10 container-luxury text-center opacity-0 transition-opacity duration-1200">
        {/* Ornamental Top */}
        <div className="mb-8 flex justify-center">
          <div className="text-tuscan-terracotta text-4xl">❖</div>
        </div>

        {/* Main Headline */}
        <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal mb-6 leading-tight">
          Architecture is <span className="text-gradient">Frozen Music</span>
          <br />
          <span className="block mt-4 text-4xl md:text-6xl lg:text-7xl font-light">
            We Sculpt the Notes
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-italiana text-xl md:text-2xl lg:text-3xl text-slate-gray italic mb-12 max-w-3xl mx-auto">
          Where Italian Renaissance craftsmanship meets
          <br className="hidden md:block" />
          California precision engineering
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary"
            size="xl"
            onClick={scrollToProducts}
            aria-label="Explore our signature collection"
          >
            Explore Collection
          </Button>
          <Button
            variant="outline"
            size="xl"
            onClick={() => smoothScrollTo('manifesto', 80)}
            aria-label="Learn about our craftsmanship"
          >
            Our Story
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-gray">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            <span className="font-inter font-medium">19 Years Excellence</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span className="font-inter font-medium">500+ Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇺🇸</span>
            <span className="font-inter font-medium">Made in California</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToProducts}
          className="flex flex-col items-center gap-2 text-slate-gray hover:text-tuscan-terracotta transition-colors"
          aria-label="Scroll down to explore"
        >
          <span className="text-xs uppercase tracking-wider font-inter">Scroll to Explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}
