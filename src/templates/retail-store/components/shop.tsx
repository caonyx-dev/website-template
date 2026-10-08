// The shop's client state: the bag and the saved list. The DESIGN.md makes the cart drawer a first-class surface
// and the hand-off point to a checkout that does not exist yet, so quick-add has to do something real — it puts a
// line into a bag you can open, change and empty. Nothing is persisted and nothing is posted: the state lives for
// the life of the page, which is the honest behaviour for a template with no backend.
"use client";
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { StaticImageData } from "next/image";

export type Variant = { label: string; swatch: string };

export type Product = {
  id: string;
  name: string;
  price: number;
  was?: number;
  image: { src: StaticImageData; alt: string };
  badge?: "new" | "sale";
  badgeLabel?: string;
  variants: Variant[];
  stock?: string;
  href: string;
};

export type Line = { product: Product; variant: string; qty: number };

type ShopState = {
  lines: Line[];
  count: number;
  subtotal: number;
  add: (product: Product, variant: string) => void;
  setQty: (id: string, variant: string, qty: number) => void;
  remove: (id: string, variant: string) => void;
  open: boolean;
  setOpen: (v: boolean) => void;
  saved: string[];
  toggleSaved: (id: string) => void;
  /** The last line added, so the drawer can announce it. The counter forces a fresh value, because
   *  adding the same product twice would otherwise set an identical string and announce nothing. */
  announcement: { text: string; n: number };
};

const Ctx = createContext<ShopState | null>(null);

export function useShop() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useShop must be used inside <ShopProvider>");
  return v;
}

const key = (id: string, variant: string) => `${id}__${variant}`;

export function ShopProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState<string[]>([]);
  const [announcement, setAnnouncement] = useState({ text: "", n: 0 });

  const add = useCallback((product: Product, variant: string) => {
    setLines((prev) => {
      const i = prev.findIndex((l) => key(l.product.id, l.variant) === key(product.id, variant));
      if (i === -1) return [...prev, { product, variant, qty: 1 }];
      const next = [...prev];
      next[i] = { ...next[i], qty: next[i].qty + 1 };
      return next;
    });
    setAnnouncement((a) => ({ text: `${product.name}, ${variant}, added to your bag.`, n: a.n + 1 }));
  }, []);

  const setQty = useCallback((id: string, variant: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => key(l.product.id, l.variant) !== key(id, variant))
        : prev.map((l) => (key(l.product.id, l.variant) === key(id, variant) ? { ...l, qty } : l)),
    );
  }, []);

  const remove = useCallback((id: string, variant: string) => {
    setLines((prev) => prev.filter((l) => key(l.product.id, l.variant) !== key(id, variant)));
  }, []);

  const toggleSaved = useCallback((id: string) => {
    setSaved((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }, []);

  const value = useMemo<ShopState>(() => {
    const count = lines.reduce((n, l) => n + l.qty, 0);
    const subtotal = lines.reduce((n, l) => n + l.qty * l.product.price, 0);
    return { lines, count, subtotal, add, setQty, remove, open, setOpen, saved, toggleSaved, announcement };
  }, [lines, add, setQty, remove, open, saved, toggleSaved, announcement]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
