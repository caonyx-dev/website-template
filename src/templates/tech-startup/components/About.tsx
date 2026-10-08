// What we do: a 50px heading on the left, two paragraphs and a secondary button on the right,
// then the hands render running full width beneath them.
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Button, Headline, Wrap } from "./ui";
import type { TechStartupContent } from "../content";

export default function About({ a }: { a: TechStartupContent["about"] }) {
  return (
    <section id={a.id} className="bg-canvas pt-24 sm:pt-28 lg:pt-36">
      <Wrap>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <h2 className="font-display text-[clamp(2.125rem,4.4vw,3.125rem)] font-medium leading-[1.0] text-ink">
            <Headline lines={a.lines} />
          </h2>

          <div>
            {a.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="mb-6 font-body text-[17px] leading-[1.52] text-body sm:text-[18px]">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.16}>
              <Button href={a.cta.href} tone="outline">
                {a.cta.label}
              </Button>
            </Reveal>
          </div>
        </div>
      </Wrap>

      <Reveal from="clip" className="mt-14 sm:mt-20">
        <div className="relative aspect-[16/9] w-full sm:aspect-[21/8]">
          <Image
            src={a.image.src}
            alt={a.image.alt}
            fill
            sizes="100vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
