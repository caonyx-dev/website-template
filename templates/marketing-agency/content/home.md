# Marketing agency — Homepage

**Status:** built. Live at `/marketing-agency`. Built after the Nimo **home 04 one page** demo (themexriver.com/wp/nimo/home-04-onepage), following its composition, devices and motion in this template's ivory-and-violet palette. Geometry was measured from the live page rather than estimated. The dated revision at the end of `DESIGN.md` lists the four rules the rebuild overrides and why.

## Sections, in order

1. **Navigation** — the floating pill over the hero: wordmark, six one-page links, the violet "Let's talk". A full-height panel on phones.
2. **Hero** — the full-bleed photograph, the kicker, lead and "Discover now" pill over its right, and the poster headline anchored to the foot of the frame.
3. **About** — the bracketed label, the statement headline with the highlighter, the office photograph, the years counter with the discipline list running beneath it, and Mission / Vision / Goal as three ruled rows.
4. **Partners** — six client wordmarks on paper.
5. **Services** — the dark band: three numbered rows with plus-lists and photographs.
6. **Pricing** — the Monthly / Yearly switch and three plan cards.
7. **Work** — two projects in a staggered grid, then the violet panel.
8. **Awards** — the ruled table beside a tall portrait.
9. **Team** — the dark band: the poster headline and three portraits with tilted name cards.
10. **Bento** — the portrait, three counting figures, the percentage bars and the call-to-action card.
11. **Testimonials** — the ghost word behind two quotation cards.
12. **Journal** — one featured note and two compact ones.
13. **Contact** — the photograph beside the violet sign-up panel with the email and phone block.
14. **Footer** — the studio, three link columns, the legal row, and the wordmark cropped by the page edge.
15. **Action bar** — the email link and the call-to-action pill, below `sm` only.

## Placeholders to replace

Everything in [square brackets], plus:

- **Identity** — `brand` (`[Agency]`) sets the nav wordmark, the footer and the page title in `src/app/marketing-agency/layout.tsx`. `footer.wordmark` sets the giant name at the foot of the page; it is separate so a long name can be shortened there without changing the nav.
- **Contact** — the email and phone appear in the contact panel, the footer and the phone action bar, and every `mailto:` and `tel:` link is built from those strings by stripping the brackets. Replace them all.
- **People** — the three names and roles, and the social link behind each.
- **Prices** — stored as plain numbers and formatted by `Intl.NumberFormat`; change `CURRENCY` and `LOCALE` at the top of `content.tsx` rather than editing each string. **Check whether you are required to state that VAT or sales tax is included.**
- **Dates** — journal dates are ISO strings formatted by `Intl.DateTimeFormat`. They are not computed at render time, because a date computed during prerendering is non-deterministic. `footer.copyrightYear` is likewise a plain number; update it once a year.
- **Photographs** — the files in `templates/marketing-agency/assets/` are AI-generated placeholders. Replace them at the same aspect ratios: `hero.jpg` and `cta.jpg` 16:9, `about.jpg` and the three `blog-*.jpg` 3:2, the three `svc-*.jpg` 4:3, `work-sphere.jpg`, `work-speaker.jpg` and the three `crew-*.jpg` 1:1, `awards.jpg` and `bento-portrait.jpg` 3:4. Rewrite each `alt` in `content.tsx` to describe the real photograph — the ones shipped describe the placeholders, which is the only honest thing an `alt` can do before the real image arrives.
- **Links** — the legal links (`/privacy`, `/terms`, `/accessibility`) have no pages behind them yet, and every project and journal link currently points back at an anchor on this page.

## Claims you must not ship unchanged

This template's DESIGN.md forbids fabricating results, client names, logos and testimonials, and the page is written to that rule. Every one of these is a placeholder, not a claim:

- **The two results lines** on the work cards (`[00%] — replace with the real, client-approved result`). These are the numbers a visitor is most likely to take at face value. Replace them with results the client has approved in writing, or remove the line.
- **The partner strip** holds six bracketed names with a visible note. Replace them with clients who have agreed in writing to be named, or delete the strip.
- **The awards table** is four bracketed rows with a visible note. List only awards you can evidence, naming the year and the awarding body, or delete the section.
- **The bento figures and the percentage bars** — projects shipped, clients on retainer, people in the studio, and where the hours go. Replace all six with numbers you can evidence, or remove the panel.
- **The years counter** in the about band (`2+`) is a real claim about how long the studio has existed. Set it correctly.
- **The testimonials are placeholders, deliberately.** The quotations are written as instructions, not as praise. Replace them only with attributable feedback you have written permission to publish, or delete the section.
- **The prices** are invented for the template. See above.

## Notes

- **The counters** (the years tile and the three bento figures) count up the first time each scrolls into view. The animating value is `aria-hidden`; assistive tech hears the final figure instead. Under reduced motion the final value renders with no animation.
- **The percentage bars** are full width in the server render and with JavaScript switched off. The sweep only exists once client code marks the panel as in view, so no start state lives in CSS alone.
- **The marquee** in the about tile is the one marquee on the page, which is the project limit. It pauses on hover, on focus and by its button; the button is hidden under reduced motion because the list is already still, and the disciplines are repeated in a visually hidden list so nothing depends on the animation.
- **The pricing switch** is a radio group, not two buttons, so arrow keys move between the periods and a screen reader hears one control. The yearly figure is simply twelve times the monthly less two months; change both numbers, not the ratio, if your yearly price is priced differently.
- **The sign-up form** validates in the browser and posts nowhere. It deliberately does not clear itself on success, so a typed address is never thrown away. When a handler is wired, clear it only after the request resolves and set `aria-busy` on the button while it is in flight.
- **The violet is the only action colour and the acid yellow is a pen.** Violet is 1.9:1 on the ink bands, so every dark ground carries `.nim-on-dark`, which swaps the focus ring to yellow. If you add a dark section, add that class to it.
- **The ghost word** behind the testimonials and the **wordmark** at the foot of the footer are decoration and hidden from assistive tech. The real headings sit in the flow.

## Known gaps

Two findings from the guidelines review were deliberately left as they are:

- **The billing period is not in the URL.** The Monthly / Yearly switch is component state, so a yearly table cannot be linked or shared and resets on reload. Putting it in the query string needs the router and a Suspense boundary around `useSearchParams`, which would take this static page off the prerender path for a one-control toggle. Add it if the page ever gains a second shareable control.
- **`/privacy`, `/terms` and `/accessibility` have no pages behind them** and currently 404, as they do in every template here. Write those pages or remove the links before launch.
