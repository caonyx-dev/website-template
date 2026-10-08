// The thin strip the reference runs between the about screen and the services band: a line of client wordmarks on
// the soft paper tone. Every name is a bracketed placeholder, and the note under the strip says so out loud.
import { RevealGroup } from "@/components/Reveal";
import type { MarketingContent } from "../content";
import { Container, Label } from "./ui";

export default function Partners({ p }: { p: MarketingContent["partners"] }) {
  return (
    <section aria-labelledby="partners-title" className="bg-(--t-soft) py-12 sm:py-16">
      <Container>
        <h2 id="partners-title" className="text-center">
          <Label className="text-(--t-mute)">{p.title}</Label>
        </h2>
        <RevealGroup as="ul" className="m-0 mt-8 grid list-none grid-cols-2 gap-x-6 gap-y-7 p-0 sm:grid-cols-3 lg:grid-cols-6" stagger={0.06}>
          {p.items.map((item) => (
            <span className="block text-center font-display text-[19px] font-bold tracking-[-0.02em] text-(--t-mute) sm:text-[21px]" key={item}>{item}</span>
          ))}
        </RevealGroup>
        <p className="mx-auto mt-8 max-w-[70ch] text-center text-[13px] leading-[1.6] text-(--t-mute)">{p.note}</p>
      </Container>
    </section>
  );
}
