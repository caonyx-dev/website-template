// 03 Services: graphite band. The header in white, a small photograph under the label column, and rows
// with hairline rules: the first carries its text, the others just the title; "See our work" pill.
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import type { StudioContent } from "../content";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Container, Pill, SectionHead } from "./ui";

export default function Services({ s }: { s: StudioContent["services"] }) {
  return (
    <section id="services" className="bg-dark py-24 text-white lg:py-32" aria-labelledby="services-title">
      <Container>
        <SectionHead n={s.n} label={s.label} title={s.title} text={s.text} id="services-title" onDark />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-10">
          <Reveal from="clip" className="aspect-[6/5] w-full max-w-[384px] overflow-hidden rounded-sm"><Image src={s.image.src} alt={s.image.alt} placeholder="blur" sizes="384px" className="h-full w-full object-cover" /></Reveal>
          <div className="lg:-ml-[22%]">
            <RevealGroup as="ul" from="left" stagger={0.1} className="border-t border-white/15" itemClassName="grid items-center gap-4 border-b border-white/15 py-9 lg:grid-cols-[1fr_1.4fr]">
              {s.items.map((it) => (
                <Fragment key={it.href}>
                  <h3 className="font-display text-[32px] font-bold tracking-[-0.8px] sm:text-[40px]"><Link href={it.href} className="text-white no-underline hover:text-primary">{it.title}</Link></h3>
                  {it.text && <p className="text-[16px] leading-[1.6] text-white/70">{it.text}</p>}
                </Fragment>
              ))}
            </RevealGroup>
            <Reveal delay={0.3}><Pill href={s.cta.href} className="mt-10">{s.cta.label}</Pill></Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
