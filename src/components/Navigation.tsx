"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MENU_PANEL_ID = "site-menu-panel";

// Exact match or a sub-route; avoids "/" style prefixes matching every page.
function useIsActive() {
  const pathname = usePathname();
  return (href: string) => pathname === href || pathname.startsWith(href + "/");
}

export function DesktopMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = useIsActive();
  // Wraps both the button and the panel so a press on the button isn't an "outside" press.
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setIsMenuOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // Pull focus back only from inside the menu; elsewhere Escape just closes it.
        const focusWasInside = menuRef.current?.contains(document.activeElement) ?? false;
        setIsMenuOpen(false);
        if (focusWasInside) buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const itemClass =
    "block px-6 py-3 text-clay hover:bg-clay/5 hover:text-basalt aria-[current=page]:text-basalt aria-[current=page]:font-medium transition-colors no-underline";
  const close = () => setIsMenuOpen(false);

  return (
    <div
      ref={menuRef}
      className="relative"
      onBlur={(e) => {
        // Close when keyboard focus moves past the menu (null relatedTarget is a pointer press, handled above).
        const next = e.relatedTarget as Node | null;
        if (next && !menuRef.current?.contains(next)) setIsMenuOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
        aria-controls={MENU_PANEL_ID}
        className="px-6 py-2.5 text-[16px] text-clay border border-clay/30 rounded-lg hover:bg-clay/5 hover:border-clay/50 transition-all duration-500"
      >
        Menu
      </button>

      {isMenuOpen && (
        <div
          id={MENU_PANEL_ID}
          className="absolute right-0 top-full mt-2 w-72 max-w-[calc(100vw-4rem)] bg-ivory border border-[#e8dfcf] rounded-lg shadow-xl z-50 overflow-hidden"
        >
          <nav aria-label="Site menu" className="py-2">
            <Link
              href="/collections"
              aria-current={isActive("/collections") ? "page" : undefined}
              className={itemClass}
              onClick={close}
            >
              Collections
            </Link>
            <Link href="/#workshop" className={itemClass} onClick={close}>
              The Workshop
            </Link>
            <div className="my-2 border-t border-[#e8dfcf]" />
            <Link
              href="/works"
              aria-current={isActive("/works") ? "page" : undefined}
              className={itemClass}
              onClick={close}
            >
              Works
            </Link>
            <Link
              href="/process"
              aria-current={isActive("/process") ? "page" : undefined}
              className={itemClass}
              onClick={close}
            >
              Process
            </Link>
            <Link
              href="/commissions"
              aria-current={isActive("/commissions") ? "page" : undefined}
              className={itemClass}
              onClick={close}
            >
              Commissions
            </Link>
            <Link
              href="/faq"
              aria-current={isActive("/faq") ? "page" : undefined}
              className={itemClass}
              onClick={close}
            >
              FAQ
            </Link>
            <div className="my-2 border-t border-[#e8dfcf]" />
            <Link
              href="/contact"
              aria-current={isActive("/contact") ? "page" : undefined}
              className="block px-6 py-3 text-sienna-700 hover:bg-sienna/5 aria-[current=page]:text-basalt transition-colors no-underline font-medium"
              onClick={close}
            >
              Begin a Conversation
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

export function MobileBottomNav() {
  const isActive = useIsActive();
  const tabClass =
    "flex flex-col items-center gap-1 min-w-[44px] text-clay hover:text-basalt aria-[current=page]:text-basalt aria-[current=page]:font-medium transition-colors no-underline";

  return (
    <nav
      aria-label="Primary"
      className="md:hidden [@media(max-height:500px)]:hidden fixed bottom-0 left-0 right-0 z-40 bg-ivory/95 border-t border-[#e8dfcf] backdrop-blur-lg shadow-[0_-2px_10px_rgba(0,0,0,0.05)]"
    >
      <div className="flex justify-around items-center h-16 px-4">
        <Link
          href="/collections"
          aria-current={isActive("/collections") ? "page" : undefined}
          className={tabClass}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="text-xs">Collections</span>
        </Link>

        <Link
          href="/works"
          aria-current={isActive("/works") ? "page" : undefined}
          className={tabClass}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs">Works</span>
        </Link>

        <Link
          href="/process"
          aria-current={isActive("/process") ? "page" : undefined}
          className={tabClass}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-xs">Process</span>
        </Link>

        <Link
          href="/commissions"
          aria-current={isActive("/commissions") ? "page" : undefined}
          className={tabClass}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <span className="text-xs">Commissions</span>
        </Link>

        <Link
          href="/contact"
          aria-current={isActive("/contact") ? "page" : undefined}
          className={tabClass}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-xs">Contact</span>
        </Link>
      </div>
    </nav>
  );
}
