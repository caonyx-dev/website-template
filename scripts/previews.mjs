// Capture one above-the-fold snapshot per built template for the gallery cards on `/`.
//
//   npm run dev -- -p 3100        # in one terminal
//   npm run previews              # in another
//
// Options: PREVIEW_BASE (default http://localhost:3100), or pass slugs as arguments to redo only some.
// Snapshots land in public/previews/<slug>.jpg at 1120×700. Reduced motion is forced so entrance
// animations have settled and every run is deterministic, and the dev-server badge is hidden so the
// picture is only the page.
import { spawn, spawnSync } from "node:child_process";
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const BASE = process.env.PREVIEW_BASE ?? "http://localhost:3100";
const OUT = path.join(ROOT, "public", "previews");
const W = 1440, H = 900, TARGET_W = 1120;

/** The built slugs, read from the registry so this never drifts from what the gallery renders. */
function builtSlugs() {
  const src = readFileSync(path.join(ROOT, "src", "lib", "templates.ts"), "utf8");
  const block = src.match(/export const BUILT[^{]*\{([\s\S]*?)\n\};/);
  if (!block) throw new Error("Could not find the BUILT registry in src/lib/templates.ts");
  return [...block[1].matchAll(/^\s*"?([a-z0-9-]+)"?\s*:/gm)].map((m) => m[1]);
}

const slugs = process.argv.slice(2).length ? process.argv.slice(2) : builtSlugs();
console.log(`Capturing ${slugs.length} snapshots from ${BASE}`);

const port = 9222 + Math.floor(Math.random() * 500);
const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
  "--headless=new", "--no-sandbox", "--hide-scrollbars", "--force-prefers-reduced-motion",
  `--remote-debugging-port=${port}`, `--user-data-dir=/tmp/cdp-previews-${port}`,
  `--window-size=${W},${H}`, "about:blank",
], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let targets;
for (let i = 0; i < 40; i++) {
  try { targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); if (targets.length) break; } catch {}
  await sleep(500);
}
const page = targets.find((t) => t.type === "page") ?? targets[0];
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0; const pending = new Map();
ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m.result ?? {}); pending.delete(m.id); } };
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });

await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: W, height: H, deviceScaleFactor: 2, mobile: false });

mkdirSync(OUT, { recursive: true });
let failed = 0;
for (const slug of slugs) {
  await send("Page.navigate", { url: `${BASE}/${slug}` });
  await sleep(5200);
  await send("Runtime.evaluate", { expression: `(() => {
    const s = document.createElement('style');
    s.textContent = 'nextjs-portal, #__next-build-watcher, [data-nextjs-toast] { display: none !important; }';
    document.head.appendChild(s);
  })()` });
  // Nudge anything lazy above the fold, then settle back to the very top for the shot.
  await send("Runtime.evaluate", { expression: "window.scrollTo(0, 400)" });
  await sleep(700);
  await send("Runtime.evaluate", { expression: "window.scrollTo(0, 0)" });
  await sleep(1400);

  const shot = await send("Page.captureScreenshot", { format: "jpeg", quality: 90, captureBeyondViewport: false });
  if (!shot.data) { console.error("FAILED", slug); failed++; continue; }

  const file = path.join(OUT, `${slug}.jpg`);
  writeFileSync(file, Buffer.from(shot.data, "base64"));
  // `sips` ships with macOS. Elsewhere the full-size capture is kept and next/image resizes on request.
  const r = spawnSync("/usr/bin/sips", ["-s", "format", "jpeg", "-s", "formatOptions", "72", "-Z", String(TARGET_W), file, "--out", file], { stdio: "ignore" });
  if (r.error) console.warn(`  (kept ${slug} at full size — sips unavailable)`);
  console.log("ok", slug);
}

ws.close();
chrome.kill("SIGKILL");
if (failed) { console.error(`${failed} snapshot(s) failed`); process.exit(1); }
