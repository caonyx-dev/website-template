// 06 The reference's headline figure: one enormous stroke-only numeral on the slate ground, counting up from
// zero the first time it scrolls into view, with its label set on its side beside it. The slash eyebrow sits
// above a full-width hairline, as the reference places it.
import { Reveal } from "@/components/Reveal";
import type { LogisticsContent } from "../content";
import { Container, Eyebrow, GiantCount } from "./ui";

export default function Tonnage({ t }: { t: LogisticsContent["tonnage"] }) {
  return (
    <section className="log-on-dark bg-canvas pb-16 lg:pb-24" aria-labelledby="tonnage-title">
      <h2 id="tonnage-title" className="sr-only">{t.label}</h2>
      <Container>
        <div className="overflow-hidden rounded-[25px] bg-dark px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
          <Reveal>
            <Eyebrow onDark>{t.eyebrow}</Eyebrow>
            <span aria-hidden="true" className="mt-4 block h-px w-full bg-white/15" />
          </Reveal>
          <Reveal delay={0.1}>
            <GiantCount value={t.value} label={t.label} className="mt-12" />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-[56ch] text-[16px] leading-[1.75] text-white/75 text-pretty">{t.note}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
