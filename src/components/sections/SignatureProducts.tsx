'use client'

import { useRef } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { formatCurrency } from '@/lib/utils'

interface Product {
  id: string
  name: string
  category: string
  description: string
  basePrice: number
  image: string
}

const signatureProducts: Product[] = [
  {
    id: 'corinthian-capital',
    name: 'Corinthian Capital',
    category: 'Column Capitals',
    description: 'Hand-carved acanthus leaf details inspired by the Temple of Olympian Zeus',
    basePrice: 2850,
    image: '🏛️',
  },
  {
    id: 'tuscan-column',
    name: 'Tuscan Column',
    category: 'Columns',
    description: 'Simple elegance with refined proportions, perfect for Mediterranean estates',
    basePrice: 4200,
    image: '🏛️',
  },
  {
    id: 'dentil-cornice',
    name: 'Dentil Cornice',
    category: 'Cornices',
    description: 'Classical tooth-like blocks creating sophisticated shadow lines',
    basePrice: 1680,
    image: '🏛️',
  },
  {
    id: 'egg-dart-molding',
    name: 'Egg & Dart Molding',
    category: 'Decorative Moldings',
    description: 'Alternating oval and pointed forms, a Roman architectural staple',
    basePrice: 890,
    image: '🏛️',
  },
  {
    id: 'ionic-capital',
    name: 'Ionic Capital',
    category: 'Column Capitals',
    description: 'Signature scroll volutes with delicate egg-and-dart detailing',
    basePrice: 2650,
    image: '🏛️',
  },
  {
    id: 'balustrade-system',
    name: 'Balustrade System',
    category: 'Railings',
    description: 'Complete railing system with hand-turned balusters and newel posts',
    basePrice: 5400,
    image: '🏛️',
  },
]

export default function SignatureProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollPosition =
        direction === 'left'
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="signature-products"
      className="section-padding bg-travertine-cream"
      aria-label="Signature products"
    >
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent to-tuscan-terracotta w-24" />
            <span className="text-tuscan-terracotta text-2xl">❖</span>
            <div className="h-px bg-gradient-to-l from-transparent to-tuscan-terracotta w-24" />
          </div>

          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Signature Collection
          </h2>

          <p className="font-inter text-lg text-slate-gray max-w-2xl mx-auto">
            Timeless architectural elements crafted with Italian artistry and
            California precision. Each piece tells a story of heritage and innovation.
          </p>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 items-center justify-center rounded-full bg-warm-white shadow-luxury hover:shadow-luxury-lg transition-all hover:scale-110"
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6 text-charcoal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 items-center justify-center rounded-full bg-warm-white shadow-luxury hover:shadow-luxury-lg transition-all hover:scale-110"
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6 text-charcoal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Products Grid/Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {signatureProducts.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
              >
                <Card className="h-full flex flex-col hover:scale-[1.02] transition-transform duration-300">
                  {/* Product Image Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-slate-gray to-aged-bronze flex items-center justify-center">
                    <div className="text-8xl">{product.image}</div>
                  </div>

                  <CardHeader>
                    <div className="text-xs font-inter uppercase tracking-wider text-tuscan-terracotta mb-2">
                      {product.category}
                    </div>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription className="mt-2">
                      {product.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-slate-gray">From</span>
                      <span className="font-cormorant text-3xl font-semibold text-charcoal">
                        {formatCurrency(product.basePrice)}
                      </span>
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-3">
                    <Button variant="primary" size="md" className="flex-1">
                      View Details
                    </Button>
                    <Button variant="outline" size="md" className="flex-1">
                      Configure
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="secondary" size="lg">
            View Complete Collection
          </Button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
