// Builds optimised product and portfolio photos from the scraped originals.
//
//   node scripts/build-photos.mjs scripts/photos.manifest.json
//
// Each manifest entry: { "src": "<folder>/<file> (relative to scraped-content/images)",
//   "out": "<path relative to public/images>", "aspect": "4:3" | "3:2" | "1:1" | "free",
//   "width": 1600, "focus": "centre" | "top" | "bottom" | [x, y, w, h], "skipTrim": true when the box is on the raw frame }
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

async function trimmed(file, skipTrim) {
  // Letterbox bars are near-black or near-white; trim both with a tolerant threshold.
  // An explicit crop box refers to the untrimmed frame, so trimming is skipped for it.
  // Transparent PNG backgrounds become the page's ivory rather than JPEG black.
  const flat = sharp(file).flatten({ background: "#F3EEE6" });
  const image = skipTrim ? flat : flat.trim({ threshold: 40 });
  const meta = await image.metadata();
  let buffer = await image.toBuffer();
  const trimmedMeta = await sharp(buffer).metadata();
  const width = trimmedMeta.width ?? meta.width;
  const height = trimmedMeta.height ?? meta.height;
  buffer = await keyOutCutoutBackground(buffer, width, height);
  return { buffer, width, height };
}

const DARK = 32;

// Product cut-outs on the live site sit on solid black. When the frame's corners are black and
// a large region connected to the edges is black, repaint that region ivory; dark shadows inside
// the object are untouched because they are not connected to the edge.
async function keyOutCutoutBackground(buffer, width, height) {
  const { data } = await sharp(buffer).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const isDark = (i) => data[i * 3] < DARK && data[i * 3 + 1] < DARK && data[i * 3 + 2] < DARK;
  const corners = [0, width - 1, (height - 1) * width, height * width - 1];
  if (!corners.every(isDark)) return buffer;

  const visited = new Uint8Array(width * height);
  const stack = [];
  for (let x = 0; x < width; x++) stack.push(x, (height - 1) * width + x);
  for (let y = 0; y < height; y++) stack.push(y * width, y * width + width - 1);
  let filled = 0;
  while (stack.length) {
    const i = stack.pop();
    if (visited[i] || !isDark(i)) continue;
    visited[i] = 1;
    filled++;
    const x = i % width;
    if (x > 0) stack.push(i - 1);
    if (x < width - 1) stack.push(i + 1);
    if (i >= width) stack.push(i - width);
    if (i + width < width * height) stack.push(i + width);
  }
  if (filled < width * height * 0.2) return buffer;

  for (let i = 0; i < width * height; i++) {
    if (visited[i]) {
      data[i * 3] = 0xf3;
      data[i * 3 + 1] = 0xee;
      data[i * 3 + 2] = 0xe6;
    }
  }
  return sharp(data, { raw: { width, height, channels: 3 } }).png().toBuffer();
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

function clampBox(box, width, height) {
  const left = Math.min(Math.max(box.left, 0), width - 1);
  const top = Math.min(Math.max(box.top, 0), height - 1);
  return { left, top, width: Math.min(box.width, width - left), height: Math.min(box.height, height - top) };
}

let total = 0;
for (const entry of entries) {
  const { buffer, width, height } = await trimmed(join(sourceRoot, entry.src), entry.skipTrim === true);
  const box = clampBox(cropBox(width, height, entry.aspect ?? "4:3", entry.focus ?? "centre"), width, height);
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
