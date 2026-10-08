import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { getTemplate, tokenStyle } from "@/lib/templates";

const display = localFont({
  src: [
    { path: "../../fonts/barlow-condensed/barlow-condensed-600.woff2", weight: "600", style: "normal" },
    { path: "../../fonts/barlow-condensed/barlow-condensed-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-barlow-condensed",
  display: "swap",
});
const body = localFont({
  src: [
    { path: "../../fonts/barlow/barlow-400.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/barlow/barlow-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-barlow",
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#F5F5F2" };

export const metadata: Metadata = {
  title: "[Company name] · Building contractor",
  description: "[Company name] builds, fits out and renovates across [service area]: one crew from quote to keys.",
};

// Tokens come from templates/construction/DESIGN.md. The layout only swaps the font families for
// next/font loads and states the hard single-offset shadows and 2px card borders the DESIGN.md prose calls for.
// Native scrolling on purpose: the builder's page is hard and direct, not smoothed.
export default function ConstructionLayout({ children }: { children: React.ReactNode }) {
  const t = getTemplate("construction")!;
  const style = {
    ...tokenStyle(t.tokens),
    "--t-font-display": `var(--font-barlow-condensed), 'Arial Narrow', Impact, sans-serif`,
    "--t-font-body": `var(--font-barlow), 'Helvetica Neue', Arial, sans-serif`,
    "--t-shadow-soft": "3px 3px 0 var(--t-ink)",
    "--t-shadow-lift": "6px 6px 0 var(--t-ink)",
    "--t-card-border": "var(--t-ink)",
  } as React.CSSProperties;
  return (
    <div className={`${display.variable} ${body.variable} bg-canvas text-ink font-body`} style={style}>
      {children}
    </div>
  );
}
