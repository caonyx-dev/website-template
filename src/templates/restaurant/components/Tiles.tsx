// 08 Three tall photographic tiles for the parts of the night that are not the main menu: tea, dessert, the bar.
import Image from "next/image";
import { RevealGroup } from "@/components/Reveal";
import type { RestaurantContent } from "../content";
import { Container } from "./ui";

export default function Tiles({ tiles }: { tiles: RestaurantContent["tiles"] }) {
  return (
    <section className="bg-canvas pb-20 lg:pb-28" aria-label="Also here">
      <Container>
        <RevealGroup className="grid gap-6 sm:grid-cols-3" stagger={0.1} from="clip">
          {tiles.map((t) => (
            <figure key={t.title} className="my-0 mx-0">
              <span className="relative block overflow-hidden" style={{ aspectRatio: "3 / 4" }}>
                <Image src={t.image.src} alt={t.image.alt} placeholder="blur" sizes="(min-width: 640px) 33vw, 100vw" className="h-full w-full object-cover" />
              </span>
              <figcaption className="mt-5 grid gap-1.5">
                <span className="font-display text-[20px] font-medium text-ink">{t.title}</span>
                <span className="text-[14px] leading-[1.6] text-mute">{t.text}</span>
              </figcaption>
            </figure>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
