// "Let's find an office near you": a single teal strip with a pin icon and the link, words rising in.
import Link from "next/link";
import { MapPinIcon } from "@phosphor-icons/react/dist/ssr";
import { Words } from "@/components/Reveal";
import type { DentalContent } from "../content";
import { Container } from "./ui";

export default function OfficeStrip({ o }: { o: DentalContent["office"] }) {
  return (
    <section className="bg-primary py-8 text-ink" aria-label="Find an office">
      <Container className="flex items-center justify-center gap-4 text-center">
        <MapPinIcon size={32} weight="light" aria-hidden="true" />
        <Link href={o.href} className="font-display text-[22px] font-bold text-ink no-underline hover:underline sm:text-[26px]"><Words>{o.label}</Words></Link>
      </Container>
    </section>
  );
}
