---
version: alpha
name: Creative-Studio-Template
description: A bright, pill-shaped design system for a creative studio, written from the Studiova reference (studiova.vercel.app) on 2026-10-07 — white canvas, a cool off-white band, a near-black graphite for dark panels and one lime primary that every pill button wears with graphite text. Manrope for everything, sentence-case headlines at weight 700, numbered section headers (a lime circle "01", a short rule, a graphite pill label), full-radius buttons with a white arrow disc, bordered cards with no shadows, and a full-bleed black hero photograph with the studio's name set huge at the bottom.

colors:
  primary: "#C1FF72"
  primary-pressed: "#A9F04E"
  on-primary: "#1F2A2E"
  ink: "#1F2A2E"
  body: "#4A5A61"
  mute: "#6B7C84"
  canvas: "#FFFFFF"
  canvas-soft: "#F4F8FA"
  canvas-soft-2: "#E7EEF2"
  surface: "#FFFFFF"
  surface-dark: "#1F2A2E"
  surface-dark-2: "#273338"
  on-dark: "#FFFFFF"
  on-dark-soft: "#B9C4C9"
  hairline: "#E2E8EB"
  hairline-strong: "#C5CFD4"
  link: "#1F2A2E"
  success: "#2E7D32"
  error: "#DF2225"

typography:
  display-xl:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: 160px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: -4px
  display-lg:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -1.5px
  display-md:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.8px
  stat:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -2px
  body-lg:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.3
  button:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1

rounded:
  sm: 8px
  md: 12px
  lg: 20px
  pill: 9999px
  full: 9999px

spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 120px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 6px 6px 6px 24px
    height: 56px
  section-number:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 40px
  section-label:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  tag-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.pill}"
    padding: 6px 12px
  card-lime:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 32px
  card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.md}"
    padding: 32px
  card-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: 32px
  pricing-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 48px
  faq-row:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    padding: 28px 0
  input-underline:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-strong}"
    height: 56px
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    padding: 96px 0
---

## Overview

Written from the Studiova reference capture (2026-10-07). White canvas with a cool off-white band for alternating sections, graphite `#1F2A2E` for dark panels, and one lime `#C1FF72` that carries every button, the section-number circles and the highlight word in the hero. Manrope everywhere, sentence case, weight 700 for headlines. Shapes are pills and 12px cards; no shadows. Every section opens with the same header: a lime circle holding the section number, a short rule, a graphite pill with the label, and the headline in the right column.

## Signature pieces
- Full-bleed black hero photograph with the studio's name set at 160px along the bottom and a lime pill-arrow beside it; the photograph scales up gently with scroll.
- Pill buttons: lime, graphite text, a white disc with ↗ at the right end.
- Stat rows with top rules; tiles in lime, graphite and outline; a graphite services band; testimonial cards in lime, graphite and white; square team portraits; three pricing cards; a FAQ with round plus buttons; underline-only contact fields; a graphite footer with "Build something together?".

## Known gaps
- Figures, names, prices, quotes and logos are placeholders until the studio supplies them.
- The reference has a dark-mode toggle; this template ships light only.

### Revision 2026-10-07 (b): motion layer
- Section headers animate in pieces (number pops, rule and pill slide, headline word by word); figures, slides, rows, tiles and cards wipe or slide in; the stats asterisk rotates with scroll; FAQ rows open with a height transition; the hero pill is magnetic; back-to-top appears after the hero. Reduced motion renders everything at rest.
