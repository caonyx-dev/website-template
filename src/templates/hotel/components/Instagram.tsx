// Instagram like the reference: parchment header with the eyebrow and the handle in Marcellus, then eight
// square photographs edge to edge, each its own post link named by what the photograph shows.
import Image from "next/image";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup } from "@/components/Reveal";
import type { HotelContent } from "../content";
import { Container, Eyebrow } from "./ui";

export default function Instagram({ i }: { i: HotelContent["instagram"] }) {
  return (
    <section className="relative z-[1] bg-soft pt-24" aria-labelledby="instagram-title">
      <Container className="pb-14 text-center">
        <Reveal><Eyebrow>{i.eyebrow}</Eyebrow></Reveal>
        <h2 id="instagram-title" className="mt-6 font-display text-[36px] text-ink sm:text-[52px]"><a href={i.href} className="text-ink no-underline hover:text-primary">{i.handle}</a></h2>
      </Container>
      <RevealGroup as="ul" className="grid grid-cols-4 lg:grid-cols-8" stagger={0.05}>
        {i.posts.map((post, k) => (
          <a key={k} href={post.href} className="group relative block aspect-square overflow-hidden bg-dark">
            <span className="sr-only">{post.image.alt}</span>
            <Image src={post.image.src} alt="" fill placeholder="blur" sizes="(min-width: 1024px) 12.5vw, 25vw" className="object-cover transition-opacity duration-700 group-hover:opacity-80" />
            <span className="absolute inset-0 grid place-items-center text-on-dark opacity-70 transition-opacity group-hover:opacity-100"><InstagramLogoIcon size={22} aria-hidden="true" /></span>
          </a>
        ))}
      </RevealGroup>
    </section>
  );
}
