// package-card grid: three engagement cards with a "typical scope" checklist and a price slot that stays
// "Price on request". The featured card flips to graphite; only it carries the amber button.
import { CheckIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import type { ConstructionContent } from "../content";
import { Btn, Container, Headline } from "./ui";

export default function Packages({ p }: { p: ConstructionContent["packages"] }) {
  return (
    <section id={p.id} className="bg-soft py-20 lg:py-24" aria-labelledby={`${p.id}-title`}>
      <Container>
        <Headline id={`${p.id}-title`} title={p.title} lead={p.lead} />
        <div className="grid gap-6 md:grid-cols-3">
          {p.items.map((it) => (
            <article key={it.name} className={`grid content-start gap-5 rounded-md p-8 ${it.featured ? "bg-dark text-on-dark" : "border border-hairline bg-surface text-ink"}`}>
              <h3 className="font-display text-[24px] font-semibold leading-tight">{it.name}</h3>
              <ul className="grid gap-2.5 text-[15px] leading-[1.5]">
                {it.scope.map((s) => <li key={s} className="flex gap-2.5"><CheckIcon size={18} weight="bold" className={`mt-0.5 shrink-0 ${it.featured ? "text-accent" : "text-ink"}`} aria-hidden="true" />{s}</li>)}
              </ul>
              <div className="mt-2 grid gap-1 border-t pt-5" style={{ borderColor: it.featured ? "rgba(255,255,255,.15)" : "var(--t-hairline)" }}>
                <span className="font-display text-[28px] font-semibold leading-none">{it.price}</span>
                <span className={`text-[13px] ${it.featured ? "text-on-dark-muted" : "text-mute"}`}>{it.note}</span>
              </div>
              <Btn href={it.cta.href} variant={it.featured ? "primary" : "secondary"} className="mt-2">{it.cta.label} <ArrowRightIcon size={18} weight="light" aria-hidden="true" /></Btn>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
