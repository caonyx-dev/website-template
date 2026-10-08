// The reference overlaps a tinted panel across a photograph. Here the panel is the mint surface this
// template already uses for its bands, carrying the heading, the check list and one button.
import Image from "next/image";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import type { SmallBusinessContent } from "../content";
import { Btn, Container, Lead, Title } from "./ui";

export default function WhyUs({ w }: { w: SmallBusinessContent["why"] }) {
  return (
    <section id="why" aria-labelledby="why-title" className="scroll-mt-24 bg-canvas pb-16 sm:pb-20">
      <Container>
        <div className="grid items-stretch gap-0 overflow-hidden rounded-[20px] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <Reveal className="order-2 lg:order-1">
            <div className="h-full bg-(--t-soft) p-8 sm:p-10 lg:p-12">
              <Title id="why-title" className="max-w-[14ch]">{w.title}</Title>
              <Lead className="mt-5 max-w-[46ch]">{w.lead}</Lead>
              <ul role="list" className="m-0 mt-7 grid list-none gap-2.5 p-0">
                {w.checks.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-[16px] leading-[1.5] text-ink">
                    <CheckIcon size={17} weight="bold" aria-hidden="true" className="mt-1 shrink-0 text-primary" />
                    {c}
                  </li>
                ))}
              </ul>
              <Btn href={w.cta.href} size="lg" className="mt-8">{w.cta.label}</Btn>
            </div>
          </Reveal>

          <Image
            src={w.image.src}
            alt={w.image.alt}
            placeholder="blur"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="order-1 size-full min-h-[280px] object-cover lg:order-2"
          />
        </div>
      </Container>
    </section>
  );
}
