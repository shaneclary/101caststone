'use client'

import { Button } from '@/components/ui/Button'

export default function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="section-padding bg-gradient-to-br from-deep-navy via-charcoal to-deep-navy text-warm-white relative overflow-hidden"
      aria-label="Get started"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50m-40 0a40 40 0 1 0 80 0a40 40 0 1 0 -80 0' stroke='%23FDFBF7' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-luxury relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent to-tuscan-terracotta w-24" />
            <span className="text-tuscan-terracotta text-3xl">❖</span>
            <div className="h-px bg-gradient-to-l from-transparent to-tuscan-terracotta w-24" />
          </div>

          {/* Headline */}
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Begin Your Design Journey
          </h2>

          {/* Subheadline */}
          <p className="font-italiana text-xl md:text-2xl italic text-warm-white/90 mb-4">
            Where your architectural vision meets timeless craftsmanship
          </p>

          <p className="font-inter text-lg text-warm-white/80 mb-12 max-w-2xl mx-auto">
            Schedule a complimentary consultation with our design experts. We&apos;ll
            discuss your project, provide material samples, and create a custom quote
            tailored to your vision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="primary"
              size="xl"
              className="shadow-luxury hover:shadow-luxury-lg"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-warm-white text-warm-white hover:bg-warm-white hover:text-charcoal"
            >
              Launch 3D Configurator
            </Button>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-warm-white/20">
            {/* Phone */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-tuscan-terracotta/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-tuscan-terracotta"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-inter text-sm uppercase tracking-wider text-warm-white/60 mb-1">
                  Call Us
                </div>
                <a
                  href="tel:+15555551234"
                  className="font-cormorant text-2xl font-semibold text-warm-white hover:text-tuscan-terracotta transition-colors"
                >
                  (555) 555-1234
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-tuscan-terracotta/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-tuscan-terracotta"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-inter text-sm uppercase tracking-wider text-warm-white/60 mb-1">
                  Email Us
                </div>
                <a
                  href="mailto:info@101caststone.com"
                  className="font-cormorant text-2xl font-semibold text-warm-white hover:text-tuscan-terracotta transition-colors break-all"
                >
                  info@101caststone.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-tuscan-terracotta/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-tuscan-terracotta"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-inter text-sm uppercase tracking-wider text-warm-white/60 mb-1">
                  Visit Showroom
                </div>
                <div className="font-cormorant text-2xl font-semibold text-warm-white">
                  Southern California
                </div>
              </div>
            </div>
          </div>

          {/* Additional Trust Signals */}
          <div className="mt-12 pt-8 border-t border-warm-white/20">
            <p className="font-inter text-sm text-warm-white/70">
              Serving California and beyond since 2005 • Licensed & Insured • Lifetime
              Warranty
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
