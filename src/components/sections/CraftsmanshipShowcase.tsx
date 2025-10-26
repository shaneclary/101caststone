'use client'

export default function CraftsmanshipShowcase() {
  return (
    <section
      id="craftsmanship"
      className="section-padding bg-slate-gray text-warm-white relative overflow-hidden"
      aria-label="Craftsmanship showcase"
    >
      {/* 3D Scene Placeholder - Will be replaced with actual Three.js scene */}
      <div className="container-luxury">
        <div className="max-w-4xl mx-auto text-center">
          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent to-tuscan-terracotta w-24" />
            <span className="text-tuscan-terracotta text-3xl">❖</span>
            <div className="h-px bg-gradient-to-l from-transparent to-tuscan-terracotta w-24" />
          </div>

          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Art of Stone Craftsmanship
          </h2>

          <p className="font-inter text-lg text-warm-white/80 mb-12">
            Experience our process through an interactive 3D workshop scene
          </p>

          {/* 3D Canvas Placeholder */}
          <div className="aspect-video bg-gradient-to-br from-charcoal to-deep-navy rounded-lg shadow-luxury-lg flex items-center justify-center">
            <div className="text-center space-y-4 p-8">
              <div className="text-8xl mb-4">🎨</div>
              <div className="font-cormorant text-3xl font-semibold">
                Interactive 3D Experience
              </div>
              <p className="font-inter text-warm-white/70 max-w-md mx-auto">
                This section will feature a WebGPU-powered Three.js scene with
                interactive hotspots showcasing our craftsmanship process
              </p>
              <div className="pt-4 text-sm text-warm-white/50 font-inter">
                Technologies: React Three Fiber • WebGPU • Gaussian Splatting
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-tuscan-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📐</span>
              </div>
              <h3 className="font-cormorant text-xl font-semibold">Design</h3>
              <p className="font-inter text-sm text-warm-white/70">
                Classical proportions meet modern CAD precision
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-tuscan-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛠️</span>
              </div>
              <h3 className="font-cormorant text-xl font-semibold">Molding</h3>
              <p className="font-inter text-sm text-warm-white/70">
                Custom molds created for each unique piece
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-tuscan-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✋</span>
              </div>
              <h3 className="font-cormorant text-xl font-semibold">Hand-Finishing</h3>
              <p className="font-inter text-sm text-warm-white/70">
                Artisan details that machines cannot replicate
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-tuscan-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-cormorant text-xl font-semibold">Installation</h3>
              <p className="font-inter text-sm text-warm-white/70">
                Expert placement for structural integrity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
