// Case studies: centred headline and three split cards: warm panel with the index, title and a pill tag on
// the left, photograph on the right.
import Image from "next/image";
import Link from "next/link";
import { RevealGroup } from "@/components/Reveal";
import type { CorporateContent } from "../content";
import { Container, H2 } from "./ui";

export default function CaseStudies({ c }: { c: CorporateContent["cases"] }) {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="cases-title">
      <Container>
        <H2 id="cases-title" center className="mx-auto max-w-[1000px]">{c.title}</H2>
        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.08}>
          {c.items.map((it, i) => (
            <Link key={it.href} href={it.href} className="group grid grid-cols-[1fr_1fr] bg-soft no-underline">
              <div className="grid content-between gap-8 p-6">
                <div><span className="text-[15px] text-body">00{i + 1}</span><h3 className="mt-14 font-display text-[22px] font-semibold leading-tight text-ink group-hover:text-primary">{it.title}</h3></div>
                <span className="inline-flex w-max rounded-full border border-ink px-4 py-1.5 text-[14px] text-ink">{it.tag}</span>
              </div>
              <div className="relative min-h-[264px] overflow-hidden"><Image src={it.image.src} alt={it.image.alt} fill placeholder="blur" sizes="(min-width: 768px) 17vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>
            </Link>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
