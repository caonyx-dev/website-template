// The reference's "why you need a guider" grid: a centred heading, then six cells of icon, serif title and two
// lines, divided by hairlines rather than boxed into cards.
import { CompassIcon, ShieldCheckIcon, SuitcaseRollingIcon, MapTrifoldIcon, IslandIcon, HeadsetIcon } from "@phosphor-icons/react/dist/ssr";
import { RevealGroup, Reveal } from "@/components/Reveal";
import type { TravelContent } from "../content";
import { Container, Title } from "./ui";

const ICONS = { compass: CompassIcon, shield: ShieldCheckIcon, suitcase: SuitcaseRollingIcon, map: MapTrifoldIcon, island: IslandIcon, headset: HeadsetIcon };

export default function Reasons({ r }: { r: TravelContent["reasons"] }) {
  return (
    <section id="why" aria-labelledby="reasons-title" className="scroll-mt-28 bg-(--t-soft) py-16 sm:py-24">
      <Container>
        <Reveal>
          <Title id="reasons-title" className="mx-auto max-w-[14ch] text-center">{r.title}</Title>
        </Reveal>
        <RevealGroup as="ul" className="m-0 mt-12 grid list-none gap-x-10 p-0 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06} itemClassName="border-t border-(--t-hairline) first:border-t-0 sm:[&:nth-child(2)]:border-t-0 lg:[&:nth-child(3)]:border-t-0">
          {r.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <div key={item.title} className="py-8 sm:px-2">
                <Icon size={38} weight="light" aria-hidden="true" className="text-(--t-primary)" />
                <h3 className="mt-5 font-display text-[26px] uppercase leading-[1.15] text-ink sm:text-[30px]">{item.title}</h3>
                <p className="mt-3 max-w-[40ch] text-[16px] leading-[1.65] text-(--t-body)">{item.text}</p>
              </div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
