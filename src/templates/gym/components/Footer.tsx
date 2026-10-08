// Footer over a full-bleed black-and-white photograph: "Join the gym today" with the volt trial button, quick
// links, get in touch (phone, email, address with directions, hours in tabular figures), then the ruled row
// with copyright, socials and legal links, the health disclaimer, and the ghost wordmark across the bottom.
import Image from "next/image";
import { FacebookLogoIcon, InstagramLogoIcon, TiktokLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Words } from "@/components/Reveal";
import type { GymContent } from "../content";
import { Btn, Container, Giant, Num } from "./ui";

function Social({ label }: { label: string }) {
  const p = { size: 20, weight: "fill" as const, "aria-hidden": true };
  if (/instagram/i.test(label)) return <InstagramLogoIcon {...p} />;
  if (/facebook/i.test(label)) return <FacebookLogoIcon {...p} />;
  if (/youtube/i.test(label)) return <YoutubeLogoIcon {...p} />;
  return <TiktokLogoIcon {...p} />;
}

export default function Footer({ brand, f }: { brand: string; f: GymContent["footer"] }) {
  const tel = `tel:${f.contact.phone.replace(/[^\d+]/g, "")}`;
  return (
    <footer id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-hairline bg-canvas pb-24 md:pb-0">
      <Image src={f.image.src} alt={f.image.alt} fill placeholder="blur" sizes="100vw" className="object-cover object-center opacity-50 grayscale" />
      <div className="absolute inset-0 bg-gradient-to-b from-canvas/40 via-canvas/70 to-canvas" aria-hidden="true" />
      <Container className="relative pt-24 lg:pt-32">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.8fr_1fr]">
          <div><Giant lines={f.title} size="text-[clamp(48px,7vw,104px)]" /><div className="mt-10"><Btn href={f.cta.href}>{f.cta.label}</Btn></div></div>
          <nav aria-labelledby="f-links"><h2 id="f-links" className="text-[13px] font-medium uppercase tracking-[.08em] text-body">{f.links.title}</h2><ul className="mt-6 grid grid-cols-2 gap-3 text-[16px]">{f.links.items.map((l) => <li key={l.href}><a href={l.href} className="text-ink no-underline hover:text-primary">{l.label}</a></li>)}</ul></nav>
          <div>
            <h2 className="text-[13px] font-medium uppercase tracking-[.08em] text-body">{f.contact.title}</h2>
            <ul className="mt-6 grid gap-2 text-[16px] text-ink">
              <li><a href={tel} className="no-underline hover:text-primary"><Num>{f.contact.phone}</Num></a></li>
              <li><a href={`mailto:${f.contact.email.replace(/[\[\]]/g, "")}`} className="text-primary underline underline-offset-4">{f.contact.email}</a></li>
              <li className="text-body">{f.contact.address} · <a href={f.contact.directions.href} className="text-ink underline underline-offset-4 hover:text-primary">{f.contact.directions.label}</a></li>
            </ul>
            <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-[14px] text-body">{f.contact.hours.map((h) => <div key={h.day} className="contents"><dt>{h.day}</dt><dd><Num>{h.time}</Num></dd></div>)}</dl>
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-4 border-t border-hairline-strong py-6 text-[13px] uppercase tracking-[.04em] text-body md:flex-row md:items-center md:justify-between">
          <p>{f.copyright}</p>
          <ul className="flex gap-1">{f.socials.map((s) => <li key={s.href}><a href={s.href} aria-label={s.label} className="inline-flex h-11 w-11 items-center justify-center text-body no-underline hover:text-primary"><Social label={s.label} /></a></li>)}</ul>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">{f.legal.map((l) => <li key={l.href}><a href={l.href} className="text-ink no-underline hover:text-primary">{l.label}</a></li>)}</ul>
        </div>
        <p className="pb-6 text-[12px] normal-case leading-[1.5] text-mute">{f.disclaimer}</p>
        <p aria-hidden="true" className="pointer-events-none -mb-[.18em] select-none overflow-hidden whitespace-nowrap font-display text-[clamp(96px,22vw,320px)] font-bold leading-none text-ink/[.06]"><Words>{brand.replace(/[\[\]]/g, "")}</Words></p>
      </Container>
    </footer>
  );
}
