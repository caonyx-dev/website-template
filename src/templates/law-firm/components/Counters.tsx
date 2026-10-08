// 10 The reference's counter row: four brass glyphs over large numerals in tabular figures.
import { BriefcaseIcon, UsersThreeIcon, ShieldCheckIcon, HandshakeIcon } from "@phosphor-icons/react/dist/ssr";
import { RevealGroup } from "@/components/Reveal";
import type { CounterIcon, LawContent } from "../content";
import { Container, Counter } from "./ui";

const ICONS: Record<CounterIcon, typeof BriefcaseIcon> = { briefcase: BriefcaseIcon, users: UsersThreeIcon, shield: ShieldCheckIcon, handshake: HandshakeIcon };

export default function Counters({ items }: { items: LawContent["counters"] }) {
  return (
    <section className="bg-canvas py-16 lg:py-20" aria-labelledby="counters-title">
      <h2 id="counters-title" className="sr-only">The firm in numbers</h2>
      <Container>
        <RevealGroup className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {items.map((c) => {
            const Icon = ICONS[c.icon];
            return <Counter key={c.label} icon={<Icon size={34} weight="light" />} value={c.value} label={c.label} />;
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
