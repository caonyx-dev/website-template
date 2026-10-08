// Social strip like the reference: four grey cells divided by hairlines, each an icon and label link.
import type { LinkItem } from "@/lib/content";
import { SocialIcon } from "./ui";

export default function SocialStrip({ socials }: { socials: LinkItem[] }) {
  return (
    <nav aria-label="Social media" className="border-t border-hairline bg-soft">
      <ul className="grid grid-cols-2 lg:grid-cols-4">
        {socials.map((s, i) => <li key={s.href} className={`border-hairline ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b lg:border-b-0" : ""} lg:border-r lg:last:border-r-0`}><a href={s.href} className="flex h-20 items-center justify-center gap-3 font-display text-[16px] font-medium text-ink no-underline transition-colors hover:bg-white hover:text-primary"><SocialIcon label={s.label} size={18} />{s.label}</a></li>)}
      </ul>
    </nav>
  );
}
