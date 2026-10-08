// News and insights: three post cards, each a photograph, a lime category pill, a ruled date and a title.
import Image from "next/image";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Badge, Button, Headline, Wrap } from "./ui";
import type { RealEstateContent } from "../content";

export default function Insights({ n }: { n: RealEstateContent["insights"] }) {
  return (
    <section id={n.id} className="bg-canvas pb-20 sm:pb-24 lg:pb-28">
      <Wrap>
        <Reveal>
          <Badge>{n.badge}</Badge>
        </Reveal>

        <div className="mt-7 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-[clamp(2rem,4.6vw,4rem)] font-bold leading-[1.07] tracking-[-0.02em] text-ink">
            <Headline lines={n.lines} />
          </h2>
          <Reveal className="shrink-0">
            <Button href={n.cta.href} variant="outline" arrow>
              {n.cta.label}
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {n.posts.map((post) => (
            <a key={post.title} href={post.href} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[30px]">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="mt-5 flex items-center gap-4">
                <span className="rounded-[10px] bg-primary px-3 py-2 text-[13px] font-semibold text-on-primary">{post.category}</span>
                <hr className="min-w-0 flex-1 border-0 border-t border-hairline" />
                <span className="font-body text-[14px] text-mute">{post.date}</span>
              </div>

              <h3 className="mt-4 font-display text-[22px] font-bold leading-[1.22] tracking-[-0.01em] text-ink group-hover:underline group-hover:decoration-primary group-hover:decoration-2 group-hover:underline-offset-4">
                {post.title}
              </h3>
            </a>
          ))}
        </RevealGroup>
      </Wrap>
    </section>
  );
}
