import type { Metadata } from "next";

// The collections page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Collections",
  description:
    "Architectural cast stone, hand-finished with California precision. Each element designed for proportion, patina, and permanence.",
  alternates: { canonical: "/collections" },
};

export default function CollectionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
