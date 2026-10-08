// Section components shared by every template homepage. Each takes a slice of SiteContent.
import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon, ArrowUpRightIcon, ArrowRightIcon, HouseLineIcon } from "@phosphor-icons/react/dist/ssr";
import type { SiteContent } from "@/lib/content";
import { Wrap, Eyebrow, Button, SectionHead } from "@/components/ui";
import { RevealGroup, Reveal, Words } from "@/components/Reveal";
import Watermark from "@/components/Watermark";
import ProcessSteps from "@/components/ProcessSteps";
import Enquiry from "@/components/Enquiry";

const H2 = "font-display text-[34px] font-medium leading-[1.12] sm:text-[44px] lg:text-[56px]";

export function Intro({ c }: { c: SiteContent["intro"] }) {
  return (
    <section id={c.id} className="py-20 lg:py-28" aria-labelledby={`${c.id}-title`}>
      <Wrap>
        <SectionHead id={`${c.id}-title`} eyebrow={c.eyebrow} title={<Words>{c.title}</Words>} lead={c.lead} />
        <RevealGroup className="grid gap-6 md:grid-cols-3">
          {c.cards.map((card) => (
            <article key={card.title} className="grid h-full gap-3.5 rounded-lg border-2 border-card bg-surface p-8 shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-lift">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-soft text-accent">{card.icon}</span>
              <h3 className="mt-1.5 font-display text-[22px] font-medium leading-tight">{card.title}</h3>
              <p className="text-body">{card.text}</p>
            </article>
          ))}
        </RevealGroup>
      </Wrap>
    </section>
  );
}

export function DarkBand({ c }: { c: SiteContent["band"] }) {
  return (
    <section className="relative overflow-hidden bg-dark py-20 text-on-dark lg:py-28" aria-labelledby="band-title">
      <Watermark text={c.watermark} />
      <Wrap className="relative grid items-center gap-12 lg:grid-cols-[5fr_7fr]">
        <div className="grid justify-items-start gap-6">
          {c.eyebrow && <Eyebrow onDark>{c.eyebrow}</Eyebrow>}
          <h2 id="band-title" className={H2}><Words>{c.title}</Words></h2>
          <RevealGroup as="ul" className="grid gap-3 sm:grid-cols-2 sm:gap-x-6" stagger={0.06}>
            {c.checks.map((t) => <span key={t} className="flex items-center gap-2.5 font-medium"><CheckCircleIcon size={20} weight="light" className="text-accent" aria-hidden="true" />{t}</span>)}
          </RevealGroup>
          {c.text && <p className="text-on-dark-muted">{c.text}</p>}
          <Button href={c.cta.href} variant="ghost-dark">{c.cta.label} <ArrowUpRightIcon size={18} weight="light" aria-hidden="true" /></Button>
        </div>
        <Reveal className="aspect-[16/11] overflow-hidden rounded-lg shadow-lift">
          <Image src={c.image.src} alt={c.image.alt} placeholder="blur" sizes="(min-width: 1024px) 58vw, 100vw" className="h-full w-full object-cover" />
        </Reveal>
      </Wrap>
    </section>
  );
}

