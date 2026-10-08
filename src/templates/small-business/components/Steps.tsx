// The reference's three-step row: a dashed rule running between chipped step labels, then three bordered
// cards. The connector is decoration drawn in CSS and hidden from assistive tech; the steps themselves are
// an ordered list, because the order is the point.
import { CalendarCheckIcon, SprayBottleIcon, SmileyIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup } from "@/components/Reveal";
import type { SmallBusinessContent } from "../content";
import { Container, IconTile, Lead, Title } from "./ui";

const ICONS = { calendar: CalendarCheckIcon, spray: SprayBottleIcon, smile: SmileyIcon };

export default function Steps({ s }: { s: SmallBusinessContent["steps"] }) {
  return (
    <section aria-labelledby="steps-title" className="bg-canvas py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[34ch] text-center">
            <Title id="steps-title">{s.title}</Title>
            <Lead className="mx-auto mt-4 max-w-[46ch]">{s.lead}</Lead>
          </div>
        </Reveal>

        {/* The dashed connector, drawn rather than fetched. Decoration only. */}
        <div aria-hidden="true" className="sb-dash mx-auto mt-12 hidden h-px w-[82%] lg:block" />

        <RevealGroup as="ol" role="list" className="m-0 mt-6 grid list-none gap-5 p-0 lg:mt-8 lg:grid-cols-3" stagger={0.08}>
          {s.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <div key={item.step} className="sb-lift h-full rounded-2xl border border-(--t-hairline) bg-canvas p-7 text-center">
                <span className="inline-flex items-center rounded-full bg-(--t-soft) px-3 py-1 text-[13px] font-semibold text-(--t-primary-active)">{item.step}</span>
                <span className="mt-5 block"><IconTile><Icon size={26} weight="light" aria-hidden="true" /></IconTile></span>
                <h3 className="mt-5 font-display text-[22px] font-semibold tracking-[-0.015em] text-ink sm:text-[26px]">{item.title}</h3>
                <p className="mx-auto mt-3 max-w-[34ch] text-[15px] leading-[1.6] text-(--t-body)">{item.text}</p>
              </div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
