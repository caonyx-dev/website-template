// The reference overlaps a card on the right of a full-bleed photograph. Its card carries an invented star
// rating and a user count; this template's DESIGN.md forbids both, so the card carries the thing a local
// customer actually checks instead — insurance, checks and registration, every line a labelled placeholder.
import Image from "next/image";
import { SealCheckIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import type { SmallBusinessContent } from "../content";
import { Container } from "./ui";

export default function BandBlock({ b }: { b: SmallBusinessContent["bandBlock"] }) {
  return (
    <section aria-labelledby="band-title" className="relative bg-canvas">
      <div className="relative">
        <Image
          src={b.image.src}
          alt={b.image.alt}
          placeholder="blur"
          sizes="100vw"
          className="aspect-[16/10] w-full object-cover sm:aspect-[16/7]"
        />
        <Container className="pointer-events-none absolute inset-0 flex items-end justify-end pb-6 sm:items-center sm:pb-0">
          <Reveal className="pointer-events-auto w-full max-w-[380px]">
            <div className="rounded-[20px] bg-(--t-badge-mint) p-6 sm:p-7">
              <SealCheckIcon size={30} weight="light" aria-hidden="true" className="text-primary" />
              <h2 id="band-title" className="mt-4 font-display text-[22px] font-bold tracking-[-0.02em] text-ink">{b.card.title}</h2>
              <ul className="m-0 mt-4 grid list-none gap-2 p-0">
                {b.card.items.map((item) => (
                  <li key={item} className="text-[14px] leading-[1.5] text-ink">{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </div>
      <Container>
        <p className="mt-6 max-w-[86ch] text-[13px] leading-[1.6] text-(--t-muted)">
          <span className="font-semibold text-ink">Placeholder</span>{" "}{b.card.note}
        </p>
      </Container>
    </section>
  );
}
