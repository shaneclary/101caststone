# Handoff to Fable: design, voice and final review

Prepared by Opus on 2026-10-10 for the session scheduled to start at 17:00 UTC.
Repository `shaneclary/101caststone`, branch `claude/optimize-customer-experience`.

The engineering, sourcing and verification work is done (see "State of the site").
What is left needs taste and judgment: the home page's first impression, a visual
craft pass across every page, the brand voice of every string, and a final
best-in-field review. Those are yours.

## Inputs prepared for you (`docs/fable/`)

- `critique-design.json`: a senior-designer review of the current build (15 findings
  with Tailwind/CSS proposals: hero with H1 and CTA in the first viewport, one type
  scale, one button system, vertical rhythm, header wordmark trim, catalogue-grade
  collection cards, commissions photos, one closing CTA band, footer, surfaces and
  radius, works header). Treat it as your starting checklist for task 2, not as orders:
  judge each item yourself.
- `critique-homeowner.json`, `critique-trade.json`, `critique-benchmark.json`: customer
  and benchmark reviews. Most factual items in them were implemented by Opus on
  2026-10-10; the remaining ones are owner decisions or composition work for you.
- `critique-fidelity.json`: every claim the reviewer found unsupported by the sources.
  Use it while polishing voice; line numbers have drifted since it was written.
- `product-photo-notes.json`: per product, the features visible in its photos and the
  photo quality warnings (job-site clutter, TVs, soft upscales). Product copy may only
  name features listed there or visible in the photos.

## The one rule: no invented facts

Every user-facing claim must restate one of these sources. Voice may change; facts may not.

- `src/data/company.ts`: specification (material, fire, finishes, installation,
  delivery, lead time, sealing, care), customers, services, technical documents,
  the case for cast stone, showroom details. Pages quote it; do not reword the facts.
- `src/data/products.ts`: product copy. Every sentence was checked against the
  product's photos by a second pass. You may polish rhythm, but each feature named
  must stay visible in that product's photos (`public/images/products/<slug>/`).
- `scraped-content/scraped-data.json` (38 pages of the owner's live Wix site; use
  `python3 -I`), `scraped-content/BRAND-CONTENT.md` (an earlier brand rewrite; many of
  its product claims are contradicted by the photos, so treat it as voice reference,
  not as fact).

Material is "cast stone": never "limestone", "hand-carved", "carved from", "poured",
"engineered", "load-bearing" or "structural" unless the live site says so. "Packed by
hand into the mould" is sourced; "hand-finished" and "hand-tooled" are not.

## Do not act on these (owner decisions)

Leave them exactly as they are and list them in your final report.

1. Founding year: the site says "Est. 2001"; the owner's About page says "summer of 2006".
2. Main phone number: the live site's showroom line is (805) 460-6060; this site shows only 610-9278.
3. Whether info@101caststone.com is a monitored mailbox (it is not on the live site).
4. Resend settings in Vercel (`RESEND_API_KEY`, `INQUIRY_FROM_EMAIL`): until they are
   set, every inquiry ends in the "send it from your email app" hand-off.
