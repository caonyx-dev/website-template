import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { getTemplate, tokenStyle } from "@/lib/templates";
import "@/templates/law-firm/components/hero.css";

const cormorant = localFont({
  src: [
    { path: "../../fonts/cormorant-garamond/cormorant-garamond-variable.woff2", weight: "500 600", style: "normal" },
  ],
  variable: "--font-cormorant",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});
const sourceSans = localFont({
  src: [
    { path: "../../fonts/source-sans-3/source-sans-3-variable.woff2", weight: "400 600", style: "normal" },
  ],
  variable: "--font-source-sans",
  display: "swap",
});

// The page is warm ivory end to end; only the consultation card and the footer are oxblood.
export const viewport: Viewport = { themeColor: "#FBF8F3" };
export const metadata: Metadata = { title: "[Firm name] · Solicitors", description: "A boutique practice of solicitors in [city]: family, employment, property, commercial, estates and immigration. Book a consultation or call the office." };

// Tokens from templates/law-firm/DESIGN.md: warm ivory canvas, warm near-black ink, a single burgundy reserved for
// filled calls to action and link emphasis, brass for rules and eyebrows only, Cormorant Garamond display over
// Source Sans 3 body, 4px buttons, and almost no elevation — the brass rule is the depth system.
export default function LawFirmLayout({ children }: { children: React.ReactNode }) {
  const t = getTemplate("law-firm")!;
  const c = t.fm.colors ?? {};
  const style = {
    ...tokenStyle(t.tokens),
    "--t-font-display": `var(--font-cormorant), Georgia, 'Times New Roman', serif`,
    "--t-font-body": `var(--font-source-sans), 'Segoe UI', Helvetica, Arial, sans-serif`,
    "--t-focus": c["primary"],
    "--t-display-tracking": "0",
    "--t-soft": c["canvas-soft"],
    "--t-soft2": c["canvas-cream"],
    "--t-surface": c["canvas"],
    "--t-mute": c["ink-mute"],
    "--t-on-dark-muted": c["on-dark-muted"],
    "--t-dark": c["brand-dark-900"],
    "--t-on-dark": c["hairline"],
    "--t-accent-deep": "#7F5F33",
    "--t-accent-deep-design": c["accent-deep"],
    "--t-field-border": "#8F8474",
    "--t-accent-soft": c["accent-soft"],
    "--t-hairline-strong": c["hairline-input"],
    "--t-ink-secondary": c["ink-secondary"],
    "--t-ink-mute-2": c["ink-mute"],
    "--t-primary-deep": c["primary-deep"],
    "--t-primary-press": c["primary-press"],
    "--t-primary-soft": c["primary-soft"],
    "--t-primary-subdued": c["primary-bg-subdued-hover"],
    "--t-error": c["error"],
    "--t-success": c["success"],
    // Elevation is almost absent: level 1 for a card hover, level 2 for the one panel that genuinely floats.
    "--t-shadow-soft": "0 1px 2px rgba(58, 42, 26, 0.06)",
    "--t-shadow-lift": "0 4px 12px rgba(58, 42, 26, 0.10)",
    "--t-card-border": c["hairline"],
  } as React.CSSProperties;
  return <div className={`${cormorant.variable} ${sourceSans.variable} bg-canvas text-ink font-body pb-[calc(3.5rem+env(safe-area-inset-bottom))] lg:pb-0`} style={style}>{children}</div>;
}
