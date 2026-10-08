import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { getTemplate, tokenStyle } from "@/lib/templates";
import "@/templates/restaurant/components/hero.css";

const playfair = localFont({
  src: [
    { path: "../../fonts/playfair-display/playfair-display-variable.woff2", weight: "500 600", style: "normal" },
    { path: "../../fonts/playfair-display/playfair-display-variable-italic.woff2", weight: "500 600", style: "italic" },
  ],
  variable: "--font-playfair",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});
const karla = localFont({
  src: [
    { path: "../../fonts/karla/karla-variable.woff2", weight: "400 500", style: "normal" },
  ],
  variable: "--font-karla",
  display: "swap",
});

// The page itself is cream; only the 40px contact strip is dark, so the browser chrome matches the body.
export const viewport: Viewport = { themeColor: "#FBF7EF" };
export const metadata: Metadata = { title: "[Restaurant] · Kitchen and bar", description: "A neighbourhood kitchen: a daily changing menu, a short wine list and a room worth sitting in. Book a table." };

// Tokens from templates/restaurant/DESIGN.md: warm cream canvas, near-black ink, deep-olive as the single interactive
// colour, gold for rules and text on dark, Playfair Display display with italic dish names, Karla body, 2–4px corners
// and no shadows beyond the reservation card. The muted inks, surfaces and hairlines come from the frontmatter.
export default function RestaurantLayout({ children }: { children: React.ReactNode }) {
  const t = getTemplate("restaurant")!;
  const c = t.fm.colors ?? {};
  const style = {
    ...tokenStyle(t.tokens),
    "--t-font-display": `var(--font-playfair), Georgia, serif`,
    "--t-font-body": `var(--font-karla), system-ui, sans-serif`,
    "--t-focus": t.tokens.primary,
    "--t-display-tracking": "-0.01em",
    "--t-soft": c["surface-soft"],
    "--t-surface": c["surface-card"],
    "--t-mute": c["muted"],
    "--t-muted-soft": c["muted-soft"],
    "--t-dark": c["surface-dark"],
    "--t-on-dark": c["on-dark"],
    "--t-primary-active": c["primary-active"],
    "--t-accent-deep": "#7F6210",
    "--t-accent-deep-design": c["accent-deep"],
    "--t-field-border": "#9A8C70",
    "--t-primary-error-text": c["primary-error-text"],
    "--t-hairline-soft": c["hairline-soft"],
    "--t-hairline-strong": c["border-strong"],
    "--t-soft2": c["surface-strong"],
    "--t-surface-strong": c["surface-strong"],
    "--t-accent-soft": "#F2E6C4",
    "--t-on-dark-muted": "#C4BEAD",
    "--t-shadow-soft": "none",
    "--t-shadow-lift": "0 8px 24px rgba(31, 29, 24, 0.10)",
    "--t-card-border": c["hairline"],
  } as React.CSSProperties;
  // The phone action bar is fixed over the end of the page, so the whole document clears it, footer included.
  return <div className={`${playfair.variable} ${karla.variable} bg-canvas text-ink font-body pb-[calc(3.5rem+env(safe-area-inset-bottom))] md:pb-0`} style={style}>{children}</div>;
}
