// 04 The reference's three service cards: a photograph masked into its rounded petal at the top, a line icon, a
// hairline rule, the title and two lines. The middle card is slate and the third is the brand colour.
import Image from "next/image";
import { TruckIcon, BoatIcon, TrainIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup } from "@/components/Reveal";
import type { LogisticsContent, ModeIcon } from "../content";
import { Btn, Container, SectionHead } from "./ui";

const ICONS: Partial<Record<ModeIcon, typeof TruckIcon>> = { truck: TruckIcon, ship: BoatIcon, train: TrainIcon };

const TONES = {
  light: { card: "bg-soft", title: "text-ink", text: "text-(--t-ink-muted)", rule: "bg-(--t-hairline)", icon: "text-ink" },
  dark: { card: "log-on-dark bg-dark", title: "text-white", text: "text-white/75", rule: "bg-white/20", icon: "text-white" },
  brand: { card: "log-on-primary bg-primary", title: "text-(--t-on-primary)", text: "text-(--t-on-primary)/80", rule: "bg-(--t-on-primary)/25", icon: "text-(--t-on-primary)" },
} as const;

export default function Services({ s }: { s: LogisticsContent["services"] }) {
  return (
    <section id="services" className="scroll-mt-[112px] bg-canvas pb-16 lg:pb-24" aria-labelledby="services-title">
      <Container>
        <SectionHead id="services-title" eyebrow={s.eyebrow} title={s.title} action={<Reveal delay={0.16}><Btn href={s.cta.href} tone="outline">{s.cta.label}</Btn></Reveal>} />
        <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3" stagger={0.1}>
          {s.items.map((it) => {
            const Icon = ICONS[it.icon] ?? TruckIcon;
            const t = TONES[it.tone];
            return (
              <article key={it.title} className={`group flex h-full flex-col overflow-hidden rounded-[25px] p-7 lg:p-9 ${t.card}`}>
                {/* The reference masks the photograph into a rounded petal. */}
                <span className="log-petal relative block aspect-[4/3] w-full overflow-hidden">
                  <Image src={it.image.src} alt={it.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 30vw, 90vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
                </span>
                <span aria-hidden="true" className={`mt-8 inline-flex ${t.icon}`}><Icon size={44} weight="light" /></span>
                <span aria-hidden="true" className={`mt-6 block h-px w-full ${t.rule}`} />
                <h3 className={`mt-6 font-display text-[22px] font-bold ${t.title}`}>{it.title}</h3>
                <p className={`mt-4 flex-1 text-[16px] leading-[1.75] text-pretty ${t.text}`}>{it.text}</p>
              </article>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
