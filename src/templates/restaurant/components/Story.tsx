// 05 The story: a centred column of copy on the cream, the one place on the page that is only words.
import { Reveal } from "@/components/Reveal";
import type { RestaurantContent } from "../content";
import { Btn, Container, SectionHead } from "./ui";

export default function Story({ s }: { s: RestaurantContent["story"] }) {
  return (
    <section id="story" className="scroll-mt-[124px] bg-canvas pb-20 lg:pb-28" aria-labelledby="story-title">
      <Container>
        <SectionHead id="story-title" eyebrow={s.eyebrow} title={s.title} />
        <div className="mx-auto max-w-[720px] text-center">
          {s.paras.map((p, i) => <Reveal key={i} delay={0.1 + i * 0.08} className={i > 0 ? "mt-6" : ""}><p className="text-[17px] leading-[1.75] text-body">{p}</p></Reveal>)}
          <Reveal delay={0.3} className="mt-9"><Btn href={s.cta.href} tone="outline">{s.cta.label}</Btn></Reveal>
        </div>
      </Container>
    </section>
  );
}
