// The DESIGN.md's `booking-band-mint` — the pre-footer "ready when you are" band it asks every page to
// carry, with both of the actions this template keeps within a thumb's reach.
import { PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import type { SmallBusinessContent } from "../content";
import { Btn, Container, Lead, Title } from "./ui";

export default function Booking({ b }: { b: SmallBusinessContent["booking"] }) {
  return (
    <section id="book" aria-labelledby="booking-title" className="scroll-mt-24 bg-canvas pb-16 sm:pb-20">
      <Container>
        <Reveal>
          <div className="rounded-[20px] bg-(--t-soft) px-7 py-12 text-center sm:px-12">
            <Title id="booking-title" className="mx-auto max-w-[18ch]">{b.title}</Title>
            <Lead className="mx-auto mt-4 max-w-[46ch]">{b.lead}</Lead>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Btn href={b.cta.href} size="lg">{b.cta.label}</Btn>
              <Btn href={`tel:${b.phone.replace(/[^+\d]/g, "")}`} tone="call" size="lg">
                <PhoneIcon size={17} weight="fill" aria-hidden="true" />{b.phone}
              </Btn>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
