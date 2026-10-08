import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { getTemplate, tokenStyle } from "@/lib/templates";
import "@/templates/finance-accounting/components/hero.css";

const dmSans = localFont({
  src: [
    { path: "../../fonts/dm-sans/dm-sans-variable.woff2", weight: "400 700", style: "normal" },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});
const plexMono = localFont({
  src: [
    { path: "../../fonts/ibm-plex-mono/ibm-plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/ibm-plex-mono/ibm-plex-mono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#132629" };
export const metadata: Metadata = { title: "[Practice] · Accounting, tax and advisory", description: "Fixed-fee accounting, tax and advisory for small businesses and individuals, with a named accountant and every deadline tracked." };

// Tokens from templates/finance-accounting/DESIGN.md (2026-10-07 Consultor revision): green-black ink and dark surfaces,
// teal primary, lime accent, DM Sans display and body with IBM Plex Mono for every figure, square corners, flat cards.
export default function FinanceLayout({ children }: { children: React.ReactNode }) {
  const t = getTemplate("finance-accounting")!;
  const c = t.fm.colors ?? {};
  const style = {
    ...tokenStyle(t.tokens),
    "--t-font-display": `var(--font-dm-sans), system-ui, sans-serif`,
    "--t-font-body": `var(--font-dm-sans), system-ui, sans-serif`,
    "--font-mono": `var(--font-plex-mono), ui-monospace, Menlo, monospace`,
    "--t-focus": t.tokens.primary,
    "--t-display-tracking": "-0.03em",
    "--t-dark": c["brand-dark-900"],
    "--t-on-dark": "#FFFFFF",
    "--t-primary-deep": c["primary-deep"],
    "--t-primary-soft": c["primary-soft"],
    "--t-primary-subdued": c["primary-bg-subdued-hover"],
    "--t-warning": c["warning"],
    "--t-error": c["error"],
    "--t-hairline-strong": c["hairline-input"],
    "--t-shadow-soft": "none",
    "--t-shadow-lift": "0 20px 48px -16px rgba(19, 38, 41, 0.3)",
    "--t-card-border": "transparent",
  } as React.CSSProperties;
  return <div className={`${dmSans.variable} ${plexMono.variable} bg-canvas text-ink font-body`} style={style}>{children}</div>;
}
