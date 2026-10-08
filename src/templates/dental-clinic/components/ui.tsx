// Primitives for the dental clinic: 1200px container, square uppercase buttons (teal with navy text, navy
// with white text, outlined), underlined text links, the centred section header and the social icon lookup.
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon, FacebookLogoIcon, InstagramLogoIcon, XLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, Words } from "@/components/Reveal";

export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;

type Tone = "teal" | "navy" | "outline" | "outline-ink";
export function Btn({ href, children, tone = "teal", className = "", type = "button", arrow = false }: { href?: string; children: ReactNode; tone?: Tone; className?: string; type?: "button" | "submit"; arrow?: boolean }) {
  const t = {
    teal: "bg-primary text-ink hover:bg-dark hover:text-white",
    navy: "bg-dark text-white hover:bg-primary hover:text-ink",
    outline: "border border-hairline-strong bg-white text-ink hover:border-ink",
    "outline-ink": "border border-ink/50 text-ink hover:bg-ink hover:text-white",
  }[tone];
  const cls = `inline-flex h-[52px] items-center justify-center gap-3 px-7 font-display text-[13px] font-bold uppercase tracking-[.1em] no-underline transition-colors duration-200 ${t} ${className}`;
  const inner = <>{children}{arrow && <ArrowRightIcon size={18} weight="bold" className="text-primary" aria-hidden="true" />}</>;
  if (href) return <Link href={href} className={cls}>{inner}</Link>;
  return <button type={type} className={cls}>{inner}</button>;
}

export const TextLink = ({ href, children }: { href: string; children: ReactNode }) => <Link href={href} className="font-semibold text-ink underline decoration-1 underline-offset-4 hover:decoration-2">{children}</Link>;

/** Centred section header: the title reveals word by word, the lead fades in after it. */
export function SectionHead({ id, title, lead }: { id: string; title: string; lead?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-[640px] text-center">
      <h2 id={id} className="font-display text-[34px] font-bold leading-[1.15] text-ink text-balance sm:text-[44px]"><Words>{title}</Words></h2>
      {lead && <Reveal delay={0.2}><p className="mt-5 text-[17px] leading-[1.75] text-body">{lead}</p></Reveal>}
    </div>
  );
}

export function SocialIcon({ label, size = 18 }: { label: string; size?: number }) {
  const p = { size, weight: "fill" as const, "aria-hidden": true };
  if (/facebook/i.test(label)) return <FacebookLogoIcon {...p} />;
  if (/instagram/i.test(label)) return <InstagramLogoIcon {...p} />;
  if (/youtube/i.test(label)) return <YoutubeLogoIcon {...p} />;
  return <XLogoIcon {...p} />;
}
