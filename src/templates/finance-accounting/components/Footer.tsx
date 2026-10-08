// Green-black footer like the reference: the mark, then Office, Links and Newsletter (underline email field
// with an arrow button and the privacy checkbox, see Newsletter.tsx); a ruled bottom row with the copyright, the registration
// placeholder and the advice disclaimer.
import Newsletter from "./Newsletter";
import type { FinanceContent } from "../content";
import { Container } from "./ui";

export default function Footer({ brand, f }: { brand: string; f: FinanceContent["footer"] }) {
  const tel = `tel:${f.office.phone.replace(/[^\d+]/g, "")}`;
  return (
    <footer className="bg-dark pb-24 pt-20 text-white md:pb-12">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.2fr]">
          <div><span className="flex items-center gap-3 font-display text-[22px] font-bold" translate="no"><span className="inline-flex h-11 w-11 rounded-full border-[5px] border-white border-r-transparent" aria-hidden="true" />{brand}</span></div>
          <div>
            <h2 className="font-display text-[20px] font-bold">{f.office.title}</h2>
            <p className="mt-5 text-[17px] leading-[1.65] text-white/80">{f.office.lines.map((l, i) => <span key={i} className="block">{l}</span>)}</p>
            <a href={`mailto:${f.office.email.replace(/[\[\]]/g, "")}`} className="mt-4 inline-block border-b border-white/40 text-[17px] text-white no-underline hover:border-accent hover:text-accent">{f.office.email}</a>
            <a href={tel} className="mt-4 block font-display text-[20px] font-bold text-white no-underline hover:text-accent"><span className="font-mono tabular-nums">{f.office.phone}</span></a>
          </div>
          <nav aria-labelledby="f-links">
            <h2 id="f-links" className="font-display text-[20px] font-bold">{f.links.title}</h2>
            <ul className="mt-5 grid gap-3 text-[17px]">{f.links.items.map((l) => <li key={l.href}><a href={l.href} className="text-white/80 no-underline hover:text-accent">{l.label}</a></li>)}</ul>
          </nav>
          <div>
            <h2 className="font-display text-[20px] font-bold">{f.newsletter.title}</h2>
            <Newsletter n={f.newsletter} />
          </div>
        </div>
        <div className="mt-16 grid gap-3 border-t border-white/10 pt-7 text-[13px] leading-[1.6] text-white/60">
          <p className="text-[15px] text-white/80">{f.copyright}</p>
          <p>{f.registration}</p>
          <p>{f.disclaimer}</p>
        </div>
      </Container>
    </footer>
  );
}
