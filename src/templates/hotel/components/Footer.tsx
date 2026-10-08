// Navy footer like the reference: address at the left, the wordmark with stars and socials in the centre,
// contact at the right; a gold hairline and the copyright and legal links beneath.
import { FacebookLogoIcon, InstagramLogoIcon, XLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react/dist/ssr";
import type { HotelContent } from "../content";
import { Container } from "./ui";
import { Mark } from "./Nav";

function Social({ label }: { label: string }) {
  const p = { size: 18, weight: "fill" as const, "aria-hidden": true };
  if (/facebook/i.test(label)) return <FacebookLogoIcon {...p} />;
  if (/instagram/i.test(label)) return <InstagramLogoIcon {...p} />;
  if (/youtube/i.test(label)) return <YoutubeLogoIcon {...p} />;
  return <XLogoIcon {...p} />;
}

export default function Footer({ brand, f }: { brand: string; f: HotelContent["footer"] }) {
  const tel = `tel:${f.contact.phone.replace(/[^\d+]/g, "")}`;
  return (
    <footer id="contact" className="relative z-[1] scroll-mt-20 bg-dark text-on-dark">
      <Container className="grid gap-12 py-20 text-center lg:grid-cols-3 lg:items-start">
        <div><h2 className="font-display text-[22px]">{f.address.title}</h2><p className="mt-4 text-[15px] font-light leading-[1.8] text-(--t-body-muted)">{f.address.lines.map((l, i) => <span key={i} className="block">{l}</span>)}</p></div>
        <div className="grid justify-items-center gap-6"><Mark brand={brand} size={30} /><ul className="flex gap-2">{f.socials.map((s) => <li key={s.href}><a href={s.href} aria-label={s.label} className="inline-flex h-11 w-11 items-center justify-center text-on-dark no-underline hover:text-accent"><Social label={s.label} /></a></li>)}</ul></div>
        <div><h2 className="font-display text-[22px]">{f.contact.title}</h2><p className="mt-4 text-[15px] font-light leading-[1.8] text-(--t-body-muted)"><a href={tel} className="block text-on-dark no-underline hover:text-accent">T. <span className="tabular-nums">{f.contact.phone}</span></a><a href={`mailto:${f.contact.email.replace(/[\[\]]/g, "")}`} className="block text-on-dark no-underline hover:text-accent">M. {f.contact.email}</a></p></div>
      </Container>
      <div className="border-t border-accent/40"><Container className="flex flex-col items-center gap-3 py-6 text-[13px] font-light text-(--t-body-muted) sm:flex-row sm:justify-between"><p>{f.copyright}</p><ul className="flex gap-6">{f.links.map((l) => <li key={l.href}><a href={l.href} className="text-on-dark no-underline hover:text-accent">{l.label}</a></li>)}</ul></Container></div>
    </footer>
  );
}
