// Navy footer: brand with contact lines, Support and Treatments link columns, round social buttons, then a
// bottom bar with the copyright and phone, email and address with teal icons. A teal back-to-top square
// appears once the hero has scrolled away.
import { ArrowUpIcon, EnvelopeSimpleIcon, MapPinIcon, PhoneIcon, ToothIcon } from "@phosphor-icons/react/dist/ssr";
import BackToTop from "@/components/BackToTop";
import type { DentalContent } from "../content";
import { Container, SocialIcon } from "./ui";

export default function Footer({ brand, f }: { brand: string; f: DentalContent["footer"] }) {
  const tel = `tel:${f.phone.replace(/[^\d+]/g, "")}`;
  const col = (title: string, links: DentalContent["footer"]["support"]["links"], id: string) => (
    <nav aria-labelledby={id}>
      <h2 id={id} className="font-display text-[18px] font-bold text-white">{title}</h2>
      <ul className="mt-6 grid gap-3 text-[15px]">{links.map((l) => <li key={l.href}><a href={l.href} className="text-on-dark-muted no-underline transition-colors hover:text-primary">{l.label}</a></li>)}</ul>
    </nav>
  );
  return (
    <footer className="bg-dark text-white">
      <Container className="grid gap-12 py-20 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <span className="flex items-center gap-2 font-display text-[28px] font-extrabold" translate="no"><ToothIcon size={36} weight="fill" className="text-primary" aria-hidden="true" />{brand}</span>
          <ul className="mt-8 grid gap-3 text-[15px] text-on-dark-muted">
            <li>{f.address}</li>
            <li><a href={`mailto:${f.email.replace(/[\[\]]/g, "")}`} className="no-underline hover:text-white">{f.email}</a></li>
            <li><a href={tel} className="font-semibold text-primary no-underline">{f.phone}</a></li>
            <li>{f.site}</li>
          </ul>
        </div>
        {col(f.support.title, f.support.links, "f-support")}
        {col(f.treatments.title, f.treatments.links, "f-treatments")}
        <div>
          <h2 className="font-display text-[18px] font-bold text-white">{f.follow}</h2>
          <ul className="mt-6 flex flex-wrap gap-3">{f.socials.map((s) => <li key={s.href}><a href={s.href} aria-label={s.label} className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white no-underline transition-colors hover:bg-primary hover:text-ink"><SocialIcon label={s.label} size={20} /></a></li>)}</ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-wrap items-center justify-between gap-4 py-6 text-[14px] text-on-dark-muted">
          <p>{f.copyright}</p>
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            <li className="flex items-center gap-2"><PhoneIcon size={18} className="text-primary" aria-hidden="true" />{f.phone}</li>
            <li className="flex items-center gap-2"><EnvelopeSimpleIcon size={18} className="text-primary" aria-hidden="true" />{f.email}</li>
            <li className="flex items-center gap-2"><MapPinIcon size={18} className="text-primary" aria-hidden="true" />{f.address}</li>
          </ul>
        </Container>
      </div>
      <BackToTop className="fixed bottom-6 right-6 z-30 inline-flex h-12 w-12 items-center justify-center bg-primary text-ink shadow-lift"><ArrowUpIcon size={20} weight="bold" aria-hidden="true" /></BackToTop>
    </footer>
  );
}
