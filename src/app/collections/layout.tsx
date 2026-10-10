import type { Metadata } from "next";

// The collections page is a client component, so its metadata lives here. The title is an
// object, not a string: a string here would drop the root "%s | 101 Cast Stone" template for
// the product pages below (/collections/<slug>), which set their own title and canonical.
export const metadata: Metadata = {
  title: { default: "Collections", template: "%s | 101 Cast Stone" },
  description:
    "Architectural cast stone, made by hand in Atascadero. Each element designed for proportion, patina, and permanence.",
  alternates: { canonical: "/collections" },
};

export default function CollectionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
