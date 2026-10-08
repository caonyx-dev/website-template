import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { getTemplate, tokenStyle } from "@/lib/templates";
import SmoothScroll from "@/components/SmoothScroll";

const display = localFont({
  src: [
    { path: "../../fonts/space-grotesk/space-grotesk-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
});
const body = localFont({
  src: [
    { path: "../../fonts/inter/inter-variable.woff2", weight: "400 500", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#F7F5F0" };

export const metadata: Metadata = {
  title: "[Studio name] · Architecture studio",
  description: "[Studio name] designs houses, workplaces and public buildings in [region].",
};

// Tokens come from templates/architect/DESIGN.md; only the font families are swapped for next/font loads.
export default function ArchitectLayout({ children }: { children: React.ReactNode }) {
  const t = getTemplate("architect")!;
  const style = {
    ...tokenStyle(t.tokens),
    "--t-font-display": `var(--font-space-grotesk), 'Helvetica Neue', Arial, sans-serif`,
    "--t-font-body": `var(--font-inter), system-ui, sans-serif`,
  } as React.CSSProperties;
  return (
    <div className={`${display.variable} ${body.variable} bg-canvas text-ink font-body`} style={style}>
      <SmoothScroll>{children}</SmoothScroll>
    </div>
  );
}
