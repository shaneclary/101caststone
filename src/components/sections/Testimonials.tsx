'use client'

import { useState, useEffect } from 'react'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Michael Chen',
    role: 'Principal Architect',
    company: 'Chen Architecture Studio',
    quote: 'Working with 101 Cast Stone elevated our Rancho Santa Fe project to museum quality. The attention to classical proportions and hand-finished details is unmatched in the industry.',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Sarah Williams',
    role: 'Interior Designer',
    company: 'Williams Design Group',
    quote: 'Their cast stone columns transformed our client\'s entryway into a breathtaking statement. The level of craftsmanship rivals anything I\'ve seen in European estates.',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Robert Anderson',
    role: 'Homeowner',
    company: 'Beverly Hills Residence',
    quote: 'We wanted timeless elegance, and 101 Cast Stone delivered beyond expectations. Five years later, the pieces look as pristine as installation day. True investment-grade quality.',
    rating: 5,
  },
  {
    id: 'testimonial-4',
    name: 'Maria Rodriguez',
    role: 'Project Manager',
    company: 'Luxury Developments Inc.',
    quote: 'Professional, punctual, and meticulous. Their team worked seamlessly with our contractors, and the final installation was flawless. Our client was absolutely thrilled.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 8000) // Auto-rotate every 8 seconds

    return () => clearInterval(interval)
  }, [])

  const goToTestimonial = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section
      id="testimonials"
      className="section-padding bg-travertine-cream"
      aria-label="Client testimonials"
    >
      <div className="container-luxury max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent to-olive-green w-24" />
            <span className="text-olive-green text-2xl">❖</span>
            <div className="h-px bg-gradient-to-l from-transparent to-olive-green w-24" />
          </div>

          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Trusted by the Best
          </h2>

          <p className="font-inter text-lg text-slate-gray">
            What architects, designers, and homeowners say about our work
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-tuscan-terracotta/20 text-9xl font-cormorant leading-none pointer-events-none">
            &ldquo;
          </div>

          {/* Active Testimonial */}
          <div className="relative bg-warm-white rounded-2xl shadow-luxury p-8 md:p-12 min-h-[320px] flex flex-col justify-center">
            <div className="text-center">
              {/* Rating Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-tuscan-terracotta fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-italiana text-xl md:text-2xl italic text-charcoal leading-relaxed mb-8">
                {testimonials[activeIndex].quote}
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-slate-gray/20 pt-6">
                <div className="font-cormorant text-2xl font-semibold text-charcoal mb-1">
                  {testimonials[activeIndex].name}
                </div>
                <div className="font-inter text-sm text-slate-gray">
                  {testimonials[activeIndex].role}
                </div>
                <div className="font-inter text-sm text-tuscan-terracotta font-medium mt-1">
                  {testimonials[activeIndex].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-tuscan-terracotta w-8'
                    : 'bg-slate-gray/30 hover:bg-slate-gray/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Previous/Next Buttons */}
          <button
            onClick={() =>
              goToTestimonial(
                activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1
              )
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 hidden lg:flex w-12 h-12 items-center justify-center rounded-full bg-warm-white shadow-lg hover:shadow-luxury transition-all hover:scale-110"
            aria-label="Previous testimonial"
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
            onClick={() =>
              goToTestimonial((activeIndex + 1) % testimonials.length)
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 hidden lg:flex w-12 h-12 items-center justify-center rounded-full bg-warm-white shadow-lg hover:shadow-luxury transition-all hover:scale-110"
            aria-label="Next testimonial"
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
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-cormorant text-5xl font-bold text-tuscan-terracotta mb-2">
              500+
            </div>
            <div className="font-inter text-sm text-slate-gray uppercase tracking-wide">
              Projects Completed
            </div>
          </div>
          <div>
            <div className="font-cormorant text-5xl font-bold text-tuscan-terracotta mb-2">
              4.9
            </div>
            <div className="font-inter text-sm text-slate-gray uppercase tracking-wide">
              Average Rating
            </div>
          </div>
          <div>
            <div className="font-cormorant text-5xl font-bold text-tuscan-terracotta mb-2">
              19
            </div>
            <div className="font-inter text-sm text-slate-gray uppercase tracking-wide">
              Years Experience
            </div>
          </div>
          <div>
            <div className="font-cormorant text-5xl font-bold text-tuscan-terracotta mb-2">
              98%
            </div>
            <div className="font-inter text-sm text-slate-gray uppercase tracking-wide">
              Client Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
