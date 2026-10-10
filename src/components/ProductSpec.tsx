import { specification } from "@/data/company";

type HeadingLevel = 2 | 3;

/** The quiet sans sub-heading used for "Available Options" and, in the dialog, "Specification". */
const SUB_HEADING = "font-sans text-[18px] leading-[1.85] font-medium tracking-normal text-basalt mb-4";

/** Wording from the live site's products, colors and FAQ pages. */
function productOptions(isFireplace: boolean): string[] {
  return [
    "Standard and custom styles and dimensions",
    "Seven standard colors and three texture finishes: Classic, Old World, Rustic",
    "Custom colors and finishes on request",
    ...(isFireplace
      ? ["Non-combustible: can be used directly next to the firebox opening", "Quoted with installation by our team"]
      : []),
    "Packed by hand and cast in Atascadero, California",
  ];
}

interface ProductOptionsProps {
  /** Mantels and outdoor fireplaces add the non-combustible and installation notes. */
  isFireplace: boolean;
  /** h3 inside the product dialog, h2 on the product page. */
  headingLevel?: HeadingLevel;
  className?: string;
}

/** "Available Options" list shared by the product dialog and the product page. */
export function ProductOptions({ isFireplace, headingLevel = 3, className = "" }: ProductOptionsProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className={`border-t border-ecru pt-6 ${className}`}>
      <Heading className={SUB_HEADING}>Available Options</Heading>
      <ul className="space-y-2 text-[15px] text-clay">
        {productOptions(isFireplace).map((option) => (
          <li key={option} className="flex items-start gap-2">
            <span aria-hidden="true" className="text-sienna-700 mt-1">•</span>
            <span>{option}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface ProductSpecProps {
  /** Mantels also show the rows marked mantelsOnly (delivery, lead time). */
  isMantel: boolean;
  /** Fireplace products also show the rows marked fireplaceOnly (fire). Defaults to isMantel. */
  isFireplace?: boolean;
  /** h3 inside the product dialog, h2 on the product page. */
  headingLevel?: HeadingLevel;
  /**
   * "columns": label beside value from md up, stacked below (for a full-width section).
   * "stacked": label above value at every width (for the narrow dialog column).
   */
  layout?: "columns" | "stacked";
  headingClassName?: string;
  className?: string;
}

/** The specification rows from company.ts as a definition list. */
export default function ProductSpec({
  isMantel,
  isFireplace = isMantel,
  headingLevel = 3,
  layout = "columns",
  headingClassName = SUB_HEADING,
  className = "",
}: ProductSpecProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const rows = specification.filter(
    (row) => (isFireplace || !row.fireplaceOnly) && (isMantel || !row.mantelsOnly)
  );
  const columns = layout === "columns";

  return (
    <div className={className}>
      <Heading className={headingClassName}>Specification</Heading>
      <dl className={`divide-y divide-ecru ${columns ? "border-y border-ecru" : ""}`}>
        {rows.map((row) => (
          <div
            key={row.label}
            className={`py-3 ${columns ? "md:grid md:grid-cols-[11rem_minmax(0,1fr)] md:gap-x-8 md:py-4" : ""}`}
          >
            <dt className="text-[15px] font-medium text-basalt">{row.label}</dt>
            <dd className={`mt-1 text-[15px] text-clay leading-relaxed ${columns ? "md:mt-0" : ""}`}>{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
