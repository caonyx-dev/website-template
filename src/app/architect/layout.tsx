import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { getTemplate, tokenStyle } from "@/lib/templates";
import SmoothScroll from "@/components/SmoothScroll";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500"], variable: "--font-space-grotesk" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-inter" });

export const viewport: Viewport = { themeColor: "#F7F5F0" };

export const metadata: Metadata = {
  title: "[Studio name] · Architecture studio",
  description: "[Studio name] designs houses, workplaces and public buildings in [region].",
};

// Tokens come from templates/architect/DESIGN.md; only the font families are swapped for next/font loads.
export default function ArchitectLayout({ children }: { children: React.ReactNode }) {
  const t = getTemplate("architect")!;
  const style = {
    ...tokenStyle(t.tokens),
    "--t-font-display": `var(--font-space-grotesk), 'Helvetica Neue', Arial, sans-serif`,
    "--t-font-body": `var(--font-inter), system-ui, sans-serif`,
  } as React.CSSProperties;
  return (
    <div className={`${display.variable} ${body.variable} bg-canvas text-ink font-body`} style={style}>
      <SmoothScroll>{children}</SmoothScroll>
    </div>
  );
}
