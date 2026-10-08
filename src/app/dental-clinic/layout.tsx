import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { getTemplate, tokenStyle } from "@/lib/templates";
import "@/templates/dental-clinic/components/hero.css";

const heebo = localFont({
  src: [
    { path: "../../fonts/heebo/heebo-variable.woff2", weight: "500 800", style: "normal" },
  ],
  variable: "--font-heebo",
  display: "swap",
});
const nunito = localFont({
  src: [
    { path: "../../fonts/nunito-sans/nunito-sans-variable.woff2", weight: "400 700", style: "normal" },
  ],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#FFFFFF" };
export const metadata: Metadata = { title: "[Clinic] · Dental clinic", description: "Gentle, modern dentistry for the whole family: check-ups, cosmetic dentistry, children's dentistry and implants." };

// Tokens from templates/dental-clinic/DESIGN.md (2026-10-07 SmilePure revision): navy ink and dark surface, teal primary,
// Heebo headings with normal tracking, Nunito Sans body, square corners, soft navy-tinted card shadows.
export default function DentalClinicLayout({ children }: { children: React.ReactNode }) {
  const t = getTemplate("dental-clinic")!;
  const style = {
    ...tokenStyle(t.tokens),
    "--t-font-display": `var(--font-heebo), 'Segoe UI', system-ui, sans-serif`,
    "--t-font-body": `var(--font-nunito-sans), 'Segoe UI', system-ui, sans-serif`,
    "--t-focus": t.tokens.ink,
    "--t-display-tracking": "0",
    "--t-shadow-soft": "0 10px 30px rgba(0, 35, 69, 0.08)",
    "--t-shadow-lift": "0 20px 48px -12px rgba(0, 35, 69, 0.28)",
    "--t-card-border": "transparent",
  } as React.CSSProperties;
  return <div className={`${heebo.variable} ${nunito.variable} bg-canvas text-ink font-body`} style={style}>{children}</div>;
}
