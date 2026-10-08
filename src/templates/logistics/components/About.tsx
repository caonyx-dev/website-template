// 06 The reference's "who we are" band: an outlined rounded path on the left over a dotted ground, the eyebrow
// above a full-width hairline on the right, then the big title, a bold lead, a paragraph and the split button.
// The ghost "Since [year]" sits outlined above it all.
import { Reveal } from "@/components/Reveal";
import type { LogisticsContent } from "../content";
import { Btn, Container, Eyebrow, Title } from "./ui";

export default function About({ a }: { a: LogisticsContent["about"] }) {
  return (
    <section id="about" className="relative scroll-mt-[112px] overflow-hidden bg-canvas py-16 lg:py-24" aria-labelledby="about-title">
      <span aria-hidden="true" className="log-dots pointer-events-none absolute inset-y-0 right-0 w-[70%] text-(--t-hairline)" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <Reveal className="max-lg:hidden">
            {/* The reference's outlined ribbon mark, drawn rather than imported. */}
            <svg viewBox="0 0 320 400" role="img" aria-label="An outlined ribbon mark" className="w-full max-w-[360px] text-primary">
              <g fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="1" width="200" height="130" rx="40" />
                <rect x="60" y="135" width="200" height="130" rx="40" />
                <rect x="1" y="268" width="260" height="130" rx="40" />
              </g>
            </svg>
          </Reveal>
          <div>
            <Reveal><Eyebrow>{a.eyebrow}</Eyebrow></Reveal>
            <Reveal delay={0.06}><span aria-hidden="true" className="mt-4 block h-px w-full bg-(--t-hairline)" /></Reveal>
            <Reveal delay={0.1}><Title id="about-title" className="mt-9 max-w-[18ch]">{a.title}</Title></Reveal>
            <Reveal delay={0.18}><p className="mt-8 max-w-[52ch] text-[17px] font-semibold leading-[1.75] text-ink text-pretty">{a.leadBold}</p></Reveal>
            {a.paras.map((p, i) => <Reveal key={i} delay={0.24 + i * 0.06} className="mt-5"><p className="max-w-[56ch] text-[16px] leading-[1.75] text-(--t-ink-muted) text-pretty">{p}</p></Reveal>)}
            <Reveal delay={0.34} className="mt-9"><Btn href={a.cta.href} tone="dark">{a.cta.label}</Btn></Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
