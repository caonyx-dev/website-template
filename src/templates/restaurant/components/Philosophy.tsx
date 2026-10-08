// 07 One line of the kitchen's thinking, centred under a short vertical gold rule. No photograph, no button.
import { Reveal, Words } from "@/components/Reveal";
import type { RestaurantContent } from "../content";
import { Container } from "./ui";

export default function Philosophy({ p }: { p: RestaurantContent["philosophy"] }) {
  return (
    <section className="bg-canvas py-20 lg:py-28" aria-label="Our approach">
      <Container>
        <figure className="mx-auto my-0 max-w-[820px] text-center">
          <Reveal><span aria-hidden="true" className="mx-auto block h-12 w-px bg-accent/60" /></Reveal>
          <blockquote className="mt-8 font-display text-[26px] font-medium leading-[1.3] text-ink text-balance sm:text-[36px] lg:text-[42px]"><Words>{p.quote}</Words></blockquote>
          <Reveal delay={0.25}><figcaption className="mt-7 text-[13px] uppercase tracking-[2px] text-mute">{p.attribution}</figcaption></Reveal>
        </figure>
      </Container>
    </section>
  );
}
