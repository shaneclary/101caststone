import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found" };

// The layout already supplies the header, menu, bottom nav and footer contact details.
export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl md:text-5xl text-basalt mb-6">We couldn’t find that page</h1>
      <p className="text-basalt/80 mb-10">
        The page may have been renamed or the address mistyped. These are good places to continue:
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/collections"
          className="px-8 py-4 border border-clay/30 rounded-lg text-basalt hover:border-clay/50 transition-colors no-underline"
        >
          Collections
        </Link>
        <Link
          href="/works"
          className="px-8 py-4 border border-clay/30 rounded-lg text-basalt hover:border-clay/50 transition-colors no-underline"
        >
          Works
        </Link>
        <Link
          href="/contact"
          className="px-8 py-4 rounded-lg bg-sienna-700 text-ivory-50 font-medium no-underline hover:shadow-lg transition-all duration-500"
        >
          Begin a Conversation
        </Link>
      </div>
    </section>
  );
}
