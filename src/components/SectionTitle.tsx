// Page title: the one h1 on each page that uses it, with the short brand rule beneath.
// mb-11 leaves room for the rule (20px below the box) and the intro paragraph.
export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="etched mb-11 text-balance">{children}</h1>;
}
