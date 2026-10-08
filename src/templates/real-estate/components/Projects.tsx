"use client";
// The black band. On desktop it pins while three projects step through: the numbered list advances and
// the photograph on the right crossfades. Below 1024px, or under prefers-reduced-motion, it degrades to a
// plain stacked list with every project visible — no pinning, no scroll trapping (PRODUCT.md, a11y).
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MapPinIcon } from "@phosphor-icons/react";
import { Badge, Button } from "./ui";
import type { RealEstateContent } from "../content";

export default function Projects({ p }: { p: RealEstateContent["projects"] }) {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    let kill = () => {};
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        setPinned(true);
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: () => `+=${p.items.length * 70}%`,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            const idx = Math.min(p.items.length - 1, Math.floor(self.progress * p.items.length));
            setActive(idx);
          },
        });
        return () => {
          setPinned(false);
          st.kill();
        };
      });
      kill = () => mm.revert();
    })();
    return () => kill();
  }, [p.items.length]);

  return (
    <section ref={root} id={p.id} className="relative overflow-hidden bg-ink text-on-dark">
      <div className="grid lg:min-h-screen lg:grid-cols-2">
        {/* Copy column */}
        <div className="flex flex-col justify-center px-5 pt-20 pb-12 sm:px-6 lg:py-24 lg:pl-10 lg:pr-14 xl:pl-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))]">
          <Badge onDark>{p.badge}</Badge>
          <h2 className="mt-7 font-display text-[clamp(2rem,4.6vw,4rem)] font-bold leading-[1.07] tracking-[-0.02em] text-on-dark">
            {p.lines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>

          {/* Desktop: the stepping list. The active entry is the one the pin has reached. */}
          <ol className="mt-12 hidden lg:block">
            {p.items.map((it, i) => {
              const on = i === active;
              return (
                <li key={it.n} className="flex items-start gap-8 py-5">
                  <span
                    aria-hidden
                    className={`font-display text-[52px] font-bold leading-none tracking-[-0.02em] tabular-nums transition-colors duration-500 ${
                      on ? "text-primary" : "text-white/15"
                    }`}
                  >
                    {it.n}
                  </span>
                  <div className={`min-w-0 flex-1 transition-opacity duration-500 ${on ? "opacity-100" : "opacity-40"}`}>
                    <p className="flex items-center gap-2 font-body text-[15px] text-on-dark-muted">
                      <MapPinIcon size={16} weight="light" className="text-primary" aria-hidden />
                      {it.place} · {it.kind}
                    </p>
                    <hr className="my-3 border-0 border-t border-white/20" />
                    <a href={it.href} className="font-display text-[30px] font-bold tracking-[-0.01em] text-on-dark hover:text-primary">
                      {it.title}
                    </a>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="mt-10 hidden lg:block">
            <Button href={p.cta.href} arrow>
              {p.cta.label}
            </Button>
          </div>
        </div>

        {/* Photograph column. On desktop the three crossfade; on mobile each sits with its own entry. */}
        <div className="relative hidden lg:block">
          {p.items.map((it, i) => (
            <div
              key={it.n}
              aria-hidden={i !== active}
              className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={it.image.src}
                alt={it.image.alt}
                fill
                sizes="50vw"
                placeholder="blur"
                className="object-cover"
                style={{ objectPosition: it.image.position }}
              />
            </div>
          ))}
          {!pinned && <span className="sr-only">Project gallery</span>}
        </div>

        {/* Mobile and reduced-motion: every project, stacked and complete. */}
        <ol className="px-5 pb-20 sm:px-6 lg:hidden">
          {p.items.map((it) => (
            <li key={it.n} className="mt-8 first:mt-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[30px]">
                <Image
                  src={it.image.src}
                  alt={it.image.alt}
                  fill
                  sizes="100vw"
                  placeholder="blur"
                  className="object-cover"
                  style={{ objectPosition: it.image.position }}
                />
              </div>
              <div className="mt-5 flex items-start gap-5">
                <span aria-hidden className="font-display text-[36px] font-bold leading-none tabular-nums text-primary">
                  {it.n}
                </span>
                <div className="min-w-0">
                  <p className="flex items-center gap-2 font-body text-[14px] text-on-dark-muted">
                    <MapPinIcon size={15} weight="light" className="text-primary" aria-hidden />
                    {it.place} · {it.kind}
                  </p>
                  <a href={it.href} className="mt-1.5 block font-display text-[24px] font-bold tracking-[-0.01em] text-on-dark">
                    {it.title}
                  </a>
                </div>
              </div>
            </li>
          ))}
          <li className="mt-10">
            <Button href={p.cta.href} arrow>
              {p.cta.label}
            </Button>
          </li>
        </ol>
      </div>
    </section>
  );
}
