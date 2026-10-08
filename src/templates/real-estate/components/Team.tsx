// Leadership. Portraits in notched cards with a frosted name plate floating over the bottom of each
// photograph; the three are vertically staggered at desktop, as in the reference.
import Image from "next/image";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { ArrowDisc, Badge, Headline, Wrap } from "./ui";
import type { RealEstateContent } from "../content";

const OFFSET = ["lg:mt-0", "lg:mt-16", "lg:mt-0"];

export default function Team({ t }: { t: RealEstateContent["team"] }) {
  return (
    <section id={t.id} className="bg-canvas py-20 sm:py-24 lg:py-32">
      <Wrap>
        <Reveal className="flex justify-center">
          <Badge>{t.badge}</Badge>
        </Reveal>
        <h2 className="mx-auto mt-7 max-w-[760px] text-center font-display text-[clamp(2rem,5.2vw,4.375rem)] font-bold leading-[1.07] tracking-[-0.02em] text-ink">
          <Headline lines={t.lines} />
        </h2>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:items-start">
          {t.members.map((m, i) => (
            <article key={`${m.role}-${i}`} className={`group relative ${OFFSET[i] ?? ""}`}>
              <div className="re-notch relative aspect-[3/4] overflow-hidden rounded-[30px]">
                <Image
                  src={m.image.src}
                  alt={m.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ objectPosition: m.image.position }}
                />

                {/* Frosted name plate. The fill is an ink tint, not white: these portraits are shot on
                    bright backgrounds, and a white plate leaves the white label unreadable. */}
                <div className="absolute inset-x-5 bottom-5 rounded-[20px] border border-white/20 bg-ink/45 px-5 py-4 text-center backdrop-blur-[16px]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/90">{m.role}</p>
                  <p className="mt-1 font-display text-[22px] font-bold tracking-[-0.01em] text-on-dark">{m.name}</p>
                </div>
              </div>

              <ArrowDisc className="absolute right-[6px] top-[6px]" />
            </article>
          ))}
        </RevealGroup>
      </Wrap>
    </section>
  );
}
