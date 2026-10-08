// Download every Google font this app uses into src/fonts/, so the build never touches the network.
//
//   node scripts/fetch-fonts.mjs          # all families found in src/app/**/layout.tsx
//
// Why: `next/font/google` fetches each face from Google during `next build`. This repo declares 31 families
// across 19 layouts — around 90 files in one burst — and Vercel's builder intermittently fails some of them
// with "Can't resolve '@vercel/turbopack-next/internal/font/google/font'", which fails the whole build.
// Self-hosted faces + `next/font/local` remove that dependency entirely.
//
// The manifest is read from the layouts themselves, so this stays in step with what the app actually asks for.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { globSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "src", "fonts");
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36";

export const kebab = (family) => family.toLowerCase().replace(/[^a-z0-9]+/g, "-");

/** Pull every `const x = Family({...})` out of the layouts that import from next/font/google. */
export function manifest() {
  const files = globSync("src/app/**/layout.tsx", { cwd: ROOT }).sort();
  const out = [];
  for (const rel of files) {
    const src = readFileSync(path.join(ROOT, rel), "utf8");
    const imp = src.match(/import\s*\{([^}]+)\}\s*from\s*["']next\/font\/google["']/);
    if (!imp) continue;
    const names = imp[1].split(",").map((s) => s.trim()).filter(Boolean);
    for (const name of names) {
      const decl = new RegExp(`const\\s+(\\w+)\\s*=\\s*${name}\\(\\{([\\s\\S]*?)\\}\\);`).exec(src);
      if (!decl) { console.warn(`  ! ${rel}: no declaration found for ${name}`); continue; }
      const [, varName, args] = decl;
      const weights = [...args.matchAll(/weight:\s*(?:\[([^\]]*)\]|"(\d+)")/g)]
        .flatMap((m) => (m[1] ?? m[2]).split(",").map((w) => w.trim().replace(/["']/g, "")))
        .filter(Boolean);
      const styles = (args.match(/style:\s*\[([^\]]*)\]/)?.[1] ?? "normal")
        .split(",").map((s) => s.trim().replace(/["']/g, "")).filter(Boolean);
      const variable = args.match(/variable:\s*["']([^"']+)["']/)?.[1] ?? null;
      out.push({ file: rel, name, varName, family: name.replace(/_/g, " "), weights, styles, variable, args });
    }
  }
  return out;
}

/** Ask Google for the latin faces of one family and return [{weight, style, url}]. */
async function faces(family, weights, styles) {
  const ital = styles.includes("italic");
  const spec = ital
    ? `ital,wght@${[...weights.map((w) => `0,${w}`), ...weights.map((w) => `1,${w}`)].join(";")}`
    : `wght@${weights.join(";")}`;
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family).replace(/%20/g, "+")}:${spec}&display=swap`;
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`${family}: Google returned ${res.status} for ${url}`);
  const css = await res.text();

  // Google emits one @font-face per subset, each preceded by a `/* latin */`-style comment. Keep plain latin.
  const found = [];
  const re = /\/\*\s*([\w-]+)\s*\*\/\s*@font-face\s*\{([\s\S]*?)\}/g;
  for (const [, subset, block] of css.matchAll(re)) {
    if (subset !== "latin") continue;
    const weight = block.match(/font-weight:\s*(\d+)/)?.[1];
    const style = block.match(/font-style:\s*(\w+)/)?.[1] ?? "normal";
    const href = block.match(/src:\s*url\(([^)]+)\)/)?.[1];
    if (weight && href) found.push({ weight, style, url: href });
  }
  return found;
}

if (import.meta.filename === process.argv[1]) {
  const entries = manifest();
  const byFamily = new Map();
  for (const e of entries) {
    const cur = byFamily.get(e.family) ?? { family: e.family, weights: new Set(), styles: new Set() };
    e.weights.forEach((w) => cur.weights.add(w));
    e.styles.forEach((st) => cur.styles.add(st));
    byFamily.set(e.family, cur);
  }
  console.log(`${entries.length} declarations across ${byFamily.size} families`);

  let files = 0, bytes = 0, variableFamilies = 0;
  for (const { family, weights, styles } of [...byFamily.values()].sort((a, b) => a.family.localeCompare(b.family))) {
    const ws = weights.size ? [...weights].sort() : ["400", "500", "600", "700"];
    const dir = path.join(OUT, kebab(family));
    mkdirSync(dir, { recursive: true });
    const got = await faces(family, ws, [...styles]);
    if (!got.length) throw new Error(`${family}: no latin faces parsed`);

    const save = async (dest, url) => {
      if (existsSync(dest)) return;
      const buf = Buffer.from(await (await fetch(url, { headers: { "User-Agent": UA } })).arrayBuffer());
      writeFileSync(dest, buf);
      files++; bytes += buf.length;
    };

    // Google serves most of these families as ONE variable woff2 per style, returning the same URL for every
    // weight asked for. Saving it once per weight would ship the same bytes up to six times and pin a variable
    // file to a static weight; instead keep a single file per style and let the layout declare a weight range.
    let isVariable = false;
    for (const st of new Set(got.map((f) => f.style))) {
      const urls = new Set(got.filter((f) => f.style === st).map((f) => f.url));
      const many = got.filter((f) => f.style === st).length > 1;
      if (urls.size === 1 && many) {
        isVariable = true;
        await save(path.join(dir, `${kebab(family)}-variable${st === "italic" ? "-italic" : ""}.woff2`), [...urls][0]);
      } else {
        for (const f of got.filter((x) => x.style === st)) {
          await save(path.join(dir, `${kebab(family)}-${f.weight}${st === "italic" ? "-italic" : ""}.woff2`), f.url);
        }
      }
    }
    if (isVariable) variableFamilies++;
    console.log(`  ${family.padEnd(22)} ${got.length} faces${isVariable ? "  (variable: one file per style)" : ""}`);
  }
  console.log(`\n${files} files, ${(bytes / 1024 / 1024).toFixed(1)} MB — ${variableFamilies} families are variable`);
}
