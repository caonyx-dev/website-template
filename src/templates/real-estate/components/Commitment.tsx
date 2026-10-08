// Our commitment: an overlapping pair of photographs with two floating cards on the left, three
// hairline-ruled rows with lime icon discs on the right.
import Image from "next/image";
import { ShieldCheckIcon, UsersThreeIcon, ClockCounterClockwiseIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, Words } from "@/components/Reveal";
import { Badge, Wrap } from "./ui";
import type { CommitIcon, RealEstateContent } from "../content";

const ICONS: Record<CommitIcon, typeof ShieldCheckIcon> = {
  shield: ShieldCheckIcon,
  team: UsersThreeIcon,
  clock: ClockCounterClockwiseIcon,
};

export default function Commitment({ c }: { c: RealEstateContent["commitment"] }) {
  const [top, bottom] = c.images;
  return (
    <section id="commitment" className="bg-canvas py-20 sm:py-24 lg:py-32">
      <Wrap>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Photograph stack */}
          <div className="relative">
            <Reveal from="clip" className="overflow-hidden rounded-[30px]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={top.src}
                  alt={top.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div className="mt-5 flex items-end gap-5">
              <Reveal from="clip" className="w-[58%] overflow-hidden rounded-[30px]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={bottom.src}
                    alt={bottom.alt}
                    fill
                    sizes="(max-width: 1024px) 58vw, 27vw"
                    placeholder="blur"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <Reveal className="flex-1 space-y-4" delay={0.1}>
                {c.cards.map((card) => (
                  <div key={card.label} className="rounded-[20px] bg-soft2 p-5">
                    <p className="font-display text-[30px] font-bold leading-none tracking-[-0.02em] text-ink tabular-nums">
                      {card.value}
                    </p>
                    <p className="mt-2 font-body text-[14px] leading-[1.4] text-body">{card.label}</p>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>

          {/* Copy and rows */}
          <div>
            <Reveal>
              <Badge>{c.badge}</Badge>
            </Reveal>
            <h2 className="mt-7 font-display text-[clamp(2rem,4.6vw,4rem)] font-bold leading-[1.07] tracking-[-0.02em] text-ink">
              <Words>{c.title}</Words>
            </h2>
            <p className="mt-5 max-w-[560px] font-body text-[17px] leading-[1.55] text-body sm:text-[19px]">{c.lead}</p>

            <dl className="mt-10 border-t border-hairline">
              {c.rows.map((r, i) => {
                const Icon = ICONS[r.icon];
                return (
                  <Reveal key={r.title} delay={i * 0.08}>
                    <div className="grid gap-4 border-b border-hairline py-7 sm:grid-cols-[auto_minmax(0,0.85fr)_minmax(0,1fr)] sm:items-start sm:gap-6">
                      <span aria-hidden className="grid size-14 shrink-0 place-items-center rounded-full bg-primary text-on-primary">
                        <Icon size={26} weight="light" />
                      </span>
                      <dt className="font-display text-[21px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink">{r.title}</dt>
                      <dd className="font-body text-[16px] leading-[1.5] text-body">{r.text}</dd>
                    </div>
                  </Reveal>
                );
              })}
            </dl>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
