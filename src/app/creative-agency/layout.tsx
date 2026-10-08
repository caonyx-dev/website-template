import type { Metadata, Viewport } from "next";
import { Unbounded, Albert_Sans } from "next/font/google";
import { getTemplate, tokenStyle } from "@/lib/templates";

const display = Unbounded({ subsets: ["latin"], weight: ["700"], variable: "--font-unbounded" });
const body = Albert_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-albert" });

export const viewport: Viewport = { themeColor: "#FFFFFF" };
export const metadata: Metadata = { title: "[Agency] · Creative agency", description: "Identity, campaigns, motion and web for brands that would rather be noticed than safe." };

// Tokens from templates/creative-agency/DESIGN.md (reference-led revision of 2026-10-07: black, white, lime).
// Flat surfaces, square corners, no shadows, native scrolling.
export default function CreativeAgencyLayout({ children }: { children: React.ReactNode }) {
  const t = getTemplate("creative-agency")!;
  const style = { ...tokenStyle(t.tokens), "--t-font-display": `var(--font-unbounded), 'Arial Black', Impact, sans-serif`, "--t-font-body": `var(--font-albert), system-ui, sans-serif`, "--t-focus": t.tokens.ink, "--t-display-tracking": "-0.02em" } as React.CSSProperties;
  return <div className={`${display.variable} ${body.variable} bg-canvas text-ink font-body`} style={style}>{children}</div>;
}
