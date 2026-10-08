// On phones the nav pill has no room for the call to action, so it moves to a bar pinned to the foot of the
// screen. It disappears from `sm` up, where the pill carries it again.
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import type { LinkItem } from "@/lib/content";

export default function ActionBar({ cta, email }: { cta: LinkItem; email: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex items-center gap-2 border-t border-(--t-hairline) bg-canvas px-4 pb-[calc(0.6rem+env(safe-area-inset-bottom))] pt-2.5 sm:hidden">
      <Link
        href={`mailto:${email.replace(/[[\]]/g, "")}`}
        className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-(--t-soft) px-4 text-[15px] font-semibold text-ink no-underline"
      >
        Email us
      </Link>
      <Link
        href={cta.href}
        className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 text-[15px] font-semibold text-(--t-on-primary) no-underline"
      >
        {cta.label}
        <ArrowRightIcon size={16} weight="bold" aria-hidden="true" />
      </Link>
    </div>
  );
}
