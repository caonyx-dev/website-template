// Facilities like the reference: six hairline cards in three columns, each with a navy arch-topped icon tile in
// gold, a Marcellus title and a short line; cards fade in on entry.
import { BarbellIcon, FlowerLotusIcon, ForkKnifeIcon, PresentationChartIcon, SwimmingPoolIcon, WashingMachineIcon } from "@phosphor-icons/react/dist/ssr";
import { RevealGroup } from "@/components/Reveal";
import type { FacilityIcon, HotelContent } from "../content";
import { Container, SectionHead } from "./ui";

function Icon({ icon }: { icon: FacilityIcon }) {
  const p = { size: 30, weight: "light" as const, "aria-hidden": true };
  if (icon === "restaurant") return <ForkKnifeIcon {...p} />;
  if (icon === "pool") return <SwimmingPoolIcon {...p} />;
  if (icon === "gym") return <BarbellIcon {...p} />;
  if (icon === "spa") return <FlowerLotusIcon {...p} />;
  if (icon === "meeting") return <PresentationChartIcon {...p} />;
  return <WashingMachineIcon {...p} />;
}

export default function Facilities({ f }: { f: HotelContent["facilities"] }) {
  return (
    <section id="facilities" className="relative z-[1] scroll-mt-20 bg-canvas py-24 lg:py-28" aria-labelledby="facilities-title">
      <Container>
        <SectionHead id="facilities-title" eyebrow={f.eyebrow} title={f.title} />
        <RevealGroup as="ul" className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08} from="scale">
          {f.items.map((it) => (
            <div key={it.title} className="grid h-full grid-cols-[72px_1fr] gap-6 border border-hairline bg-canvas p-6">
              <span className="inline-flex h-[72px] w-[72px] items-center justify-center rounded-t-full bg-primary text-accent"><Icon icon={it.icon} /></span>
              <div><h3 className="font-display text-[22px] text-ink">{it.title}</h3><p className="mt-2 text-[15px] font-light leading-[1.65] text-(--t-ink-80)">{it.text}</p></div>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
