// End-to-end customer-flow checks against a running build.
// Usage (against a running build): node scripts/qa/flows.mjs <baseUrl> <outDir>
import { launchBrowser } from "./browser.mjs";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const baseUrl = process.argv[2] ?? "http://localhost:3001";
const outDir = process.argv[3] ?? "./flows-out";
mkdirSync(outDir, { recursive: true });

const results = [];
async function check(name, fn) {
  try {
    const detail = await fn();
    results.push({ name, ok: true, detail: detail ?? "" });
  } catch (error) {
    results.push({ name, ok: false, detail: String(error?.message ?? error).slice(0, 500) });
  }
}
function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const browser = await launchBrowser();
const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

// Redirects from the old live site.
for (const [from, expected] of [
  ["/heritage", "/collections#heritage"],
  ["/tangled-arched", "/collections#tangled"],
  ["/door-trims", "/collections#door-window-trims"],
  ["/fireplace-mantels-1", "/collections#mantels"],
  ["/gallery", "/works"],
  ["/design-manufacturing-process", "/process"],
  ["/technical-info", "/faq"],
]) {
  await check(`redirect ${from}`, async () => {
    const response = await fetch(baseUrl + from, { redirect: "manual" });
    const location = response.headers.get("location") ?? "";
    assert([301, 307, 308].includes(response.status), `status ${response.status}`);
    assert(location.endsWith(expected), `location ${location}`);
    return `${response.status} -> ${location}`;
  });
}

for (const path of ["/icon.png", "/apple-icon.png", "/images/og/og-default.jpg", "/faq", "/sitemap.xml"]) {
  await check(`asset ${path} is served`, async () => {
    const response = await fetch(baseUrl + path);
    assert(response.status === 200, `status ${response.status}`);
    return `${response.status} ${response.headers.get("content-type")}`;
  });
}

await check("per-page titles are distinct", async () => {
  const page = await desktop.newPage();
  const titles = {};
  for (const path of ["/", "/collections", "/works", "/process", "/commissions", "/contact", "/faq", "/nope"]) {
    await page.goto(baseUrl + path);
    titles[path] = await page.title();
  }
  await page.close();
  const unique = new Set(Object.values(titles));
  assert(unique.size === Object.keys(titles).length, JSON.stringify(titles));
  return JSON.stringify(titles);
});

await check("collections deep link opens the product and Back closes it", async () => {
  const page = await desktop.newPage();
  await page.goto(baseUrl + "/collections");
  await page.getByRole("button", { name: /View Details.*Provence/i }).click();
  await page.getByRole("dialog").waitFor();
  assert(page.url().endsWith("#provence"), `url ${page.url()}`);
  await page.goBack();
  await page.waitForTimeout(400);
  assert((await page.getByRole("dialog").count()) === 0, "dialog still open after Back");
  assert(page.url().includes("/collections"), `left collections: ${page.url()}`);
  await page.goto(baseUrl + "/collections#heritage");
  await page.getByRole("dialog").waitFor({ timeout: 4000 });
  const title = await page.getByRole("dialog").getByRole("heading").first().textContent();
  assert(/Heritage/.test(title ?? ""), `dialog title ${title}`);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(400);
  assert((await page.getByRole("dialog").count()) === 0, "Escape did not close");
  assert(page.url().includes("/collections"), `Escape navigated away: ${page.url()}`);
  // Give the dialog a moment to release its scroll lock, as a person would before clicking on.
  await page.waitForTimeout(600);
  await page.goto(baseUrl + "/collections#outdoor");
  await page.waitForTimeout(600);
  assert((await page.getByRole("dialog").count()) === 0, "category hash opened a dialog");
  const outdoorTop = await page.locator("#outdoor").evaluate((el) => el.getBoundingClientRect().top);
  assert(Math.abs(outdoorTop) < 200, `#outdoor not scrolled into view (top=${outdoorTop})`);
  await page.close();
});

await check("product inquiry carries the product into the form", async () => {
  const page = await mobile.newPage();
  await page.goto(baseUrl + "/collections#royal-acanthus");
  await page.getByRole("dialog").waitFor({ timeout: 4000 });
  await page.screenshot({ path: join(outDir, "modal-mobile.png") });
  await page.getByRole("link", { name: /Inquire About This Piece/i }).click();
  await page.waitForURL(/\/contact\?product=/);
  const value = await page.getByLabel(/Piece of interest/i).inputValue();
  assert(value === "Royal Acanthus", `prefill ${value}`);
  await page.close();
});

