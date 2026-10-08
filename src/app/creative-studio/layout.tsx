import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { getTemplate, tokenStyle } from "@/lib/templates";
import "@/templates/creative-studio/components/hero.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-manrope" });

export const viewport: Viewport = { themeColor: "#FFFFFF" };
export const metadata: Metadata = { title: "[Studio] · Creative studio", description: "High-performing digital design that elevates brands and improves conversion." };

// Tokens from templates/creative-studio/DESIGN.md (written from the Studiova reference). Flat surfaces, pills, native scrolling.
export default function CreativeStudioLayout({ children }: { children: React.ReactNode }) {
  const t = getTemplate("creative-studio")!;
  const style = { ...tokenStyle(t.tokens), "--t-font-display": `var(--font-manrope), system-ui, sans-serif`, "--t-font-body": `var(--font-manrope), system-ui, sans-serif`, "--t-focus": t.tokens.ink, "--t-display-tracking": "-0.02em" } as React.CSSProperties;
  return <div className={`${manrope.variable} bg-canvas text-ink font-body`} style={style}>{children}</div>;
}
