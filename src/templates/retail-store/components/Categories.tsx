// The reference's category row: circular photo medallions with the label beneath, five across at desktop and a
// scrollable row below that. The circle is the one fully round shape the DESIGN.md allows outside pills.
import Image from "next/image";
import Link from "next/link";
import { RevealGroup } from "@/components/Reveal";
import type { RetailContent } from "../content";
import { Container, SectionHead } from "./ui";

export default function Categories({ c }: { c: RetailContent["categories"] }) {
  return (
    <section id="shop" aria-labelledby="cat-title" className="scroll-mt-32 bg-canvas py-12 sm:py-16">
      <Container>
        <SectionHead id="cat-title" title={c.title} lead={c.lead} />
        <RevealGroup as="ul" className="m-0 mt-10 grid list-none grid-cols-2 gap-x-4 gap-y-8 p-0 sm:grid-cols-3 lg:grid-cols-5" stagger={0.07}>
          {c.items.map((item) => (
            <Link key={item.label} href={item.href} className="group block text-center no-underline">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                placeholder="blur"
                sizes="(min-width: 1024px) 18vw, 40vw"
                className="mx-auto aspect-square w-full max-w-[200px] rounded-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <span className="mt-4 block font-display text-[15px] font-semibold text-ink transition-colors duration-200 group-hover:text-primary sm:text-[16px]">{item.label}</span>
            </Link>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
