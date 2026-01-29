"use client";

import { useState } from "react";
import Link from "next/link";

export function DesktopMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="px-6 py-2.5 text-[16px] text-clay border border-clay/30 rounded-lg hover:bg-clay/5 hover:border-clay/50 transition-all duration-500"
      >
        Menu
      </button>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute right-0 md:right-0 left-0 md:left-auto top-full mt-2 md:w-72 bg-ivory border border-[#e8dfcf] rounded-lg shadow-xl z-50 overflow-hidden">
            <nav className="py-2">
              <Link
                href="/collections"
                className="block px-6 py-3 text-clay hover:bg-clay/5 hover:text-sienna transition-colors no-underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </Link>
              <Link
                href="/#workshop"
                className="block px-6 py-3 text-clay hover:bg-clay/5 hover:text-sienna transition-colors no-underline"
                onClick={() => setIsMenuOpen(false)}
              >
                The Workshop
              </Link>
              <div className="my-2 border-t border-[#e8dfcf]" />
              <Link
                href="/works"
                className="block px-6 py-3 text-clay hover:bg-clay/5 hover:text-sienna transition-colors no-underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Works
              </Link>
              <Link
                href="/process"
                className="block px-6 py-3 text-clay hover:bg-clay/5 hover:text-sienna transition-colors no-underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Process
              </Link>
              <Link
                href="/commissions"
                className="block px-6 py-3 text-clay hover:bg-clay/5 hover:text-sienna transition-colors no-underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Commissions
              </Link>
              <div className="my-2 border-t border-[#e8dfcf]" />
              <Link
                href="/contact"
                className="block px-6 py-3 text-sienna hover:bg-sienna/5 transition-colors no-underline font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Begin a Conversation
              </Link>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

export function MobileBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-ivory/95 border-t border-[#e8dfcf] backdrop-blur-lg shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-16 px-4">
        <Link
          href="/collections"
          className="flex flex-col items-center gap-1 text-clay hover:text-sienna transition-colors no-underline"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="text-xs">Collections</span>
        </Link>

        <Link
          href="/process"
          className="flex flex-col items-center gap-1 text-clay hover:text-sienna transition-colors no-underline"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-xs">Process</span>
        </Link>

        <Link
          href="/commissions"
          className="flex flex-col items-center gap-1 text-clay hover:text-sienna transition-colors no-underline"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="text-xs">Commissions</span>
        </Link>

        <Link
          href="/contact"
          className="flex flex-col items-center gap-1 text-sienna hover:text-sienna/80 transition-colors no-underline"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-xs">Contact</span>
        </Link>
      </div>
    </nav>
  );
}
