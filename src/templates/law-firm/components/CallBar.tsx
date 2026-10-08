// 15 Below `lg`: a fixed bar with the office number and the booking pill, because most visitors to a firm like
// this arrive on a phone and want to call.
import { PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import type { LinkItem } from "@/lib/content";

export default function CallBar({ cta, phone }: { cta: LinkItem; phone: string }) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-hairline bg-canvas shadow-lift lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)", paddingLeft: "env(safe-area-inset-left)", paddingRight: "env(safe-area-inset-right)" }}
    >
      <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="flex min-h-14 items-center justify-center gap-2 px-3 py-2 text-center text-[15px] font-semibold leading-tight text-ink no-underline transition-colors hover:text-primary active:bg-soft"><PhoneIcon size={17} weight="light" aria-hidden="true" className="shrink-0" />Call the office</a>
      <a href={cta.href} className="flex min-h-14 items-center justify-center bg-[linear-gradient(100deg,var(--t-accent),var(--t-accent-deep))] px-3 py-2 text-center text-[14px] font-semibold uppercase leading-tight tracking-[0.5px] text-white no-underline transition-[filter] hover:brightness-110 active:brightness-95">{cta.label}</a>
    </div>
  );
}
