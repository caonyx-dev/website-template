// The reference's team band runs the headline at poster size and lets it bleed off the top edge of the dark panel,
// with the portraits beneath and a small tilted card carrying each name over the lower corner of its photograph.
// The crop is decorative: the real heading sits in the flow, visible in full to assistive tech.
import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup } from "@/components/Reveal";
import type { MarketingContent } from "../content";
import { Container, Eyebrow } from "./ui";

export default function Team({ t }: { t: MarketingContent["team"] }) {
  return (
    <section id="team" aria-labelledby="team-title" className="scroll-mt-28 overflow-hidden bg-ink py-20 text-(--t-on-dark) nim-on-dark sm:py-28">
      <Container>
        <Reveal><Eyebrow onDark>{t.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={0.06}>
          {/* Set at poster scale and allowed to run past the container on both sides, as the reference does; the
              band's own overflow clip is what trims it. */}
          <h2 id="team-title" className="-mx-1 mt-4 font-display text-[clamp(44px,11vw,150px)] font-extrabold leading-[0.9] tracking-[-0.045em] text-balance">
            {t.title}
          </h2>
        </Reveal>
        <Reveal delay={0.12}><p className="mt-5 max-w-[48ch] text-[17px] leading-[1.6] text-(--t-on-dark)/75">{t.lead}</p></Reveal>

        <RevealGroup as="ul" className="m-0 mt-12 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8" stagger={0.1}>
          {t.items.map((m, i) => (
            <figure key={`${m.name}-${m.role}`} className="group relative m-0">
              <Image
                src={m.image.src}
                alt={m.image.alt}
                placeholder="blur"
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                className="h-auto w-full rounded-[24px] object-cover"
              />
              <figcaption
                className="relative -mt-10 ml-5 mr-10 rounded-[16px] bg-canvas p-4 text-ink transition-transform duration-300 group-hover:rotate-0 motion-reduce:transition-none"
                style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
              >
                <p className="font-display text-[20px] font-bold tracking-[-0.02em]">{m.name}</p>
                <p className="mt-0.5 font-(family-name:--t-font-mono) text-[12px] uppercase tracking-[0.08em] text-(--t-mute)">{m.role}</p>
                <ul className="m-0 mt-1 flex list-none flex-wrap gap-x-4 p-0">
                  {m.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link href={l.href} className="inline-flex min-h-11 items-center text-[13px] font-semibold text-primary underline decoration-(--t-accent) decoration-[3px] underline-offset-4 transition-colors duration-200 hover:text-(--t-primary-active)">
                        {l.label}<span className="sr-only"> — {m.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </figcaption>
            </figure>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
