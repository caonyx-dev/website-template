// Team: text column (headline, lead, navy "Doctor's timetable" button and the "Meet our team" line) beside
// a 2×2 grid of square portraits with name and role; portraits wipe up in turn.
import Image from "next/image";
import { Reveal, RevealGroup, Words } from "@/components/Reveal";
import type { DentalContent } from "../content";
import { Btn, Container, TextLink } from "./ui";

export default function Team({ t }: { t: DentalContent["team"] }) {
  return (
    <section id="team" className="scroll-mt-20 py-24 lg:py-32" aria-labelledby="team-title">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.7fr] lg:gap-24">
        <div>
          <h2 id="team-title" className="font-display text-[36px] font-bold leading-[1.15] text-ink text-balance sm:text-[44px]"><Words>{t.title}</Words></h2>
          <Reveal delay={0.2}><p className="mt-6 text-[17px] leading-[1.75] text-body">{t.text}</p></Reveal>
          <Reveal delay={0.3}><Btn href={t.cta.href} tone="navy" className="mt-9">{t.cta.label}</Btn></Reveal>
          <Reveal delay={0.35}><p className="mt-8 text-[15px] text-body">{t.meet.text} <TextLink href={t.meet.link.href}>{t.meet.link.label}</TextLink></p></Reveal>
        </div>
        <RevealGroup as="ul" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 lg:gap-x-16" from="clip" stagger={0.12}>
          {t.people.map((p, i) => (
            <figure key={i} className="m-0">
              <div className="relative aspect-square overflow-hidden"><Image src={p.image.src} alt={p.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 320px, 45vw" className="object-cover transition-transform duration-700 hover:scale-105" /></div>
              <figcaption className="mt-5"><span className="block font-display text-[18px] font-bold text-ink">{p.name}</span><span className="mt-1 block text-[15px] text-body">{p.role}</span></figcaption>
            </figure>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
