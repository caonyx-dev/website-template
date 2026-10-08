// The reference's mosaic: two tall tiles beside two stacked short ones, each carrying a white label plate over
// the lower part of the photograph. The photo scales on hover, which is the behaviour the DESIGN.md gives
// `collection-tile`; the gradient it also asks for is kept because the label sits on the image.
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import type { RetailContent } from "../content";
import { Container, SectionHead } from "./ui";

export default function Explore({ e }: { e: RetailContent["explore"] }) {
  const tall = e.tiles.filter((t) => t.tall);
  const short = e.tiles.filter((t) => !t.tall);

  const Tile = ({ t, ratio }: { t: RetailContent["explore"]["tiles"][number]; ratio: string }) => (
    <Link href={t.href} className="group relative block overflow-hidden rounded-xl no-underline">
      <Image
        src={t.image.src}
        alt={t.image.alt}
        placeholder="blur"
        sizes="(min-width: 1024px) 33vw, 100vw"
        className={`${ratio} w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
      />
      <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/35" />
      <span className="absolute inset-x-0 bottom-6 flex justify-center">
        <span className="inline-flex min-h-10 items-center rounded-lg bg-canvas px-6 font-display text-[14px] font-semibold uppercase tracking-[0.06em] text-ink">{t.label}</span>
      </span>
    </Link>
  );

  return (
    <section id="explore" aria-labelledby="explore-title" className="scroll-mt-32 bg-(--t-soft) py-12 sm:py-16">
      <Container>
        <SectionHead id="explore-title" title={e.title} />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {tall.map((t, i) => (
            <Reveal key={t.label} delay={i * 0.06}><Tile t={t} ratio="aspect-[3/4]" /></Reveal>
          ))}
          <div className="grid gap-4">
            {short.map((t, i) => (
              <Reveal key={t.label} delay={0.12 + i * 0.06}><Tile t={t} ratio="aspect-[16/9] lg:aspect-[3/2]" /></Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
