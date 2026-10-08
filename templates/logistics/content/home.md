# Logistics — Homepage

**Status:** built. Live at `/logistics`. Built after the Logico Rounded **home-3** demo (demo.artureanec.com/themes/logico-rounded/home-3), following its layout, devices and motion in this template's slate-and-orange palette. Geometry was measured from the live page rather than estimated. The dated revision at the end of `DESIGN.md` lists the two rules the rebuild overrides and why.

## Sections, in order

1. **Utility bar** — location, phone, email and socials on slate.
2. **Navigation** — grid tile, wordmark, the six links with a rule under the section in view, search and account glyphs, and the orange quote pill. A full-height panel on phones.
3. **Hero carousel** — three slides crossfading on a timer, with edge arrows, a counter, progress rails, and the tracking card and watch card overlapping its corner.
4. **Client strip** — six muted wordmarks.
5. **Services** — three cards in light, slate and brand tones with petal-masked photographs.
6. **Running band** — the delivered figure between the word and the unit.
7. **Who we are** — the outlined ribbon over a dotted ground, the title and the lead.
8. **Tonnage** — the giant stroke-only figure that counts up, with its label on its side.
9. **Tracking band** — the full-bleed photograph with its watch card.
10. **Stats** — the slate card whose four figures count up on scroll.
11. **Services by mode** — six tabs over a photograph and copy.
12. **How we work** — six steps with outlined numerals.
13. **Network** — the photographic carousel.
14. **Crew** — three portraits with names beside them.
15. **Quote** — the form card over the yard photograph with the orange call card.
16. **Footer** — the company, two link columns, accreditation placeholders and the legal row.
17. **Action bar** — the number and the quote pill, below `lg` only.

## Placeholders to replace

Everything in [square brackets], plus:

- **Identity** — `brand` (`[Company]`) sets the wordmark, the footer and the page title in `src/app/logistics/layout.tsx`.
- **Contact** — the operations number appears in the nav, the operations card, the quote call card, the footer and the phone action bar, and every `tel:` link is built from those strings. Replace them all.
- **Services** — the three service cards and the six mode tabs. Transit times in the tab copy read as commitments, so only state what you will actually hold yourself to.
- **Photographs** — the files in `templates/logistics/assets/` are AI-generated placeholders. Replace them at the same aspect ratios: `hero-ship.jpg`, `hero-bridge.jpg`, `hero.jpg`, `ocean.jpg` and `yard.jpg` 16:9, `plane.jpg` and the three `mode-*.jpg` 4:3, the three `team-*.jpg` 1:1. Rewrite each `alt` in `content.tsx` to describe the real photograph.
- **The copyright year** is `footer.copyrightYear` in the content file. It is a plain number rather than a computed date, because a date computed at render time is non-deterministic under prerendering. Update it once a year.

## Claims you must not ship unchanged

This template's DESIGN.md forbids fabricating operational numbers, and the page is written to that rule. Every one of these is a placeholder, not a claim:

- **The tonnage figure in the running band** (`[345 679 345]`) and **the giant counting figure** in the tonnage band (`tonnage.value`, 223,158,482). Both are the numbers a visitor is most likely to take at face value. Replace them with figures you can evidence, or remove the bands.
- **The accreditations** in the footer are bracketed labels, with a visible note saying so. Replace each with an accreditation the company actually holds and link to the register entry, or remove the column. Do not ship the placeholders.
- **The stats figures** that count up (consignments delivered, tonnes, countries, warehouse bays) are the numbers a visitor is most likely to take at face value. Replace all four with figures you can evidence, or remove the card.
- **The client strip** holds six bracketed placeholders. Replace them with clients who have agreed in writing to be named, or delete the strip.

## Notes

- **Tracking is a demonstration.** `hero.track.statuses` holds two sample references (`AB-123456-01`, `AB-123456-02`) matched in the browser. Wire the input to the real tracking API before launch, and keep the live region so a screen reader hears the result.
- The quote form validates in the browser and posts nowhere. It deliberately does not clear itself on success, so a typed enquiry is never thrown away. When a handler is wired, clear it only after the request resolves, and disable the submit button with `aria-busy` while it is in flight.
- The incoterm list is the full set; trim it to the terms you actually trade on.
- **The hero carousel** runs on a 7-second timer that stops on hover and on focus, and stops entirely under reduced motion. Each slide is announced through a live region.
- **The stats figures and the giant tonnage figure count up** the first time each scrolls into view. The animating value is hidden from assistive tech, which hears the final figure instead.
- **The thousands separator** follows the locale passed to `CountUp`, which defaults to `en-GB` (commas). Pass `locale="de-DE"` for the dotted European grouping the reference uses, or change the default once for the whole page.
- There is one marquee on the page, which is the project limit. It pauses on hover, on focus and by its button, its control is hidden under reduced motion because the band is already still, and its text is repeated in a visually hidden heading.
