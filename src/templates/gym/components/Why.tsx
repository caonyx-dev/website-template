// Why us: wordmark, the statement, four numbered points (ghost numerals) and, on the right, a photo card with
// the "gym strengths" comparison chart whose bars grow on entry (volt for us, blue for others).
import Image from "next/image";
import { Reveal, RevealGroup, Words } from "@/components/Reveal";
import type { GymContent } from "../content";
import { Container } from "./ui";

export default function Why({ w, brand }: { w: GymContent["why"]; brand: string }) {
  const max = 100, H = 150;
  return (
    <section className="border-y border-hairline bg-surface py-24 lg:py-32" aria-labelledby="why-title">
      <Container className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <Reveal><span className="font-display text-[22px] font-bold tracking-[.04em] text-ink" translate="no">{brand}<span className="text-primary">.</span></span></Reveal>
          <h2 id="why-title" className="mt-8 font-display text-[36px] font-semibold leading-[1.05] text-ink text-pretty sm:text-[48px] lg:text-[60px]"><Words>{w.statement}</Words></h2>
          <RevealGroup as="ol" className="mt-12 grid gap-10 sm:grid-cols-2" stagger={0.1}>
            {w.points.map((pt, i) => (
              <div key={pt.title} className="grid grid-cols-[64px_1fr] gap-4">
                <span className="font-display text-[48px] font-bold leading-none text-(--t-stone)" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <div><h3 className="font-display text-[24px] font-semibold leading-[1.1] text-ink"><span className="sr-only">{i + 1}. </span>{pt.title}</h3><p className="mt-2 text-[15px] leading-[1.6] text-body">{pt.text}</p></div>
              </div>
            ))}
          </RevealGroup>
        </div>
        <Reveal from="clip" className="relative min-h-[560px] overflow-hidden rounded-lg border border-hairline bg-dark">
          <Image src={w.image.src} alt={w.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 520px, 100vw" className="object-cover object-top opacity-90" />
          <figure className="absolute inset-x-6 bottom-6 m-0 rounded-lg border border-hairline bg-(--t-surface-card)/92 p-6 backdrop-blur-sm">
            <figcaption className="font-display text-[22px] font-semibold text-ink">{w.chart.title}</figcaption>
            <p className="mt-2 flex gap-5 text-[13px] text-body"><span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />{w.chart.ours}</span><span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-(--t-accent-blue)" aria-hidden="true" />{w.chart.others}</span></p>
            <RevealGroup className="mt-5 grid grid-cols-4 gap-3" stagger={0.08} from="up">
              {w.chart.items.map((it) => (
                <div key={it.label} className="grid justify-items-center gap-2">
                  <svg viewBox={`0 0 44 ${H}`} className="h-[150px] w-11" role="img" aria-label={`${it.label}: ours ${it.ours}, others ${it.others}`}>
                    <rect x="4" y={H - (it.ours / max) * H} width="14" height={(it.ours / max) * H} rx="7" fill="var(--t-primary)" />
                    <rect x="26" y={H - (it.others / max) * H} width="14" height={(it.others / max) * H} rx="7" fill="var(--t-accent-blue)" opacity=".8" />
                  </svg>
                  <span className="text-center text-[12px] leading-tight text-body">{it.label}</span>
                </div>
              ))}
            </RevealGroup>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
