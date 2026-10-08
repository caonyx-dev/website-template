// Welcome: headline, lead and two icon features on the left; on the right the large patient photograph
// with the small teal tooth photograph overlapping its bottom-left corner. Both wipe in, and the small one
// drifts against the large one with scroll.
import Image from "next/image";
import { FirstAidKitIcon, HouseLineIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup, Words } from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import type { DentalContent } from "../content";
import { Container, TextLink } from "./ui";

function FeatureIcon({ icon }: { icon: "kit" | "house" }) {
  const p = { size: 48, weight: "light" as const, className: "shrink-0 text-primary", "aria-hidden": true };
  return icon === "kit" ? <FirstAidKitIcon {...p} /> : <HouseLineIcon {...p} />;
}

export default function Welcome({ w }: { w: DentalContent["welcome"] }) {
  return (
    <section id="about" className="scroll-mt-20 py-24 lg:py-32" aria-labelledby="about-title">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <div>
          <h2 id="about-title" className="font-display text-[36px] font-bold leading-[1.15] text-ink text-balance sm:text-[44px]"><Words>{w.title}</Words></h2>
          <Reveal delay={0.2}><p className="mt-6 text-[17px] leading-[1.75] text-body">{w.lead}</p></Reveal>
          <RevealGroup as="ul" className="mt-10 grid gap-8" from="left" stagger={0.14}>
            {w.features.map((f) => (
              <div key={f.title} className="flex gap-6">
                <FeatureIcon icon={f.icon} />
                <div><h3 className="font-display text-[20px] font-bold text-ink">{f.title}</h3><p className="mt-2 text-[15px] leading-[1.75] text-body">{f.text}</p></div>
              </div>
            ))}
          </RevealGroup>
          <Reveal delay={0.1}><p className="mt-10 text-[15px] text-body">{w.pricing.text} <TextLink href={w.pricing.link.href}>{w.pricing.link.label}</TextLink></p></Reveal>
        </div>
        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none" style={{ aspectRatio: "560 / 580" }}>
          <Reveal from="clip" className="absolute right-0 top-0 h-[90%] w-[74%]">
            <Image src={w.large.src} alt={w.large.alt} fill placeholder="blur" sizes="(min-width: 1024px) 420px, 70vw" className="object-cover" />
          </Reveal>
          <Parallax speed={-0.14} className="absolute bottom-0 left-0 w-[48%]">
            <Reveal from="clip" delay={0.35} className="relative aspect-square shadow-lift">
              <Image src={w.small.src} alt={w.small.alt} fill placeholder="blur" sizes="(min-width: 1024px) 270px, 45vw" className="object-cover" />
            </Reveal>
          </Parallax>
        </div>
      </Container>
    </section>
  );
}
