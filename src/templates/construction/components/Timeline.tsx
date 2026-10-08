// timeline-step row: horizontal at desktop with a 2px ink top rule per step, vertical with a left rule
// on phones. Number sits in a 40px amber-on-graphite square; duration is a placeholder spec figure.
import { RevealGroup } from "@/components/Reveal";
import type { ConstructionContent } from "../content";
import { Container, Headline } from "./ui";

export default function Timeline({ t }: { t: ConstructionContent["timeline"] }) {
  return (
    <section id={t.id} className="border-t border-hairline py-20 lg:py-24" aria-labelledby={`${t.id}-title`}>
      <Container>
        <Headline id={`${t.id}-title`} title={t.title} lead={t.lead} />
        <RevealGroup as="ol" className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6" itemClassName="grid gap-3 border-l-2 border-ink pl-5 lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-4" stagger={0.08}>
          {t.steps.map((s) => (
            <div key={s.n} className="contents">
              <span className="inline-flex h-10 w-10 items-center justify-center bg-dark font-display text-[20px] font-bold text-accent tabular-nums" aria-hidden="true">{s.n}</span>
              <h3 className="font-display text-[22px] font-semibold leading-tight"><span className="sr-only">Step {s.n}: </span>{s.title}</h3>
              <span className="text-[13px] tabular-nums text-mute">{s.duration}</span>
              <p className="text-[14px] leading-[1.55] text-body">{s.text}</p>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
