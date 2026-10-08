// 08 Two client comments side by side, each opened by a burgundy rule down its left edge with a round monochrome
// avatar, the name and the matter. The standing note says these are placeholders that must be replaced.
import Image from "next/image";
import { RevealGroup } from "@/components/Reveal";
import type { LawContent } from "../content";
import { Container, SectionHead } from "./ui";

export default function Testimonials({ t }: { t: LawContent["testimonials"] }) {
  return (
    <section id="testimonials" className="scroll-mt-[112px] bg-canvas py-20 lg:py-28" aria-labelledby="testimonials-title">
      <Container>
        <SectionHead id="testimonials-title" eyebrow={t.eyebrow} lead={t.titleLead} em={t.titleEm} text={t.note} />
        <RevealGroup className="mt-14 grid gap-10 md:grid-cols-2" stagger={0.1}>
          {t.items.map((it) => (
            <figure key={it.role} className="m-0 border-l-2 border-primary pl-7">
              <blockquote className="m-0 text-[18px] leading-[1.7] text-ink">{it.text}</blockquote>
              <figcaption className="mt-7 flex items-center gap-4">
                <span className="relative block size-16 shrink-0 overflow-hidden rounded-full">
                  <Image src={it.avatar.src} alt={it.avatar.alt} fill placeholder="blur" sizes="64px" className="object-cover grayscale" />
                </span>
                <span className="grid gap-0.5">
                  <span className="font-display text-[21px] font-semibold text-ink">{it.name}</span>
                  <span className="text-[15px] text-mute">{it.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
