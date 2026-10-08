// The asymmetric block. A circle-framed render sits at the left edge carrying a `+` list, and three
// text blocks are placed at three different vertical offsets across the rest of the row. The offsets
// are authored, not derived (DESIGN.md) — and they are visual only: DOM order is reading order, and
// below lg the whole thing becomes one ordered column where asymmetry would just read as breakage.
import Image from "next/image";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Wrap } from "./ui";
import type { TechStartupContent } from "../content";

const OFFSET = ["lg:mt-0", "lg:mt-44", "lg:mt-24"];

export default function Capabilities({ c }: { c: TechStartupContent["capabilities"] }) {
  return (
    <section id={c.id} className="bg-canvas py-24 sm:py-28 lg:py-36">
      <Wrap>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-16">
          {/* Circle-framed render with the capability list over it. */}
          <Reveal from="scale">
            <div className="ts-disc relative aspect-square w-full max-w-[460px]">
              <Image
                src={c.image.src}
                alt={c.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 36vw"
                placeholder="blur"
                className="object-cover"
              />
              {/* Local scrim: the render is bright in places and the list must stay legible.
                  Deliberately radial and partial, so the image is not flattened to grey. */}
              <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,.62)_0%,rgba(0,0,0,.45)_55%,transparent_78%)]" />
              <div className="absolute inset-0 grid place-items-center p-10">
                <ul className="space-y-2">
                  {c.list.map((item) => (
                    <li key={item} className="flex items-baseline gap-3 font-display text-[clamp(1rem,1.5vw,1.25rem)] font-medium text-on-dark">
                      <span aria-hidden className="text-on-dark/70">
                        +
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Scattered blocks. */}
          <RevealGroup className="grid gap-10 sm:grid-cols-2 lg:gap-x-14 lg:gap-y-0">
            {c.blocks.map((b, i) => (
              <div key={b.title} className={`max-w-[340px] ${OFFSET[i] ?? ""}`}>
                <h3 className="font-display text-[clamp(1.25rem,1.9vw,1.5rem)] font-medium text-ink">{b.title}</h3>
                <p className="mt-4 font-body text-[17px] leading-[1.5] text-body">{b.text}</p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </Wrap>
    </section>
  );
}
