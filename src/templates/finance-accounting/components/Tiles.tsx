// Four edge-to-edge photo tiles with a green-black gradient, white title and one line, each a link; the
// photograph scales on hover and the tiles wipe up in turn.
import Image from "next/image";
import Link from "next/link";
import { RevealGroup } from "@/components/Reveal";
import type { FinanceContent } from "../content";

export default function Tiles({ tiles }: { tiles: FinanceContent["tiles"] }) {
  return (
    <section aria-label="More services">
      <RevealGroup as="ul" className="grid sm:grid-cols-2 lg:grid-cols-4" stagger={0.1} from="clip">
        {tiles.map((t) => (
          <Link key={t.href} href={t.href} className="group relative block aspect-[4/3] overflow-hidden bg-dark no-underline sm:aspect-[3/2]">
            <Image src={t.image.src} alt={t.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/30 to-dark/10" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
              <h3 className="font-display text-[26px] font-bold leading-tight text-white text-pretty">{t.title}</h3>
              <p className="mt-1.5 text-[16px] text-white/80">{t.text}</p>
            </div>
          </Link>
        ))}
      </RevealGroup>
    </section>
  );
}
