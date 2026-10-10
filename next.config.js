/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // WebP only: measured on this site's photos, sharp's AVIF output was 40-75% larger and
    // 20-30x slower to encode (the hero: 312 KB in 11.9 s vs 176 KB in 0.4 s at quality 75).
    formats: ['image/webp'],
    minimumCacheTTL: 60 * 60 * 4, // 4 h (the Next 16 default): avoids per-minute revalidation and re-encodes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Legacy URLs from the previous 101caststone.com site (scraped-content/scraped-data.json).
  // Product pages land on the matching product page (/collections/<slug>); category pages
  // land on their section of /collections. Legacy slugs don't always match titles:
  // /tangled is Genoa, /tangled-arched is Tangled, /royal is Santa Barbara, /daou is
  // Contemporary Surround, /benches is titled Customs.
  async redirects() {
    const to = (destination, sources, permanent = true) =>
      sources.map((source) => ({ source, destination, permanent }));
    return [
      ...to('/collections', ['/products', '/cast-stone']),
      ...to('/collections#mantels', ['/fireplace-mantels-1']),
      ...to('/collections/santa-barbara', ['/royal']),
      ...to('/collections/genoa', ['/tangled']),
      ...to('/collections/contemporary-surround', ['/daou']),
      ...to('/collections/heritage', ['/heritage']),
      ...to('/collections/provence', ['/provence']),
      ...to('/collections/pacifica', ['/pacifica']),
      ...to('/collections/cambridge', ['/cambridge']),
      ...to('/collections/chateau', ['/french-chateau']),
      ...to('/collections/royal-acanthus', ['/royal-acanthus']),
      ...to('/collections/milagro', ['/milagro']),
      ...to('/collections/tangled', ['/tangled-arched']),
      ...to('/collections/columns', ['/columns']),
      ...to('/collections/corbels', ['/corbels']),
      ...to('/collections/balustrades', ['/balustrades']),
      ...to('/collections/pilaster-caps', ['/pilaster-caps']),
      ...to('/collections/crown-molding', ['/crown-molding']),
      ...to('/collections/door-window-trims', ['/door-trims', '/surrounds']),
      ...to('/collections/benches-seat-walls', ['/benches']),
      ...to('/collections/outdoor-fireplaces', ['/outdoor-fireplaces']),
      ...to('/collections/fire-pits', ['/outdoor-firepits']),
      ...to('/collections/fountains', ['/custom-fountains']),
      ...to('/collections/pavers', ['/pavers']),
      ...to('/collections/stair-treads', ['/treads']),
      ...to('/collections/window-sills', ['/sills']),
      ...to('/collections/wall-caps', ['/wall-caps']),
      ...to('/collections/kitchen-hoods', ['/kitchen-hoods']),
      ...to('/collections#finishes', ['/stone-colors-finishes']),
      ...to('/works', ['/gallery']),
      ...to('/process', ['/design-manufacturing-process']),
      ...to('/about', ['/about-us']),
      // Not permanent, so it can be repointed if a dedicated page is added later
      ...to('/works', ['/testimonials'], false),
    ];
  },
  // webpack: (config) => {
  //   // Shader files support (for future 3D implementation)
  //   config.module.rules.push({
  //     test: /\.(glsl|vs|fs|vert|frag)$/,
  //     exclude: /node_modules/,
  //     use: ['raw-loader', 'glslify-loader'],
  //   });

  //   return config;
  // },
};

module.exports = nextConfig;
