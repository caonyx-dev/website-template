// 12 The reference's crew row: a centred eyebrow and title, then three rounded greyscale portraits with the name
// and role set beside each rather than beneath.
import Image from "next/image";
import { RevealGroup } from "@/components/Reveal";
import type { LogisticsContent } from "../content";
import { Container, SectionHead } from "./ui";

export default function Crew({ c }: { c: LogisticsContent["crew"] }) {
  return (
    <section id="crew" className="scroll-mt-[112px] bg-canvas pb-16 lg:pb-24" aria-labelledby="crew-title">
      <Container>
        <SectionHead id="crew-title" eyebrow={c.eyebrow} title={c.title} center />
        <RevealGroup className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.09}>
          {c.items.map((it) => (
            <article key={it.role} className="flex items-center gap-6">
              <span className="relative block size-[170px] shrink-0 overflow-hidden rounded-[25px] bg-soft">
                <Image src={it.image.src} alt={it.image.alt} fill placeholder="blur" sizes="170px" className="object-cover grayscale" />
              </span>
              <span className="min-w-0">
                <h3 className="font-display text-[24px] font-bold leading-[1.15] text-ink text-balance">{it.name}</h3>
                <span className="mt-2 block text-[16px] text-mute">{it.role}</span>
              </span>
            </article>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
