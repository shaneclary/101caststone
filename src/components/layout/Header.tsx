'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'

const navigation = [
  { name: 'Products', href: '#signature-products' },
  { name: 'Projects', href: '#featured-projects' },
  { name: 'Craftsmanship', href: '#craftsmanship' },
  { name: 'About', href: '#manifesto' },
  { name: 'Contact', href: '#call-to-action' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-warm-white/95 backdrop-blur-lg shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center space-x-3 group"
              aria-label="101 Cast Stone Home"
            >
              <div className="relative">
                {/* Ornamental Logo Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-tuscan-terracotta to-aged-bronze flex items-center justify-center text-warm-white font-cormorant text-2xl md:text-3xl font-bold shadow-luxury group-hover:shadow-luxury-lg transition-all duration-300 group-hover:scale-105">
                  101
                </div>
                {/* Decorative Corner */}
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-tuscan-terracotta opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-aged-bronze opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="hidden sm:flex flex-col">
                <span className="font-cormorant text-2xl md:text-3xl font-bold text-charcoal leading-none">
                  Cast Stone
                </span>
                <span className="font-italiana text-xs md:text-sm text-slate-gray italic mt-1">
                  Italian Heritage, California Craft
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="font-inter text-sm font-medium text-charcoal hover:text-tuscan-terracotta transition-colors duration-300 uppercase tracking-wide relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tuscan-terracotta group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollToSection('#call-to-action')}
              >
                Get Quote
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => scrollToSection('#signature-products')}
              >
                View Products
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 group"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-charcoal/80 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-20 md:top-24 left-0 right-0 bg-warm-white shadow-luxury-lg transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <nav className="container-luxury py-8" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="font-inter text-lg font-medium text-charcoal hover:text-tuscan-terracotta hover:bg-travertine-cream px-4 py-3 rounded-lg transition-all duration-300 text-left uppercase tracking-wide"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col space-y-3 mt-8 px-4">
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={() => scrollToSection('#call-to-action')}
              >
                Get a Quote
              </Button>
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => scrollToSection('#signature-products')}
              >
                View Products
              </Button>
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-8 px-4 pt-8 border-t border-slate-gray/20">
              <div className="text-sm text-slate-gray space-y-2">
                <a
                  href="tel:+15555551234"
                  className="flex items-center space-x-2 hover:text-tuscan-terracotta transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(555) 555-1234</span>
                </a>
                <a
                  href="mailto:info@101caststone.com"
                  className="flex items-center space-x-2 hover:text-tuscan-terracotta transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@101caststone.com</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
