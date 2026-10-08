// This band belongs to this template rather than to the reference, which has no shop behind it. The DESIGN.md
// makes store information a first-class surface — "a shop that sells in person must say where and when" — so the
// address, today's hours, the phone and the reserve-to-try offer sit together beside a photograph of the room.
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, ClockIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import type { RetailContent } from "../content";
import { Btn, Container } from "./ui";

export default function Visit({ s }: { s: RetailContent["store"] }) {
  return (
    <section id="visit" aria-labelledby="visit-title" className="scroll-mt-32 bg-(--t-soft) py-12 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal from="scale">
            <Image
              src={s.image.src}
              alt={s.image.alt}
              placeholder="blur"
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="aspect-[3/2] w-full rounded-xl object-cover"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <h2 id="visit-title" className="font-display text-[26px] font-bold leading-[1.2] tracking-[-0.02em] text-ink text-balance sm:text-[32px]">{s.title}</h2>
              <p className="mt-3 max-w-[54ch] text-[15px] leading-[1.65] text-(--t-body)">{s.lead}</p>

              <div className="mt-7 rounded-xl border border-(--t-hairline) bg-canvas p-6">
                <dl className="m-0 grid gap-5 sm:grid-cols-2">
                  <div>
                    <dt className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.08em] text-(--t-muted)">
                      <MapPinIcon size={14} weight="bold" aria-hidden="true" />Where
                    </dt>
                    <dd className="m-0 mt-2 text-[15px] leading-[1.6] text-(--t-body)">
                      <address className="not-italic">{s.address.map((a) => <span key={a} className="block">{a}</span>)}</address>
                      <Link href={s.directions.href} className="mt-2 inline-flex min-h-9 items-center gap-1 text-[14px] font-semibold text-primary underline underline-offset-4">
                        {s.directions.label}<ArrowUpRightIcon size={13} weight="bold" aria-hidden="true" />
                      </Link>
                    </dd>
                  </div>

                  <div>
                    <dt className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.08em] text-(--t-muted)">
                      <ClockIcon size={14} weight="bold" aria-hidden="true" />Opening hours
                    </dt>
                    <dd className="m-0 mt-2">
                      <ul className="m-0 grid list-none gap-1 p-0">
                        {s.hours.map((h) => (
                          <li key={h.day} className="flex justify-between gap-4 text-[14px] text-(--t-body)">
                            <span>{h.day}</span><span className="tabular-nums">{h.open}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 border-t border-(--t-hairline-soft) pt-5 text-[13px] leading-[1.6] text-(--t-muted)">{s.note}</p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Btn href={`tel:${s.phone.replace(/[^+\d]/g, "")}`}>
                    <PhoneIcon size={15} weight="bold" aria-hidden="true" />{s.cta.label}
                  </Btn>
                  <Link href={`mailto:${s.email.replace(/[[\]]/g, "")}`} className="inline-flex min-h-11 items-center text-[14px] font-semibold text-ink underline decoration-(--t-accent) decoration-[3px] underline-offset-4 transition-colors duration-200 hover:text-primary">
                    {s.email}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
