import "./globals.css";
import { fontSans, fontDisplay } from "./fonts";
import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { DesktopMenu, MobileBottomNav } from "@/components/Navigation";
import StructuredData from "@/components/StructuredData";
import { shareImage } from "./share-image";
import { showroom } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL('https://101caststone.com'),
  title: {
    default: "101 Cast Stone — Maison California",
    template: "%s | 101 Cast Stone"
  },
  description: "Architectural cast stone from Atascadero, California: fireplace surrounds and mantels, columns, balustrades, architectural trim and stone masonry.",
  keywords: [
    'cast stone',
    'architectural elements',
    'columns',
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
  viewportFit: 'cover',
};

const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=1720+El+Camino+Real%2C+Atascadero%2C+CA+93422";

const FOOTER_PAGES = [
  ["/collections", "Collections"],
  ["/works", "Works"],
  ["/process", "Process"],
  ["/commissions", "Commissions"],
  ["/about", "About"],
  ["/faq", "FAQ"],
  ["/technical-info", "Technical Information"],
  ["/contact", "Contact"],
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body className="bg-ivory text-basalt antialiased">
        <StructuredData />
        <div className="min-h-dvh flex flex-col">
          <header className="sticky top-0 z-50 [@media(max-height:500px)]:static border-b border-ecru/80 bg-ivory/90 backdrop-blur-lg supports-[backdrop-filter]:bg-ivory/80">
            <div className="wrap flex h-16 items-center justify-between md:h-20">
              <Link href="/" className="flex flex-col no-underline hover:opacity-80 transition-opacity">
                <div className="relative h-[22px] w-[132px] md:h-[26px] md:w-[156px]">
                  <Image
                    src="/images/logos/oneline-trim.png"
                    alt="101 Cast Stone"
                    fill
                    sizes="156px"
                    className="object-contain object-left"
                    priority
                  />
                </div>
                <span className="mt-1.5 whitespace-nowrap text-[11px] italic text-clay sm:text-[12px]">Maison California · Est. 2001</span>
              </Link>
              <div className="flex items-center gap-3">
                <Link href="/contact" className="btn btn-primary btn-sm hidden md:inline-flex">
                  Begin a Conversation
                </Link>
                <DesktopMenu />
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          {/* The bottom padding clears the fixed mobile tab bar (h-16 plus the home indicator); short viewports hide the bar */}
          <footer className="border-t border-ecru bg-ivory-50 pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0 [@media(max-height:500px)]:pb-0">
            <div className="wrap py-14 md:py-16">
              <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
                {/* Brand */}
                <div>
                  <div className="relative mb-3 h-[22px] w-[132px]">
                    <Image
                      src="/images/logos/oneline-trim.png"
                      alt=""
                      fill
                      sizes="132px"
                      className="object-contain object-left"
                    />
                  </div>
                  <p className="text-caption italic text-clay">Maison California · Est. 2001</p>
                  <p className="mt-2 text-caption text-clay">Proportion. Patina. Permanence.</p>
                </div>

                {/* Contact */}
                <div>
                  <h2 className="eyebrow mb-4 font-sans">Contact</h2>
                  <ul className="space-y-1.5 text-small text-basalt">
                    <li>
                      <a href="tel:+18056109278" className="no-underline hover:underline underline-offset-4">
                        (805) 610-9278
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@101caststone.com" className="no-underline hover:underline underline-offset-4">
                        info@101caststone.com
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Showroom: address and hours from src/data/company.ts */}
                <div>
                  <h2 className="eyebrow mb-4 font-sans">{showroom.name}</h2>
                  <a
                    href={DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-small text-basalt no-underline hover:underline underline-offset-4"
                  >
                    {showroom.street}<br />
                    {showroom.locality}
                    <span className="sr-only"> (opens Google Maps in a new tab)</span>
                  </a>
                  <p className="mt-3 text-caption text-clay">
                    <span className="block font-medium text-basalt">Factory Showroom Hours</span>
                    {showroom.hours}
                    <br />
                    {showroom.weekend}
                  </p>
                </div>

                {/* Pages */}
                <nav aria-label="Footer">
                  <h2 className="eyebrow mb-4 font-sans">Pages</h2>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-small md:grid-cols-1">
                    {FOOTER_PAGES.map(([href, label]) => (
                      <li key={href}>
                        <Link href={href} className="text-basalt hover:text-sienna-700">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Copyright and licence (the licence number appears on every page of the original site) */}
              <div className="mt-12 flex flex-col gap-4 border-t border-ecru pt-6 text-caption text-clay sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} 101 Cast Stone. All rights reserved. · License #892542</p>
                <div className="relative h-9 w-[39px] opacity-90" aria-hidden="true">
                  <Image src="/images/logos/shield-trim.png" alt="" fill sizes="39px" className="object-contain" />
                </div>
              </div>
            </div>
          </footer>
        </div>
        <MobileBottomNav />
      </body>
    </html>
  );
}
