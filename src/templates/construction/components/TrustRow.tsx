// license-badge row: licensing, insurance, safety and registration as placeholders, directly under the hero.
import type { ConstructionContent } from "../content";
import { Container } from "./ui";

export default function TrustRow({ items }: { items: ConstructionContent["trust"] }) {
  return (
    <section className="border-b border-hairline bg-canvas py-6" aria-label="Licensing and insurance">
      <Container>
        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {items.map((t) => (
            <li key={t.label} className="flex items-center gap-3 rounded-md border-2 border-ink bg-surface px-4 py-3">
              <span className="shrink-0 text-ink">{t.icon}</span>
              <span className="grid min-w-0 gap-0.5">
                <span className="text-[12px] font-medium uppercase tracking-[.06em] text-ink">{t.label}</span>
                <span className="text-[13px] tabular-nums text-body">{t.value}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
