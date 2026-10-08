// Features: vertical watermark, headline, a numbered list (1. 2. 3.) with hairline rules, and a portrait
// photograph bleeding to the right edge.
import Image from "next/image";
import { RevealGroup } from "@/components/Reveal";
import type { CorporateContent } from "../content";
import { Frame, H2, Watermark } from "./ui";

export default function Features({ f }: { f: CorporateContent["features"] }) {
  return (
    <section id="industries" className="relative overflow-hidden border-b border-ink/15" aria-labelledby="features-title">
      <Frame className="relative grid lg:grid-cols-[1fr_320px]">
        <Watermark>{f.watermark}</Watermark>
        <div className="px-6 py-16 lg:py-24 lg:pl-[276px] lg:pr-24">
          <H2 id="features-title" className="max-w-[640px]">{f.title}</H2>
          <RevealGroup as="ol" className="mt-14 border-t border-ink/15" stagger={0.08}>
            {f.items.map((it, i) => (
              <div key={it.title} className="grid grid-cols-[48px_1fr] gap-4 border-b border-ink/15 py-8">
                <span className="font-display text-[36px] font-semibold leading-none text-ink">{i + 1}.</span>
                <div><h3 className="font-display text-[22px] font-semibold text-ink">{it.title}</h3><p className="mt-3 max-w-[60ch] text-[16px] leading-[1.6] text-body">{it.text}</p></div>
              </div>
            ))}
          </RevealGroup>
        </div>
        <div className="relative min-h-[360px] lg:min-h-0"><Image src={f.image.src} alt={f.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 320px, 100vw" className="object-cover" /></div>
      </Frame>
    </section>
  );
}