export function Services({ c }: { c: SiteContent["services"] }) {
  return (
    <section id={c.id} className="py-20 lg:py-28" aria-labelledby={`${c.id}-title`}>
      <Wrap>
        <SectionHead id={`${c.id}-title`} eyebrow={c.eyebrow} title={<Words>{c.title}</Words>} lead={c.lead} />
        <div className="grid items-start gap-12 lg:grid-cols-[5fr_7fr]">
          <Reveal className="relative aspect-[16/10] overflow-hidden rounded-lg shadow-soft lg:aspect-[4/5]">
            <Image src={c.image.src} alt={c.image.alt} placeholder="blur" sizes="(min-width: 1024px) 42vw, 100vw" className="h-full w-full object-cover" />
            <p className="absolute inset-x-5 bottom-5 rounded-md bg-dark/70 p-5 text-[14px] leading-[1.55] text-on-dark backdrop-blur-md">{c.note}</p>
          </Reveal>
          <RevealGroup as="ol" className="grid" itemClassName="first:border-t first:border-hairline" stagger={0.07}>
            {c.rows.map((r) => (
              <Link key={r.n} href={r.href} className="group grid grid-cols-[48px_1fr_auto] items-center gap-5 rounded-md border-b border-hairline px-5 py-6 no-underline transition-colors hover:border-transparent hover:bg-accent hover:text-on-primary">
                <span className="text-[13px] tabular-nums text-mute group-hover:text-on-primary/70">{r.n}</span>
                <span className="font-display text-[20px] font-medium leading-tight sm:text-[26px]">{r.title}</span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline transition-colors group-hover:border-surface group-hover:bg-surface group-hover:text-accent"><ArrowUpRightIcon size={18} weight="light" aria-hidden="true" /></span>
              </Link>
            ))}
          </RevealGroup>
        </div>
        {c.stats.length > 0 && (
          <RevealGroup className="mt-16 grid gap-10 border-t border-hairline pt-12 text-center sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-hairline" itemClassName="flex flex-col items-center justify-center gap-2 px-6">
            {c.stats.map((s) => (
              <div key={s.title} className="contents">
                <span className="font-display text-[48px] font-medium leading-none tabular-nums lg:text-[72px]">{s.big}</span>
                <h3 className="text-[15px] font-medium uppercase tracking-[.1em] text-body">{s.title}</h3>
                {s.text && <p className="text-[14px] text-body">{s.text}</p>}
              </div>
            ))}
          </RevealGroup>
        )}
      </Wrap>
    </section>
  );
}

export function Process({ c }: { c: SiteContent["process"] }) {
  return (
    <section id={c.id} className="relative py-20 lg:py-28" aria-labelledby={`${c.id}-title`}>
      <Wrap>
        <SectionHead id={`${c.id}-title`} eyebrow={c.eyebrow} title={<Words>{c.title}</Words>} lead={c.lead} />
        <ProcessSteps blueprint={c.blueprint.src} steps={c.steps.map((s) => ({ ...s, image: { src: s.image.src, alt: s.image.alt } }))} />
        <p className="mt-14 text-center text-body">
          {c.footNote} <a href={c.footCta.href} className="inline-flex items-center gap-2 font-medium text-accent no-underline hover:text-accent-deep">{c.footCta.label} <ArrowRightIcon size={16} weight="light" aria-hidden="true" /></a>
        </p>
      </Wrap>
    </section>
  );
}

export function Work({ c }: { c: SiteContent["work"] }) {
  return (
    <section id={c.id} className="bg-soft py-20 lg:py-28" aria-labelledby={`${c.id}-title`}>
      <Wrap>
        <SectionHead id={`${c.id}-title`} center eyebrow={c.eyebrow} title={<Words>{c.title}</Words>} lead={c.lead} />
        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.projects.map((p) => (
            <Link key={p.href} href={p.href} className="group grid gap-3.5 text-inherit no-underline">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-soft">
                <span className="absolute left-4 top-4 z-[1] inline-flex h-[30px] items-center rounded-full bg-dark/60 px-3 text-[11px] font-medium uppercase tracking-[.1em] text-on-dark backdrop-blur-sm">{p.tag}</span>
                <Image src={p.image.src} alt={p.image.alt} placeholder="blur" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(.16,1,.3,1)] group-hover:scale-105" />
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-[22px] font-medium leading-tight">{p.title}</h3>
                {p.statusLabel && <span className="inline-flex items-center gap-1.5 text-[13px] text-body"><span className={`h-1.5 w-1.5 rounded-full ${p.status === "complete" ? "bg-[#4F6F52]" : "bg-[#B5862B]"}`} aria-hidden="true" />{p.statusLabel}</span>}
              </div>
              <p className="text-[14px] text-body">{p.place}</p>
            </Link>
          ))}
        </RevealGroup>
        <p className="mt-12 text-center"><Button href={c.all.href} variant="ink">{c.all.label} <ArrowRightIcon size={18} weight="light" aria-hidden="true" /></Button></p>
      </Wrap>
    </section>
  );
}

