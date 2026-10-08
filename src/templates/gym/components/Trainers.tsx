// Trainers: eyebrow and giant title, then four 3:4 portraits wiping up in turn, each with the name card over
// its lower edge; the portrait scales on hover.
import Image from "next/image";
import Link from "next/link";
import { RevealGroup } from "@/components/Reveal";
import type { GymContent } from "../content";
import { Container, SectionHead } from "./ui";

export default function Trainers({ t }: { t: GymContent["trainers"] }) {
  return (
    <section id="trainers" className="scroll-mt-20 py-24 lg:py-32" aria-labelledby="trainers-title">
      <Container>
        <SectionHead n={t.n} label={t.label} lines={t.title} id="trainers-title" />
        <RevealGroup as="ul" className="grid grid-cols-2 gap-4 lg:grid-cols-4" from="clip" stagger={0.1}>
          {t.people.map((p) => (
            <Link key={p.href} href={p.href} className="group relative block aspect-[3/4] overflow-hidden rounded-lg border border-hairline bg-dark no-underline">
              <Image src={p.image.src} alt={p.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 320px, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute inset-x-3 bottom-3 grid rounded-md bg-(--t-surface-card)/92 px-4 py-3 text-center backdrop-blur-sm"><span className="font-display text-[22px] font-semibold text-ink">{p.name}</span><span className="text-[13px] text-body">{p.role}</span></span>
            </Link>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
