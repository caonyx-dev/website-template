import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { getTemplate, tokenStyle } from "@/lib/templates";

const outfit = localFont({
  src: [
    { path: "../../fonts/outfit/outfit-variable.woff2", weight: "300 900", style: "normal" },
  ],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#FFFFFF" };
export const metadata: Metadata = { title: "[Company] · [Sector] solutions", description: "[Company] helps organisations in [sector] run critical operations with confidence." };

// Tokens come from templates/corporate/DESIGN.md (reference-led revision of 2026-10-07: Outfit, electric blue,
// warm #F5F3EF band, near-black #141414 panels). Native scrolling. No shadows: the reference is flat.
export default function CorporateLayout({ children }: { children: React.ReactNode }) {
  const t = getTemplate("corporate")!;
  const style = {
    ...tokenStyle(t.tokens),
    "--t-font-display": `var(--font-outfit), 'Segoe UI', Arial, sans-serif`,
    "--t-font-body": `var(--font-outfit), system-ui, sans-serif`,
    "--t-focus": t.tokens.primary,
  } as React.CSSProperties;
  return <div className={`${outfit.variable} bg-canvas text-ink font-body`} style={style}>{children}</div>;
}
