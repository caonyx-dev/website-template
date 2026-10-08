import type { Metadata, Viewport } from "next";
import { Syne, Instrument_Sans, Space_Mono } from "next/font/google";
import { getTemplate, tokenStyle } from "@/lib/templates";
import "@/templates/marketing-agency/components/hero.css";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-syne" });
const instrument = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-instrument" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-space-mono" });

export const viewport: Viewport = { themeColor: "#FFFDF7" };
export const metadata: Metadata = { title: "[Agency] · Digital marketing", description: "A small strategy and performance studio. Brand, web and campaigns for companies that need the numbers to move. Book a strategy call." };

// Tokens from templates/marketing-agency/DESIGN.md: warm ivory canvas, electric violet as the only action colour,
// acid yellow as a highlighter pen, Syne for poster headlines, Instrument Sans for body and Space Mono for every
// label. The rounded, shadowless geometry is a deliberate override of this file, recorded in its dated revision.
export default function MarketingAgencyLayout({ children }: { children: React.ReactNode }) {
  const t = getTemplate("marketing-agency")!;
  const c = t.fm.colors ?? {};
  const style = {
    ...tokenStyle(t.tokens),
    "--t-font-display": `var(--font-syne), 'Helvetica Neue', Arial, sans-serif`,
    "--t-font-body": `var(--font-instrument), 'Helvetica Neue', Arial, sans-serif`,
    "--t-font-mono": `var(--font-space-mono), ui-monospace, SFMono-Regular, Menlo, monospace`,
    "--t-focus": c["primary"],
    "--t-display-tracking": "-0.02em",
    "--t-soft": c["surface-soft"],
    "--t-soft2": c["surface-doc"],
    "--t-surface": c["surface-card"],
    "--t-mute": c["mute"],
    "--t-body": c["body"],
    "--t-ash": c["ash"],
    "--t-stone": c["stone"],
    "--t-charcoal": c["charcoal"],
    "--t-dark": c["surface-dark"],
    "--t-dark-2": "#2A2533",
    "--t-on-dark": c["on-dark"],
    "--t-on-dark-muted": "#A9A3B4",
    "--t-hairline": c["hairline-soft"],
    "--t-hairline-strong": c["stone"],
    "--t-control": "#8E8899",
    "--t-primary-pressed": c["primary-pressed"],
    "--t-primary-active": c["primary-active"],
    "--t-primary-soft": c["primary-soft"],
    "--t-accent-soft": c["accent-soft"],
    "--t-error": c["accent-red"],
    "--t-success": c["accent-green"],
    // The reference's surfaces are flat and soft-edged; the hard offset shadow is left behind with the border.
    "--t-shadow-soft": "none",
    "--t-shadow-lift": "none",
    "--t-card-border": "transparent",
  } as React.CSSProperties;
  return <div className={`${syne.variable} ${instrument.variable} ${mono.variable} nim-root bg-canvas text-ink font-body pb-[calc(4.5rem+env(safe-area-inset-bottom))] sm:pb-0`} style={style}>{children}</div>;
}
