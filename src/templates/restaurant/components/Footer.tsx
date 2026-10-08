// 14 The dark footer: the welcome line and the wordmark on the left, then Visit, Talk, Hours and Follow, closed
// by a gold hairline and the legal bar.
import type { RestaurantContent } from "../content";
import { Container } from "./ui";

export default function Footer({ brand, f }: { brand: string; f: RestaurantContent["footer"] }) {
  return (
    <footer className="rest-on-dark bg-dark text-on-dark">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_repeat(4,minmax(0,1fr))] lg:gap-8">
          <div>
            <p className="font-display text-[26px] font-semibold tracking-[0.5px] text-on-dark" translate="no">{brand}</p>
            <p className="mt-4 max-w-[320px] text-[15px] leading-[1.7] text-on-dark/70">{f.blurb}</p>
          </div>
          {f.columns.map((c) => (
            <div key={c.title}>
              <p id={`foot-${c.title}`} className="text-[11px] font-medium uppercase tracking-[2px] text-accent">{c.title}</p>
              <ul aria-labelledby={`foot-${c.title}`} className="mt-4 grid list-none gap-2 p-0 text-[15px] leading-[1.6] text-on-dark/70">
                {c.lines?.map((l) => <li key={l}>{l}</li>)}
                {c.links?.map((l) => <li key={l.label}><a href={l.href} className="text-on-dark/70 no-underline transition-colors hover:text-accent active:text-accent">{l.label}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
      </Container>
      <div className="border-t border-accent/30">
        <Container className="flex flex-wrap items-center justify-between gap-4 py-5 text-[13px] text-on-dark/60">
          <p>{f.copyright}</p>
          <ul className="flex list-none gap-6 p-0">{f.legal.map((l) => <li key={l.label}><a href={l.href} className="text-on-dark/60 no-underline hover:text-accent active:text-accent">{l.label}</a></li>)}</ul>
        </Container>
      </div>
    </footer>
  );
}
