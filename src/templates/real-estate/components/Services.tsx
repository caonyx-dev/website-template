// The beige band. White cards whose top-right corner is notched out so a lime arrow disc can sit in the
// gap — the card geometry described in DESIGN.md. Five cards run 3 + 2, the second row centred.
import Image from "next/image";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { ArrowDisc, Badge, Headline, Wrap } from "./ui";
import type { RealEstateContent } from "../content";

function ServiceCard({ item }: { item: RealEstateContent["services"]["items"][number] }) {
  return (
    // The wrapper is unmasked so the disc can float in the carve; the <a> inside carries the notch.
    <article className="group relative h-full">
      <a
        href={item.href}
        className="re-notch relative flex h-full flex-col overflow-hidden rounded-[30px] bg-canvas p-4 pt-7 transition-transform duration-300 group-hover:-translate-y-0.5 sm:pt-8"
      >
        {/* Lime floods up from the bottom on hover. Black on lime stays ~15.6:1. */}
        <span
          aria-hidden
          className="absolute inset-0 origin-bottom scale-y-0 bg-primary transition-transform duration-[600ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-y-100"
        />

        <h3 className="relative mb-7 min-h-[2.3em] px-3 pr-16 font-display text-[clamp(1.375rem,1.9vw,1.6rem)] font-bold leading-[1.14] tracking-[-0.01em] text-ink sm:pr-20">
          {item.title}
        </h3>

        <div className="relative mt-auto aspect-[4/3] overflow-hidden rounded-[20px]">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            placeholder="blur"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
      </a>

      <ArrowDisc className="absolute right-[6px] top-[6px]" />
    </article>
  );
}

export default function Services({ s }: { s: RealEstateContent["services"] }) {
  const [first, second] = [s.items.slice(0, 3), s.items.slice(3)];
  return (
    <section
      id={s.id}
      className="rounded-t-[32px] bg-soft py-20 sm:rounded-t-[50px] sm:py-24 lg:rounded-t-[80px] lg:py-32"
    >
      <Wrap>
        <Reveal className="flex justify-center">
          <Badge>{s.badge}</Badge>
        </Reveal>

        <h2 className="mx-auto mt-7 max-w-[900px] text-center font-display text-[clamp(2rem,5.2vw,4.375rem)] font-bold leading-[1.07] tracking-[-0.02em] text-ink">
          <Headline lines={s.lines} />
        </h2>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" itemClassName="h-full">
          {first.map((item) => (
            <ServiceCard key={item.title} item={item} />
          ))}
        </RevealGroup>

        <RevealGroup className="mt-5 grid gap-5 sm:grid-cols-2 lg:mx-auto lg:max-w-[calc(66.666%-0.4rem)]" itemClassName="h-full">
          {second.map((item) => (
            <ServiceCard key={item.title} item={item} />
          ))}
        </RevealGroup>

        <Reveal className="mt-14 text-center">
          <p className="font-body text-[17px] text-ink">
            {s.footNote}{" "}
            <a href={s.footCta.href} className="font-semibold decoration-primary decoration-2 underline underline-offset-4 hover:decoration-ink">
              {s.footCta.label}
            </a>
          </p>
        </Reveal>
      </Wrap>
    </section>
  );
}
