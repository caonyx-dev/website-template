// Logo strip: a captioned rule and five bordered logo placeholders.
import type { CorporateContent } from "../content";
import { Container } from "./ui";

export default function Logos({ l }: { l: CorporateContent["logos"] }) {
  return (
    <section className="pb-20 lg:pb-28" aria-label="Clients">
      <Container>
        <p className="flex items-center gap-6 text-[16px] text-body before:h-px before:flex-1 before:bg-ink/15 after:h-px after:flex-1 after:bg-ink/15"><span className="shrink-0">{l.title}</span></p>
        <ul className="mt-12 flex flex-wrap justify-center gap-4">
          {l.items.map((n, i) => <li key={i} className="flex h-[70px] w-[150px] items-center justify-center rounded-md border border-ink/15 text-[12px] font-semibold uppercase tracking-[.08em] text-mute" aria-label={`${n} placeholder`}>{n}</li>)}
        </ul>
      </Container>
    </section>
  );
}
