// Two horizontal cards: photograph on the left third, then category, underlined title and a
// "Read more" row. The only place in the template with a shadow, and only on hover.
import Image from "next/image";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Headline, Wrap } from "./ui";
import type { TechStartupContent } from "../content";

export default function News({ n }: { n: TechStartupContent["news"] }) {
  return (
    <section id={n.id} className="bg-canvas py-24 sm:py-28 lg:py-36">
      <Wrap>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-[clamp(2.125rem,4.4vw,3.125rem)] font-medium leading-[1.0] text-ink">
            <Headline lines={n.lines} />
          </h2>
          <Reveal className="shrink-0">
            <a
              href={n.cta.href}
              className="font-body text-[17px] text-ink underline decoration-primary decoration-2 underline-offset-[6px] hover:decoration-ink"
            >
              {n.cta.label}
            </a>
          </Reveal>
        </div>

        <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-2">
          {n.posts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              className="group flex flex-col overflow-hidden rounded-[20px] ring-1 ring-hairline transition-shadow duration-300 hover:shadow-lift sm:flex-row"
            >
              <div className="relative aspect-[4/3] shrink-0 sm:aspect-auto sm:w-[38%]">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 20vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col p-7 sm:p-8">
                <p className="font-body text-[15px] text-mute">
                  {post.category} <span aria-hidden className="px-2">|</span> {post.date}
                </p>
                <h3 className="mt-3 font-display text-[clamp(1.25rem,2vw,1.625rem)] font-medium leading-[1.18] text-ink underline decoration-ink/25 decoration-2 underline-offset-[5px] group-hover:decoration-primary">
                  {post.title}
                </h3>
                <hr className="mt-auto border-0 border-t border-hairline pt-5" />
                <span className="inline-flex items-center gap-2.5 font-body text-[16px] text-ink">
                  Read more
                  <ArrowRightIcon size={16} weight="light" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </RevealGroup>
      </Wrap>
    </section>
  );
}
