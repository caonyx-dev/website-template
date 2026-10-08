// Not in the reference either: the DESIGN.md's `trust-bar`, which it requires directly under the hero and
// insists holds credential slots rather than social proof. Every slot is bracketed and the note says why.
import { SealIcon } from "@phosphor-icons/react/dist/ssr";
import type { TravelContent } from "../content";
import { Container } from "./ui";

export default function Trust({ t }: { t: TravelContent["trust"] }) {
  return (
    <section aria-labelledby="trust-title" className="bg-(--t-soft) py-8">
      <Container>
        <h2 id="trust-title" className="sr-only">{t.title}</h2>
        <ul className="m-0 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item) => (
            <li key={item.label} className="flex items-start gap-3">
              {/* A neutral seal rather than a tick: a check mark beside an empty slot reads as "verified". */}
              <SealIcon size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-(--t-muted-soft)" />
              <span>
                <span className="block text-[14px] font-semibold text-ink">{item.label}</span>
                <span className="block text-[13px] text-(--t-muted)">{item.detail}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-[90ch] text-[12px] leading-[1.6] text-(--t-muted)">
          <span className="font-semibold uppercase tracking-[0.08em] text-ink">Placeholder</span>{" "}{t.note}
        </p>
      </Container>
    </section>
  );
}
