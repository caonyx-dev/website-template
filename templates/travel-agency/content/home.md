# Travel agency — Homepage

**Status:** built. Live at `/travel-agency`. Built after the Arolax travel-agency demo (arolax.crowdytheme-demo.com/travel-agency/home), following its composition, devices and motion in this template's sky-and-navy palette. Geometry was measured from the live page rather than estimated. The dated revision at the end of `DESIGN.md` lists the three rules the rebuild overrides and the two bands that are this template's own.

## Sections, in order

1. **Header** — floats over the sky: wordmark, four links, a pill, and a menu button that opens a contact panel.
2. **Hero** — the drawn sky, the serif eyebrow, the poster headline with a pill-shaped photograph set into its last line, the turning "watch the film" disc, the flight path, the lead, and the social column.
3. **Enquiry bar** — Where / When / Travellers, closing on the azure orb.
4. **Credential bar** — four bonding and membership slots.
5. **World band** — the full-bleed lagoon photograph with the headline and the four travel styles.
6. **Why plan it with us** — six reasons on hairlines.
7. **Word band** — the giant scrolling word.
8. **Places we know well** — the destination rail.
9. **Travel notes** — three journal cards.
10. **Gallery** — the staggered photograph row.
11. **Quote** — the traveller comment with its stepper.
12. **Figures** — three counting numbers.
13. **Closing invitation** — the mountain photograph and one pill.
14. **Footer** — copyright, legal links, socials, back to top.

## Placeholders to replace

Everything in [square brackets], plus:

- **Identity** — `brand` (`[Agency name]`) sets the header wordmark, the panel, the footer and the page title in `src/app/travel-agency/layout.tsx`. It appears in the hero eyebrow too.
- **Contact** — the email, phone and address live in `nav.panel` and nowhere else; the `mailto:` and `tel:` links are built from those strings by stripping the brackets.
- **Prices** — stored as plain numbers and formatted by `Intl.NumberFormat`; change `CURRENCY` and `LOCALE` at the top of `content.tsx` rather than editing each string.
- **Dates** — journal dates are ISO strings formatted with an explicit UTC time zone, so they read the same on the server and in every reader's browser. `footer.copyrightYear` is a plain number; update it once a year.
- **Photographs** — the files in `templates/travel-agency/assets/` are AI-generated placeholders. Replace them at the same aspect ratios: `hero-pill.jpg` 3:2 (it is masked into a wide pill, so keep the subject central), `world.jpg` and `cta.jpg` 16:9, the six `dest-*.jpg` 2:3, the five `gal-*.jpg` and three `journal-*.jpg` 3:2, `quote-palm.jpg` 3:4. Rewrite each `alt` in `content.tsx` to describe the real photograph.
- **Links** — `/booking-conditions`, `/privacy` and `/cancellation` have no pages behind them yet, and every destination and journal link currently points back at an anchor on this page.

## Claims you must not ship unchanged

A travel agency takes money months before it delivers anything, so this is the part of the template that matters most.

- **The credential bar is four empty slots.** Bonding scheme, trade association, insurance, company number. Replace each with a licence or membership you actually hold, link it to the public register entry, and delete the note. **Nothing on this bar may ship unverified** — it is the bar a customer reads before paying a deposit.
- **Every "from" price is a placeholder**, and the footnote under the rail says so. Prices are per person based on two sharing and exclude international flights; state your own basis, and check whether you must show a total price including any compulsory charges.
- **The three figures** — trips planned, years, regions — are placeholders with a visible note. Replace them with numbers you can evidence, or remove the row.
- **Both traveller quotations are written placeholders**, not real feedback, and the note says so. Replace them only with comments you have written permission to publish and can attribute, or delete the section. The DESIGN.md forbids inventing reviews or ratings outright.
- **The comment counts** on the journal cards (`[4] comments`) are bracketed for the same reason.
- **"Been there", "local guides", "a number that answers"** in the reasons grid are promises about how you operate. Only keep the ones that are true of your agency.

## Notes

- **The enquiry bar is the signature element**, and it is this template's own — the reference has nothing like it. It validates in the browser, takes focus on a miss, announces the outline it would send through a live region, and posts nowhere. The adults stepper stops at one rather than reaching zero. Wire it to your enquiry inbox or CRM before launch.
- **Nothing autoplays.** The "watch the film" disc opens a dialog carrying a placeholder; put your own film behind it and keep it click-to-play.
- **The word band is the one marquee** on the page, which is the project limit. It pauses on hover, on focus and by its button; the button is hidden under reduced motion because the band is already still, and the word is repeated in a visually hidden heading.
- **The destination rail and the gallery are scroll-snap rows**, not carousels. They swipe, they take the wheel, they are keyboard reachable, and the arrows beside the destination head simply scroll the rail. No carousel library is installed.
- **The figures count up** the first time each scrolls into view. The animating value is hidden from assistive tech, which hears the final figure.
- **The hero's sky is drawn**, not photographed — a CSS gradient with two blurred forms drifting across it. It costs nothing to load and scales to any width. The flight path is an SVG that draws itself once.
- **Azure is 2.6:1 over a dark photograph**, so bands sitting on one carry `.tv-on-dark`, which swaps the focus ring to white. If you add another photographic band, add that class to it.
- **Orange appears once per destination card** and nowhere else, which is what the DESIGN.md reserves it for.

## Known gaps

- **There is no destination page, package page, or itinerary.** Every destination link is an anchor back to this page. This template ships the homepage only — which means the `itinerary-day`, `enquiry-card` and `faq-row` components in the DESIGN.md have nothing rendering them yet.
- **`/booking-conditions`, `/privacy` and `/cancellation` have no pages behind them** and currently 404. An agency cannot ship without booking conditions and a cancellation policy; write them before launch.

## Notes added after the guidelines review

- **Nothing on this page moves indefinitely by itself.** The clouds settle once and stop; the "watch the film" disc turns only while the pointer or the keyboard is on it. The only continuous motion is the word band, and that has a pause button. If you restore an endless drift, give it a control.
- **The figures are correct with JavaScript off.** They render their real value on the server and only drop to zero at the moment the count starts.
- **The enquiry bar does not claim to have sent anything.** Its confirmation says the outline is what *would* be sent and that nothing was submitted. Reword it once you have wired the bar to an inbox — until then, leaving it as it is, is the honest option.
- **The social links point at the platform roots** (`instagram.com`, `facebook.com`, `youtube.com`), not at your accounts. They are not bracketed because a bracketed `href` would break the link, so they are easy to miss — change all six (three in the hero, three in the footer).
