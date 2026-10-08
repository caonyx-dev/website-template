// Quality band: the operatory photograph under a teal overlay, drifting with scroll; headline on the left,
// outlined and navy buttons on the right.
import Image from "next/image";
import { Reveal, Words } from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import type { DentalContent } from "../content";
import { Btn, Container } from "./ui";

export default function Band({ b }: { b: DentalContent["band"] }) {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-ink lg:py-24" aria-labelledby="band-title">
      <Parallax speed={0.25} className="absolute inset-x-0 -inset-y-[20%]"><Image src={b.image.src} alt="" fill placeholder="blur" sizes="100vw" className="object-cover" /></Parallax>
      <div className="absolute inset-0 bg-primary/85" aria-hidden="true" />
      <Container className="relative flex flex-wrap items-center justify-between gap-10">
        <h2 id="band-title" className="max-w-[600px] font-display text-[30px] font-bold leading-[1.25] text-balance sm:text-[36px]"><Words>{b.title}</Words></h2>
        <Reveal from="right" className="flex flex-wrap gap-5">
          <Btn href={b.find.href} tone="outline-ink">{b.find.label}</Btn>
          <Btn href={b.book.href} tone="navy">{b.book.label}</Btn>
        </Reveal>
      </Container>
    </section>
  );
}
