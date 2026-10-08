import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import { getTemplate, tokenStyle } from "@/lib/templates";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-barlow-condensed" });
const body = Barlow({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-barlow" });

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