await check("inquiry form: validation, then graceful hand-off when the email service is not configured", async () => {
  const page = await desktop.newPage();
  await page.goto(baseUrl + "/contact?product=Provence");
  await page.getByRole("button", { name: /send|submit/i }).click();
  const invalid = await page.locator('[aria-invalid="true"]').count();
  assert(invalid >= 3, `expected >=3 invalid fields, got ${invalid}`);
  const focusedName = await page.evaluate(() => document.activeElement?.getAttribute("name"));
  assert(focusedName === "name", `focus on ${focusedName}`);
  await page.getByLabel(/^Name/i).fill("Test Visitor");
  await page.getByLabel(/^Email/i).fill("visitor@example.com");
  await page.getByLabel(/Project type/i).selectOption("Fireplace mantel");
  await page.getByLabel(/Tell us|Message|project/i).last().fill("Looking for a Provence mantel, 42in firebox.");
  await page.getByRole("button", { name: /send|submit/i }).click();
  const handoff = page.getByRole("link", { name: /Open in email app/i });
  await handoff.waitFor({ timeout: 6000 });
  const href = await handoff.getAttribute("href");
  assert(href?.startsWith("mailto:info@101caststone.com?subject=Project%20inquiry%3A%20Provence"), `href ${href}`);
  await page.screenshot({ path: join(outDir, "contact-handoff.png"), fullPage: true });
  await page.getByRole("button", { name: /Back to the form/i }).click();
  const kept = await page.getByLabel(/^Email/i).inputValue();
  assert(kept === "visitor@example.com", `values lost: ${kept}`);
  await page.close();
});

await check("API rejects bad input and junk", async () => {
  const bad = await fetch(baseUrl + "/api/inquiry", { method: "POST", body: "not json", headers: { "content-type": "application/json" } });
  assert(bad.status === 400, `junk -> ${bad.status}`);
  const invalid = await fetch(baseUrl + "/api/inquiry", { method: "POST", body: JSON.stringify({ name: "", email: "x" }), headers: { "content-type": "application/json" } });
  assert(invalid.status === 400, `invalid -> ${invalid.status}`);
  const spam = await fetch(baseUrl + "/api/inquiry", { method: "POST", body: JSON.stringify({ name: "a", email: "a@b.co", message: "hi", website: "x" }), headers: { "content-type": "application/json" } });
  assert(spam.status === 200, `spam -> ${spam.status}`);
  const big = await fetch(baseUrl + "/api/inquiry", { method: "POST", body: "x".repeat(30000), headers: { "content-type": "application/json" } });
  assert(big.status === 413, `big -> ${big.status}`);
  return `junk 400, invalid 400, spam 200, big 413`;
});

await check("desktop menu: aria-expanded, Escape closes and restores focus, outside click closes", async () => {
  const page = await desktop.newPage();
  await page.goto(baseUrl + "/works");
  const toggle = page.getByRole("button", { name: /^Menu$/ });
  await toggle.click();
  assert((await toggle.getAttribute("aria-expanded")) === "true", "aria-expanded not true");
  const current = await page.locator('[aria-current="page"]').allTextContents();
  assert(current.some((t) => /Works/.test(t)), `aria-current ${current}`);
  await page.keyboard.press("Escape");
  assert((await toggle.getAttribute("aria-expanded")) === "false", "Escape did not close");
  assert(await toggle.evaluate((el) => el === document.activeElement), "focus not returned to toggle");
  await toggle.click();
  // Click empty page margin (the middle of /works is now a grid of photo buttons).
  await page.mouse.click(30, 450);
  assert((await toggle.getAttribute("aria-expanded")) === "false", "outside click did not close");
  await page.close();
});

await check("mobile: bottom nav has 5 tabs, does not cover the footer, sits under an open modal", async () => {
  const page = await mobile.newPage();
  await page.goto(baseUrl + "/");
  const tabs = await page.getByRole("navigation", { name: "Primary" }).getByRole("link").count();
  assert(tabs === 5, `tabs ${tabs}`);
  await page.evaluate(() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "instant" }));
  await page.waitForTimeout(300);
  const covered = await page.evaluate(() => {
    const copyright = [...document.querySelectorAll("footer *")].find((el) => /All rights reserved/.test(el.textContent ?? "") && el.children.length === 0);
    const nav = document.querySelector('nav[aria-label="Primary"]');
    if (!copyright || !nav) return "missing";
    return copyright.getBoundingClientRect().bottom > nav.getBoundingClientRect().top ? "covered" : "clear";
  });
  assert(covered === "clear", `footer ${covered}`);
  await page.close();
});

await check("reduced motion: nothing stays invisible", async () => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
  const page = await context.newPage();
  const hidden = {};
  for (const path of ["/", "/works", "/process", "/commissions", "/contact", "/faq"]) {
    await page.goto(baseUrl + path, { waitUntil: "networkidle" });
    await page.waitForTimeout(300);
    hidden[path] = await page.evaluate(() => [...document.querySelectorAll("main *")].filter((el) => getComputedStyle(el).opacity === "0" && (el.textContent ?? "").trim()).length);
  }
  await context.close();
  assert(Object.values(hidden).every((n) => n === 0), JSON.stringify(hidden));
  return JSON.stringify(hidden);
});

