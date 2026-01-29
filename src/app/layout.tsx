import "./globals.css";
import { fontSans, fontDisplay } from "./fonts";
import type { Metadata } from "next";
import Image from "next/image";
import { DesktopMenu, MobileBottomNav } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "101 Cast Stone — Maison California",
  description: "Architectural cast stone from California. Crafted with silence, proportion, and permanence.",
  keywords: [
    'cast stone',
    'architectural elements',
    'columns',
    'cornices',
    'mantels',
    'fireplaces',
    'luxury architecture',
    'custom stonework',
    'california craftsmanship',
    'maison california'
  ],
  authors: [{ name: '101 Cast Stone' }],
  creator: '101 Cast Stone',
  openGraph: {
    title: "101 Cast Stone — Maison California",
    description: "Architectural cast stone from California. Proportion. Patina. Permanence.",
    type: "website"
  },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body className="bg-ivory text-basalt antialiased">
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
              {/* Top row with logo and date */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[15px] text-clay mb-6">
                <div className="relative h-8 w-[140px]">
                  <Image
                    src="/images/logos/oneline.png"
                    alt="101 Cast Stone"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div>Maison California · Est. 2001</div>
              </div>

              {/* Centered Shield Logo */}
              <div className="flex justify-center mb-6">
                <div className="relative h-16 w-16 opacity-60 hover:opacity-90 transition-opacity">
                  <Image
                    src="/images/logos/shield-nobg.png"
                    alt="101 Cast Stone Shield"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Tagline centered below shield */}
              <div className="text-center text-[#7d6a55b3] italic text-[15px] pb-4">
                Proportion. Patina. Permanence.
              </div>
            </div>
          </footer>
        </div>
        <MobileBottomNav />
      </body>
    </html>
  );
}
