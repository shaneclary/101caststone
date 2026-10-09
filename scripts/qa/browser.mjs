// Shared setup for the QA scripts: finds Playwright, Chromium and axe-core wherever they are installed.
// Needs Playwright (project or global install) and, for audit.mjs, axe-core:
//   npm install --no-save axe-core@4.10.2
import { createRequire } from "node:module";
import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

function requireFrom(paths, id) {
  for (const base of paths) {
    try {
      return createRequire(join(base, "noop.js"))(id);
    } catch {
      // try the next location
    }
  }
  throw new Error(`Cannot find ${id}; install it (npm install --no-save ${id}) or globally.`);
}

const globalRoot = (() => {
  try {
    return execSync("npm root -g", { encoding: "utf8" }).trim();
  } catch {
    return "/opt/node22/lib/node_modules";
  }
})();
const searchPaths = [process.cwd(), globalRoot];

export const { chromium } = requireFrom(searchPaths, "playwright");

const KNOWN_CHROMIUM = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
export function launchBrowser() {
  const executablePath = process.env.CHROMIUM_PATH || (existsSync(KNOWN_CHROMIUM) ? KNOWN_CHROMIUM : undefined);
  return chromium.launch(executablePath ? { executablePath } : {});
}

export function axeSource() {
  for (const base of searchPaths) {
    const file = join(base, "node_modules/axe-core/axe.min.js");
    if (existsSync(file)) return readFileSync(file, "utf8");
  }
  throw new Error("axe-core not found: npm install --no-save axe-core@4.10.2");
}
