// 02 The split hero: a dark panel carrying a rotated "Welcome" label, the eyebrow, the Playfair headline, the
// lead and two buttons, with a full-bleed plate photograph beside it. The signature moment is the photograph
// settling out of a slow zoom while the copy rises behind it; reduced motion renders both at rest.
import Image from "next/image";
import type { RestaurantContent } from "../content";
import { Btn, Container, SideLabel } from "./ui";

export default function Hero({ h }: { h: RestaurantContent["hero"] }) {
  return (
    <section id="top" className="rest-on-dark relative bg-dark text-on-dark" aria-labelledby="hero-title">
      <div className="grid lg:grid-cols-[1.06fr_1fr]">
        <div className="flex items-center">
          <div className="flex w-full items-stretch gap-6 px-5 py-20 sm:px-8 lg:min-h-[640px] lg:py-24 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-14">
            <SideLabel className="shrink-0 self-center">{h.label}</SideLabel>
            <div className="max-w-[560px]">
              <p className="rest-up text-[12px] font-medium uppercase tracking-[2px] text-accent" style={{ animationDelay: ".04s" }}>{h.eyebrow}</p>
              <h1 id="hero-title" className="rest-up mt-5 font-display text-[38px] font-medium leading-[1.1] text-on-dark text-balance sm:text-[52px] lg:text-[64px]" style={{ animationDelay: ".09s" }}>{h.title}</h1>
              <p className="rest-up mt-6 max-w-[460px] text-[16px] leading-[1.7] text-on-dark/75" style={{ animationDelay: ".14s" }}>{h.lead}</p>
              <div className="rest-up mt-9 flex flex-wrap gap-3" style={{ animationDelay: ".19s" }}>
                <Btn href={h.cta.href} tone="on-dark">{h.cta.label}</Btn>
                <Btn href={h.secondary.href}>{h.secondary.label}</Btn>
              </div>
            </div>
          </div>
        </div>
        <div className="relative min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-[640px]">
          <Image src={h.image.src} alt={h.image.alt} fill priority placeholder="blur" sizes="(min-width: 1024px) 50vw, 100vw" className="rest-settle object-cover" />
        </div>
      </div>
    </section>
  );
}

/** 03 A thin band of service times directly under the hero, in the ruled style of a printed menu. */
export function HoursStrip({ hours }: { hours: RestaurantContent["hoursStrip"] }) {
  return (
    <section aria-label="Opening hours" className="border-b border-hairline bg-soft">
      <Container>
        <ul className="grid divide-y divide-(--t-hairline-soft) sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {hours.items.map((it) => (
            <li key={it.day} className="grid gap-1 py-5 sm:px-6 sm:py-7 sm:first:pl-0 sm:last:pr-0">
              <span className="text-[11px] font-medium uppercase tracking-[1px] text-(--t-accent-deep)">{it.service}</span>
              <span className="font-display text-[18px] font-medium text-ink">{it.day}</span>
              <span className="text-[14px] tabular-nums text-mute">{it.time}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
