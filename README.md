# 🏛️ 101 Cast Stone - Ultimate Luxury Website

> **Forged in Stone. Born in California. Built to Endure.**

The most technologically advanced luxury architectural products website in existence, built for high-net-worth homeowners making 6-figure architectural purchases.

---

## 🎯 Mission Statement

Build a website where every pixel, interaction, and feature whispers "exclusive, confident, timeless"—combining Italian neoclassical soul with Herman Miller functionality and platinum-tier cutting-edge technology.

---

## 🎨 Design Philosophy: "Timeless Modernism"

### The Soul (Italian Heritage)
- Classical proportions (golden ratio: 1.618)
- Architectural embellishments with stories (acanthus leaves, egg-and-dart, dentil work)
- Handcrafted artistry with visible texture and depth
- Romantic European aesthetic with warmth

### The Form (Contemporary Precision)
- Herman Miller-inspired: form follows function, beauty matters
- Clean lines, generous negative space
- Minimalist color palette with strategic accents
- Streamlined, efficient processes

### The Synthesis
> "A carved Corinthian capital rendered in crisp white against gallery wall—ancient artistry meets museum-grade presentation."

---

## 🛠️ Technology Stack

### Core Framework (Production-Ready 2025)
```
Frontend:
- Next.js 15 (App Router, React Server Components, SSR/SSG)
- React 19 with TypeScript
- TailwindCSS 4.0 (utility-first styling)
```

### 3D Graphics (Ready for Implementation)
```
- React Three Fiber (@react-three/fiber)
- Three.js r168+ with WebGPU support
- @react-three/drei (helper components)
- @react-three/rapier (physics)
- @react-three/postprocessing (effects)
- Gaussian Splatting support
```

### Animation Libraries
```
- GSAP 3.12+ with ScrollTrigger
- Framer Motion 11+
- Lenis (smooth scrolling)
```

### UI Components
```
- Radix UI primitives
- Custom component library
- CVA (Class Variance Authority)
```

---

## 🎨 Visual Design System

### Color Palette: "Limestone & Shadow"

**Primary:**
```css
--travertine-cream: #F5F1E8  /* Warm neutral base */
--warm-white: #FDFBF7         /* Soft backgrounds */
--charcoal: #2C2C2C           /* Deep text */
--slate-gray: #5A5A5A         /* Secondary text */
```

**Accent:**
```css
--tuscan-terracotta: #C7705F  /* CTAs, highlights */
--aged-bronze: #6B5A3D        /* Metallic luxury */
--olive-green: #717C5E        /* Italian landscape */
--deep-navy: #1A2B3D          /* Authority */
```

### Typography: Classical + Modern

**Display (Headings):**
- Font: Cormorant Garamond
- Usage: H1, H2, headlines
- Style: High-contrast strokes, calligraphic elegance

**Body (Functional):**
- Font: Inter
- Usage: Body text, UI elements
- Style: Clean, highly legible

**Accent (Poetic):**
- Font: Italiana
- Usage: Quotes, testimonials only
- Style: Italic, decorative

---

## 📁 Project Structure

```
101caststone/
├── public/
│   ├── fonts/           # Custom font files
│   ├── images/          # Optimized images (WebP, AVIF)
│   └── models/          # 3D models (.glb, .ksplat)
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout with fonts
│   │   ├── page.tsx     # Homepage
│   │   └── globals.css  # Global styles & design system
│   ├── components/
│   │   ├── sections/    # Homepage sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Manifesto.tsx
│   │   │   ├── SignatureProducts.tsx
│   │   │   ├── CraftsmanshipShowcase.tsx (3D ready)
│   │   │   ├── FeaturedProjects.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── CallToAction.tsx
│   │   ├── ui/          # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   └── 3d/          # Three.js components (to be added)
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   ├── hooks/           # Custom React hooks
│   ├── styles/          # Additional styles
│   └── types/           # TypeScript types
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0.0 or higher
- npm or yarn package manager

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run type-check
```

---

## 📦 Current Implementation Status

### ✅ Completed (Phase 1)

