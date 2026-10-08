// Badge strip like the reference logo row: six cells divided by hairlines, grey bold placeholders scaling in.
import { RevealGroup } from "@/components/Reveal";
import type { FinanceContent } from "../content";

export default function Badges({ b }: { b: FinanceContent["badges"] }) {
  return (
    <section className="border-b border-hairline" aria-label={b.label}>
      <RevealGroup as="ul" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 lg:divide-x lg:divide-hairline" stagger={0.06} from="scale" itemClassName="border-b border-hairline lg:border-b-0">
        {b.items.map((it) => <span key={it} className="flex h-[150px] items-center justify-center px-4 text-center font-display text-[22px] font-bold text-mute lg:h-[200px]">{it}</span>)}
      </RevealGroup>
    </section>
  );
}
