import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { getTemplate, tokenStyle } from "@/lib/templates";
import "@/templates/small-business/components/hero.css";

const outfit = localFont({
  src: [
    { path: "../../fonts/outfit/outfit-variable.woff2", weight: "600 700", style: "normal" },
  ],
  variable: "--font-outfit",
  display: "swap",
});
const openSans = localFont({
  src: [
    { path: "../../fonts/open-sans/open-sans-variable.woff2", weight: "400 700", style: "normal" },
  ],
  variable: "--font-open-sans",
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#FFFFFF" };
export const metadata: Metadata = {
  title: "[Business name] · Home and office cleaning in [Town]",
  description: "A local, family-run cleaning service. Book online in under a minute or call us — we cover [Town] and the surrounding villages.",
};

// Tokens from templates/small-business/DESIGN.md: soft white canvas, mint bands, a friendly green primary on
// pill buttons, warm orange kept to the Call pill and small highlights, Outfit for display over Open Sans for
// everything else. The raised display scale the cleaning-service rebuild adopts is recorded in that file's
// dated revision.
export default function SmallBusinessLayout({ children }: { children: React.ReactNode }) {
  const t = getTemplate("small-business")!;
  const c = t.fm.colors ?? {};
  const style = {
    ...tokenStyle(t.tokens),
    "--t-font-display": `var(--font-outfit), 'Segoe UI', Arial, sans-serif`,
    "--t-font-body": `var(--font-open-sans), 'Segoe UI', Arial, sans-serif`,
    "--t-focus": c["primary"],
    "--t-accent": c["brand-accent"],
    "--t-accent-deep": c["warning"],
    "--t-soft": c["surface-soft"],
    "--t-strong": c["surface-strong"],
    "--t-surface": c["surface-card"],
    "--t-body": c["body"],
    "--t-muted": c["muted"],
    "--t-muted-soft": c["muted-soft"],
    "--t-hairline": c["hairline"],
    "--t-hairline-soft": c["hairline-soft"],
    // The file's own hairline is 1.2:1 on white — below the 3:1 a control border has to meet — so
    // inputs and the slider track take a darker tone. Recorded in the DESIGN.md revision.
    "--t-control": c["hairline"],
    "--t-control-strong": c["muted-soft"],
    "--t-canvas-plain": c["canvas"],
    "--t-shadow-ink": "rgba(26,32,44,0.30)",
    "--t-dark": c["surface-dark"],
    "--t-dark-2": c["surface-dark-elevated"],
    "--t-on-dark": c["on-dark"],
    "--t-on-dark-soft": c["on-dark-soft"],
    "--t-primary-active": c["primary-active"],
    "--t-primary-disabled": c["primary-disabled"],
    "--t-badge-mint": c["badge-mint"],
    "--t-badge-peach": c["badge-peach"],
    "--t-badge-sky": c["badge-sky"],
    "--t-error": c["error"],
    // The file allows exactly two elevation levels and forbids hard offsets. `.sb-lift` carries the hover
    // level; the resting token stays light.
    "--t-shadow-soft": "rgba(26,32,44,0.05) 0 1px 2px 0, rgba(26,32,44,0.06) 0 6px 16px -6px",
    "--t-shadow-lift": "rgba(26,32,44,0.06) 0 2px 6px 0, rgba(26,32,44,0.10) 0 12px 28px -8px",
    "--t-card-border": c["hairline"],
  } as React.CSSProperties;
  return (
    <div
      className={`${outfit.variable} ${openSans.variable} sb-root bg-canvas text-ink font-body pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0`}
      style={style}
    >
      {children}
    </div>
  );
}
