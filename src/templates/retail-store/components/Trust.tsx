// The reference's reassurance band, in ink. Four promises, each one a thing the shop has to be able to keep —
// the figures inside them are bracketed for that reason.
import { TruckIcon, StorefrontIcon, ArrowsClockwiseIcon, LockSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import type { RetailContent } from "../content";
import { Container } from "./ui";

const ICONS = { van: TruckIcon, bag: StorefrontIcon, arrows: ArrowsClockwiseIcon, lock: LockSimpleIcon };

export default function Trust({ t }: { t: RetailContent["trust"] }) {
  return (
    <section aria-labelledby="trust-title" className="bg-ink text-(--t-on-dark) rst-on-dark">
      <Container className="py-9">
        <h2 id="trust-title" className="sr-only">How we deliver, collect and return</h2>
        <ul className="m-0 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <li key={item.title} className="flex items-start gap-3.5">
                <Icon size={26} aria-hidden="true" className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-[13px] font-bold uppercase tracking-[0.06em]">{item.title}</p>
                  <p className="mt-1 text-[14px] leading-[1.5] text-(--t-on-dark-muted)">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
