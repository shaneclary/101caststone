/**
 * 101 Cast Stone Website Scraper
 *
 * Scrapes images and content from 101caststone.com (Wix site)
 * Uses Puppeteer to handle JavaScript-rendered content
 *
 * Usage: node scripts/scrape-101caststone.js
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// All pages to scrape (from sitemap)
const PAGES = [
  { slug: '', name: 'Home' },
  { slug: 'products', name: 'Products' },
  { slug: 'cast-stone', name: 'Cast Stone' },
  { slug: 'gallery', name: 'Gallery' },
  // Fireplace Mantels
  { slug: 'fireplace-mantels-1', name: 'Fireplace Mantels', category: 'Fireplace Mantels' },
  { slug: 'surrounds', name: 'Surrounds', category: 'Fireplace Mantels' },
  { slug: 'royal', name: 'Royal', category: 'Fireplace Mantels' },
  { slug: 'heritage', name: 'Heritage', category: 'Fireplace Mantels' },
  { slug: 'pacifica', name: 'Pacifica', category: 'Fireplace Mantels' },
  { slug: 'cambridge', name: 'Cambridge', category: 'Fireplace Mantels' },
  { slug: 'provence', name: 'Provence', category: 'Fireplace Mantels' },
  { slug: 'french-chateau', name: 'French Chateau', category: 'Fireplace Mantels' },
  { slug: 'royal-acanthus', name: 'Royal Acanthus', category: 'Fireplace Mantels' },
  { slug: 'milagro', name: 'Milagro', category: 'Fireplace Mantels' },
  { slug: 'tangled', name: 'Tangled', category: 'Fireplace Mantels' },
  { slug: 'tangled-arched', name: 'Tangled Arched', category: 'Fireplace Mantels' },
  // Architectural Elements
  { slug: 'columns', name: 'Columns', category: 'Architectural Elements' },
  { slug: 'corbels', name: 'Corbels', category: 'Architectural Elements' },
  { slug: 'balustrades', name: 'Balustrades', category: 'Architectural Elements' },
  { slug: 'pilaster-caps', name: 'Pilaster Caps', category: 'Architectural Elements' },
  { slug: 'crown-molding', name: 'Crown Molding', category: 'Architectural Elements' },
  { slug: 'door-trims', name: 'Door Trims', category: 'Architectural Elements' },
  // Outdoor
  { slug: 'outdoor-fireplaces', name: 'Outdoor Fireplaces', category: 'Outdoor' },
  { slug: 'outdoor-firepits', name: 'Outdoor Firepits', category: 'Outdoor' },
  { slug: 'custom-fountains', name: 'Custom Fountains', category: 'Outdoor' },
  { slug: 'benches', name: 'Benches', category: 'Outdoor' },
  { slug: 'pavers', name: 'Pavers', category: 'Outdoor' },
  // Functional Elements
  { slug: 'treads', name: 'Treads', category: 'Functional Elements' },
  { slug: 'sills', name: 'Sills', category: 'Functional Elements' },
  { slug: 'wall-caps', name: 'Wall Caps', category: 'Functional Elements' },
  { slug: 'kitchen-hoods', name: 'Kitchen Hoods', category: 'Functional Elements' },
  // Info Pages
  { slug: 'about-us', name: 'About Us', category: 'Info' },
  { slug: 'stone-colors-finishes', name: 'Stone Colors & Finishes', category: 'Info' },
  { slug: 'design-manufacturing-process', name: 'Design & Manufacturing Process', category: 'Info' },
  { slug: 'technical-info', name: 'Technical Info', category: 'Info' },
  { slug: 'testimonials', name: 'Testimonials', category: 'Info' },
  { slug: 'faq', name: 'FAQ', category: 'Info' },
  // Special projects
  { slug: 'daou', name: 'Daou Winery', category: 'Projects' },
];

const BASE_URL = 'https://www.101caststone.com';
const OUTPUT_DIR = path.join(__dirname, '..', 'scraped-content');
const IMAGES_DIR = path.join(OUTPUT_DIR, 'images');

// Track all scraped data
const scrapedData = {
  scrapedAt: new Date().toISOString(),
  source: BASE_URL,
  pages: [],
  allImages: []
};

// Ensure directories exist
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Download an image
async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    const file = fs.createWriteStream(filepath);
    protocol.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(filepath);
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete partial file
      reject(err);
    });
  });
}

// Extract clean filename from URL
function getImageFilename(url, pageSlug, index) {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const ext = path.extname(pathname) || '.jpg';
    const baseName = path.basename(pathname, ext).substring(0, 50); // Limit length
    const cleanBase = baseName.replace(/[^a-zA-Z0-9-_]/g, '_') || 'image';
    return `${pageSlug}_${cleanBase}_${index}${ext}`;
  } catch {
    return `${pageSlug}_image_${index}.jpg`;
  }
}

// Scrape a single page
async function scrapePage(browser, pageInfo) {
  const page = await browser.newPage();
  const url = pageInfo.slug ? `${BASE_URL}/${pageInfo.slug}` : BASE_URL;

  console.log(`\n📄 Scraping: ${pageInfo.name} (${url})`);

  try {
    // Set viewport for better rendering
    await page.setViewport({ width: 1920, height: 1080 });

    // Navigate and wait for content
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 60000
    });

    // Wait a bit more for Wix dynamic content
    await new Promise(r => setTimeout(r, 3000));

    // Scroll to load lazy images
    await autoScroll(page);

    // Wait for images to load
    await new Promise(r => setTimeout(r, 2000));

    // Extract page content
    const pageData = await page.evaluate(() => {
      // Get page title
      const title = document.querySelector('h1')?.innerText ||
                    document.querySelector('[data-testid="richTextElement"] h1')?.innerText ||
                    document.title;

      // Get all text content (paragraphs, spans with content)
      const textElements = document.querySelectorAll('p, [data-testid="richTextElement"], h2, h3, h4, h5, h6');
      const textContent = Array.from(textElements)
        .map(el => el.innerText?.trim())
        .filter(text => text && text.length > 10)
        .filter((text, index, self) => self.indexOf(text) === index); // Remove duplicates

      // Get all images
      const images = Array.from(document.querySelectorAll('img'))
        .map(img => ({
          src: img.src || img.dataset.src,
          alt: img.alt || '',
          width: img.naturalWidth || img.width,
          height: img.naturalHeight || img.height
        }))
        .filter(img => {
          if (!img.src) return false;
          // Filter out tiny images, icons, logos
          if (img.width && img.width < 100) return false;
          // Filter out common non-content images
          if (img.src.includes('static.wixstatic.com/media/') &&
              !img.src.includes('_icon') &&
              !img.src.includes('logo')) {
            return true;
          }
          return img.src.includes('101caststone') ||
                 img.src.includes('wixstatic');
        });

      // Get any product/item titles
      const itemTitles = Array.from(document.querySelectorAll('[data-hook="product-item-name"], .product-title, h2, h3'))
        .map(el => el.innerText?.trim())
        .filter(text => text && text.length > 2 && text.length < 100);

      return {
        title,
        textContent,
        images,
        itemTitles
      };
    });

    // Create page directory for images
    const pageSlug = pageInfo.slug || 'home';
    const pageImagesDir = path.join(IMAGES_DIR, pageSlug);
    ensureDir(pageImagesDir);

    // Download images
    const downloadedImages = [];
    for (let i = 0; i < pageData.images.length; i++) {
      const img = pageData.images[i];
      if (!img.src) continue;

      try {
        // Get high-res version if it's a Wix image
        let imgUrl = img.src;
        if (imgUrl.includes('wixstatic.com')) {
          // Remove Wix image transformations to get original
          imgUrl = imgUrl.split('/v1/')[0] + '/v1/fill/w_1920,h_1920,al_c,q_90/' +
                   imgUrl.split('/').pop().split('?')[0];
        }

        const filename = getImageFilename(imgUrl, pageSlug, i);
        const filepath = path.join(pageImagesDir, filename);

        console.log(`  📷 Downloading: ${filename}`);
        await downloadImage(imgUrl, filepath);

        downloadedImages.push({
          originalUrl: img.src,
          localPath: path.relative(OUTPUT_DIR, filepath),
          alt: img.alt,
          filename
        });

        scrapedData.allImages.push({
          page: pageInfo.name,
          category: pageInfo.category,
          ...downloadedImages[downloadedImages.length - 1]
        });

      } catch (err) {
        console.log(`  ⚠️ Failed to download image: ${err.message}`);
      }
    }

    // Store page data
    const result = {
      name: pageInfo.name,
      slug: pageSlug,
      url,
      category: pageInfo.category || 'General',
      title: pageData.title,
      content: pageData.textContent,
      itemTitles: pageData.itemTitles,
      images: downloadedImages,
      imageCount: downloadedImages.length
    };

    scrapedData.pages.push(result);

    console.log(`  ✅ Found ${pageData.textContent.length} text blocks, ${downloadedImages.length} images`);

    await page.close();
    return result;

  } catch (err) {
    console.log(`  ❌ Error scraping ${pageInfo.name}: ${err.message}`);
    await page.close();
    return null;
  }
}

// Auto-scroll to trigger lazy loading
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 500;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0); // Scroll back to top
          resolve();
        }
      }, 200);
    });
  });
}

// Main scraping function
async function scrape() {
  console.log('🚀 Starting 101 Cast Stone scraper...\n');
  console.log(`📁 Output directory: ${OUTPUT_DIR}`);

  // Setup directories
  ensureDir(OUTPUT_DIR);
  ensureDir(IMAGES_DIR);

  // Launch browser
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    // Scrape all pages
    for (const pageInfo of PAGES) {
      await scrapePage(browser, pageInfo);
      // Small delay between pages to be respectful
      await new Promise(r => setTimeout(r, 1000));
    }

    // Save scraped data to JSON
    const jsonPath = path.join(OUTPUT_DIR, 'scraped-data.json');
    fs.writeFileSync(jsonPath, JSON.stringify(scrapedData, null, 2));
    console.log(`\n📊 Saved data to: ${jsonPath}`);

    // Generate summary markdown
    const summaryPath = path.join(OUTPUT_DIR, 'SUMMARY.md');
    const summary = generateSummary(scrapedData);
    fs.writeFileSync(summaryPath, summary);
    console.log(`📝 Saved summary to: ${summaryPath}`);

    // Print stats
    console.log('\n' + '='.repeat(50));
    console.log('📊 SCRAPING COMPLETE');
    console.log('='.repeat(50));
    console.log(`Pages scraped: ${scrapedData.pages.length}`);
    console.log(`Total images: ${scrapedData.allImages.length}`);
    console.log(`Output directory: ${OUTPUT_DIR}`);

  } finally {
    await browser.close();
  }
}

// Generate markdown summary
function generateSummary(data) {
  let md = `# 101 Cast Stone - Scraped Content\n\n`;
  md += `Scraped on: ${data.scrapedAt}\n`;
  md += `Source: ${data.source}\n\n`;
  md += `## Statistics\n`;
  md += `- Total pages: ${data.pages.length}\n`;
  md += `- Total images: ${data.allImages.length}\n\n`;

  // Group by category
  const categories = {};
  for (const page of data.pages) {
    const cat = page.category || 'General';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(page);
  }

  md += `## Content by Category\n\n`;

  for (const [category, pages] of Object.entries(categories)) {
    md += `### ${category}\n\n`;
    for (const page of pages) {
      md += `#### ${page.name}\n`;
      md += `- URL: ${page.url}\n`;
      md += `- Images: ${page.imageCount}\n`;
      if (page.title) md += `- Title: ${page.title}\n`;
      if (page.content && page.content.length > 0) {
        md += `- Content:\n`;
        for (const text of page.content.slice(0, 5)) {
          md += `  > ${text.substring(0, 200)}${text.length > 200 ? '...' : ''}\n`;
        }
      }
      md += `\n`;
    }
  }

  md += `## All Images\n\n`;
  md += `| Page | Category | Filename | Alt Text |\n`;
  md += `|------|----------|----------|----------|\n`;
  for (const img of data.allImages) {
    md += `| ${img.page} | ${img.category || 'General'} | ${img.filename} | ${img.alt || '-'} |\n`;
  }

  return md;
}

// Run the scraper
scrape().catch(console.error);
