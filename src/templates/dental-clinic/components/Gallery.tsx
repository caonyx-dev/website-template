// Smile gallery: two columns of photographs (tall, landscape) with the before/after slider in the right
// column; every tile wipes up as it enters.
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import type { DentalContent } from "../content";
import BeforeAfter from "./BeforeAfter";
import { Container, SectionHead } from "./ui";

export default function Gallery({ g }: { g: DentalContent["gallery"] }) {
  const [a, b, c] = g.items;
  const tile = (img: typeof a, aspect: string, delay = 0) => (
    <Reveal from="clip" delay={delay} className={`relative overflow-hidden ${aspect}`}><Image src={img.src} alt={img.alt} fill placeholder="blur" sizes="(min-width: 768px) 560px, 100vw" className="object-cover transition-transform duration-700 hover:scale-105" /></Reveal>
  );
  return (
    <section id="gallery" className="scroll-mt-20 py-24 lg:py-32" aria-labelledby="gallery-title">
      <Container>
        <SectionHead id="gallery-title" title={g.title} lead={g.lead} />
        <div className="grid gap-7 md:grid-cols-2">
          <div className="grid content-start gap-7">{tile(a, "aspect-[3/4]")}{tile(b, "aspect-[4/3]", 0.1)}</div>
          <div className="grid content-start gap-7"><Reveal from="clip" delay={0.15}><BeforeAfter g={g} /></Reveal>{tile(c, "aspect-[3/4]", 0.2)}</div>
        </div>
      </Container>
    </section>
  );
}
