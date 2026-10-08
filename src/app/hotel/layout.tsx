import type { Metadata, Viewport } from "next";
import { Marcellus, Jost } from "next/font/google";
import { getTemplate, tokenStyle } from "@/lib/templates";
import "@/templates/hotel/components/hero.css";

const marcellus = Marcellus({ subsets: ["latin"], weight: "400", variable: "--font-marcellus" });
const jost = Jost({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-jost" });

export const viewport: Viewport = { themeColor: "#1B2A49" };
export const metadata: Metadata = { title: "[Hotel] · Boutique hotel", description: "Rooms and suites, dining, spa and a quiet welcome in the heart of [Town]. Book direct for the best rate." };

// Tokens from templates/hotel/DESIGN.md: midnight navy for every interactive element, gold for rules and icons only,
// ivory and parchment sections, Marcellus 400 display with positive tracking, Jost 300 body, 2px corners. The
// muted inks, parchment and navy steps are read from the frontmatter.
export default function HotelLayout({ children }: { children: React.ReactNode }) {
  const t = getTemplate("hotel")!;
  const c = t.fm.colors ?? {};
  const style = {
    ...tokenStyle(t.tokens),
    "--t-font-display": `var(--font-marcellus), 'Cormorant Garamond', Georgia, serif`,
    "--t-font-body": `var(--font-jost), system-ui, sans-serif`,
    "--t-focus": t.tokens.primary,
    "--t-display-tracking": "0.01em",
    "--t-soft": c["canvas-parchment"],
    "--t-mute": c["ink-muted-48"],
    "--t-ink-80": c["ink-muted-80"],
    "--t-body-muted": c["body-muted"],
    "--t-on-dark-muted": c["body-muted"],
    "--t-dark": c["surface-tile-1"],
    "--t-dark-2": c["surface-tile-2"],
    "--t-dark-3": c["surface-tile-3"],
    "--t-on-dark": c["on-dark"],
    "--t-primary-focus": c["primary-focus"],
    "--t-hairline-strong": c["hairline"],
    "--t-shadow-soft": "none",
    "--t-shadow-lift": "0 12px 32px rgba(20, 26, 43, 0.14)",
    "--t-card-border": c["hairline"],
  } as React.CSSProperties;
  return <div className={`${marcellus.variable} ${jost.variable} bg-canvas font-body font-light text-ink`} style={style}>{children}</div>;
}
