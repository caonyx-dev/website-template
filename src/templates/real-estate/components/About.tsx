// Who we are. The white band curves up over the hero photograph with a 50px top notch — the
// section join that gives this template its character (DESIGN.md, "Notched corners — the signature").
import { Reveal } from "@/components/Reveal";
import { Badge, Headline, Wrap } from "./ui";
import type { RealEstateContent } from "../content";

export default function About({ a }: { a: RealEstateContent["about"] }) {
  return (
    <section
      id={a.id}
      className="relative z-10 -mt-[90px] rounded-t-[32px] bg-canvas pt-20 sm:-mt-[110px] sm:rounded-t-[50px] sm:pt-28 lg:pt-32"
    >
      <Wrap>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <Badge>{a.badge}</Badge>
          </Reveal>

          <div>
            <h2 className="font-display text-[clamp(2rem,5.2vw,4.375rem)] font-bold leading-[1.07] tracking-[-0.02em] text-ink">
              <Headline lines={a.lines} />
            </h2>

            <dl className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-12">
              {a.pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <dt className="flex items-center gap-3 font-display text-[24px] font-bold tracking-[-0.01em] text-ink">
                    <span aria-hidden className="grid size-9 shrink-0 place-items-center rounded-full bg-primary">
                      <span className="size-2.5 rounded-full bg-ink" />
                    </span>
                    {p.title}
                  </dt>
                  <dd className="mt-4 font-body text-[17px] leading-[1.55] text-body">{p.text}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
