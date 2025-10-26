'use client'

import { Button } from '@/components/ui/Button'

const footerNavigation = {
  products: [
    { name: 'Columns', href: '#' },
    { name: 'Capitals', href: '#' },
    { name: 'Cornices', href: '#' },
    { name: 'Balustrades', href: '#' },
    { name: 'Moldings', href: '#' },
    { name: 'Custom Work', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#manifesto' },
    { name: 'Our Process', href: '#craftsmanship' },
    { name: 'Portfolio', href: '#featured-projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#call-to-action' },
  ],
  resources: [
    { name: 'CAD Library', href: '#' },
    { name: 'Installation Guides', href: '#' },
    { name: 'Care & Maintenance', href: '#' },
    { name: 'Technical Specs', href: '#' },
    { name: 'Design Consultation', href: '#' },
    { name: 'FAQs', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Shipping & Returns', href: '#' },
  ],
}

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'Houzz',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.45 3.73L12 11.63 4.55 7.91 12 4.18zM3.64 9.27l7.36 3.68v7.28l-7.36-3.68V9.27zm16.72 0v7.28l-7.36 3.68V12.95l7.36-3.68z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
      </svg>
    ),
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-warm-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Main Footer Content */}
      <div className="container-luxury py-16 md:py-20">
        {/* Top Section - Logo & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-12 border-b border-warm-white/10">
          {/* Logo & Mission */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-tuscan-terracotta to-aged-bronze flex items-center justify-center text-warm-white font-cormorant text-3xl font-bold shadow-luxury">
                101
              </div>
              <div className="flex flex-col">
                <span className="font-cormorant text-3xl font-bold text-warm-white leading-none">
                  Cast Stone
                </span>
                <span className="font-italiana text-sm text-warm-white/70 italic mt-1">
                  Italian Heritage, California Craft
                </span>
              </div>
            </div>

            <p className="font-inter text-warm-white/80 leading-relaxed max-w-md">
              For 19 years, we&apos;ve been crafting architectural cast stone elements
              that honor Italian Renaissance tradition while meeting modern engineering
              standards. Every piece tells a story of timeless beauty.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2 text-warm-white/60">
                <svg className="w-5 h-5 text-tuscan-terracotta" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2 text-warm-white/60">
                <svg className="w-5 h-5 text-tuscan-terracotta" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Lifetime Warranty</span>
              </div>
              <div className="flex items-center space-x-2 text-warm-white/60">
                <svg className="w-5 h-5 text-tuscan-terracotta" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
                <span>Made in USA</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:pl-12">
            <h3 className="font-cormorant text-2xl font-semibold mb-4">
              Design Inspiration Delivered
            </h3>
            <p className="text-warm-white/70 mb-6 font-inter text-sm">
              Subscribe to receive project showcases, design tips, and exclusive offers
              for architectural professionals and homeowners.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-warm-white/10 border border-warm-white/20 rounded-lg text-warm-white placeholder-warm-white/40 focus:outline-none focus:ring-2 focus:ring-tuscan-terracotta focus:border-transparent transition-all"
                aria-label="Email address"
              />
              <Button variant="primary" size="md" type="submit">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-warm-white/50 mt-3 font-inter">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-warm-white/10">
          {/* Products */}
          <div>
            <h3 className="font-cormorant text-lg font-semibold mb-4 text-warm-white">
              Products
            </h3>
            <ul className="space-y-3">
              {footerNavigation.products.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-warm-white/70 hover:text-tuscan-terracotta transition-colors font-inter"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-cormorant text-lg font-semibold mb-4 text-warm-white">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-warm-white/70 hover:text-tuscan-terracotta transition-colors font-inter"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-cormorant text-lg font-semibold mb-4 text-warm-white">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-warm-white/70 hover:text-tuscan-terracotta transition-colors font-inter"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-cormorant text-lg font-semibold mb-4 text-warm-white">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-warm-white/70 font-inter">
              <li>
                <a
                  href="tel:+15555551234"
                  className="hover:text-tuscan-terracotta transition-colors flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(555) 555-1234</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@101caststone.com"
                  className="hover:text-tuscan-terracotta transition-colors flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@101caststone.com</span>
                </a>
              </li>
              <li className="pt-2">
                <p className="font-inter">Southern California</p>
                <p className="text-xs text-warm-white/50">By Appointment Only</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Social & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 space-y-6 md:space-y-0">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-warm-white/60 hover:text-tuscan-terracotta transition-colors"
                aria-label={item.name}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Copyright & Legal */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-warm-white/50 font-inter">
            <p>&copy; {currentYear} 101 Cast Stone. All rights reserved.</p>
            <div className="flex space-x-4">
              {footerNavigation.legal.map((item, index) => (
                <span key={item.name} className="flex items-center">
                  {index > 0 && <span className="mr-4 text-warm-white/20">•</span>}
                  <a
                    href={item.href}
                    className="hover:text-tuscan-terracotta transition-colors"
                  >
                    {item.name}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-tuscan-terracotta via-aged-bronze to-olive-green" />
    </footer>
  )
}
