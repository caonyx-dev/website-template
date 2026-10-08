// Close and footer on the warm band: the oversized "Let's work together", the text and square button,
// then a ruled row of links, socials and the copyright.
import type { AgencyContent } from "../content";
import { Reveal, Words } from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { Btn, Container } from "./ui";

export default function Footer({ c, f }: { c: AgencyContent["cta"]; f: AgencyContent["footer"] }) {
  return (
    <footer id="contact" className="bg-soft pt-20 pb-10 lg:pt-32">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <h2 className="font-display text-[48px] font-bold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[72px] lg:text-[96px]"><Words>{c.title}</Words></h2>
          <Reveal from="right" delay={0.2} className="grid max-w-[520px] gap-8"><p className="text-[17px] leading-[1.6] text-body">{c.text}</p><Magnetic strength={0.25}><Btn href={c.button.href} className="w-max">{c.button.label}</Btn></Magnetic></Reveal>
        </div>
        <div className="mt-24 flex flex-wrap items-center justify-between gap-6 border-y-2 border-ink py-6 text-[13px] font-bold uppercase tracking-[.08em]">
          <ul className="flex flex-wrap gap-8">{f.links.map((l) => <li key={l.href}><a href={l.href} className="text-ink no-underline hover:text-ink/60">{l.label}</a></li>)}</ul>
          <ul className="flex flex-wrap gap-8">{f.legal.map((l) => <li key={l.href}><a href={l.href} className="text-ink no-underline hover:text-ink/60">{l.label}</a></li>)}</ul>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-6 text-[15px] text-body">
          <ul className="flex gap-5">{f.socials.map((s) => <li key={s.href}><a href={s.href} className="text-ink no-underline hover:text-ink/60">{s.label}</a></li>)}</ul>
          <span>{f.copyright}</span>
        </div>
      </Container>
    </footer>
  );
}
