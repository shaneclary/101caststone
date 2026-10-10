import "./globals.css";
import { fontSans, fontDisplay } from "./fonts";
import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { DesktopMenu, MobileBottomNav } from "@/components/Navigation";
import StructuredData from "@/components/StructuredData";
import { shareImage } from "./share-image";

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
  // og:/twitter: title and description are filled from each route's own
  // title and description; og:url is left out so shares keep the shared URL.
  openGraph: {
    siteName: '101 Cast Stone',
    locale: 'en_US',
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: 'summary_large_image',
    images: [shareImage.url],
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
    // Add these when you have them
    // google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body className="bg-ivory text-basalt antialiased">
        <StructuredData />
        {/* pb-16 clears the fixed mobile tab bar below the footer; short viewports hide the bar */}
        <div className="min-h-dvh flex flex-col pb-16 md:pb-0 [@media(max-height:500px)]:pb-0">
          <header className="sticky top-0 z-50 [@media(max-height:500px)]:static backdrop-blur-lg bg-[#f3eee6cc] border-b border-[#e8dfcf80] supports-[backdrop-filter]:bg-[#f3eee6bf] transition-colors">
            <div className="mx-auto max-w-6xl h-20 px-8 md:pl-8 flex items-center justify-between">
              <Link href="/" className="flex flex-col hover:opacity-80 transition-opacity no-underline">
                <div className="relative h-10 w-[180px]">
                  <Image
                    src="/images/logos/oneline.png"
                    alt="101 Cast Stone"
                    fill
                    sizes="180px"
                    className="object-contain object-left"
                    priority
                  />
                </div>
                <span className="text-xs md:text-sm text-clay italic mt-1 whitespace-nowrap">Maison California · Est. 2001</span>
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  href="/contact"
                  className="hidden md:inline-flex px-5 py-2.5 text-[16px] rounded-lg border border-sienna-700 bg-sienna-700 text-ivory-50 hover:shadow-lg transition-all duration-500 no-underline whitespace-nowrap"
                >
                  Begin a Conversation
                </Link>
                <DesktopMenu />
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="mt-32 border-t border-[#e8dfcf70] bg-[#f7f3ed]">
            <div className="mx-auto max-w-6xl px-6 py-12">
              {/* Main footer content */}
              <div className="grid gap-10 md:grid-cols-3 mb-10">
                {/* Logo & Tagline */}
                <div className="text-center md:text-left">
                  <div className="relative h-8 w-[140px] mx-auto md:mx-0 mb-3">
                    <Image
                      src="/images/logos/oneline.png"
                      alt=""
                      fill
                      sizes="140px"
                      className="object-contain object-center md:object-left"
                    />
                  </div>
                  <p className="text-[14px] text-clay italic">Maison California · Est. 2001</p>
                  <p className="text-[13px] text-clay mt-2">Proportion. Patina. Permanence.</p>
                </div>

                {/* Contact Info */}
                <div className="text-center md:text-left">
                  <h2 className="font-sans font-medium text-basalt text-[14px] leading-[1.85] tracking-normal mb-3">Contact</h2>
                  <div className="space-y-1 text-[14px] text-clay">
                    <p>
                      <a href="tel:+18056109278" className="hover:text-basalt transition-colors">
                        (805) 610-9278
                      </a>
                    </p>
                    <p>
                      <a href="mailto:info@101caststone.com" className="hover:text-basalt transition-colors">
                        info@101caststone.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="text-center md:text-left">
                  <h2 className="font-sans font-medium text-basalt text-[14px] leading-[1.85] tracking-normal mb-3">Showroom</h2>
                  <div className="text-[14px] text-clay">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=1720+El+Camino+Real%2C+Atascadero%2C+CA+93422"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-basalt transition-colors"
                    >
                      1720 El Camino Real<br />
                      Atascadero, CA 93422
                    </a>
                    <p className="text-clay mt-2 text-[13px]">Mon–Fri: 8am–5pm · Weekend appointments available</p>
                  </div>
                </div>
              </div>

              {/* Centered Shield Logo */}
              <div className="flex justify-center mb-4 pt-6 border-t border-[#e8dfcf50]">
                <div className="relative h-14 w-14 rounded-full bg-[#2E2B28] p-2 hover:bg-[#3a3632] transition-colors">
                  <Image
                    src="/images/logos/shield-nobg.png"
                    alt=""
                    fill
                    sizes="56px"
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* Page links */}
              <nav aria-label="Footer" className="mb-6">
                <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[14px]">
                  {[
                    ["/collections", "Collections"],
                    ["/works", "Works"],
                    ["/process", "Process"],
                    ["/commissions", "Commissions"],
                    ["/about", "About"],
                    ["/faq", "FAQ"],
                    ["/technical-info", "Technical Info"],
                    ["/contact", "Contact"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <Link href={href} className="text-clay hover:text-basalt transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Copyright and licence (the licence number appears on every page of the original site) */}
              <div className="text-center text-clay text-[13px]">
                © {new Date().getFullYear()} 101 Cast Stone. All rights reserved. · California contractor license #892542
              </div>
            </div>
          </footer>
        </div>
        <MobileBottomNav />
      </body>
    </html>
  );
}
