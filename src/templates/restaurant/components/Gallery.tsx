// 10 A four-tile mosaic of the room and the pass, the first tile taking two columns on wide screens.
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import type { RestaurantContent } from "../content";
import { Container, SectionHead } from "./ui";

/** Mosaic: a tall pair of cells for the first photograph, a wide one beside it, two squares under that. */
const SPANS = ["lg:col-span-2 lg:row-span-2", "lg:col-span-2", "", ""];
// Four cells exactly: a fifth photograph would fall into an unspanned cell and break the tiling, so the list is capped.

export default function Gallery({ g }: { g: RestaurantContent["gallery"] }) {
  return (
    <section id="gallery" className="scroll-mt-[124px] bg-canvas py-20 lg:py-28" aria-labelledby="gallery-title">
      <Container>
        <SectionHead id="gallery-title" eyebrow={g.eyebrow} title={g.title} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:[grid-auto-rows:230px]">
          {g.items.slice(0, SPANS.length).map((img, i) => (
            <Reveal key={i} from="clip" delay={i * 0.08} className={`h-full ${SPANS[i]}`}>
              <span className="relative block h-full overflow-hidden max-lg:aspect-[3/2]">
                <Image src={img.src} alt={img.alt} fill placeholder="blur" sizes={i === 0 ? "(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"} className="object-cover" />
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
