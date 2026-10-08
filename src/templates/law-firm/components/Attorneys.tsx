// 07 The reference's dark team band: eyebrow and two-tone headline on the left, a paragraph on the right, then
// four monochrome portraits with an ivory name card overlapping the bottom of each.
import Image from "next/image";
import { RevealGroup } from "@/components/Reveal";
import type { LawContent } from "../content";
import { Container, Num, SectionHead, Tag } from "./ui";

export default function Attorneys({ a }: { a: LawContent["attorneys"] }) {
  return (
    <section id="attorneys" className="law-on-dark scroll-mt-[112px] bg-dark pb-10 pt-20 lg:pb-14 lg:pt-28" aria-labelledby="attorneys-title">
      <Container>
        <SectionHead id="attorneys-title" eyebrow={a.eyebrow} lead={a.titleLead} em={a.titleEm} text={a.text} onDark />
        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {a.items.map((it) => (
            <article key={it.role} className="relative pb-20">
              <span className="relative block overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
                <Image src={it.image.src} alt={it.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover grayscale" />
              </span>
              {/* The reference's device: the name card sits proud of the photograph's lower edge. */}
              <div className="absolute inset-x-5 bottom-0 bg-canvas p-5">
                <h3 className="font-display text-[21px] font-semibold leading-[1.3] text-ink">{it.name}</h3>
                <p className="mt-1 text-[15px] text-mute">{it.role}</p>
                <p className="mt-3 flex flex-wrap items-center gap-2 text-[14px] text-(--t-ink-secondary)">
                  <Num>{it.admitted}</Num>{it.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </p>
              </div>
            </article>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
