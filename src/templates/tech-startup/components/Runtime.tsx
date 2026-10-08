// The cool-grey panel, inset from the page edge and rounded so it reads as a panel laid on the page
// rather than a full-bleed stripe: heading, a framed render with an overlay mark and a chip, and three
// hairline-ruled rows each carrying a small orange line-art glyph.
import Image from "next/image";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Headline, Wrap } from "./ui";
import type { TechStartupContent } from "../content";

/** A small concentric line-art mark, drawn rather than imported — the reference uses spiro curves. */
function Spiro({ seed }: { seed: number }) {
  const rings = Array.from({ length: 9 }, (_, i) => i);
  return (
    <svg viewBox="0 0 100 100" className="size-20 shrink-0 text-primary" aria-hidden fill="none">
      {rings.map((i) => {
        const r = 10 + i * 4;
        const rot = i * (6 + seed * 2);
        return (
          <ellipse
            key={i}
            cx="50"
            cy="50"
            rx={r}
            ry={r * (0.45 + seed * 0.12)}
            stroke="currentColor"
            strokeWidth="0.8"
            opacity={0.75 - i * 0.05}
            transform={`rotate(${rot} 50 50)`}
          />
        );
      })}
    </svg>
  );
}

export default function Runtime({ r }: { r: TechStartupContent["runtime"] }) {
  return (
    <section className="bg-canvas pb-24 sm:pb-28 lg:pb-36">
      <Wrap>
        <div className="rounded-[20px] bg-soft px-5 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
          <h2 className="max-w-[900px] font-display text-[clamp(2.125rem,4.4vw,3.125rem)] font-medium leading-[1.0] text-ink">
            <Headline lines={r.lines} />
          </h2>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal from="clip">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] lg:aspect-[5/4]">
                <Image
                  src={r.image.src}
                  alt={r.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  placeholder="blur"
                  className="object-cover"
                />
                {/* A shadow rather than a scrim: the render is bright in places and the mark must stay legible,
                    but DESIGN.md forbids flattening a render to grey. */}
                <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 text-center font-display text-[22px] font-medium text-on-dark [text-shadow:0_2px_18px_rgba(0,0,0,.8)]">
                  {r.overlay}
                </p>
                <span className="absolute bottom-5 left-5 rounded-[12px] bg-canvas px-5 py-3 font-body text-[15px] text-ink underline decoration-primary decoration-2 underline-offset-4">
                  {r.chip}
                </span>
              </div>
            </Reveal>

            <RevealGroup className="border-t border-hairline-strong">
              {r.rows.map((row, i) => (
                <div key={row.title} className="flex items-start gap-6 border-b border-hairline-strong py-7">
                  <Spiro seed={i} />
                  <div className="min-w-0">
                    <h3 className="font-display text-[clamp(1.125rem,1.6vw,1.375rem)] font-medium text-ink">{row.title}</h3>
                    <p className="mt-2.5 font-body text-[16px] leading-[1.5] text-body">{row.text}</p>
                  </div>
                </div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
