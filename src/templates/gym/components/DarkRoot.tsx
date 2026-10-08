"use client";
// The template is dark-only: paint the root element dark too (scrollbars, overscroll, form controls), and put
// it back when the route unmounts.
import { useEffect } from "react";

export default function DarkRoot({ canvas }: { canvas: string }) {
  useEffect(() => {
    const el = document.documentElement; const prev = { scheme: el.style.colorScheme, bg: el.style.backgroundColor };
    el.style.colorScheme = "dark"; el.style.backgroundColor = canvas;
    return () => { el.style.colorScheme = prev.scheme; el.style.backgroundColor = prev.bg; };
  }, [canvas]);
  return null;
}
