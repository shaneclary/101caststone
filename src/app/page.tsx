import Hero from '@/components/sections/Hero'
import Manifesto from '@/components/sections/Manifesto'
import SignatureProducts from '@/components/sections/SignatureProducts'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Testimonials from '@/components/sections/Testimonials'
import CallToAction from '@/components/sections/CallToAction'
import CraftsmanshipShowcase from '@/components/sections/CraftsmanshipShowcase'

export default function HomePage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section - Full viewport height */}
      <Hero />

      {/* Manifesto Section - Brand story and values */}
      <Manifesto />

      {/* Signature Products - 3D Product Carousel */}
      <SignatureProducts />

      {/* Craftsmanship Showcase - Interactive 3D Workshop Scene */}
      <CraftsmanshipShowcase />

      {/* Featured Projects - Masonry Gallery */}
      <FeaturedProjects />

      {/* Testimonials - Client testimonials */}
      <Testimonials />

      {/* Call to Action - Final conversion section */}
      <CallToAction />
    </main>
  )
}
