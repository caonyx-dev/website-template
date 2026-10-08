// The reference pins a tab bar to the foot of the screen on phones; this template's DESIGN.md asks for a sticky
// bar there too, carrying the bag. It disappears from `lg` up, where the header carries all four.
"use client";
import Link from "next/link";
import { HandbagIcon, HeartIcon, HouseIcon, StorefrontIcon } from "@phosphor-icons/react";
import type { RetailContent } from "../content";
import { useShop } from "./shop";

export default function TabBar({ nav }: { nav: RetailContent["nav"] }) {
  const { count, setOpen, saved } = useShop();
  const item = "inline-flex min-h-14 flex-1 flex-col items-center justify-center gap-1 text-[11px] font-semibold text-ink no-underline";

  return (
    <nav
      aria-label="Shop"
      className="fixed inset-x-0 bottom-0 z-30 flex items-stretch border-t border-(--t-hairline) bg-canvas pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <Link href="#main" className={item}>
        <HouseIcon size={19} aria-hidden="true" />Home
      </Link>
      <Link href="#shop" className={item}>
        <StorefrontIcon size={19} aria-hidden="true" />Shop
      </Link>
      <Link href="#new-in" className={`${item} relative`}>
        <HeartIcon size={19} aria-hidden="true" />
        Saved<span className="sr-only">, {saved.length} {saved.length === 1 ? "item" : "items"}</span>
        {saved.length > 0 && <span aria-hidden="true" className="absolute right-[26%] top-2 size-2 rounded-full bg-primary" />}
      </Link>
      <button type="button" onClick={() => setOpen(true)} className={`${item} relative`}>
        <HandbagIcon size={19} aria-hidden="true" />
        {nav.utilities.bag}<span className="sr-only">, {count} {count === 1 ? "item" : "items"}</span>
        <span aria-hidden="true" className="absolute right-[22%] top-1.5 flex min-w-4.5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold leading-[18px] text-(--t-on-primary)">{count}</span>
      </button>
    </nav>
  );
}
