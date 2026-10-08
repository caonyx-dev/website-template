import type { Metadata, Viewport } from "next";
import { Archivo, Public_Sans, JetBrains_Mono } from "next/font/google";
import { getTemplate, tokenStyle } from "@/lib/templates";
import "@/templates/logistics/components/hero.css";

const archivo = Archivo({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-archivo" });
const publicSans = Public_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-public-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains" });

export const viewport: Viewport = { themeColor: "#FFFFFF" };
export const metadata: Metadata = { title: "[Company] · Freight and logistics", description: "Road, sea and rail freight with live tracking, transparent pricing and a named coordinator on every account. Track a consignment or request a quote." };

// Tokens from templates/logistics/DESIGN.md: white canvas, slate bands, signal orange carrying dark slate labels,
// Archivo display, Public Sans body and JetBrains Mono for every tracking number, code and time. The rounded
// geometry is a deliberate override of this file's 4px rule, recorded in its dated revision.
export default function LogisticsLayout({ children }: { children: React.ReactNode }) {
  const t = getTemplate("logistics")!;
  const c = t.fm.colors ?? {};
  const style = {
    ...tokenStyle(t.tokens),
    "--t-font-display": `var(--font-archivo), 'Helvetica Neue', Arial, system-ui, sans-serif`,
    "--t-font-body": `var(--font-public-sans), 'Helvetica Neue', Arial, system-ui, sans-serif`,
    "--t-font-mono": `var(--font-jetbrains), ui-monospace, SFMono-Regular, Menlo, monospace`,
    "--t-focus": c["primary-focus"],
    "--t-display-transform": "uppercase",
    "--t-display-tracking": "-0.02em",
    "--t-soft": c["surface-1"],
    "--t-soft2": c["surface-2"],
    "--t-surface": c["canvas"],
    "--t-mute": c["ink-subtle"],
    "--t-ink-muted": c["ink-muted"],
    "--t-ink-tertiary": c["ink-tertiary"],
    "--t-dark": c["inverse-canvas"],
    "--t-dark-2": c["inverse-surface-1"],
    "--t-dark-3": c["inverse-surface-2"],
    "--t-on-dark": c["inverse-ink"],
    "--t-on-dark-muted": c["inverse-ink-muted"],
    "--t-hairline-strong": c["hairline-strong"],
    "--t-control": "#8794A3",
    "--t-surface-3": c["surface-3"],
    "--t-primary-hover": c["primary-hover"],
    "--t-primary-focus": c["primary-focus"],
    "--t-primary-soft": c["primary-soft"],
    "--t-success": c["semantic-success"],
    "--t-warning": c["semantic-warning"],
    "--t-error": c["semantic-error"],
    // Flat by instruction: no gradients, glows or soft shadows on cards.
    "--t-shadow-soft": "none",
    "--t-shadow-lift": "none",
    "--t-card-border": c["hairline"],
  } as React.CSSProperties;
  return <div className={`${archivo.variable} ${publicSans.variable} ${mono.variable} log-root bg-canvas text-ink font-body pb-[calc(3.5rem+env(safe-area-inset-bottom))] lg:pb-0`} style={style}>{children}</div>;
}
