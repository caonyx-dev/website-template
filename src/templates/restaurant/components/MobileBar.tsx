// 15 On phones only: a fixed bar with the number to call and the booking link, so neither is ever a scroll away.
import { PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import type { LinkItem } from "@/lib/content";

export default function MobileBar({ cta, phone }: { cta: LinkItem; phone: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-hairline bg-canvas/95 backdrop-blur-sm md:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="flex h-14 items-center justify-center gap-2 text-[14px] font-medium uppercase tracking-[1px] text-ink no-underline transition-colors hover:text-primary active:bg-soft"><PhoneIcon size={16} weight="light" aria-hidden="true" />Call</a>
      <a href={cta.href} className="flex h-14 items-center justify-center bg-primary text-[14px] font-medium uppercase tracking-[1px] text-white no-underline transition-colors hover:bg-(--t-primary-active) active:bg-(--t-primary-active)">{cta.label}</a>
    </div>
  );
}
