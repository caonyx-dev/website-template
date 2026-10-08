// The reference's achievements split: a large heading holding the left half, the paragraphs and one button
// on the right. Short, as this template's DESIGN.md asks — one headline, one idea, one action.
import { Reveal } from "@/components/Reveal";
import type { SmallBusinessContent } from "../content";
import { Btn, Container, Title } from "./ui";

export default function About({ a }: { a: SmallBusinessContent["about"] }) {
  return (
    <section aria-labelledby="about-title" className="bg-canvas pb-16 sm:pb-20">
      <Container>
        <div className="grid gap-8 border-t border-(--t-hairline) pt-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Title id="about-title" className="max-w-[16ch]">{a.title}</Title>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              {a.paras.map((p, i) => (
                <p key={p.slice(0, 24)} className={`max-w-[56ch] text-[16px] leading-[1.7] text-(--t-body) ${i > 0 ? "mt-4" : ""}`}>{p}</p>
              ))}
              <Btn href={a.cta.href} className="mt-7">{a.cta.label}</Btn>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
