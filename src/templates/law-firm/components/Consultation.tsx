// 12 Three consultation options, the middle one inverted on oxblood with a brass top rule and a brass button.
// Fees are formatted with Intl from a number, so changing jurisdiction means changing one constant.
import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { money, type LawContent } from "../content";
import { Btn, Container, Num, SectionHead } from "./ui";

export default function Consultation({ c }: { c: LawContent["consultation"] }) {
  return (
    <section id="consultation" className="scroll-mt-[112px] bg-soft py-20 lg:py-28" aria-labelledby="consultation-title">
      <Container>
        <SectionHead id="consultation-title" eyebrow={c.eyebrow} lead={c.titleLead} em={c.titleEm} text={c.text} />
        <RevealGroup className="mt-14 grid items-stretch gap-6 lg:grid-cols-3" stagger={0.09}>
          {c.items.map((it) => (
            <article key={it.name} className={`relative flex h-full flex-col rounded-lg p-8 ${it.featured ? "law-on-dark bg-dark text-white" : "bg-canvas"}`}>
              {it.featured && <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 rounded-t-lg bg-accent" />}
              <h3 className={`font-display text-[25px] font-semibold leading-[1.25] ${it.featured ? "text-white" : "text-ink"}`}>{it.name}</h3>
              <p className={`mt-1 text-[15px] ${it.featured ? "text-(--t-on-dark-muted)" : "text-mute"}`}><Num>{it.duration}</Num></p>
              <p className="mt-5 flex items-baseline gap-2">
                <span className={`font-display text-[32px] font-semibold ${it.featured ? "text-accent" : "text-(--t-accent-deep)"}`}><Num>{money(it.fee)}</Num></span>
                <span className={`text-[15px] ${it.featured ? "text-(--t-on-dark-muted)" : "text-mute"}`}>{it.feeNote}</span>
              </p>
              <p className={`mt-5 text-[16px] leading-[1.7] ${it.featured ? "text-(--t-on-dark-muted)" : "text-(--t-ink-secondary)"}`}>{it.text}</p>
              <ul role="list" className={`m-0 mt-6 grid flex-1 list-none content-start gap-2.5 border-t p-0 pt-5 text-[15px] leading-[1.5] ${it.featured ? "border-white/15" : "border-hairline"}`}>
                {it.points.map((pt) => (
                  <li key={pt} className={`flex gap-2.5 ${it.featured ? "text-(--t-on-dark-muted)" : "text-(--t-ink-secondary)"}`}>
                    <CheckIcon size={17} weight="light" aria-hidden="true" className={`mt-0.5 shrink-0 ${it.featured ? "text-accent" : "text-(--t-accent-deep)"}`} />{pt}
                  </li>
                ))}
              </ul>
              <div className="mt-7"><Btn href="#contact" tone={it.featured ? "on-dark" : "dark"} className="w-full">{it.cta}</Btn></div>
            </article>
          ))}
        </RevealGroup>
        <Reveal delay={0.2}><p className="mt-8 max-w-[70ch] text-[13px] leading-[1.6] text-mute">{c.note}</p></Reveal>
      </Container>
    </section>
  );
}
