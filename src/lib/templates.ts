// Reads every templates/<slug>/DESIGN.md and PRODUCT.md from the repo and exposes their tokens.
// Server-only: uses the filesystem. The markdown files stay the source of truth (CLAUDE.md).
import fs from "node:fs";
import path from "node:path";
import { load as yamlLoad } from "js-yaml";

export const TEMPLATES_DIR = path.resolve(process.cwd(), "templates");

export type Typo = { fontFamily?: string; fontSize?: string; fontWeight?: number | string; lineHeight?: number | string; letterSpacing?: string; textTransform?: string };
export type Frontmatter = {
  name?: string;
  description?: string;
  colors?: Record<string, string>;
  typography?: Record<string, Typo>;
  rounded?: Record<string, string>;
  spacing?: Record<string, string>;
  shadows?: Record<string, string>;
  motion?: Record<string, string>;
  components?: Record<string, Record<string, unknown>>;
};

export type Template = {
  slug: string;
  title: string;
  fm: Frontmatter;
  prose: string;
  product: string;
  fontLink: string | null;
  tokens: Tokens;
  built: boolean;
};

export type Tokens = {
  canvas: string; soft: string; soft2: string; surface: string;
  ink: string; body: string; mute: string;
  primary: string; onPrimary: string;
  accent: string; accentDeep: string; accentSoft: string;
  hairline: string; hairlineStrong: string; onDarkMuted: string;
  displayFamily: string; bodyFamily: string;
  displayWeight: number; bodyWeight: number;
  radiusSm: string; radiusMd: string; radiusLg: string;
  /** Button corner (pill for the architect, 4px for the builder) from components.button-primary.rounded */
  radiusButton: string;
  /** Graphite/charcoal band colour and its text; falls back to primary when primary is dark */
  darkSurface: string; onDark: string;
  /** Display face treatment from the hero/display typography entry */
  displayTransform: string; displayTracking: string;
  buttonTransform: string; buttonTracking: string;
  dark: boolean;
};

/** Templates that have a real page under src/app/<slug>/. Everything else gets the style-sheet route. */
export const BUILT: Record<string, { label: string }> = {
  architect: { label: "Homepage" },
  construction: { label: "Homepage" },
  corporate: { label: "Homepage" },
  "creative-agency": { label: "Homepage" },
  "creative-studio": { label: "Homepage" },
  "dental-clinic": { label: "Homepage" },
  "finance-accounting": { label: "Homepage" },
  gym: { label: "Homepage" },
  hotel: { label: "Homepage" },
  restaurant: { label: "Homepage" },
  "law-firm": { label: "Homepage" },
  logistics: { label: "Homepage" },
  "marketing-agency": { label: "Homepage" },
  "real-estate": { label: "Homepage" },
  "retail-store": { label: "Homepage" },
  "tech-startup": { label: "Homepage" },
  "travel-agency": { label: "Homepage" },
  "small-business": { label: "Homepage" },
};

const pick = (c: Record<string, string> | undefined, ...keys: string[]) => {
  for (const k of keys) if (c?.[k]) return c[k];
  return undefined;
};

