// 13 Private dining: three bordered cards with the seat count, what the space is and the price it starts at.
import { RevealGroup, Reveal } from "@/components/Reveal";
import type { RestaurantContent } from "../content";
import { Btn, Container, SectionHead } from "./ui";

export default function PrivateDining({ p }: { p: RestaurantContent["privateDining"] }) {
  return (
    <section id="private" className="scroll-mt-[124px] bg-canvas py-20 lg:py-28" aria-labelledby="private-title">
      <Container>
        <SectionHead id="private-title" eyebrow={p.eyebrow} title={p.title} lead={p.lead} />
        <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.1}>
          {p.items.map((it) => (
            <article key={it.title} className="flex h-full flex-col border border-hairline bg-surface p-7">
              <h3 className="font-display text-[22px] font-semibold text-ink">{it.title}</h3>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[1.4px] text-(--t-accent-deep)">{it.seats}</p>
              <p className="mt-4 flex-1 text-[15px] leading-[1.65] text-body">{it.text}</p>
              <p className="mt-6 border-t border-(--t-hairline-soft) pt-4 text-[15px] tabular-nums text-ink">{it.from}</p>
            </article>
          ))}
        </RevealGroup>
        <Reveal delay={0.2} className="mt-10 text-center"><Btn href={p.cta.href}>{p.cta.label}</Btn></Reveal>
      </Container>
    </section>
  );
}
