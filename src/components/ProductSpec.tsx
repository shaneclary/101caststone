import Link from "next/link";
import { specification } from "@/data/company";

type HeadingLevel = 2 | 3;

/** The quiet sans sub-heading used for "In brief" and, in the dialog, "Specification". */
const SUB_HEADING = "font-sans text-body font-medium tracking-normal text-basalt mb-3";

interface ProductOptionsProps {
  /** Mantels and outdoor fireplaces add the non-combustible and installation note. */
  isFireplace: boolean;
  /** h3 inside the product dialog, h2 on the product page. */
  headingLevel?: HeadingLevel;
  className?: string;
}

/**
 * "In brief": the few facts a visitor wants before the full specification, in the live
 * site's words (products, colors and FAQ pages). The product page carries the full list.
 */
export function ProductOptions({ isFireplace, headingLevel = 3, className = "" }: ProductOptionsProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className={`border-t border-ecru pt-6 ${className}`}>
      <Heading className={SUB_HEADING}>In brief</Heading>
      <ul className="space-y-2 text-small text-clay">
        <li className="flex items-start gap-2">
          <span aria-hidden="true" className="mt-0.5 text-sienna-700">•</span>
          <span>
            Seven standard{" "}
            <Link href="/collections#finishes" className="text-link underline decoration-nickel underline-offset-4">
              colors and three textures
            </Link>
            ; custom colors and finishes on request
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span aria-hidden="true" className="mt-0.5 text-sienna-700">•</span>
          <span>Standard and custom dimensions</span>
        </li>
        {isFireplace && (
          <li className="flex items-start gap-2">
            <span aria-hidden="true" className="mt-0.5 text-sienna-700">•</span>
            <span>Non-combustible, so it can sit directly next to the firebox opening; quoted with installation by our team</span>
          </li>
        )}
        <li className="flex items-start gap-2">
          <span aria-hidden="true" className="mt-0.5 text-sienna-700">•</span>
          <span>Packed by hand and cast in Atascadero, California</span>
        </li>
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
      <dl className={`divide-y divide-nickel/40 ${columns ? "border-y border-nickel/40" : ""}`}>
        {rows.map((row) => (
          <div
            key={row.label}
            className={`py-3 ${columns ? "md:grid md:grid-cols-[11rem_minmax(0,1fr)] md:gap-x-8 md:py-4" : ""}`}
          >
            <dt className="text-small font-medium text-basalt">{row.label}</dt>
            <dd className={`mt-1 text-small text-clay ${columns ? "md:mt-0" : ""}`}>{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
