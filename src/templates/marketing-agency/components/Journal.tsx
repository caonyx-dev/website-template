// The reference's blog block runs one wide featured post beside two stacked compact ones. Dates are stored as ISO
// strings in the content file and formatted here, so the page never depends on a date computed at render time.
import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { LOCALE, type MarketingContent } from "../content";
import { Container, Eyebrow, Label, Pill, Title } from "./ui";

// `timeZone: "UTC"` is not optional: the dates are stored as UTC midnights, so without it a reader west of
// Greenwich formats the previous day and the client render disagrees with the server one.
const fmt = new Intl.DateTimeFormat(LOCALE, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const showDate = (iso: string) => fmt.format(new Date(`${iso}T00:00:00Z`));

export default function Journal({ j }: { j: MarketingContent["journal"] }) {
  if (!j.items.length) return null;
  const [featured, ...rest] = j.items;

  return (
    <section id="journal" aria-labelledby="journal-title" className="scroll-mt-28 bg-canvas py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)_auto] xl:items-start xl:gap-12">
          <Reveal><Eyebrow className="xl:pt-2">{j.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.08}><Title id="journal-title" className="max-w-[16ch]">{j.title}</Title></Reveal>
          <Reveal delay={0.14}><div className="xl:justify-self-end xl:pt-2"><Pill href={j.cta.href} tone="ink">{j.cta.label}</Pill></div></Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <article className="group">
              {/* The title below links to the same place; this copy is taken out of the tab order and off the
                  accessibility tree so the post is announced once, not twice. */}
              <Link href={featured.href} tabIndex={-1} aria-hidden="true" className="block overflow-hidden rounded-[24px] no-underline">
                <Image src={featured.image.src} alt={featured.image.alt} placeholder="blur" sizes="(min-width: 1024px) 45vw, 100vw" className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
              </Link>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1">
                <Label className="text-primary">{featured.category}</Label>
                <span aria-hidden="true" className="text-(--t-ash)">·</span>
                <time dateTime={featured.date} className="text-[14px] text-(--t-mute)">{showDate(featured.date)}</time>
              </p>
              <h3 className="mt-3 font-display text-[26px] font-bold leading-[1.15] tracking-[-0.03em] text-balance sm:text-[32px]">
                <Link href={featured.href} className="text-ink no-underline transition-colors duration-200 group-hover:text-primary">{featured.title}</Link>
              </h3>
              <p className="mt-3 max-w-[54ch] text-[16px] leading-[1.65] text-(--t-body)">{featured.excerpt}</p>
            </article>
          </Reveal>

          <RevealGroup as="ul" className="m-0 grid list-none content-start gap-6 p-0" stagger={0.1}>
            {rest.map((item) => (
              <article key={item.title} className="group grid gap-5 sm:grid-cols-[minmax(0,180px)_minmax(0,1fr)] sm:items-center">
                <Link href={item.href} tabIndex={-1} aria-hidden="true" className="block overflow-hidden rounded-[20px] no-underline">
                  <Image src={item.image.src} alt={item.image.alt} placeholder="blur" sizes="(min-width: 640px) 180px, 100vw" className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
                </Link>
                <div>
                  <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <Label className="text-primary">{item.category}</Label>
                    <span aria-hidden="true" className="text-(--t-ash)">·</span>
                    <time dateTime={item.date} className="text-[14px] text-(--t-mute)">{showDate(item.date)}</time>
                  </p>
                  <h3 className="mt-2 font-display text-[20px] font-bold leading-[1.2] tracking-[-0.02em] text-pretty sm:text-[22px]">
                    <Link href={item.href} className="text-ink no-underline transition-colors duration-200 group-hover:text-primary">{item.title}</Link>
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-(--t-body)">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
