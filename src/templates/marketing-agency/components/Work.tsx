// The reference's portfolio is a staggered grid rather than a neat row: the second column drops half a card so the
// two projects read as a masonry, and a violet panel closes the set. Each result line is a bracketed placeholder —
// this template's DESIGN.md forbids shipping an invented figure.
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import type { MarketingContent } from "../content";
import { Container, Eyebrow, Label, Pill, Title } from "./ui";

export default function Work({ w }: { w: MarketingContent["work"] }) {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-28 bg-canvas py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)_auto] xl:items-start xl:gap-12">
          <Reveal><Eyebrow className="xl:pt-2">{w.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.08}><Title id="work-title" className="max-w-[16ch]">{w.title}</Title></Reveal>
          <Reveal delay={0.14}><div className="xl:justify-self-end xl:pt-2"><Pill href={w.cta.href} tone="ink">{w.cta.label}</Pill></div></Reveal>
        </div>

        <ul className="m-0 mt-12 grid list-none gap-6 p-0 lg:grid-cols-2 lg:gap-8">
          {w.items.map((item, i) => (
            <li key={item.title + item.tag} className={i % 2 === 1 ? "lg:mt-20" : undefined}>
              <Reveal delay={i * 0.08}>
                <article className="group">
                  {/* Announced through the title link below; this copy is decorative. */}
                  <Link href={item.href} tabIndex={-1} aria-hidden="true" className="block overflow-hidden rounded-[24px] no-underline">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      placeholder="blur"
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </Link>
                  <div className="mt-6 flex items-start justify-between gap-5">
                    <div className="min-w-0">
                      <Label className="text-(--t-mute)">{item.tag}</Label>
                      <h3 className="mt-2 font-display text-[26px] font-bold tracking-[-0.03em] text-balance sm:text-[32px]">
                        <Link href={item.href} className="text-ink no-underline transition-colors duration-200 group-hover:text-primary">{item.title}</Link>
                      </h3>
                      <p className="mt-2 max-w-[46ch] text-[16px] leading-[1.6] text-(--t-body)">{item.text}</p>
                      <p className="mt-3 font-(family-name:--t-font-mono) text-[13px] text-(--t-mute)">{item.result}</p>
                    </div>
                    <span aria-hidden="true" className="mt-1 flex size-12 shrink-0 items-center justify-center rounded-full bg-(--t-soft) text-ink transition-colors duration-200 group-hover:bg-primary group-hover:text-(--t-on-primary)">
                      <ArrowUpRightIcon size={18} weight="bold" />
                    </span>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <div className="mt-10 grid gap-6 rounded-[24px] bg-primary p-8 text-(--t-on-primary) sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12">
            <div>
              <h3 className="font-display text-[26px] font-extrabold tracking-[-0.03em] sm:text-[34px]">{w.panel.title}</h3>
              <p className="mt-3 max-w-[52ch] text-[16px] leading-[1.6] text-(--t-on-primary)/85">{w.panel.text}</p>
            </div>
            <Pill href={w.panel.cta.href} tone="paper">{w.panel.cta.label}</Pill>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
