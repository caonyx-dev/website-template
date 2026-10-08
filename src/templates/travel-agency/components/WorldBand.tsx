// The reference's full-bleed photographic band: the headline set white bottom-left, the lead and two activity
// links bottom-right, both sitting on a gradient that only darkens where the type is.
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import type { TravelContent } from "../content";
import { Container, RuleLink, Title } from "./ui";

export default function WorldBand({ w }: { w: TravelContent["world"] }) {
  return (
    <section aria-labelledby="world-title" className="relative isolate overflow-hidden tv-on-dark">
      <Image
        src={w.image.src}
        alt={w.image.alt}
        placeholder="blur"
        sizes="100vw"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/55 to-ink/15" />

      <Container className="flex min-h-[520px] flex-col justify-end gap-8 py-16 sm:min-h-[640px] lg:min-h-[720px] lg:flex-row lg:items-end lg:gap-16 lg:py-20">
        <Reveal className="lg:flex-1">
          <Title id="world-title" onDark className="max-w-[13ch]">{w.title}</Title>
        </Reveal>
        <Reveal delay={0.1} className="lg:max-w-[420px]">
          <div>
            <p className="text-[17px] leading-[1.65] text-(--t-on-dark) sm:text-[18px]">{w.lead}</p>
            <ul className="m-0 mt-6 grid list-none gap-x-8 gap-y-2 p-0 sm:grid-cols-2">
              {w.links.map((l) => (
                <li key={l.label}><RuleLink href={l.href} onDark>{l.label}</RuleLink></li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
