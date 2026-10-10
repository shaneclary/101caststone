import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found" };

// The layout already supplies the header, menu, bottom nav and footer contact details.
export default function NotFound() {
  return (
    <section className="wrap max-w-3xl py-24 text-center md:py-32">
      <p className="eyebrow mb-4">404</p>
      <h1 className="text-balance">We couldn’t find that page.</h1>
      <p className="mx-auto mt-5 max-w-md text-body text-clay">
        The page may have been renamed or the address mistyped. These are good places to continue.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/collections" className="btn btn-secondary">
          Collections
        </Link>
        <Link href="/works" className="btn btn-secondary">
          Works
        </Link>
        <Link href="/contact" className="btn btn-primary">
          Begin a Conversation
        </Link>
      </div>
    </section>
  );
}
