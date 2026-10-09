// Page title: the one h1 on each page that uses it. leading-snug keeps the
// line height it had as an h2 (globals.css gives bare h1s leading-[1.05]).
export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="relative font-display text-[34px] md:text-[40px] leading-snug tracking-[-0.01em] text-basalt etched">{children}</h1>;
}
