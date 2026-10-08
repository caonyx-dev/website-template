// 05 Testimonials on the off-white band: three cards in lime, graphite (wide, with a rating and a large
// quote mark) and white, each with "Hear from them", the quote, an avatar, name and company.
import Image from "next/image";
import { QuotesIcon, StarIcon } from "@phosphor-icons/react/dist/ssr";
import { RevealGroup } from "@/components/Reveal";
import type { StudioContent } from "../content";
import { Container, SectionHead } from "./ui";

export default function Testimonials({ t }: { t: StudioContent["testimonials"] }) {
  const tone = { lime: "bg-primary text-ink", dark: "bg-dark text-white", white: "bg-white text-ink" };
  return (
    <section className="bg-soft py-24 lg:py-32" aria-labelledby="testimonials-title">
      <Container>
        <SectionHead n={t.n} label={t.label} title={t.title} text={t.text} id="testimonials-title" />
        <RevealGroup className="mt-16 grid gap-5 md:grid-cols-[1fr_2fr_1fr]" stagger={0.08}>
          {t.items.map((it, i) => (
            <figure key={i} className={`relative m-0 grid min-h-[380px] content-between gap-8 rounded-md p-7 ${tone[it.tone]}`}>
              <div className="grid gap-5"><span className={`text-[16px] ${it.tone === "dark" ? "text-white/70" : "text-ink/70"}`}>Hear from them</span><blockquote className="m-0 font-display text-[22px] font-bold leading-[1.3] tracking-[-0.4px]">{it.text}</blockquote>{it.rating && <span className="flex items-center gap-2 text-[15px]"><span className="flex gap-0.5">{[0, 1, 2, 3, 4].map((k) => <StarIcon key={k} size={16} weight={k < 4 ? "fill" : "regular"} aria-hidden="true" />)}</span>{it.rating}</span>}</div>
              <figcaption className="flex items-center gap-4"><span className="h-16 w-16 overflow-hidden rounded-full"><Image src={it.avatar.src} alt={it.avatar.alt} placeholder="blur" sizes="64px" className="h-full w-full object-cover" /></span><span className="grid"><span className="text-[18px] font-semibold">{it.name}</span><span className={`text-[15px] ${it.tone === "dark" ? "text-white/70" : "text-ink/70"}`}>{it.company}</span></span></figcaption>
              {it.tone === "dark" && <QuotesIcon size={56} weight="fill" className="absolute bottom-7 right-7 text-white/25" aria-hidden="true" />}
            </figure>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
