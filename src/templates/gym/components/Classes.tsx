// Class types: eyebrow, giant title and lead on the left with four volt icon discs, each with an intensity chip;
// on the right the photo card with the "View the schedule" button over its lower edge.
import Image from "next/image";
import { Reveal, RevealGroup } from "@/components/Reveal";
import type { GymContent } from "../content";
import { Btn, Chip, Container, Eyebrow, Giant } from "./ui";
import { PIcon } from "./Programs";

export default function Classes({ k }: { k: GymContent["classes"] }) {
  return (
    <section className="py-24 lg:py-32" aria-labelledby="classes-title">
      <Container className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <Reveal from="scale"><Eyebrow n={k.n}>{k.label}</Eyebrow></Reveal>
          <Reveal delay={0.1} className="mt-5"><Giant lines={k.title} id="classes-title" size="text-[clamp(56px,8.5vw,128px)]" /></Reveal>
          <Reveal delay={0.2}><p className="mt-8 max-w-[44ch] text-[18px] leading-[1.6] text-body">{k.lead}</p></Reveal>
          <RevealGroup as="ul" className="mt-12 grid gap-8 sm:grid-cols-2" stagger={0.1} from="left">
            {k.items.map((it) => (
              <div key={it.title} className="grid grid-cols-[56px_1fr] gap-5">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-hairline bg-(--t-primary-soft)"><PIcon icon={it.icon} size={24} /></span>
                <div><h3 className="font-display text-[24px] font-semibold leading-[1.1] text-ink">{it.title}</h3><p className="mt-1.5 text-[15px] text-body">{it.text}</p><span className="mt-2 block"><Chip intensity={it.intensity} category={it.category} /></span></div>
              </div>
            ))}
          </RevealGroup>
        </div>
        <Reveal from="clip" delay={0.1} className="relative min-h-[520px] overflow-hidden rounded-lg border border-hairline bg-dark lg:min-h-[700px]">
          <Image src={k.image.src} alt={k.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 560px, 100vw" className="object-cover object-top" />
          <div className="absolute inset-x-6 bottom-6"><Btn href={k.cta.href} tone="tertiary" className="w-full justify-between bg-(--t-surface-card)/90 backdrop-blur-sm">{k.cta.label}</Btn></div>
        </Reveal>
      </Container>
    </section>
  );
}
