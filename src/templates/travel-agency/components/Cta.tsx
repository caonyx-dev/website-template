// The reference closes on a full-bleed mountain photograph with the headline centred over it and one filled
// pill beneath. The wash sits only where the type does, so the photograph keeps its light.
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import type { TravelContent } from "../content";
import { Btn, Container, Title } from "./ui";

export default function Cta({ c }: { c: TravelContent["cta"] }) {
  return (
    <section id="cta" aria-labelledby="cta-title" className="relative isolate scroll-mt-28 overflow-hidden">
      <Image
        src={c.image.src}
        alt={c.image.alt}
        placeholder="blur"
        sizes="100vw"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-(--t-soft) via-white/55 to-white/80" />

      <Container className="flex min-h-[520px] flex-col items-center justify-center py-20 text-center sm:min-h-[640px]">
        <Reveal>
          <Title id="cta-title" className="mx-auto max-w-[16ch]">{c.title}</Title>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-[46ch] text-[17px] leading-[1.65] text-(--t-body)">{c.lead}</p>
        </Reveal>
        <Reveal delay={0.14}>
          <Btn href={c.action.href} size="lg" className="mt-8">{c.action.label}</Btn>
        </Reveal>
      </Container>
    </section>
  );
}
