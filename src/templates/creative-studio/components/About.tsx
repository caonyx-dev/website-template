// 04 About: full-width header, then a three-column tile grid: a tall lime tile (stars, quote, figure, label,
// avatar), an image above a graphite figure tile, and a tall outline tile with a figure and the studio line.
import Image from "next/image";
import { StarIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup } from "@/components/Reveal";
import type { StudioContent } from "../content";
import { Container, SectionHead } from "./ui";

export default function About({ a, brand }: { a: StudioContent["about"]; brand: string }) {
  return (
    <section className="py-24 lg:py-32" aria-labelledby="about-title">
      <Container>
        <SectionHead n={a.n} label={a.label} title={a.title} text={a.text} id="about-title" full />
        <RevealGroup className="mt-12 grid gap-5 md:grid-cols-3" stagger={0.12} from="scale">
          <div className="relative grid min-h-[420px] content-between gap-10 overflow-hidden rounded-md bg-primary p-7 text-ink">
            <span className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-white/25" aria-hidden="true" />
            <div className="relative grid gap-5"><span className="flex gap-1" role="img" aria-label={`${a.quote.stars} of 5 stars`}>{[0, 1, 2, 3, 4].map((k) => <StarIcon key={k} size={16} weight={k < a.quote.stars ? "fill" : "regular"} aria-hidden="true" />)}</span><p className="text-[20px] font-medium leading-[1.4]">{a.quote.text}</p></div>
            <div className="relative grid gap-6"><div><span className="block font-display text-[48px] font-bold leading-none tracking-[-1.5px]">{a.quote.big}</span><span className="text-[16px]">{a.quote.label}</span></div><div className="flex items-center gap-4 border-t border-ink/15 pt-6"><span className="h-16 w-16 overflow-hidden rounded-full"><Image src={a.quote.avatar.src} alt={a.quote.avatar.alt} placeholder="blur" sizes="64px" className="h-full w-full object-cover" /></span><span className="grid"><span className="text-[18px] font-semibold">{a.quote.name}</span><span className="text-[15px] text-ink/70">{a.quote.company}</span></span></div></div>
          </div>
          <div className="grid gap-5">
            <Reveal from="clip" className="aspect-[3/2] overflow-hidden rounded-md"><Image src={a.image.src} alt={a.image.alt} placeholder="blur" sizes="(min-width: 768px) 33vw, 100vw" className="h-full w-full object-cover" /></Reveal>
            <div className="grid content-between gap-8 rounded-md bg-dark p-7 text-white"><div><span className="block font-display text-[48px] font-bold leading-none tracking-[-1.5px]">{a.dark.big}</span><span className="text-[16px] text-white/70">{a.dark.label}</span></div><div className="flex">{[0, 1, 2, 3].map((k) => <span key={k} className={`-ml-2 first:ml-0 inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-dark text-[11px] font-bold ${["bg-[#D9E6F2] text-[#2F4F6E]", "bg-[#F6D3D3] text-[#8C3A3A]", "bg-[#DCE8D4] text-[#4A6B3A]", "bg-primary text-ink"][k]}`}>[{k + 1}]</span>)}</div></div>
          </div>
          <div className="relative grid min-h-[420px] content-between gap-10 overflow-hidden rounded-md border border-hairline p-7 text-ink">
            <svg className="pointer-events-none absolute -bottom-10 -left-10 h-80 w-80 text-hairline" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth=".5" aria-hidden="true"><circle cx="50" cy="50" r="48" /><circle cx="50" cy="50" r="30" /></svg>
            <div className="relative"><span className="block font-display text-[48px] font-bold leading-none tracking-[-1.5px]">{a.outline.big}</span><span className="text-[16px]">{a.outline.label}</span></div>
            <div className="relative grid gap-3"><span className="font-display text-[32px] font-bold" translate="no">{brand}<span className="text-primary">.</span></span><p className="text-[17px] leading-[1.5]">{a.outline.text}</p></div>
          </div>
        </RevealGroup>
      </Container>
    </section>
  );
}
