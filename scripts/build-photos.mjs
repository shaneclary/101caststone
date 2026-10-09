// Builds optimised product and portfolio photos from the scraped originals.
//
//   node scripts/build-photos.mjs scripts/photos.manifest.json
//
// Each manifest entry: { "src": "<folder>/<file> (relative to scraped-content/images)",
//   "out": "<path relative to public/images>", "aspect": "4:3" | "3:2" | "1:1" | "free",
//   "width": 1600, "focus": "centre" | "top" | "bottom" | [x, y, w, h] (after trim) }
// Scraped files are 1920x1920 with the photo letterboxed inside; bars are trimmed first.
import { createRequire } from "node:module";
import { mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const manifestPath = process.argv[2];
if (!manifestPath) {
  console.error("usage: node scripts/build-photos.mjs <manifest.json>");
  process.exit(1);
}
const entries = JSON.parse(readFileSync(manifestPath, "utf8"));
const sourceRoot = join(process.cwd(), "scraped-content/images");
const outputRoot = join(process.cwd(), "public/images");

const RATIOS = { "4:3": 4 / 3, "3:2": 3 / 2, "1:1": 1, free: null };

async function trimmed(file) {
  // Letterbox bars are near-black or near-white; trim both with a tolerant threshold.
  const image = sharp(file).trim({ threshold: 40 });
  const meta = await image.metadata();
  const buffer = await image.toBuffer();
  const trimmedMeta = await sharp(buffer).metadata();
  return { buffer, width: trimmedMeta.width ?? meta.width, height: trimmedMeta.height ?? meta.height };
}

function cropBox(width, height, aspect, focus) {
  if (Array.isArray(focus)) {
    const [left, top, w, h] = focus;
    return { left, top, width: w, height: h };
  }
  const ratio = RATIOS[aspect] ?? null;
  if (!ratio) return { left: 0, top: 0, width, height };
  let w = width;
  let h = Math.round(width / ratio);
  if (h > height) {
    h = height;
    w = Math.round(height * ratio);
  }
  const left = Math.round((width - w) / 2);
  const top = focus === "top" ? 0 : focus === "bottom" ? height - h : Math.round((height - h) / 2);
  return { left, top, width: w, height: h };
}

let total = 0;
for (const entry of entries) {
  const { buffer, width, height } = await trimmed(join(sourceRoot, entry.src));
  const box = cropBox(width, height, entry.aspect ?? "4:3", entry.focus ?? "centre");
  const outPath = join(outputRoot, entry.out);
  mkdirSync(dirname(outPath), { recursive: true });
  await sharp(buffer)
    .extract(box)
    .resize({ width: Math.min(entry.width ?? 1600, box.width), withoutEnlargement: true })
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(outPath);
  const kb = Math.round(statSync(outPath).size / 1024);
  total += kb;
  console.log(`${entry.out}  ${box.width}x${box.height} -> ${kb} KB`);
}
console.log(`${entries.length} photos, ${Math.round(total / 1024 * 10) / 10} MB`);
