import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { getTemplate, tokenStyle } from "@/lib/templates";
import "@/templates/real-estate/components/hero.css";

const outfit = localFont({
  src: [
    { path: "../../fonts/outfit/outfit-variable.woff2", weight: "600 700", style: "normal" },
  ],
  variable: "--font-outfit",
  display: "swap",
});
const hanken = localFont({
  src: [
    { path: "../../fonts/hanken-grotesk/hanken-grotesk-variable.woff2", weight: "400 600", style: "normal" },
  ],
  variable: "--font-hanken",
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#FFFFFF" };
export const metadata: Metadata = {
  title: "[Group] · Real estate development and construction",
  description:
    "A development and construction group working with investors, councils and communities — from the first site visit to the final handover.",
};

// Tokens from templates/real-estate/DESIGN.md (2026-10-08 revision, rebuilt against the Spaciaz reference):
// white canvas, warm beige alternate band, one black band, and a single chartreuse lime that only ever
// fills a surface and always carries black text. Outfit display, Hanken Grotesk body.
export default function RealEstateLayout({ children }: { children: React.ReactNode }) {
  const t = getTemplate("real-estate")!;
  const c = t.fm.colors ?? {};
  const style = {
    ...tokenStyle(t.tokens),
    "--t-font-display": `var(--font-outfit), 'Helvetica Neue', Arial, system-ui, sans-serif`,
    "--t-font-body": `var(--font-hanken), 'Helvetica Neue', Arial, system-ui, sans-serif`,
    // Focus rings are black, not lime: lime sits at ~1.3:1 on white and would be invisible.
    "--t-focus": c["primary-focus"],
    "--t-primary-deep": c["primary-deep"],
    "--t-accent-soft": c["accent-soft"],
    "--t-dark-2": c["surface-dark-2"],
    "--t-grey-band": c["surface-grey"],
    "--t-error": c["error"],
    "--t-display-tracking": "-0.02em",
    // One shadow in the whole system — a glow, so a white card reads as floating on a white band.
    "--t-shadow-soft": c["hairline"] ? "0 0 30px rgba(0, 0, 0, 0.05)" : undefined,
    "--t-shadow-lift": "0 0 40px rgba(0, 0, 0, 0.09)",
    "--t-card-border": "transparent",
  } as React.CSSProperties;

  return (
    <div className={`${outfit.variable} ${hanken.variable} bg-canvas text-ink font-body`} style={style}>
      {children}
    </div>
  );
}