5. The "We typically respond within 1–2 business days" promise.
6. Lead time "2 to 3 weeks" (from the owner's FAQ): still current?
7. Names of the other four standard colors (only Limestone, Bisque and Carmel Sand are
   legible on the scraped chart), dimensions and opening sizes per mantel, the three
   technical PDFs, Casa Blanca and Barcelona mantels, "Custom Ordered Limestone
   Installations", whether "Pilaster Caps" should be called "Pier Caps".
   Whether Fire Pits get the fireplace notes ("non-combustible… next to the firebox
   opening", "quoted with installation"): Outdoor Fireplaces and the mantels have them;
   fire pits do not until the owner confirms (`isFireplaceProduct` in products.ts).
8. The hero photo's provenance, warranty, test data, reviews, pricing.

## Your tasks, in order

### 1. Home page composition (`src/app/page.tsx`)

Findings from three independent reviews:

- On a 1440×900 laptop the first screen is one photo: no headline, no product words,
  no call to action. The owner deliberately separated the hero image from the brand
  statement (commit "Separate hero image and brand statement into distinct sections"),
  so keep the image-first character but make the first screen say what this is and
  offer the next step. Options: a shorter desktop hero (e.g. md:h-[72vh]) with the H1
  block rising into view, or a restrained overlay on the lower third.
- "The Workshop" section is decorative blur blobs. The real workshop photos are in
  `public/images/process/` (captions on `/process`).
- Two sections the reviewers asked for, built from sourced data: the customer list
  (`customers` in company.ts) and a showroom band (`showroom` in company.ts, the
  manufacturing-floor photo).
- "Featured Installations" uses the older `public/images/gallery/project-*.jpg` tiles;
  the curated portfolio (`src/data/portfolio.ts`, 31 photos) has stronger choices.
- Unsupported phrases on the home page that need new wording in the brand voice:
  "hand-finished with 21st-century precision", "Where ancient techniques meet
  21st-century precision", "finished by hand", "Mould — engineered for accuracy",
  "Finish — hand-tooled to whisper", "Columns & Lintels / contemporary tolerances" if
  still present, "Garden Ornaments … courtyards". Sourced alternatives: "packed by
  hand into the mould", the custom mould shop, Quality Control before delivery,
  "A material first used around 1138 in Carcassonne, France" (FAQ), "cost-effective
  alternative to natural cut limestone…" (company.ts `whyCastStone`).

### 2. Visual craft pass (all routes)

Keep the palette (ivory, sienna, sienna-700, clay, ecru, basalt, nickel) and fonts
(Cormorant Garamond display, Inter text). Keep WCAG AA: body text at least 4.5:1,
no opacity modifiers on clay or sienna text under 24px, primary CTA `bg-sienna-700
text-ivory-50`.

Look hardest at: typographic scale and rhythm between pages, section spacing, card
design consistency (collections cards, commissions cards, about cards), the mantel
comparison on phones (11 mantels take about 7 screens; consider compact two-column
cards on mobile), product page layout (`src/app/collections/[slug]/page.tsx`), the
product dialog, the portfolio grid, the footer, hover/focus states, and the
contact form. Card photos: some products have a more styled photo in their gallery
than on their card (for example Cambridge `03.jpg`); choose the strongest card photo
per product in `products.ts` (keep the photo inside the product's own folder).

Open items from the last implementation round that need your judgment:

- `/collections` cards open the dialog through a button, so the catalogue has no
  crawlable link to the product pages (they are reachable from the sitemap, redirects
  and the "More …" cards). Decide whether each card should also link visibly to
  `/collections/<slug>` (for example the product name) without muddying the click target.
- "Available Options" and "Specification" overlap (dimensions, colors and finishes,
  non-combustible, installation) in the dialog and on product pages; consider trimming
  Available Options to what is specific to the piece.
- `/process` repeats the delivery sentence in "Lead time" and in "What to Expect" step 6.
- The FAQ's "made of" answer and "Can cast stone be used next to the firebox?" both make
  the non-combustible point.
- The footer hours line is typed by hand rather than read from `showroom` in company.ts,
  and has no "Factory Showroom Hours" label.
- Commissions cards use `animate-delay-400/500/600`, which globals.css does not define.
- Commissions: seven cards in a three-column grid leave Stone Masonry alone on the last row.
- Home "Featured Installations": captions appear only on hover or keyboard focus on desktops
  with a mouse (the audit counts them as 12 invisible text blocks). Decide when recomposing.
- Both dialogs (product, lightbox) now start keyboard focus on the gallery's Next button so
  the arrow keys work at once (`dialogFocus.ts`, which looks for `data-gallery-next`). Keep
  that attribute if you restyle the gallery arrows.

### 3. Brand voice (every string)

"Proportion. Patina. Permanence." Quiet luxury: short declarative sentences,
concrete nouns, no superlatives or marketing adjectives. Polish headlines, intros,
product descriptions, About, Process, Commissions, Technical Information, FAQ
answers (keep the owner's substance), metadata titles and descriptions. Keep "The
Lintel Method" and "Maison California" (owner's marks) unless the owner says
otherwise.

### 4. Best-in-field review

Compare against the strongest sites in the field (Haddonstone, Chesney's, Old World
Stoneworks, Francois & Co, Continental Cast Stone; WebFetch to most of them fails on
this network, so rely on WebSearch). Rank what still separates this site from them,
fix what can be fixed from the sources, and list the rest as owner asks.

### 5. If `static.wixstatic.com` is reachable

It was blocked by the network policy on 2026-10-10. If it now works, the untransformed
originals are at `https://static.wixstatic.com/media/d303e4_<id>~mv2.<ext>` (ids are in
the scraped filenames). The full colour chart is
`d303e4_d290c8809e3f4ea4b84354d1c036e4a1~mv2.png`: if all seven names are legible, cut
the four missing swatches the way `public/images/finishes/colors/*` were cut and add
them to `stoneColors`. Higher-resolution originals can replace product and portfolio
photos through `scripts/build-photos.mjs` (manifest format in its header).

## State of the site

- Collections: 26 products, each with a curated card photo and a gallery of up to six
  photos (`public/images/products/<slug>/`), photo-verified copy, mantels grouped as on
  the live site (Contemporary, Traditional, Old World), product dialog with gallery,
  options and specification, and a product page per piece at `/collections/<slug>`.
- Works: 31 curated portfolio photos with a lightbox (`src/data/portfolio.ts`).
- About, Process (workshop photos, the owner's steps and lead time), Commissions
  (with stone masonry and "why cast stone"), FAQ (with FAQPage JSON-LD), Technical
  Information, Contact (inquiry form → `/api/inquiry` → Resend, or email-app hand-off).
- 36 legacy Wix URLs redirect to their new homes (`next.config.js`).
- Images are served as WebP only (AVIF measured larger and 20–30× slower here).

## Verify before every push

```sh
npm ci                                  # if node_modules is missing
npm test                                # node --test, src/lib
npx tsc --noEmit && npx next lint
npx next build && npx next start -p 3000 &
node scripts/qa/flows.mjs http://localhost:3000 ./qa-out     # 33 customer flows
npm install --no-save axe-core@4.10.2
node scripts/qa/audit.mjs http://localhost:3000 ./qa-out     # screenshots + axe, every route
```

All flows must pass and axe must report zero violations. Look at the screenshots in
`qa-out/` at both widths before committing a visual change.

## Deliverable

Commits in logical steps on `claude/optimize-customer-experience`, pushed. No pull
request. A short final report: what changed, the verification numbers, and the owner
decisions still open (the list above, updated).