function luminance(hex: string) {
  const m = String(hex).trim().match(/^#([0-9a-f]{6})/i);
  if (!m) return 0.5;
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(m[1].slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function firstTypo(fm: Frontmatter, test: RegExp): Typo | undefined {
  const entries = Object.entries(fm.typography ?? {});
  return entries.find(([k]) => test.test(k))?.[1] ?? entries[0]?.[1];
}

export function deriveTokens(fm: Frontmatter): Tokens {
  const c = fm.colors;
  const canvas = pick(c, "canvas", "background", "bg") ?? "#FFFFFF";
  const ink = pick(c, "ink", "text", "foreground") ?? "#111111";
  const primary = pick(c, "primary") ?? ink;
  const display = firstTypo(fm, /hero|display|heading|title/i) ?? {};
  const body = firstTypo(fm, /^body(-md)?$|body-md|paragraph/i) ?? {};
  const button = Object.entries(fm.typography ?? {}).find(([k]) => /^button/i.test(k))?.[1] ?? {};
  const primaryIsDark = luminance(primary) < 0.4;
  const btnRounded = String(fm.components?.["button-primary"]?.rounded ?? "");
  const btnRef = btnRounded.match(/\{rounded\.([\w-]+)\}/)?.[1];
  return {
    canvas,
    soft: pick(c, "canvas-soft", "surface-soft", "soft", "canvas-tint", "surface") ?? canvas,
    soft2: pick(c, "canvas-soft-2", "surface-elevated", "surface-card") ?? pick(c, "canvas-soft", "surface") ?? canvas,
    surface: pick(c, "surface", "surface-card", "card") ?? "#FFFFFF",
    ink,
    body: pick(c, "body", "ink-secondary", "text-secondary") ?? ink,
    mute: pick(c, "mute", "ink-mute", "ink-muted", "muted") ?? ink,
    primary,
    onPrimary: pick(c, "on-primary") ?? "#FFFFFF",
    accent: pick(c, "accent", "link", "secondary") ?? primary,
    accentDeep: pick(c, "accent-deep", "link-deep", "primary-deep", "primary-active") ?? primary,
    accentSoft: pick(c, "accent-soft", "link-bg-soft", "primary-soft", "primary-disabled") ?? canvas,
    hairline: pick(c, "hairline", "border", "line", "divider") ?? "#DDDDDD",
    hairlineStrong: pick(c, "hairline-strong", "border-strong") ?? pick(c, "hairline", "border") ?? "#BBBBBB",
    onDarkMuted: pick(c, "on-dark-muted", "on-dark-mute", "on-dark-soft", "body-on-dark") ?? "#D9D4C9",
    darkSurface: pick(c, "surface-dark", "dark", "ink-dark", "background-dark", "navy-band-end", "navy-footer-start") ?? (primaryIsDark ? primary : ink),
    onDark: pick(c, "on-dark") ?? (primaryIsDark ? pick(c, "on-primary") ?? "#FFFFFF" : "#FFFFFF"),
    displayTransform: display.textTransform ?? "none",
    displayTracking: display.letterSpacing != null ? String(display.letterSpacing) : "-0.02em",
    buttonTransform: button.textTransform ?? "none",
    buttonTracking: button.letterSpacing != null ? String(button.letterSpacing) : "0",
    radiusButton: (btnRef && fm.rounded?.[btnRef]) || (btnRounded && !btnRounded.startsWith("{") ? btnRounded : "9999px"),
    displayFamily: display.fontFamily ?? "system-ui, sans-serif",
    bodyFamily: body.fontFamily ?? display.fontFamily ?? "system-ui, sans-serif",
    displayWeight: Number(display.fontWeight ?? 700),
    bodyWeight: Number(body.fontWeight ?? 400),
    radiusSm: fm.rounded?.sm ?? "4px",
    radiusMd: fm.rounded?.md ?? "8px",
    radiusLg: fm.rounded?.lg ?? "16px",
    dark: luminance(canvas) < 0.4,
  };
}

/** CSS custom properties consumed by globals.css (@theme inline maps them to Tailwind utilities). */
export function tokenStyle(t: Tokens): Record<string, string> {
  return {
    "--t-canvas": t.canvas, "--t-soft": t.soft, "--t-soft2": t.soft2, "--t-surface": t.surface,
    "--t-ink": t.ink, "--t-body": t.body, "--t-mute": t.mute,
    "--t-primary": t.primary, "--t-on-primary": t.onPrimary,
    "--t-accent": t.accent, "--t-accent-deep": t.accentDeep, "--t-accent-soft": t.accentSoft,
    "--t-hairline": t.hairline, "--t-hairline-strong": t.hairlineStrong, "--t-on-dark-muted": t.onDarkMuted,
    "--t-font-display": t.displayFamily, "--t-font-body": t.bodyFamily,
    "--t-radius-sm": t.radiusSm, "--t-radius-md": t.radiusMd, "--t-radius-lg": t.radiusLg, "--t-radius-button": t.radiusButton,
    "--t-dark": t.darkSurface, "--t-on-dark": t.onDark,
    "--t-display-transform": t.displayTransform, "--t-display-tracking": t.displayTracking,
    "--t-button-transform": t.buttonTransform, "--t-button-tracking": t.buttonTracking,
  };
}

export function listSlugs(): string[] {
  return fs.readdirSync(TEMPLATES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(TEMPLATES_DIR, d.name, "DESIGN.md")))
    .map((d) => d.name)
    .sort();
}

export function getTemplate(slug: string): Template | null {
  const dir = path.join(TEMPLATES_DIR, slug);
  const file = path.join(dir, "DESIGN.md");
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  const fm = (m ? (yamlLoad(m[1]) as Frontmatter) : {}) ?? {};
  const prose = m ? m[2] : raw;
  const productPath = path.join(dir, "PRODUCT.md");
  const product = fs.existsSync(productPath) ? fs.readFileSync(productPath, "utf8") : "";
  const fontLink = (prose.match(/<link[^>]*fonts\.googleapis\.com\/css[^>]*>/) || [null])[0];
  const href = fontLink?.match(/href="([^"]+)"/)?.[1] ?? null;
  return {
    slug,
    title: slug.replace(/-/g, " "),
    fm,
    prose,
    product,
    fontLink: href,
    tokens: deriveTokens(fm),
    built: slug in BUILT,
  };
}

export function getTemplates(): Template[] {
  return listSlugs().map((s) => getTemplate(s)).filter((t): t is Template => !!t);
}
