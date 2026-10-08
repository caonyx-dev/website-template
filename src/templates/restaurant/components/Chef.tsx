// 06 The chef band on the warm surface: a tall portrait with a rotated label down its dark edge, the text
// column beside it, and two detail photographs stacked under the copy.
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import type { RestaurantContent } from "../content";
import { Btn, Container, Eyebrow, Flourish, SideLabel } from "./ui";

export default function Chef({ c }: { c: RestaurantContent["chef"] }) {
  return (
    <section className="bg-soft py-20 lg:py-28" aria-labelledby="chef-title">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
          <Reveal from="clip" className="relative">
            <div className="relative flex">
              <div className="hidden shrink-0 items-center justify-center bg-dark px-3 py-10 lg:flex"><SideLabel>{c.label}</SideLabel></div>
              <div className="relative min-w-0 flex-1 overflow-hidden" style={{ aspectRatio: "3 / 4" }}>
                <Image src={c.image.src} alt={c.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal><Eyebrow>{c.eyebrow}</Eyebrow></Reveal>
            <Reveal delay={0.08}><h2 id="chef-title" className="mt-4 font-display text-[28px] font-semibold leading-[1.2] text-ink text-balance sm:text-[36px]">{c.title}</h2></Reveal>
            <Reveal delay={0.14}><Flourish className="mt-6 justify-start [&>span:first-child]:w-8" /></Reveal>
            {c.paras.map((p, i) => <Reveal key={i} delay={0.2 + i * 0.07}><p className="mt-5 text-[16px] leading-[1.7] text-body">{p}</p></Reveal>)}
            <Reveal delay={0.34}>
              <p className="mt-8 grid gap-0.5 border-l-2 border-accent pl-4">
                <span className="font-display text-[22px] font-medium italic text-ink">{c.signature}</span>
                <span className="text-[13px] uppercase tracking-[1.4px] text-mute">{c.role}</span>
              </p>
            </Reveal>
            <Reveal delay={0.4} className="mt-8"><Btn href={c.cta.href} tone="outline">{c.cta.label}</Btn></Reveal>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[c.detailA, c.detailB].map((img, i) => (
                <Reveal key={i} from="clip" delay={0.1 + i * 0.1}>
                  <span className="relative block overflow-hidden" style={{ aspectRatio: "3 / 2" }}>
                    <Image src={img.src} alt={img.alt} placeholder="blur" sizes="(min-width: 1024px) 22vw, 45vw" className="h-full w-full object-cover" />
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
