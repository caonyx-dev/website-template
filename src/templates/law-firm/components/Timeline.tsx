// 05 Four milestones along a brass rule, each with its tabular year above a dot. The rule turns vertical below md.
import { Reveal } from "@/components/Reveal";
import type { LawContent } from "../content";
import { Container, Num, SectionHead } from "./ui";

export default function Timeline({ t }: { t: LawContent["timeline"] }) {
  return (
    <section className="bg-soft py-20 lg:py-28" aria-labelledby="timeline-title">
      <Container>
        <SectionHead id="timeline-title" eyebrow={t.eyebrow} lead={t.titleLead} em={t.titleEm} text={t.text} />
        <ol role="list" className="mt-16 grid list-none gap-10 p-0 max-md:border-l max-md:border-accent/40 max-md:pl-6 md:grid-cols-4 md:gap-7">
          {t.items.map((it, i) => (
            <li key={it.year + it.title} className="relative">
              <Reveal delay={i * 0.08}>
                <p className="font-display text-[24px] font-semibold text-(--t-accent-deep)"><Num>{it.year}</Num></p>
                <span aria-hidden="true" className="my-4 block h-px bg-accent/40 max-md:hidden" />
                <span aria-hidden="true" className="absolute -left-[31px] top-2 size-3 rounded-full bg-accent md:left-0 md:top-[44px] md:-translate-y-1/2" />
                <h3 className="font-display text-[21px] font-semibold text-ink max-md:mt-3">{it.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-(--t-ink-secondary)">{it.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
