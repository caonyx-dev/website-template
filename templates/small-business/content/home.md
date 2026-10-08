# Small business — Homepage

**Status:** built. Live at `/small-business`. Built after the cleaning-service demo (v4sites.animation-addons.com/cleaning-service), following its composition and devices in this template's white-and-mint palette. Geometry was measured from the live page rather than estimated. The dated revision at the end of `DESIGN.md` lists the three rules the rebuild overrides, the three devices deliberately not copied, and the three bands that are this template's own.

## Sections, in order

1. **Header** — wordmark, five links, the "Open now" chip, the phone as a text link and a green "Book now" pill. A modal sheet on phones.
2. **Hero** — the photograph under a scrim, headline, "See our services" + the orange Call pill, the trust row, and the booking card with its area slider.
3. **What we clean** — four services divided by hairlines, each with a "from" price slot.
4. **About** — the big heading beside two paragraphs and a button.
5. **Photo band** — the full-bleed photograph with the "Checked and covered" card over it.
6. **Figures** — four counting numbers on the mint band.
7. **Three steps** — the dashed connector and three cards.
8. **Why people stay** — the mint panel beside a photograph, with the check list.
9. **Reviews** — three labelled placeholders, no stars.
10. **Questions** — the FAQ accordion.
11. **Opening hours and where we cover** — two cards.
12. **Ready when you are** — the mint booking band.
13. **From the van** — three news cards.
14. **Offer bar** — the orange scrolling banner.
15. **Footer** — the dark band with the address, phone, email and registration line.
16. **Sticky bar** — Call and Book, below `md` only.

## Placeholders to replace

Everything in [square brackets], plus:

- **Identity** — `brand` (`[Business name]`) sets the header, the sheet, the footer and the page title in `src/app/small-business/layout.tsx`.
- **The phone number** appears in the header, the hero, the booking band, the sticky bar and the footer, and every `tel:` link is built from those strings by stripping the brackets. Change all five.
- **The address, the opening hours and the towns covered.** These are the things a customer acts on before getting in the car.
- **Prices** — stored as plain numbers and formatted by `Intl.NumberFormat`; change `CURRENCY` and `LOCALE` at the top of `content.tsx` rather than editing each string.
- **Dates** — news dates are ISO strings formatted with an explicit UTC time zone, so they read the same on the server and in every browser. `footer.copyrightYear` is a plain number; update it once a year.
- **Photographs** — the six files in `templates/small-business/assets/` are AI-generated placeholders. Replace them at the same aspect ratios: `hero.jpg` and `band.jpg` 16:9, `whyus.jpg` 3:4, the three `news-*.jpg` 3:2. **The hero needs clear space at one side** for the headline, and the band needs clear space at the right for the credentials card. Rewrite each `alt` in `content.tsx` to describe the real photograph.
- **Links** — `/privacy`, `/terms` and `/cancellation` have no pages behind them yet, and every service and news link currently points back at an anchor on this page.

## Claims you must not ship unchanged

This template's DESIGN.md forbids inventing prices, reviews, star ratings, response-time promises, "since [year]" claims and insurance statements. Every one of those ships here as a labelled placeholder.

- **The "Checked and covered" card** — public liability, employer's liability, DBS and company number. Replace each with cover you actually hold, keep the policy numbers to hand, and delete the note. This is the card a customer reads before letting someone into their house.
- **The four figures** — years, homes, team size, retention — are placeholders with a visible note. Replace them with numbers you can evidence, or remove the row.
- **Every "from" price** is a placeholder. Say clearly what the price includes, or remove the price line.
- **The three reviews are labelled placeholders and there are no stars.** Replace them with reviews you have permission to quote, or connect a real feed. An aggregate score may only appear once a real feed is connected — the chip under the row says so, and it should be deleted along with the placeholders.
- **The FAQ answers are written as instructions to you**, not as answers. The insurance answer and the "what if I am not happy" answer in particular must be made accurate before launch — they are the two a customer is most likely to rely on.
- **"Fully insured", "Family run since [year]", "Someone answers between [8am and 6pm]", "we come back at no charge"** are all promises. Keep only the ones that are true of your business.
- **The hours must match your Google Business Profile exactly.** The "Open now" chip is worked out from them, so a wrong row makes the chip lie.

## Notes

- **The booking card posts nowhere**, and says so rather than thanking anyone. The area slider is a real range input, so it works from the keyboard and announces "200 m²" rather than a bare number. Wire the form to your inbox or booking system before launch.
- **"Open now" and today's highlighted row resolve after the page loads**, not during render — a date read at build time would freeze one moment into the static page. Until they resolve the chip is simply absent and the hours table is still complete.
- **The sticky Call/Book bar disappears whenever a form field has focus**, so it can never cover the field someone is filling in or the button beneath it.
- **The FAQ uses native `<details>`**, so it works with JavaScript off and two answers can be left open side by side.
- **The offer bar is the one marquee** on the page, which is the project limit. It pauses on hover, on focus and by its button; the button is hidden under reduced motion because the bar is already still, and the offer is repeated in a visually hidden heading.
- **Orange is a fill under ink text, never a text colour.** It appears exactly twice: the Call pill and the offer bar.
- **Green is 2.3:1 on the dark footer and over the hero photograph**, so both carry `.sb-on-dark`, which swaps the focus ring to white.

## Known gaps

- **There is no service page, booking page or contact page.** Every service and news link is an anchor back to this page. This template ships the homepage only.
- **`/privacy`, `/terms` and `/cancellation` have no pages behind them** and currently 404. A service that takes bookings cannot ship without cancellation terms and a privacy policy.
- **There is no map embed.** The service-area card is a list of towns; add a map or a static map image if you want one, as the DESIGN.md's `map-card` allows.

## Notes added after the guidelines review

- **The "Open now" chip stays silent until you edit the hours.** While they are still bracketed it shows nothing, and it shows nothing if a row cannot be read or the time zone is wrong. Set `hours.timeZone` to the zone your hours are stated in (`Europe/London` by default) — the chip is computed in that zone, not the visitor's, so someone reading on holiday still sees the right answer.
- **Three promises that were unlabelled are now bracketed**: "Fully insured" in the hero, the "employed and reference-checked" line in the about copy, and the no-charge re-clean in step three. **The offer bar is now an empty slot** — it previously shipped a concrete money promise with no terms and no end date. Write your own offer, say who it applies to and when it ends, or delete the bar.
- **The quote card says it is not connected before you type into it**, not after you submit.
- **Form field borders, placeholder text and the step chips were darkened** past what the DESIGN.md specifies, because its own values fail the contrast floor for a control edge and for placeholder text. The departure is recorded in that file's revision.
- **The area slider is 44px tall** so the whole control is a touch target, shows its 20–400 m² bounds, and announces "400 m² or more" at the top of the range. A bigger space needs a note in the message rather than a silent clamp.
