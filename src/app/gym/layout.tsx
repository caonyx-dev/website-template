import type { Metadata, Viewport } from "next";
import { Oswald, Work_Sans } from "next/font/google";
import { getTemplate, tokenStyle } from "@/lib/templates";
import "@/templates/gym/components/hero.css";
import DarkRoot from "@/templates/gym/components/DarkRoot";
import Cursor from "@/templates/gym/components/Cursor";

const oswald = Oswald({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-oswald" });
const workSans = Work_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-work-sans" });

export const viewport: Viewport = { themeColor: "#0B0F0A", colorScheme: "dark" };
export const metadata: Metadata = { title: "[Gym] · Train smarter", description: "Coached classes, modern equipment and flexible memberships. Start with a free trial." };

// Tokens from templates/gym/DESIGN.md: dark-only surface ladder, volt primary, red urgency accent, Oswald uppercase
// display (the DESIGN.md transform and 0.01em tracking come through `.font-display`), Work Sans body, 6px corners,
// hairline cards, no shadows. The ladder steps, category tints and chip tints are read from the frontmatter.
export default function GymLayout({ children }: { children: React.ReactNode }) {
  const t = getTemplate("gym")!;
  const c = t.fm.colors ?? {};
  const style = {
    ...tokenStyle(t.tokens),
    "--t-font-display": `var(--font-oswald), 'Arial Narrow', Impact, sans-serif`,
    "--t-font-body": `var(--font-work-sans), system-ui, sans-serif`,
    "--t-focus": t.tokens.primary,
    "--t-dark": c["surface-card"],
    "--t-on-dark": c["on-dark"],
    "--t-on-dark-mute": c["on-dark-mute"],
    "--t-surface-elevated": c["surface-elevated"],
    "--t-surface-card": c["surface-card"],
    "--t-primary-pressed": c["primary-pressed"],
    "--t-primary-soft": c["primary-soft"],
    "--t-accent-soft": c["accent-soft"],
    "--t-accent-blue": c["accent-blue"],
    "--t-accent-green": c["accent-green"],
    "--t-accent-yellow": c["accent-yellow"],
    "--t-slash-start": c["hero-slash-start"],
    "--t-slash-end": c["hero-slash-end"],
    "--t-hairline-strong": c["hairline-strong"],
    "--t-stone": c["stone"],
    "--t-shadow-soft": "none",
    "--t-shadow-lift": "none",
    "--t-card-border": c["hairline"],
    colorScheme: "dark",
  } as React.CSSProperties;
  return <div className={`${oswald.variable} ${workSans.variable} bg-canvas text-ink font-body`} style={style}><DarkRoot canvas={t.tokens.canvas} /><Cursor />{children}</div>;
}
