// Shared content types for template homepages. Each template provides one `SiteContent`
// in src/templates/<slug>/content.ts; the section components in src/components/sections render it.
import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import type { EnquiryCopy } from "@/components/Enquiry";

export type Img = { src: StaticImageData; alt: string; position?: string };
export type LinkItem = { href: string; label: string };

export type SiteContent = {
  brand: string;
  nav: { links: LinkItem[]; phone?: string; phoneLabel?: string; cta: LinkItem; menuExtra?: LinkItem[] };
  hero: {
    image: Img;
    eyebrow?: string;
    /** One entry per headline line. Use <Accent> inside for the coloured phrase. */
    lines: ReactNode[];
    lead?: string;
    primary: LinkItem;
    secondary?: LinkItem;
    caption?: string;
    scrollTo: string;
    stripe?: boolean;
  };
  intro: {
    id: string;
    eyebrow?: string;
    title: ReactNode;
    lead?: string;
    cards: { icon: ReactNode; title: string; text: string }[];
  };
  band: {
    eyebrow?: string;
    title: ReactNode;
    checks: string[];
    text?: string;
    cta: LinkItem;
    image: Img;
    watermark: string;
  };
  services: {
    id: string;
    eyebrow?: string;
    title: ReactNode;
    lead?: string;
    image: Img;
    note: string;
    rows: { n: string; title: string; href: string }[];
    stats: { big: string; title: string; text?: string }[];
  };
  model: {
    caption?: string; watermark: string; label: string;
    /** Scroll-driven chapters shown beside the model. The band pins and the model turns while these step through. */
    title?: ReactNode;
    steps?: { label: string; title: string; text?: string; facts?: { k: string; v: string }[] }[];
    /** Model under public/: a .glb (preferred, carries materials) or an .obj, e.g. /models/architect/building.glb */
    url: string;
    /** Optional MTL next to an OBJ. Ignored for GLB. */
    mtl?: string;
    /** "own": render the model's materials from the MTL. "massing": plaster faces with ink edges in the template tokens (default). */
    materials?: "own" | "massing";
  };
  process: {
    id: string;
    eyebrow?: string;
    title: ReactNode;
    lead?: string;
    blueprint: StaticImageData;
    steps: { n: string; title: string; text: string; image: Img }[];
    footNote: string;
    footCta: LinkItem;
  };
  work: {
    id: string;
    eyebrow?: string;
    title: ReactNode;
    lead?: string;
    projects: { tag: string; image: Img; title: string; status?: "complete" | "progress" | "planning"; statusLabel?: string; place: string; year?: string; href: string }[];
    all: LinkItem;
  };
  quote: { eyebrow?: string; title: ReactNode; image: Img; text: string; name: string; role: string };
  contact: {
    id: string;
    eyebrow?: string;
    title: ReactNode;
    lead?: string;
    include: string[];
    email: string;
    phone: string;
    partner: string;
    days: string;
    /** Form labels and options; anything left out uses the defaults in Enquiry.tsx. */
    form?: Partial<EnquiryCopy>;
  };
  footer: {
    blurb: string;
    address: string;
    columns: { label: string; items: LinkItem[]; extra?: string }[];
    legal: string;
    credits: string;
  };
};
