# Fable report: design, voice and final review

Session of 2026-10-10 on `claude/optimize-customer-experience`, following `docs/FABLE_HANDOFF.md`.
Four commits, pushed; no pull request.

## What changed

**Design foundation** (`tailwind.config.ts`, `globals.css`, `layout.tsx`, `Navigation.tsx`, `SectionTitle.tsx`, new `ClosingCta.tsx`)
- One type scale as tokens (display, title, heading, lead, body, small, caption, eyebrow); h1/h2/h3 defaults
  in basalt; body at 17px/1.7. One 3px radius. Fade-in and rise keyframes (the dialogs now animate).
- One button system: `.btn` at 48px (40px in the header), hairline border, colour-only hover; a brand focus ring.
- Header: trimmed wordmark (`oneline-trim.png`, alpha fringe removed) on the same `.wrap` container as every
  section and the footer. Footer: four columns, hours read from `showroom` under a "Factory Showroom Hours"
  label, pages column, trimmed shield, mobile tab-bar clearance on the footer itself (no ivory strip).
- A shared basalt closing band replaces the seven different page closers; primary label unified to
  "Begin a Conversation", secondary defaults to the phone number.
- The site menu lists Technical Information.

**Home** (`src/app/page.tsx`)
- First screen: the photo keeps the lead; the H1, a sourced subhead and two CTAs sit on a panel at the
  lower-left of the frame from md up (hero height `100svh - header`) and directly beneath it on phones.
- Then: the four collections with piece counts (data from `products.ts`), the workshop with the real
  manufacturing-floor and mould-shop photos and the four Lintel Method steps in the owner's words, six
  installations from the curated portfolio with always-visible captions (no grid hole), the customer list,
  a showroom band (address, hours, weekend-appointment request), the closing band.
- Removed: the blur-blob workshop, the duplicated pillars, "21st-century precision", "finished by hand",
  "engineered for accuracy", "hand-tooled to whisper", "Garden Ornaments … courtyards".

**Catalogue** (`collections/page.tsx`, `collections/[slug]/page.tsx`, `ProductModal`, `ProductSpec`, `PhotoGallery`, `products.ts`)
- Card photos (each inside its own folder): Heritage 02, Provence 03, Cambridge 03, Chateau 03,
  Balustrades 05, Door & Window Trims 02. The rest keep their card.
- Cards: eyebrow style, display-face name, three-line description, aligned footer with "View Details"
  (quick view, stretched target) and a visible "Product page" link (above the stretched target, so the
  catalogue is crawlable). Phones get a compact two-column grid with the description hidden.
- Overlap resolved: the quick view keeps gallery, description and an "In brief" list (colors linked to
  #finishes, dimensions, fireplace note, packed by hand) and links to the full page; the product page
  carries the full specification only, anchored from a "Specification" button.
- Product page: title beside the gallery on a 12-column grid, related pieces in the card style, a
  piece-specific closing band.

**Inner pages**
- Works: title and intro beside the featured mantel at its native 4:3 (shelf and hearth in frame).
- Process: photos lead; six ruled steps; the delivery sentence appears once; the "tolerances" line is gone.
- Commissions: a photo per category, stone masonry as a full-width band (no orphan card), the undefined
  `animate-delay-400/500/600` removed.
- FAQ: plus-icon affordance with rotation and hover; the non-combustible point is made once.
- Contact: two-column form, eyebrow labels over larger values, ivory controls, the sourced site-measure note.
- About, Technical Information and the 404 page on the shared scale.

**Voice**: every headline, intro, product description, page body and metadata title/description polished to
short declarative sentences and concrete nouns. Every fact restates `company.ts`, `products.ts` (features
visible in the photos) or the scraped live site. "The Lintel Method" and "Maison California" kept.

## Verification (final build)

| Check | Result |
| --- | --- |
| `npm test` | 23 pass, 0 fail |
| `npx tsc --noEmit` | clean |
| `npx next lint` | no warnings or errors |
| `npx next build` | 43 static pages |
| `scripts/qa/flows.mjs` | 33 / 33 pass |
| `scripts/qa/audit.mjs` | 0 axe violations on 44 route × viewport × motion entries; 0 invisible text blocks; no console errors or failed requests (the 404 route's own 404 aside) |

Screenshots reviewed at 1440 and 390 for every route, plus the quick view, lightbox, open menu, card hover
and keyboard focus. Note: the audit's full-page captures can show lazy images still loading; images were
confirmed with instant-scroll captures and direct optimizer requests (40–80 ms each).

## Best-in-field review

Compared with Haddonstone, Chesney's, Old World Stoneworks, Francois & Co and Continental Cast Stone
(WebSearch; fetches to the sites are blocked here). What still separates this site, ranked:

1. **Dimensions per piece.** Haddonstone and Chesney's publish overall, opening and shelf sizes (and
   weights) on every mantel page. Owner data needed (handoff item 7).
2. **Downloadable documents.** Haddonstone offers brochures and a price list; the three 101 PDFs are
   "sent on request" until the owner supplies the files.
3. **Price signals.** Both UK benchmarks show prices; 101 shows none (owner decision, handoff item 8).
4. **Trade specification.** Continental Cast Stone is listed under CSI 04 72 00 with test data; 101 has
   the material and care spec but no ASTM C1364 results or membership (owner item 8).
5. **Named projects and testimonials.** The benchmarks show case studies; 101 lists customer names only,
   until the owner grants quotes and confirms the Daou installation.
6. **Photography.** Benchmarks use styled, professional shots; 101's are phone photos of job sites. The
   strongest were chosen for cards and the home page; a shoot is the next lever.

Fixed from the sources in this round: the first-screen statement, product pages reachable from the
catalogue, specification on every product page, the showroom as a place to visit, the customer list on the
home page, documents requestable per title, consistent CTAs.

## Owner decisions still open (unchanged, listed per the handoff)

1. Founding year: "Est. 2001" (header, footer) versus the About page's "summer of 2006".
2. Main phone: the live site's showroom line (805) 460-6060 versus the 610-9278 shown here.
3. Whether info@101caststone.com is a monitored mailbox.
4. Resend settings in Vercel (`RESEND_API_KEY`, `INQUIRY_FROM_EMAIL`); until set, inquiries end in the
   email-app hand-off.
5. The "We typically respond within 1–2 business days" promise (shown in the form, the result panel and
   the quick view).
6. Lead time "2 to 3 weeks": still current?
7. The other four standard color names (static.wixstatic.com is still blocked, so the chart could not be
   fetched), dimensions and opening sizes per mantel, the three PDFs, Casa Blanca and Barcelona, "Custom
   Ordered Limestone Installations", "Pilaster Caps" versus "Pier Caps", whether Fire Pits get the
   fireplace notes.
8. Hero photo provenance, warranty, test data, reviews, pricing.

## Now-unreferenced files (left in place; delete only on the owner's say-so)

- `public/images/logos/oneline.png`, `shield-nobg.png` (replaced by the trimmed versions), `101timelesslogo.png`.
- `public/images/collections/**` (23 category tiles) and `public/images/gallery/*.jpg` (9): the home page
  now uses product card photos and the curated portfolio.
