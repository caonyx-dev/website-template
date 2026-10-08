// 04 Three photographic entry cards: an eyebrow and a title sit over the photograph, the line of copy below it
// on the cream. The whole card is one link; the photograph eases in a little when it is hovered or focused.
import Image from "next/image";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { RevealGroup } from "@/components/Reveal";
import type { RestaurantContent } from "../content";
import { Container } from "./ui";

export default function EntryCards({ cards }: { cards: RestaurantContent["entryCards"] }) {
  return (
    <section className="bg-canvas py-16 lg:py-20" aria-label="Where to start">
      <Container>
        <RevealGroup className="grid gap-8 md:grid-cols-3" stagger={0.1}>
          {cards.map((c) => (
            <a key={c.title} href={c.href} className="group block no-underline">
              <span className="relative block overflow-hidden" style={{ aspectRatio: "3 / 2" }}>
                <Image src={c.image.src} alt={c.image.alt} placeholder="blur" sizes="(min-width: 768px) 33vw, 100vw" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] group-focus-visible:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100" />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-(--t-dark)/80 via-(--t-dark)/10 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 grid gap-1.5 p-6">
                  <span className="text-[11px] font-medium uppercase tracking-[2px] text-accent">{c.eyebrow}</span>
                  <span className="font-display text-[22px] font-medium leading-[1.25] text-on-dark">{c.title}</span>
                </span>
              </span>
              <span className="mt-5 block text-[15px] leading-[1.6] text-body">{c.text}</span>
              <span className="mt-3 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[1.2px] text-primary group-hover:underline group-hover:underline-offset-4">{c.cta}<ArrowRightIcon size={14} weight="light" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" /></span>
            </a>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
