// Our facilities like the reference: two 3:2 photographs, each with a navy figure box overlapping its lower
// edge (Marcellus figure, label and a line of text); tiles fade in on entry.
import Image from "next/image";
import { RevealGroup } from "@/components/Reveal";
import type { HotelContent } from "../content";
import { Container, SectionHead } from "./ui";

export default function Figures({ f }: { f: HotelContent["figures"] }) {
  return (
    <section className="relative z-[1] bg-canvas py-24 lg:py-28" aria-labelledby="figures-title">
      <Container>
        <SectionHead id="figures-title" eyebrow={f.eyebrow} title={f.title} />
        <RevealGroup as="ul" className="grid gap-8 lg:grid-cols-2" stagger={0.15}>
          {f.items.map((it) => (
            <figure key={it.label} className="relative m-0 pb-16 pr-6">
              <div className="relative aspect-[3/2] overflow-hidden"><Image src={it.image.src} alt={it.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" /></div>
              <figcaption className="absolute bottom-0 right-0 grid w-[90%] grid-cols-[auto_1fr] items-center gap-6 bg-primary px-7 py-6 text-on-dark">
                <span className="grid justify-items-center"><span className="font-display text-[48px] leading-none tabular-nums">{it.value}</span><span className="mt-1 text-[12px] uppercase tracking-[1.6px] text-accent">{it.label}</span></span>
                <p className="text-[15px] font-light leading-[1.6] text-(--t-body-muted)">{it.text}</p>
              </figcaption>
            </figure>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