- [x] Next.js 15 project structure
- [x] TypeScript configuration
- [x] TailwindCSS design system
- [x] Custom color palette (Limestone & Shadow)
- [x] Typography system (Cormorant Garamond, Inter, Italiana)
- [x] Responsive grid system
- [x] Hero section with animations
- [x] Manifesto section (brand story)
- [x] Signature Products carousel
- [x] Featured Projects masonry gallery
- [x] Testimonials carousel
- [x] Call-to-Action section
- [x] Reusable Button component with variants
- [x] Reusable Card component
- [x] Utility functions (formatting, golden ratio, etc.)
- [x] SEO metadata
- [x] Accessibility features (skip links, ARIA labels)
- [x] Mobile-first responsive design

### 🚧 Phase 2 (3D & Advanced Features)

- [ ] Install Three.js & React Three Fiber
- [ ] WebGPU renderer implementation
- [ ] Gaussian Splatting viewer for products
- [ ] Interactive 3D product configurator
- [ ] AR preview functionality (8th Wall)
- [ ] GSAP scroll animations
- [ ] Lenis smooth scrolling
- [ ] Framer Motion page transitions
- [ ] Product pages with 3D viewers
- [ ] Navigation header (sticky, animated)
- [ ] Footer component
- [ ] Contact form
- [ ] Newsletter signup

### 🔮 Phase 3 (Backend & CMS)

- [ ] Sanity CMS integration
- [ ] Product database schema
- [ ] Project portfolio CMS
- [ ] Blog/resources section
- [ ] Real-time CPQ (Configure, Price, Quote)
- [ ] PDF quote generation
- [ ] Email integration
- [ ] Analytics (Plausible/Fathom)
- [ ] A/B testing framework

### 🎯 Phase 4 (Advanced AI & AR)

- [ ] AI design assistant (OpenAI GPT-4)
- [ ] AI rendering integration (MyArchitectAI)
- [ ] WebAR product visualization
- [ ] VIP customer portal
- [ ] Real-time order tracking
- [ ] Live chat/concierge

---

## 🎨 Component Library

### Button Variants

```tsx
import { Button } from '@/components/ui/Button'

// Primary - Tuscan Terracotta
<Button variant="primary" size="lg">Explore Collection</Button>

// Secondary - Outline Charcoal
<Button variant="secondary" size="md">Learn More</Button>

// Outline - Terracotta Border
<Button variant="outline" size="md">Configure</Button>

// Ghost - Minimal
<Button variant="ghost" size="sm">View Details</Button>

// Link Style
<Button variant="link">Read More →</Button>
```

### Card Component

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'

<Card>
  <CardHeader>
    <CardTitle>Product Name</CardTitle>
    <CardDescription>Brief description</CardDescription>
  </CardHeader>
  <CardContent>
    Main content
  </CardContent>
  <CardFooter>
    Action buttons
  </CardFooter>
