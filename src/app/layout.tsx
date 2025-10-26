import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'

export const metadata: Metadata = {
  title: '101 Cast Stone | Italian-Inspired Architectural Elements',
  description: 'Handcrafted cast stone columns, cornices, and architectural elements. 19 years of excellence combining Italian heritage with California craftsmanship.',
  keywords: [
    'cast stone',
    'architectural elements',
    'columns',
    'cornices',
    'corinthian columns',
    'italian craftsmanship',
    'luxury architecture',
    'custom stonework'
  ],
  authors: [{ name: '101 Cast Stone' }],
  creator: '101 Cast Stone',
  openGraph: {
    title: '101 Cast Stone | Where Italian Heritage Meets California Craftsmanship',
    description: 'Handcrafted architectural cast stone elements. Custom columns, cornices, and ornamental details for luxury residences.',
    url: 'https://101caststone.com',
    siteName: '101 Cast Stone',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '101 Cast Stone - Architectural Excellence',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '101 Cast Stone',
    description: 'Italian-inspired architectural cast stone elements',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#F5F1E8" />
        {/* Google Fonts - TODO: Uncomment when deployed to environment with internet access */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Inter:wght@400;500;600&family=Italiana&display=swap" rel="stylesheet" /> */}
      </head>
      <body
        className={cn(
          'min-h-screen bg-warm-white antialiased'
        )}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-tuscan-terracotta focus:text-warm-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
