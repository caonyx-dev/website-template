// Training programmes: numbered eyebrow, giant title, "See all classes"; a wide photo card with title, text and
// a "training performance" card whose bars grow on entry; two elevated cards with volt line icons.
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, BarbellIcon, FlameIcon, HeartbeatIcon, LightningIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup } from "@/components/Reveal";
import type { GymContent, ProgramIcon } from "../content";
import { Btn, Container, SectionHead } from "./ui";

export function PIcon({ icon, size = 36 }: { icon: ProgramIcon; size?: number }) {
  const p = { size, weight: "light" as const, "aria-hidden": true, className: "text-primary" };
  if (icon === "flame") return <FlameIcon {...p} />;
  if (icon === "barbell") return <BarbellIcon {...p} />;
  if (icon === "lightning") return <LightningIcon {...p} />;
  return <HeartbeatIcon {...p} />;
}

export default function Programs({ p }: { p: GymContent["programs"] }) {
  return (
    <section id="programs" className="scroll-mt-20 py-24 lg:py-32" aria-labelledby="programs-title">
      <Container>
        <SectionHead n={p.n} label={p.label} lines={p.title} id="programs-title" cta={<Btn href={p.cta.href}>{p.cta.label}</Btn>} />
        <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr]">
          <Reveal from="clip" className="relative min-h-[560px] overflow-hidden rounded-lg border border-hairline bg-dark">
            <Image src={p.feature.image.src} alt={p.feature.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 760px, 100vw" className="object-cover object-[70%_center] opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-canvas/85 via-canvas/30 to-transparent" aria-hidden="true" />
            <div className="relative grid h-full content-between gap-10 p-8 lg:p-12">
              <div className="max-w-[320px]"><h3 className="font-display text-[34px] font-semibold text-ink">{p.feature.title}</h3><p className="mt-3 text-[16px] leading-[1.6] text-body">{p.feature.text}</p><Link href={p.feature.href} className="mt-5 inline-flex items-center gap-2 text-[14px] font-medium uppercase tracking-[.04em] text-ink no-underline hover:text-primary">{p.more}<span className="sr-only"> about {p.feature.title}</span><ArrowUpRightIcon size={16} weight="bold" aria-hidden="true" /></Link></div>
              <RevealGroup className="max-w-[640px] rounded-lg border border-hairline bg-(--t-surface-card)/90 p-6 backdrop-blur-sm" from="left" stagger={0.1}>
                <h4 className="mb-4 font-display text-[22px] font-semibold text-ink">{p.feature.barsTitle}</h4>
                {p.feature.bars.map((b) => <div key={b.label} className="grid grid-cols-[96px_1fr] items-center gap-4 py-1.5 text-[14px] text-body"><span>{b.label}</span><span className="h-2 overflow-hidden rounded-full bg-hairline"><span className="block h-full origin-left rounded-full bg-primary" style={{ width: `${b.value}%` }} /></span><span className="sr-only">{b.value} percent</span></div>)}
              </RevealGroup>
            </div>
          </Reveal>
          <RevealGroup className="grid gap-6" stagger={0.12}>
            {p.cards.map((c) => (
              <article key={c.title} className="grid h-full content-start gap-5 rounded-lg border border-hairline bg-(--t-surface-elevated) p-8">
                <PIcon icon={c.icon} />
                <h3 className="font-display text-[26px] font-semibold text-ink">{c.title}</h3>
                <p className="text-[16px] leading-[1.6] text-body">{c.text}</p>
                <Link href={c.href} className="inline-flex items-center gap-2 text-[14px] font-medium uppercase tracking-[.04em] text-ink no-underline hover:text-primary">{p.more}<span className="sr-only"> about {c.title}</span><ArrowUpRightIcon size={16} weight="bold" aria-hidden="true" /></Link>
              </article>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
