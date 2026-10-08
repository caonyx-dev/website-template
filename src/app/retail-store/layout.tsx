import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { getTemplate, tokenStyle } from "@/lib/templates";
import "@/templates/retail-store/components/hero.css";

const poppins = localFont({
  src: [
    { path: "../../fonts/poppins/poppins-600.woff2", weight: "600", style: "normal" },
    { path: "../../fonts/poppins/poppins-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});
const mulish = localFont({
  src: [
    { path: "../../fonts/mulish/mulish-variable.woff2", weight: "400 700", style: "normal" },
  ],
  variable: "--font-mulish",
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#FFFFFF" };
export const metadata: Metadata = {
  title: "[Store name] · Clothing and accessories",
  description: "An independent clothing shop. Browse what is new online, check what is in stock, and find our opening hours and address.",
};

// Tokens from templates/retail-store/DESIGN.md: crisp white canvas, blush soft surface, deep mulberry as the one
// action colour, bold yellow kept to the promo strip and badges, Poppins for headlines and prices over Mulish for
// everything else. The geometry the Vogal rebuild changes is recorded in that file's dated revision.
export default function RetailStoreLayout({ children }: { children: React.ReactNode }) {
  const t = getTemplate("retail-store")!;
  const c = t.fm.colors ?? {};
  const style = {
    ...tokenStyle(t.tokens),
    "--t-font-display": `var(--font-poppins), 'Helvetica Neue', Arial, sans-serif`,
    "--t-font-body": `var(--font-mulish), 'Helvetica Neue', Arial, sans-serif`,
    "--t-focus": c["primary"],
    "--t-soft": c["surface-soft"],
    "--t-strong": c["surface-strong"],
    "--t-surface": c["surface-card"],
    "--t-body": c["body"],
    "--t-muted": c["muted"],
    "--t-muted-soft": c["muted-soft"],
    "--t-hairline": c["hairline"],
    "--t-hairline-soft": c["hairline-soft"],
    "--t-control": c["border-strong"],
    "--t-dark": c["ink"],
    "--t-on-dark": c["on-dark"],
    "--t-on-dark-muted": "#B6B5B9",
    "--t-on-accent": c["on-accent"],
    "--t-accent-deep": c["accent-deep"],
    "--t-primary-active": c["primary-active"],
    "--t-primary-disabled": c["primary-disabled"],
    "--t-price-was": c["price-was"],
    "--t-error": c["primary-error-text"],
    // The DESIGN.md defines exactly one shadow, and it is a hover lift rather than a resting state, so the
    // shared resting tokens are switched off and `.rst-card` carries the lift instead.
    "--t-shadow-soft": "none",
    "--t-shadow-lift": "rgba(24,24,27,0.04) 0 1px 2px 0, rgba(24,24,27,0.08) 0 6px 16px -2px, rgba(157,23,77,0.06) 0 12px 28px -8px",
    "--t-card-border": c["hairline"],
  } as React.CSSProperties;
  return (
    <div
      className={`${poppins.variable} ${mulish.variable} rst-root bg-canvas text-ink font-body pb-[calc(4rem+env(safe-area-inset-bottom))] lg:pb-0`}
      style={style}
    >
      {children}
    </div>
  );
}