</Card>
```

---

## 🎯 Performance Targets

### Lighthouse Scores (Target)
```
Performance:      95+
Accessibility:    100
Best Practices:   100
SEO:             100
```

### Core Web Vitals
```
LCP (Largest Contentful Paint):    < 2.5s
FID (First Input Delay):            < 100ms
CLS (Cumulative Layout Shift):      < 0.1
```

### Load Times
```
First Contentful Paint:  < 1.8s
Time to Interactive:     < 3.9s
Total Blocking Time:     < 200ms
```

---

## 📱 Responsive Breakpoints

```css
xs:   320px   /* Small phones */
sm:   640px   /* Large phones */
md:   768px   /* Tablets */
lg:   1024px  /* Laptops */
xl:   1280px  /* Desktops */
2xl:  1536px  /* Large desktops */
3xl:  1920px  /* Ultra-wide */
```

---

## 🎭 Animation Guidelines

### Principles
- Subtle and elegant (never distracting)
- 300-800ms duration (feel responsive)
- Ease-out curves (natural deceleration)
- Respect `prefers-reduced-motion`

### Examples

**Fade In:**
```tsx
className="animate-fade-in"  // 1.2s ease-out
```

**Slide Up:**
```tsx
className="animate-slide-up"  // 1s ease-out
```

**Scale In:**
```tsx
className="animate-scale-in"  // 0.8s ease-out
```

---

## 🔒 Accessibility Compliance

- WCAG 2.1 AA compliant
- Semantic HTML5 elements
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus visible indicators
- Skip to content link
- Alt text on all images
- Color contrast ratios: 4.5:1+ (body), 3:1+ (large text)

---

## 🌐 SEO Features

- Optimized metadata (title, description, OG tags)
- Structured data (Schema.org)
- XML sitemap generation
- Semantic HTML
- Fast page load times
- Mobile-first responsive
- Image optimization (WebP, AVIF)

---

## 🛡️ Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari 14+
- Chrome Android 90+

---

## 📚 Key Technologies & Libraries

| Library                  | Version | Purpose                          |
|-------------------------|---------|----------------------------------|
| Next.js                 | 15.0.2  | React framework                  |
| React                   | 19.0.0  | UI library                       |
| TypeScript              | 5.6.3   | Type safety                      |
| TailwindCSS             | 4.0.0   | Utility-first CSS                |
| Three.js                | 0.168.0 | 3D graphics (ready)              |
| React Three Fiber       | 8.17.10 | React renderer for Three.js      |
| GSAP                    | 3.12.5  | Premium animations (ready)       |
| Framer Motion           | 11.11.9 | React animations (ready)         |
| Radix UI                | Latest  | Accessible primitives            |
| Lucide React            | Latest  | Icon library                     |

---

## 🎓 Development Guidelines

### Code Style
- Use TypeScript for all components
- Prefer function components with hooks
- Use `'use client'` directive for client components
- Keep components small and focused
- Use Tailwind classes (avoid inline styles)
- Follow accessibility best practices

### Naming Conventions
```
Components:    PascalCase  (Button, Hero, ProductCard)
Files:         PascalCase  (Button.tsx, Hero.tsx)
Functions:     camelCase   (formatCurrency, smoothScrollTo)
CSS Classes:   kebab-case  (container-luxury, btn-primary)
```

### Component Structure
```tsx
'use client' // If needed

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface ComponentProps {
  // Props interface
}

export default function ComponentName({ ...props }: ComponentProps) {
  // Hooks
  // Functions
  // Return JSX
}
```

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Variables
```env
# Add to Vercel dashboard or .env.local
SANITY_PROJECT_ID=your_project_id
SANITY_API_TOKEN=your_api_token
NEXT_PUBLIC_SITE_URL=https://101caststone.com
```

---

## 📊 Analytics & Tracking

### Recommended Services
- **Analytics:** Plausible or Fathom (privacy-first)
- **Heatmaps:** Hotjar
- **Error Tracking:** Sentry
- **Performance:** Vercel Analytics

---

## 🔧 Troubleshooting

### Common Issues

**Build errors:**
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

**TypeScript errors:**
```bash
# Run type checker
npm run type-check
```

**Port already in use:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use different port
PORT=3001 npm run dev
```

---

## 📝 Next Steps

1. **Install dependencies** (if not done):
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Phase 2 - Add 3D features**:
   - Install Three.js libraries
   - Create 3D product viewer
   - Implement Gaussian Splatting
   - Add GSAP animations

4. **Phase 3 - Backend integration**:
   - Set up Sanity CMS
   - Create product database
   - Add contact forms
   - Implement quote generator

5. **Phase 4 - Advanced features**:
   - AI design assistant
   - AR visualization
   - Customer portal
   - Analytics integration

---

## 🤝 Contributing

This is a proprietary project for 101 Cast Stone. Internal team members should follow the development guidelines above and submit pull requests for review.

---

## 📄 License

Proprietary - © 2024 101 Cast Stone. All rights reserved.

---

## 📞 Support

For questions or issues:
- Email: dev@101caststone.com
- Phone: (555) 555-1234

---

## 🏆 Project Goals

**Estimated Timeline:** 4-6 months full implementation
**Estimated Budget:** $250-400K (complete)
**Expected ROI:** 300-500% over 24 months
**Conversion Lift:** 25-40% vs. competitors
**Premium Pricing Support:** +10-15%

---

**Built with 🏛️ by the 101 Cast Stone development team**

*"Where Italian Renaissance craftsmanship meets bleeding-edge web technology"*
