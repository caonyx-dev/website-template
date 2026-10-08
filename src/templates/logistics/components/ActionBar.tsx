// 16 Below `lg`: the operations number and the quote pill, so the DESIGN.md's rule that the phone and the quote
// button stay within reach on every device holds on a phone too.
import { PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import type { LinkItem } from "@/lib/content";

export default function ActionBar({ cta, phone }: { cta: LinkItem; phone: string }) {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-hairline bg-canvas lg:hidden"
      aria-label="Quick actions"
      style={{ paddingBottom: "env(safe-area-inset-bottom)", paddingLeft: "env(safe-area-inset-left)", paddingRight: "env(safe-area-inset-right)" }}
    >
      <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="flex min-h-14 items-center justify-center gap-2 px-3 py-2 text-center text-[15px] font-semibold leading-tight text-ink no-underline transition-colors hover:text-(--t-primary-focus) active:bg-soft"><PhoneIcon size={17} weight="bold" aria-hidden="true" className="shrink-0" />Call the desk</a>
      <a href={cta.href} className="log-on-primary flex min-h-14 items-center justify-center bg-primary px-3 py-2 text-center text-[15px] font-semibold leading-tight text-(--t-on-primary) no-underline transition-colors hover:bg-(--t-primary-hover) active:bg-(--t-primary-focus) active:text-white">{cta.label}</a>
    </nav>
  );
}
