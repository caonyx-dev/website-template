// The reference runs a band of photographs at staggered heights and offsets. Here it is a scroll-snap row, so
// it works by swipe, by wheel and by keyboard without a library, and nothing moves on its own.
import Image from "next/image";
import type { TravelContent } from "../content";
import { Container } from "./ui";

/** The reference's rhythm: tall, short, tall, short — set per index rather than at random, so the server and
 *  the client always lay it out the same way. */
const SHAPE = ["h-[300px] w-[230px] sm:h-[420px] sm:w-[320px]", "h-[240px] w-[300px] self-end sm:h-[300px] sm:w-[420px]", "h-[340px] w-[250px] sm:h-[480px] sm:w-[340px]", "h-[240px] w-[300px] self-end sm:h-[300px] sm:w-[420px]", "h-[300px] w-[230px] sm:h-[420px] sm:w-[320px]"];

export default function Gallery({ g }: { g: TravelContent["gallery"] }) {
  if (!g.items.length) return null;
  return (
    <section aria-labelledby="gallery-title" className="bg-(--t-soft) pb-16 sm:pb-24">
      <Container className="sm:pr-0">
        <h2 id="gallery-title" className="sr-only">{g.title}</h2>
        <ul
          tabIndex={0}
          aria-label={g.title}
          className="m-0 flex min-h-[500px] list-none items-start gap-5 overflow-x-auto overscroll-x-contain p-0 pb-3 sm:min-h-[560px]"
        >
          {g.items.map((img, i) => (
            <li key={`${i}-${img.alt}`} className={`shrink-0 overflow-hidden ${SHAPE[i % SHAPE.length]}`}>
              <Image src={img.src} alt={img.alt} placeholder="blur" sizes="(min-width: 640px) 420px, 300px" className="size-full object-cover" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
