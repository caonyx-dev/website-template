"use client";
// 02 Portfolio: on the cool off-white band, an Embla slider of project cards (3:2 photograph, display title,
// tag pills) that drags freely and bleeds past the right edge.
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { Reveal, useReducedMotionSafe } from "@/components/Reveal";
import type { StudioContent } from "../content";
import { Container, SectionHead, Tag } from "./ui";

export default function Portfolio({ p }: { p: StudioContent["portfolio"] }) {
  const reduce = useReducedMotionSafe();
  const [ref] = useEmblaCarousel({ align: "start", dragFree: true, duration: reduce ? 0 : 24 });
  return (
    <section id="work" className="bg-soft py-24 lg:py-32" aria-labelledby="work-title">
      <Container><SectionHead n={p.n} label={p.label} title={p.title} text={p.text} id="work-title" /></Container>
      <div ref={ref} className="mt-16 overflow-hidden pl-5 sm:pl-7 xl:pl-[max(28px,calc((100vw-1384px)/2))]" aria-roledescription="carousel" aria-label="Featured projects">
        <ul className="flex gap-5">
          {p.items.map((it, i) => (
            <li key={it.href} className="min-w-0 shrink-0 grow-0 basis-[86%] sm:basis-[48%] lg:basis-[34%]" aria-roledescription="slide" aria-label={`${i + 1} of ${p.items.length}`}>
              <Link href={it.href} className="group grid gap-5 no-underline">
                <Reveal from="clip" delay={i * 0.08} className="aspect-[3/2] overflow-hidden rounded-sm bg-soft2"><Image src={it.image.src} alt={it.image.alt} placeholder="blur" sizes="(min-width: 1024px) 34vw, 86vw" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></Reveal>
                <span className="font-display text-[32px] font-bold tracking-[-0.8px] text-ink">{it.title}</span>
                <span className="flex flex-wrap gap-2">{it.tags.map((t) => <Tag key={t}>{t}</Tag>)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
