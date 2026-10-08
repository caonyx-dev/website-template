import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { getTemplate, tokenStyle } from "@/lib/templates";

const display = localFont({
  src: [
    { path: "../../fonts/unbounded/unbounded-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-unbounded",
  display: "swap",
});
const body = localFont({
  src: [
    { path: "../../fonts/albert-sans/albert-sans-variable.woff2", weight: "400 700", style: "normal" },
  ],
  variable: "--font-albert",
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#FFFFFF" };
export const metadata: Metadata = { title: "[Agency] · Creative agency", description: "Identity, campaigns, motion and web for brands that would rather be noticed than safe." };

// Tokens from templates/creative-agency/DESIGN.md (reference-led revision of 2026-10-07: black, white, lime).
// Flat surfaces, square corners, no shadows, native scrolling.
export default function CreativeAgencyLayout({ children }: { children: React.ReactNode }) {
  const t = getTemplate("creative-agency")!;
  const style = { ...tokenStyle(t.tokens), "--t-font-display": `var(--font-unbounded), 'Arial Black', Impact, sans-serif`, "--t-font-body": `var(--font-albert), system-ui, sans-serif`, "--t-focus": t.tokens.ink, "--t-display-tracking": "-0.02em" } as React.CSSProperties;
  return <div className={`${display.variable} ${body.variable} bg-canvas text-ink font-body`} style={style}>{children}</div>;
}