export function Testimonial({ c }: { c: SiteContent["quote"] }) {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="quote-title">
      <Wrap className="grid items-center gap-12 lg:grid-cols-[5fr_7fr]">
        <Reveal className="aspect-[4/3] overflow-hidden rounded-lg shadow-soft">
          <Image src={c.image.src} alt={c.image.alt} placeholder="blur" sizes="(min-width: 1024px) 42vw, 100vw" className="h-full w-full object-cover" />
        </Reveal>
        <div>
          {c.eyebrow && <Eyebrow>{c.eyebrow}</Eyebrow>}
          <h2 id="quote-title" className={`my-6 ${H2}`}><Words>{c.title}</Words></h2>
          <Reveal>
            <blockquote className="font-display normal-case text-[22px] font-medium leading-[1.3] tracking-[-0.01em] sm:text-[28px] lg:text-[32px]">“{c.text}”</blockquote>
            <p className="mt-5 font-medium">{c.name}<span className="block text-[14px] font-normal text-body">{c.role}</span></p>
          </Reveal>
        </div>
      </Wrap>
    </section>
  );
}

export function Contact({ c }: { c: SiteContent["contact"] }) {
  return (
    <section id={c.id} className="pb-20 lg:pb-28" aria-labelledby={`${c.id}-title`}>
      <Wrap>
        <div className="grid gap-12 rounded-lg bg-dark p-7 text-on-dark shadow-lift sm:p-10 lg:grid-cols-[5fr_7fr] lg:p-16">
          <div className="grid content-start justify-items-start gap-5">
            {c.eyebrow && <Eyebrow onDark>{c.eyebrow}</Eyebrow>}
            <h2 id={`${c.id}-title`} className={H2}><Words>{c.title}</Words></h2>
            {c.lead && <p className="text-[18px] leading-[1.6] text-on-dark-muted">{c.lead}</p>}
            <ul className="list-disc pl-[18px] text-[15px] leading-[1.6] text-on-dark-muted">{c.include.map((t) => <li key={t}>{t}</li>)}</ul>
            <div className="mt-2 grid gap-1 border-t border-white/15 pt-5 text-[14px]">
              <span className="text-on-dark-muted">Or directly</span>
              <a href={`mailto:${c.email}`} className="no-underline hover:underline">[{c.email}]</a>
              <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="no-underline hover:underline">[{c.phone}]</a>
            </div>
          </div>
          <Enquiry partner={c.partner} days={c.days} phone={`[${c.phone}]`} copy={c.form} />
        </div>
      </Wrap>
    </section>
  );
}

export function SiteFooter({ brand, c }: { brand: string; c: SiteContent["footer"] }) {
  return (
    <footer className="pb-8 pt-24">
      <Wrap>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="grid justify-items-start gap-3">
            <span className="inline-flex items-center gap-2.5 font-display text-[22px] font-medium" translate="no"><HouseLineIcon size={26} weight="light" className="text-accent" aria-hidden="true" />{brand}</span>
            <p className="max-w-[36ch] text-body">{c.blurb}</p>
            <p className="text-[15px] text-body">{c.address}</p>
          </div>
          {c.columns.map((col) => (
            <div key={col.label} className="grid content-start gap-2.5">
              <span className="text-[11px] font-medium uppercase tracking-[.12em] text-body">{col.label}</span>
              <ul className="grid gap-2 text-[15px]">{col.items.map((l) => <li key={l.href}><a href={l.href} className="text-body no-underline hover:text-accent">{l.label}</a></li>)}</ul>
              {col.extra && <span className="text-[15px] text-body">{col.extra}</span>}
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap justify-between gap-3 border-t border-hairline pt-6 text-[13px] text-body">
          <span>{c.legal}</span><span>{c.credits}</span>
        </div>
      </Wrap>
    </footer>
  );
}
