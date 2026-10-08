import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { getTemplate, tokenStyle } from "@/lib/templates";
import "@/templates/travel-agency/components/hero.css";

const serif = localFont({
  src: [
    { path: "../../fonts/dm-serif-display/dm-serif-display-400.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-dm-serif",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});
const sans = localFont({
  src: [
    { path: "../../fonts/dm-sans/dm-sans-variable.woff2", weight: "400 700", style: "normal" },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#FFFFFF" };
export const metadata: Metadata = {
  title: "[Agency name] · Tailor-made journeys",
  description: "A small tailor-made travel agency. Tell us where you want to go and when, and we will plan it around you — with a named specialist from first call to coming home.",
};

// Tokens from templates/travel-agency/DESIGN.md: cool white canvas, sky-tinted soft surface, navy ink, azure as
// the brand colour with the deeper azure under solid buttons, and sunset orange reserved for "from" price
// badges. DM Serif Display at 400 carries every headline; DM Sans carries everything else. The poster scale and
// the fully round buttons the Arolax rebuild adopts are recorded in that file's dated revision.
export default function TravelAgencyLayout({ children }: { children: React.ReactNode }) {
  const t = getTemplate("travel-agency")!;
  const c = t.fm.colors ?? {};
  const style = {
    ...tokenStyle(t.tokens),
    "--t-font-display": `var(--font-dm-serif), Georgia, 'Times New Roman', serif`,
    "--t-font-body": `var(--font-dm-sans), 'Helvetica Neue', Arial, sans-serif`,
    "--t-focus": c["primary-deep"],
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
    "--t-on-dark-muted": "#C7D6E3",
    "--t-on-accent": c["on-accent"],
    "--t-accent-soft": c["accent-soft"],
    "--t-primary-deep": c["primary-deep"],
    "--t-primary-active": c["primary-active"],
    "--t-primary-disabled": c["primary-disabled"],
    "--t-error": c["primary-error-text"],
    // The sky the hero is drawn on, and the plain white the page settles to beneath it.
    "--t-sky-top": "#DCEEFB",
    "--t-sky-mid": "#EAF5FD",
    "--t-canvas-plain": c["canvas"],
    // The DESIGN.md allows exactly one lift and insists it is blue-tinted, never grey. `.tv-lift` applies it on
    // hover; the resting tokens stay off.
    "--t-shadow-soft": "none",
    "--t-shadow-lift": "rgba(12,26,43,0.04) 0 2px 6px 0, rgba(2,132,199,0.10) 0 14px 34px -10px",
    "--t-card-border": c["hairline"],
  } as React.CSSProperties;
  return (
    <div
      className={`${serif.variable} ${sans.variable} tv-root bg-canvas text-ink font-body`}
      style={style}
    >
      {children}
    </div>
  );
}
