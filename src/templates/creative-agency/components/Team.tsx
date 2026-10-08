// Team: centred headline and four monochrome portraits in a row with name and role beneath.
import Image from "next/image";
import Link from "next/link";
import { RevealGroup, Words } from "@/components/Reveal";
import type { AgencyContent } from "../content";
import { Container, H2 } from "./ui";

export default function Team({ t }: { t: AgencyContent["team"] }) {
  return (
    <section className="py-20 lg:py-32" aria-labelledby="team-title">
      <Container>
        <H2 id="team-title" center><Words>{t.title}</Words></H2>
        <RevealGroup className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4" stagger={0.1} from="clip">
          {t.people.map((p) => (
            <Link key={p.href} href={p.href} className="group grid gap-4 no-underline">
              <span className="block aspect-[4/5] overflow-hidden bg-ink"><Image src={p.image.src} alt={p.image.alt} placeholder="blur" sizes="(min-width: 1024px) 25vw, 50vw" className="h-full w-full object-cover grayscale transition-[transform,filter] duration-700 group-hover:scale-105 group-hover:grayscale-0" /></span>
              <span className="grid gap-1"><span className="font-display text-[20px] font-bold text-ink">{p.name}</span><span className="text-[14px] text-body">{p.role}</span></span>
            </Link>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
