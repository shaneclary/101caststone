import "./globals.css";
import { fontSans, fontDisplay } from "./fonts";
import type { Metadata } from "next";
import Image from "next/image";
import { DesktopMenu, MobileBottomNav } from "@/components/Navigation";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL('https://101caststone.com'),
  title: {
    default: "101 Cast Stone — Maison California",
    template: "%s | 101 Cast Stone"
  },
  description: "Architectural cast stone from California. Hand-crafted fireplace mantels, columns, balustrades, and custom stonework. Serving California since 2001.",
  keywords: [
    'cast stone',
    'architectural elements',
    'columns',
    'cornices',
    'mantels',
    'fireplaces',
    'balustrades',
    'outdoor fireplaces',
    'fountains',
    'luxury architecture',
    'custom stonework',
    'california craftsmanship',
    'atascadero',
    'san luis obispo',
    'maison california'
  ],
  authors: [{ name: '101 Cast Stone' }],
  creator: '101 Cast Stone',
  publisher: '101 Cast Stone',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "101 Cast Stone — Maison California",
    description: "Architectural cast stone from California. Hand-crafted fireplace mantels, columns, and custom stonework since 2001.",
    url: 'https://101caststone.com',
    siteName: '101 Cast Stone',
    locale: 'en_US',
    type: "website",
    images: [
      {
        url: '/images/hero/winecountry.jpg',
        width: 1200,
        height: 630,
        alt: '101 Cast Stone - Architectural Cast Stone from California',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '101 Cast Stone — Maison California',
    description: 'Architectural cast stone from California. Proportion. Patina. Permanence.',
    images: ['/images/hero/winecountry.jpg'],
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    // Add these when you have them
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body className="bg-ivory text-basalt antialiased">
        <StructuredData />
        <div className="min-h-dvh flex flex-col">
          <header className="sticky top-0 z-50 backdrop-blur-lg bg-[#f3eee6cc] border-b border-[#e8dfcf80] supports-[backdrop-filter]:bg-[#f3eee6bf] transition-colors">
            <div className="mx-auto max-w-6xl h-20 px-8 md:pl-8 flex items-center justify-between">
              <a href="/" className="flex flex-col hover:opacity-80 transition-opacity no-underline">
                <div className="relative h-10 w-[180px]">
                  <Image
                    src="/images/logos/oneline.png"
                    alt="101 Cast Stone"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
                <span className="text-xs md:text-sm text-clay italic mt-1 whitespace-nowrap">Maison California · Est. 2001</span>
              </a>
              <DesktopMenu />
            </div>
          </header>
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <footer className="mt-32 border-t border-[#e8dfcf70] bg-[#f7f3ed]">
            <div className="mx-auto max-w-6xl px-6 py-12">
              {/* Main footer content */}
              <div className="grid gap-10 md:grid-cols-3 mb-10">
                {/* Logo & Tagline */}
                <div className="text-center md:text-left">
                  <div className="relative h-8 w-[140px] mx-auto md:mx-0 mb-3">
                    <Image
                      src="/images/logos/oneline.png"
                      alt="101 Cast Stone"
                      fill
                      className="object-contain object-center md:object-left"
                    />
                  </div>
                  <p className="text-[14px] text-clay italic">Maison California · Est. 2001</p>
                  <p className="text-[13px] text-clay/70 mt-2">Proportion. Patina. Permanence.</p>
                </div>

                {/* Contact Info */}
                <div className="text-center md:text-left">
                  <h4 className="font-medium text-basalt text-[14px] mb-3">Contact</h4>
                  <div className="space-y-1 text-[14px] text-clay">
                    <p>
                      <a href="tel:+18056109278" className="hover:text-sienna transition-colors">
                        (805) 610-9278
                      </a>
                    </p>
                    <p>
                      <a href="mailto:info@101caststone.com" className="hover:text-sienna transition-colors">
                        info@101caststone.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="text-center md:text-left">
                  <h4 className="font-medium text-basalt text-[14px] mb-3">Studio</h4>
                  <div className="text-[14px] text-clay">
                    <p>1720 El Camino Real</p>
                    <p>Atascadero, CA 93422</p>
                    <p className="text-clay/70 mt-2 text-[13px]">Mon–Fri: 8am–5pm</p>
                  </div>
                </div>
              </div>

              {/* Centered Shield Logo */}
              <div className="flex justify-center mb-4 pt-6 border-t border-[#e8dfcf50]">
                <div className="relative h-12 w-12 opacity-50 hover:opacity-80 transition-opacity">
                  <Image
                    src="/images/logos/shield-nobg.png"
                    alt="101 Cast Stone Shield"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Copyright */}
              <div className="text-center text-clay/60 text-[13px]">
                © {new Date().getFullYear()} 101 Cast Stone. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
        <MobileBottomNav />
      </body>
    </html>
  );
}
