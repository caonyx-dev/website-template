// Memberships: numbered eyebrow and giant title over one surface container holding three tier cards; the Pro
// tier flips to surface-elevated with a volt "Most popular" badge. Prices are placeholders. Cards rise in turn.
import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup } from "@/components/Reveal";
import type { GymContent } from "../content";
import { Badge, Btn, Container, Num, SectionHead } from "./ui";

export default function Memberships({ m }: { m: GymContent["memberships"] }) {
  return (
    <section id="memberships" className="scroll-mt-20 py-24 lg:py-32" aria-labelledby="memberships-title">
      <Container>
        <SectionHead n={m.n} label={m.label} lines={m.title} id="memberships-title" />
        <RevealGroup as="ul" className="grid gap-4 rounded-lg border border-hairline bg-surface p-4 lg:grid-cols-3" stagger={0.1}>
          {m.tiers.map((t) => (
            <article key={t.name} className={`flex h-full flex-col gap-6 rounded-lg p-6 lg:p-8 ${t.featured ? "border border-hairline bg-(--t-surface-elevated)" : ""}`}>
              <div className="flex items-start justify-between gap-3"><div><h3 className="font-display text-[28px] font-semibold text-ink">{t.name}</h3><p className="mt-1 text-[15px] text-body">{t.text}</p></div>{t.badge && <Badge>{t.badge}</Badge>}</div>
              <p className="flex items-baseline gap-2"><Num className="font-display text-[64px] font-bold leading-none text-ink">{t.price}</Num><span className="text-[14px] text-mute">{t.per}</span></p>
              <ul className="grid gap-3 text-[15px] text-body">{t.includes.map((inc) => <li key={inc} className="flex items-start gap-3"><CheckIcon size={18} weight="bold" className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />{inc}</li>)}</ul>
              <div className="mt-auto pt-2"><Btn href={t.cta.href} tone={t.featured ? "primary" : "tertiary"} className="w-full justify-between">{t.cta.label}</Btn></div>
            </article>
          ))}
        </RevealGroup>
        <Reveal><p className="mt-6 max-w-[80ch] text-[13px] leading-[1.5] text-mute">{m.note}</p></Reveal>
      </Container>
    </section>
  );
}
