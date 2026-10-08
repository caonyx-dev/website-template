// The DESIGN.md's `sticky-mobile-bar`: Call and Book pinned to the foot of the screen under `md`. The one
// thing it must never do is sit on top of the field someone is filling in or the submit button beneath it,
// so it hides itself whenever a form control has focus — done in CSS with `:has()` rather than a focus
// listener, which keeps this a server component and works however focus arrived.
import Link from "next/link";
import { CalendarCheckIcon, PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import type { SmallBusinessContent } from "../content";

export default function StickyBar({ phone, cta, s }: { phone: string; cta: { href: string; label: string }; s: SmallBusinessContent["sticky"] }) {
  return (
    <nav
      aria-label="Call or book"
      className="sb-sticky fixed inset-x-0 bottom-0 z-30 flex gap-3 border-t border-(--t-hairline) bg-canvas px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-(--t-shadow-lift) md:hidden"
    >
      <Link
        href={`tel:${phone.replace(/[^+\d]/g, "")}`}
        className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-(--t-accent) px-4 text-[15px] font-semibold text-ink no-underline transition-colors duration-200 hover:bg-(--t-accent-deep)"
      >
        <PhoneIcon size={17} weight="fill" aria-hidden="true" />{s.call}
      </Link>
      <Link
        href={cta.href}
        className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 text-[15px] font-semibold text-(--t-on-primary) no-underline transition-colors duration-200 hover:bg-(--t-primary-active)"
      >
        <CalendarCheckIcon size={17} weight="fill" aria-hidden="true" />{s.book}
      </Link>
    </nav>
  );
}
