// Accounting services: centred header, four flat white cards (lime line icon, title, one line, "Read more")
// rising in turn on the white canvas, then the teal "More information" button.
import Link from "next/link";
import { ChartLineUpIcon, InvoiceIcon, ReceiptIcon, UsersThreeIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup } from "@/components/Reveal";
import type { FinanceContent, ServiceIcon } from "../content";
import { Btn, Container, SectionHead } from "./ui";

function Icon({ icon }: { icon: ServiceIcon }) {
  const p = { size: 64, weight: "thin" as const, "aria-hidden": true, className: "text-accent" };
  if (icon === "tax") return <ReceiptIcon {...p} />;
  if (icon === "books") return <InvoiceIcon {...p} />;
  if (icon === "payroll") return <UsersThreeIcon {...p} />;
  return <ChartLineUpIcon {...p} />;
}

export default function Services({ s }: { s: FinanceContent["services"] }) {
  return (
    <section id="services" className="scroll-mt-20 py-20 lg:py-28" aria-labelledby="services-title">
      <Container>
        <SectionHead id="services-title" eyebrow={s.eyebrow} title={s.title} center />
        <RevealGroup as="ul" className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {s.items.map((it) => (
            <article key={it.title} className="grid h-full content-start justify-items-center gap-3 bg-soft px-6 py-12 text-center transition-colors hover:bg-(--t-primary-subdued)">
              <Icon icon={it.icon} />
              <h3 className="mt-3 font-display text-[24px] font-bold text-ink text-pretty">{it.title}</h3>
              <p className="text-[17px] leading-[1.6] text-body">{it.text}</p>
              <Link href={it.href} className="mt-2 text-[14px] font-medium text-mute no-underline hover:text-primary">{s.more}<span className="sr-only">: {it.title}</span></Link>
            </article>
          ))}
        </RevealGroup>
        <Reveal className="mt-14 text-center"><Btn href={s.cta.href}>{s.cta.label}</Btn></Reveal>
      </Container>
    </section>
  );
}
