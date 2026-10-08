"use client";
// Hero in the reference's language: a vertical social rail, a decorative concentric-circle drawing, three
// uppercase display lines (the middle one on a full-width warm band), the client avatar badge and the
// outlined arrow glyph, then a full-width image slider (Embla, round white arrows) with the blue
// three-column feature card overlapping its bottom edge. Words sharpen out of a blur on load.
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useSyncExternalStore } from "react";
import { ArrowLeftIcon, ArrowRightIcon, PlusIcon, TriangleIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { CorporateContent } from "../content";
import { Frame } from "./ui";
import AnimatedText from "./AnimatedText";

export default function Hero({ h }: { h: CorporateContent["hero"] }) {
  const reduce = useReducedMotionSafe();
  const [ref, api] = useEmblaCarousel({ loop: true, duration: reduce ? 0 : 28 });
  const subscribe = useCallback((cb: () => void) => { if (!api) return () => {}; api.on("select", cb).on("reInit", cb); return () => { api.off("select", cb).off("reInit", cb); }; }, [api]);
  const index = useSyncExternalStore(subscribe, () => api?.selectedScrollSnap() ?? 0, () => 0);

  return (
    <section id="top" className="overflow-hidden" aria-labelledby="hero-title">
      <h1 id="hero-title" className="sr-only">{h.line1} {h.line2} {h.line3}</h1>
      <Frame className="relative my-14 lg:my-24">
        {/* social rail */}
        <ul className="absolute left-4 top-1/2 hidden -translate-y-1/2 flex-col gap-10 xl:flex" aria-label="Social">
          {h.socials.map((s) => <li key={s.href}><a href={s.href} className="block [writing-mode:vertical-rl] rotate-180 text-[13px] font-semibold uppercase tracking-[.1em] text-ink no-underline hover:text-primary">{s.label}</a></li>)}
        </ul>
        <div className="mx-auto grid max-w-[1280px] justify-items-center gap-4 px-4 sm:px-6" aria-hidden="true">
          {/* line 1 */}
          <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-16">
            <svg className="hidden h-20 w-52 text-ink md:block" viewBox="0 0 214 81" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><circle cx="90" cy="40" r="36" /><circle cx="124" cy="40" r="36" /><circle cx="107" cy="40" r="22" /><path d="M0 40h214" /></svg>
            <div className="text-center font-display text-[clamp(44px,7.6vw,112px)] font-black uppercase leading-none tracking-[-0.03em] text-ink"><AnimatedText delay={0} stagger={0.08}>{h.line1}</AnimatedText></div>
            <div className="grid justify-items-center gap-2 lg:justify-items-start">
              <div className="flex items-center">
                {[0, 1, 2].map((i) => <span key={i} className={`-ml-3 first:ml-0 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-white text-[11px] font-semibold ${["bg-[#DCE8D4] text-[#4A6B3A]", "bg-[#F6D3D3] text-[#8C3A3A]", "bg-[#D9E6F2] text-[#2F4F6E]"][i]}`}>[{i + 1}]</span>)}
                <span className="-ml-3 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-ink text-white"><PlusIcon size={18} weight="bold" /></span>
              </div>
              <span className="text-[16px] text-ink"><b className="font-semibold">{h.clients.count}</b> {h.clients.label}</span>
            </div>
          </div>
          {/* line 2 on the warm band */}
          <div className="w-full bg-soft px-4 py-3 text-center font-display text-[clamp(34px,6.3vw,100px)] font-medium uppercase leading-[1.05] tracking-[-0.03em] text-ink lg:whitespace-nowrap lg:leading-none"><AnimatedText delay={0.35} stagger={0.08}>{h.line2}</AnimatedText></div>
          {/* line 3 */}
          <div className="grid w-full items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-16">
            <p className="max-w-[40ch] text-[16px] leading-[1.6] text-body lg:justify-self-end">{h.text}</p>
            <div className="text-center font-display text-[clamp(44px,7.6vw,112px)] font-black uppercase leading-none tracking-[-0.03em] text-ink"><AnimatedText delay={0.7} stagger={0.08}>{h.line3}</AnimatedText></div>
            <svg className="hidden h-28 w-28 text-ink lg:block" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M8 8l52 52M60 60l52-52M60 60v40l-26 12M60 100l26 12" /></svg>
          </div>
        </div>
      </Frame>

      {/* slider + feature card */}
      <Frame className="relative px-4">
        <div className="relative">
          <div ref={ref} className="overflow-hidden" aria-roledescription="carousel" aria-label="Site photographs">
            <ul className="flex">
              {h.slides.map((s, i) => (
                <li key={i} className="relative min-w-0 shrink-0 grow-0 basis-full" aria-roledescription="slide" aria-label={`${i + 1} of ${h.slides.length}`} aria-hidden={index !== i}>
                  <div className="aspect-[16/9] max-h-[720px] w-full lg:aspect-[2.2/1]"><Image src={s.src} alt={s.alt} priority={i === 0} placeholder="blur" sizes="100vw" className="h-full w-full object-cover" /></div>
                </li>
              ))}
            </ul>
          </div>
          <button type="button" onClick={() => api?.scrollPrev()} aria-label="Previous slide" className="absolute left-6 top-1/2 inline-flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white hover:text-ink"><ArrowLeftIcon size={26} weight="light" aria-hidden="true" /></button>
          <button type="button" onClick={() => api?.scrollNext()} aria-label="Next slide" className="absolute right-6 top-1/2 inline-flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white hover:text-ink"><ArrowRightIcon size={26} weight="light" aria-hidden="true" /></button>
          <div className="relative z-10 ml-auto -mt-24 w-full bg-primary text-white lg:-mt-56 lg:max-w-[76%]">
            <div className="grid grid-cols-1 gap-4 p-8 md:grid-cols-3 lg:gap-10 lg:px-16 lg:py-10">
              {h.features.map((f) => (
                <div key={f.title} className="border-t border-white/70 text-center md:text-left">
                  <h2 className="flex items-center justify-center gap-2 py-4 text-[16px] font-bold uppercase md:justify-start lg:pt-6 lg:text-[18px]"><TriangleIcon size={18} weight="fill" className="rotate-90" aria-hidden="true" />{f.title}</h2>
                  <p className="text-[15px] leading-[1.6]">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Frame>
    </section>
  );
}
