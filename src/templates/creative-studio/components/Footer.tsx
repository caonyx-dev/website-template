// Graphite footer: "Build something together?", email and location with lime icons, two link columns,
// copyright; and a lime back-to-top disc.
import { ArrowUpIcon, ArrowUpRightIcon, MapPinIcon } from "@phosphor-icons/react/dist/ssr";
import type { StudioContent } from "../content";
import { Reveal, Words } from "@/components/Reveal";
import BackToTop from "@/components/BackToTop";
import { Container } from "./ui";

export default function Footer({ f }: { f: StudioContent["footer"] }) {
  return (
    <footer className="relative bg-dark py-24 text-white lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="grid content-start gap-10">
          <h2 className="max-w-[12ch] font-display text-[44px] font-bold leading-[1.08] tracking-[-1.2px] sm:text-[56px]"><Words>{f.title}</Words></h2>
          <ul className="grid gap-3 text-[18px]"><li className="flex items-center gap-3"><ArrowUpRightIcon size={20} className="text-primary" aria-hidden="true" /><a href={`mailto:${f.email.replace(/[\[\]]/g, "")}`} className="text-white no-underline hover:text-primary">{f.email}</a></li><li className="flex items-center gap-3"><MapPinIcon size={20} className="text-primary" aria-hidden="true" />{f.place}</li></ul>
        </div>
        <Reveal delay={0.15}><ul className="grid content-start gap-3 text-[18px]">{f.links.map((l) => <li key={l.href}><a href={l.href} className="text-white no-underline hover:text-primary">{l.label}</a></li>)}</ul></Reveal>
        <ul className="grid content-start gap-3 text-[18px]">{f.socials.map((l) => <li key={l.href}><a href={l.href} className="text-white no-underline hover:text-primary">{l.label}</a></li>)}</ul>
        <p className="text-[16px] text-white/70 lg:text-right">{f.copyright}</p>
      </Container>
      <BackToTop className="fixed bottom-8 right-8 z-20 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-ink no-underline"><ArrowUpIcon size={22} weight="bold" aria-hidden="true" /></BackToTop>
    </footer>
  );
}
