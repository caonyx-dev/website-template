import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { getTemplate, tokenStyle } from "@/lib/templates";
import "@/templates/tech-startup/components/hero.css";

const instrument = localFont({
  src: [
    { path: "../../fonts/instrument-sans/instrument-sans-variable.woff2", weight: "500 600", style: "normal" },
  ],
  variable: "--font-instrument",
  display: "swap",
});
const kanit = localFont({
  src: [
    { path: "../../fonts/kanit/kanit-400.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/kanit/kanit-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-kanit",
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#FFFFFF" };
export const metadata: Metadata = {
  title: "[Startup] · AI systems that reach production",
  description:
    "An AI team that ships into your systems — scoped in weeks, measured against your own data, and handed over so you can keep going without us.",
};

// Tokens from templates/tech-startup/DESIGN.md (2026-10-08 revision, rebuilt against the Arolax
// AI-startup reference): white canvas with one cool-grey and one near-black panel, and a single burnt
// orange reserved for actions. Instrument Sans 500 display, Kanit 400 body.
export default function TechStartupLayout({ children }: { children: React.ReactNode }) {
  const t = getTemplate("tech-startup")!;
  const c = t.fm.colors ?? {};
  const style = {
    ...tokenStyle(t.tokens),
    "--t-font-display": `var(--font-instrument), 'Helvetica Neue', Arial, system-ui, sans-serif`,
    "--t-font-body": `var(--font-kanit), 'Helvetica Neue', Arial, system-ui, sans-serif`,
    // Focus rings are ink, not orange: orange is ~3.4:1 and would be weak as a 2px ring.
    "--t-focus": c["ink"],
    "--t-primary-hover": c["primary-hover"],
    "--t-dark-2": c["surface-dark-2"],
    "--t-dark-3": c["surface-dark-3"],
    "--t-hairline-dark": c["hairline-on-dark"],
    "--t-error": c["semantic-error"],
    // Display type carries no tracking here; the size and the 0.95 leading do the work.
    "--t-display-tracking": "0",
    // Effectively flat: one hover lift on the news card, nothing else.
    "--t-shadow-soft": "none",
    "--t-shadow-lift": "0 18px 44px rgba(18, 18, 18, 0.10)",
    "--t-card-border": "transparent",
  } as React.CSSProperties;

  return (
    <div className={`${instrument.variable} ${kanit.variable} bg-canvas text-ink font-body`} style={style}>
      {children}
    </div>
  );
}
