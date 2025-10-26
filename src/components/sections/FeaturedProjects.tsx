'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface Project {
  id: string
  title: string
  category: string
  location: string
  year: number
  description: string
  imageUrl: string
}

const featuredProjects: Project[] = [
  {
    id: 'project-1',
    title: 'Tuscan Villa Estate',
    category: 'Residential',
    location: 'Rancho Santa Fe, CA',
    year: 2023,
    description: 'Complete facade renovation with 24 custom Corinthian columns and hand-carved cornices',
    imageUrl: '🏛️',
  },
  {
    id: 'project-2',
    title: 'Mediterranean Resort',
    category: 'Hospitality',
    location: 'Laguna Beach, CA',
    year: 2023,
    description: 'Coastal luxury resort featuring balustrades, columns, and ornamental fountains',
    imageUrl: '🏨',
  },
  {
    id: 'project-3',
    title: 'Historic Mansion Restoration',
    category: 'Residential',
    location: 'Beverly Hills, CA',
    year: 2022,
    description: '1920s estate restoration with period-accurate architectural details',
    imageUrl: '🏰',
  },
  {
    id: 'project-4',
    title: 'Luxury Winery',
    category: 'Commercial',
    location: 'Napa Valley, CA',
    year: 2022,
    description: 'Elegant tasting room entrance with Italian-inspired column arcade',
    imageUrl: '🍷',
  },
  {
    id: 'project-5',
    title: 'Private Chapel',
    category: 'Institutional',
    location: 'Montecito, CA',
    year: 2021,
    description: 'Intimate chapel with hand-carved religious iconography and classical columns',
    imageUrl: '⛪',
  },
  {
    id: 'project-6',
    title: 'Coastal Estate',
    category: 'Residential',
    location: 'Malibu, CA',
    year: 2021,
    description: 'Oceanfront villa with weather-resistant cast stone columns and railings',
    imageUrl: '🌊',
  },
]

const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Institutional']

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? featuredProjects
      : featuredProjects.filter((project) => project.category === activeCategory)

  return (
    <section
      id="featured-projects"
      className="section-padding bg-warm-white"
      aria-label="Featured projects"
    >
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent to-aged-bronze w-24" />
            <span className="text-aged-bronze text-2xl">❖</span>
            <div className="h-px bg-gradient-to-l from-transparent to-aged-bronze w-24" />
          </div>

          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Featured Projects
          </h2>

          <p className="font-inter text-lg text-slate-gray max-w-2xl mx-auto">
            From private estates to luxury resorts, our architectural elements grace
            the finest properties across California and beyond.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-inter text-sm uppercase tracking-wide transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-aged-bronze text-warm-white shadow-lg'
                  : 'bg-travertine-cream text-charcoal hover:bg-aged-bronze/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-luxury transition-all duration-500 ${
                index % 3 === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-aged-bronze to-deep-navy flex items-center justify-center">
                <div className="text-8xl">{project.imageUrl}</div>
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-xs font-inter uppercase tracking-wider text-tuscan-terracotta mb-2">
                    {project.category} • {project.year}
                  </div>
                  <h3 className="font-cormorant text-2xl font-bold text-warm-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-warm-white/80 mb-2">
                    {project.location}
                  </p>
                  <p className="text-sm text-warm-white/90 mb-4">
                    {project.description}
                  </p>
                  <Button variant="outline" size="sm" className="border-warm-white text-warm-white hover:bg-warm-white hover:text-charcoal">
                    View Project
                  </Button>
                </div>
              </div>

              {/* Label Badge */}
              <div className="absolute top-4 left-4 bg-warm-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-xs font-inter font-medium text-charcoal uppercase tracking-wide">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button variant="secondary" size="lg">
            View Complete Portfolio
          </Button>
          <p className="mt-4 text-sm text-slate-gray font-inter">
            500+ completed projects since 2005
          </p>
        </div>
      </div>
    </section>
  )
}
