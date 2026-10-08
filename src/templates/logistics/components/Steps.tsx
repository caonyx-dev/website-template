// 10 The reference's step row: a big outlined brand-coloured numeral with a rotated "step" label beside it, then
// the title and two lines, separated by vertical hairlines. Six steps, wrapping to two rows below `lg`.
import { RevealGroup } from "@/components/Reveal";
import type { LogisticsContent } from "../content";
import { Container, Mono, SectionHead } from "./ui";

export default function Steps({ s }: { s: LogisticsContent["steps"] }) {
  return (
    <section id="steps" className="scroll-mt-[112px] bg-canvas pb-16 lg:pb-24" aria-labelledby="steps-title">
      <Container>
        <SectionHead id="steps-title" eyebrow={s.eyebrow} title={s.title} />
        <RevealGroup as="ol" className="mt-14 grid list-none gap-y-12 p-0 sm:grid-cols-2 lg:grid-cols-3" itemClassName="sm:border-l sm:border-hairline sm:pl-7 sm:first:border-l-0 sm:first:pl-0 lg:[&:nth-child(4)]:border-l-0 lg:[&:nth-child(4)]:pl-0 sm:[&:nth-child(3)]:border-l-0 sm:[&:nth-child(3)]:pl-0 lg:[&:nth-child(3)]:border-l lg:[&:nth-child(3)]:pl-7" stagger={0.08}>
          {s.items.map((it) => (
            <span key={it.n} className="block">
              <span className="flex items-start gap-2">
                <Mono aria-hidden="true" className="log-outline text-[64px] font-medium leading-none text-primary lg:text-[76px]">{it.n}</Mono>
                <span className="mt-2 text-[13px] uppercase tracking-[0.1em] text-(--t-ink-muted) [writing-mode:vertical-rl]">step</span>
              </span>
              <h3 className="mt-8 font-display text-[21px] font-bold text-ink">{it.title}</h3>
              <p className="mt-3 max-w-[38ch] text-[16px] leading-[1.75] text-(--t-ink-muted) text-pretty">{it.text}</p>
            </span>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