await check("home: featured tiles link to works; no dead buttons", async () => {
  const page = await desktop.newPage();
  await page.goto(baseUrl + "/");
  const deadButtons = await page.evaluate(() => [...document.querySelectorAll("main button")].map((b) => b.textContent?.trim()));
  assert(deadButtons.length === 0, `buttons on home: ${deadButtons}`);
  const tileLinks = await page.locator('main a[href="/works"]').count();
  assert(tileLinks >= 6, `links to /works: ${tileLinks}`);
  await page.close();
});

await check("redirect /surrounds goes to window & door trims", async () => {
  const response = await fetch(baseUrl + "/surrounds", { redirect: "manual" });
  const location = response.headers.get("location") ?? "";
  assert(location.endsWith("/collections#door-window-trims"), `location ${location}`);
});

await check("API refuses non-JSON bodies (cross-site form posts)", async () => {
  const response = await fetch(baseUrl + "/api/inquiry", { method: "POST", body: JSON.stringify({ name: "a", email: "a@b.co", message: "hi" }), headers: { "content-type": "text/plain" } });
  assert(response.status === 415, `status ${response.status}`);
});

await check("long emoji message falls back to the email app without crashing", async () => {
  const page = await desktop.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(String(error)));
  await page.goto(baseUrl + "/contact");
  await page.getByLabel(/^Name/i).fill("Jane Doe");
  await page.getByLabel(/^Email/i).fill("jane@example.com");
  await page.getByLabel(/Project city/i).fill("Paso Robles");
  await page.getByLabel(/Tell us|Message|project/i).last().fill("Fireplace notes 🔥 with emoji 🏛️ throughout. ".repeat(60));
  await page.getByRole("button", { name: /send|submit/i }).click();
  await page.getByRole("link", { name: /Open in email app/i }).waitFor({ timeout: 6000 });
  const text = await page.getByRole("status").first().textContent();
  assert(/longer than an email link/.test(text ?? ""), "missing shortened-message notice");
  assert(errors.length === 0, errors.join("; "));
  await page.close();
});

await check("desktop menu closes when keyboard focus moves past it", async () => {
  const page = await desktop.newPage();
  await page.goto(baseUrl + "/");
  const toggle = page.getByRole("button", { name: /^Menu$/ });
  await toggle.focus();
  await page.keyboard.press("Enter");
  assert((await toggle.getAttribute("aria-expanded")) === "true", "did not open");
  assert((await toggle.getAttribute("aria-haspopup")) === null, "aria-haspopup still set");
  for (let i = 0; i < 12; i++) await page.keyboard.press("Tab");
  assert((await toggle.getAttribute("aria-expanded")) === "false", "menu stayed open after tabbing out");
  await page.close();
});

await check("portfolio: a tile opens the lightbox, steps through photos and closes", async () => {
  const page = await desktop.newPage();
  await page.goto(baseUrl + "/works");
  const tiles = page.getByRole("button", { name: /^Open photo \d+ of \d+/ });
  const total = await tiles.count();
  assert(total >= 20, `tiles ${total}`);
  await tiles.nth(3).click();
  const dialog = page.getByRole("dialog");
  await dialog.waitFor();
  const live = dialog.locator('[aria-live="polite"]');
  assert(/^Photo 4 of/.test((await live.textContent()) ?? ""), `opened at ${await live.textContent()}`);
  await dialog.getByRole("button", { name: "Next photo" }).click();
  assert(/^Photo 5 of/.test((await live.textContent()) ?? ""), `after next ${await live.textContent()}`);
  const mounted = await dialog.locator('[aria-roledescription="carousel"] > div:first-child img').count();
  assert(mounted <= 3, `lightbox mounted ${mounted} full-size photos`);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(300);
  assert((await page.getByRole("dialog").count()) === 0, "Escape did not close");
  await page.close();
  return `${total} tiles`;
});

await check("product dialog shows a photo gallery", async () => {
  const page = await desktop.newPage();
  await page.goto(baseUrl + "/collections#chateau");
  const dialog = page.getByRole("dialog");
  await dialog.waitFor({ timeout: 4000 });
  const thumbs = await dialog.getByRole("button", { name: /^Show photo \d+ of/ }).count();
  assert(thumbs >= 3, `thumbnails ${thumbs}`);
  await page.close();
  return `${thumbs} photos`;
});

await browser.close();
writeFileSync(join(outDir, "flows.json"), JSON.stringify(results, null, 2));
for (const r of results) console.log(`${r.ok ? "PASS" : "FAIL"}  ${r.name}${r.detail ? `  — ${r.detail}` : ""}`);
console.log(`${results.filter((r) => r.ok).length}/${results.length} passed`);
