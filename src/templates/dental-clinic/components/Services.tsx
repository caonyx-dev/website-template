// Services on the grey band: three white cards with the photograph set inside the padding, centred title
// and text and an outlined "More details" button with a teal arrow; cards wipe up in turn.
import Image from "next/image";
import { Reveal, RevealGroup } from "@/components/Reveal";
import type { DentalContent } from "../content";
import { Btn, Container, SectionHead, TextLink } from "./ui";

export default function Services({ s }: { s: DentalContent["services"] }) {
  return (
    <section id="services" className="scroll-mt-20 bg-soft py-24 lg:py-32" aria-labelledby="services-title">
      <Container>
        <SectionHead id="services-title" title={s.title} lead={s.lead} />
        <RevealGroup as="ul" className="grid gap-7 md:grid-cols-3" stagger={0.12} from="clip">
          {s.items.map((it) => (
            <article key={it.title} className="grid h-full content-start justify-items-center bg-white p-5 pb-10 text-center shadow-soft">
              <div className="relative aspect-[4/3] w-full overflow-hidden"><Image src={it.image.src} alt={it.image.alt} fill placeholder="blur" sizes="(min-width: 768px) 360px, 100vw" className="object-cover transition-transform duration-700 hover:scale-105" /></div>
              <h3 className="mt-8 font-display text-[22px] font-bold text-ink">{it.title}</h3>
              <p className="mt-3 max-w-[30ch] text-[15px] leading-[1.75] text-body">{it.text}</p>
              <Btn href={it.href} tone="outline" arrow className="mt-7 h-12 px-6"><span>{s.more}<span className="sr-only">: {it.title}</span></span></Btn>
            </article>
          ))}
        </RevealGroup>
        <Reveal><p className="mt-14 text-center text-[15px] text-body">{s.note.text} <TextLink href={s.note.link.href}>{s.note.link.label}</TextLink></p></Reveal>
      </Container>
    </section>
  );
}
