// Runtime CX audit harness: screenshots, axe-core, console errors, failed requests.
// Usage (against a running build): node scripts/qa/audit.mjs <baseUrl> <outDir> [label]
import { launchBrowser, axeSource as loadAxe } from "./browser.mjs";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const axeSource = loadAxe();

const baseUrl = process.argv[2] ?? "http://localhost:3000";
const outDir = process.argv[3] ?? "./qa-out";
mkdirSync(outDir, { recursive: true });

const routes = ["/", "/collections", "/works", "/process", "/commissions", "/contact", "/faq", "/does-not-exist"];
const viewports = {
  mobile: { width: 390, height: 844, isMobile: true, hasTouch: true },
  desktop: { width: 1440, height: 900 },
};
const motions = ["no-preference", "reduce"];

const browser = await launchBrowser();
const report = [];

for (const [vpName, vp] of Object.entries(viewports)) {
  for (const motion of motions) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, isMobile: !!vp.isMobile, hasTouch: !!vp.hasTouch, reducedMotion: motion });
    for (const route of routes) {
      const page = await context.newPage();
      const consoleErrors = [];
      const failedRequests = [];
      page.on("console", (m) => { if (m.type() === "error") consoleErrors.push(m.text()); });
      page.on("response", (r) => { if (r.status() >= 400) failedRequests.push(`${r.status()} ${r.url()}`); });
      const response = await page.goto(baseUrl + route, { waitUntil: "networkidle" });
      await page.waitForTimeout(2500); // let entrance animations settle
      const slug = route === "/" ? "home" : route.slice(1).replace(/\//g, "_");
      const shot = join(outDir, `${slug}__${vpName}__${motion}.png`);
      await page.screenshot({ path: shot, fullPage: true });

      // Elements that remain invisible after animations should have finished.
      const invisible = await page.evaluate(() => {
        const hits = [];
        for (const el of document.querySelectorAll("main *")) {
          const cs = getComputedStyle(el);
          if (cs.opacity === "0" && el.textContent && el.textContent.trim().length > 0) {
            const parentHidden = el.parentElement && getComputedStyle(el.parentElement).opacity === "0";
            if (!parentHidden) hits.push(el.textContent.trim().slice(0, 80));
          }
        }
        return hits;
      });

      let axe = null;
      if (motion === "no-preference") {
        await page.addScriptTag({ content: axeSource });
        axe = await page.evaluate(async () => {
          // eslint-disable-next-line no-undef
          const r = await axe.run(document, { resultTypes: ["violations"] });
          return r.violations.map((v) => ({ id: v.id, impact: v.impact, help: v.help, count: v.nodes.length, samples: v.nodes.slice(0, 4).map((n) => ({ target: n.target.join(" "), summary: (n.failureSummary || "").slice(0, 300) })) }));
        });
      }
      const title = await page.title();
      report.push({ route, viewport: vpName, motion, status: response?.status(), title, screenshot: shot, invisibleTextBlocks: invisible, consoleErrors, failedRequests: [...new Set(failedRequests)], axe });
      await page.close();
    }
    await context.close();
  }
}
await browser.close();
writeFileSync(join(outDir, "report.json"), JSON.stringify(report, null, 2));
console.log(`wrote ${report.length} entries to ${join(outDir, "report.json")}`);
