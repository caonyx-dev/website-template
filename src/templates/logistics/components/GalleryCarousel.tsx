"use client";
// 11 The reference's full-width photographic carousel: one 25px rounded slide with its caption over the lower
// left and a pair of arrow buttons in the lower right.
import Image from "next/image";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import type { LogisticsContent } from "../content";
import { Container, Mono } from "./ui";

export default function GalleryCarousel({ g }: { g: LogisticsContent["gallery"] }) {
  const [i, setI] = useState(0);
  const n = g.items.length;
  const go = (next: number) => setI((next + n) % n);
  return (
    <section id="gallery" className="log-on-dark scroll-mt-[112px] bg-canvas pb-16 lg:pb-24" aria-labelledby="gallery-title" aria-roledescription="carousel">
      <h2 id="gallery-title" className="sr-only">Our network</h2>
      <Container>
        <div className="relative overflow-hidden rounded-[25px] bg-dark">
          {g.items.map((it, k) => (
            <div key={k} aria-hidden={k !== i} className={`transition-opacity duration-500 motion-reduce:transition-none ${k === i ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}`}>
              <span className="relative block" style={{ aspectRatio: "16 / 9" }}>
                <Image src={it.image.src} alt={k === i ? it.image.alt : ""} fill placeholder="blur" sizes="(min-width: 1380px) 1340px, 100vw" className="object-cover" />
              </span>
            </div>
          ))}
          <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(to_top,color-mix(in_srgb,var(--t-dark)_75%,transparent),transparent)]" />
          <p className="absolute bottom-7 left-6 right-6 font-display text-[22px] font-bold text-white sm:left-10 sm:text-[26px]">{g.items[i].caption}</p>
          <div className="absolute bottom-6 right-6 flex items-center gap-3">
            <Mono className="hidden text-[14px] text-white sm:inline">{String(i + 1).padStart(2, "0")} <span className="text-white/50">/ {String(n).padStart(2, "0")}</span></Mono>
            <span className="flex overflow-hidden rounded-[18px] bg-canvas">
              <button type="button" onClick={() => go(i - 1)} aria-label="Previous photograph" className="inline-flex size-12 items-center justify-center text-ink transition-colors hover:bg-primary hover:text-(--t-on-primary)"><ArrowLeftIcon size={19} weight="bold" aria-hidden="true" /></button>
              <button type="button" onClick={() => go(i + 1)} aria-label="Next photograph" className="inline-flex size-12 items-center justify-center text-ink transition-colors hover:bg-primary hover:text-(--t-on-primary)"><ArrowRightIcon size={19} weight="bold" aria-hidden="true" /></button>
            </span>
          </div>
          <p role="status" aria-live="polite" className="sr-only">Photograph {i + 1} of {n}: {g.items[i].caption}</p>
        </div>
      </Container>
    </section>
  );
}
