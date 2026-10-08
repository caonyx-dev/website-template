# Law firm — Homepage

**Status:** built. Live at `/law-firm`. Built after the Lawsight one-page demo (demo.casethemes.net/lawsight/home-2-one-page), following its layout and devices and keeping only this template's palette and typefaces. The dated revision at the end of `DESIGN.md` lists which of that file's rules the rebuild overrides and why.

## Sections, in order

1. **Navigation** — wordmark, the two office numbers, the six one-page links with a brass underline under the section in view, and the booking pill. A full-height panel on phones.
2. **Hero** — the split: the standing portrait on its ochre ground beside a dark office photograph carrying the headline, the two-part brass rule, the lead and the gradient pill.
3. **Entry cards** — three cards overlapping the hero, the middle one oxblood.
4. **About us** — two-tone headline, two paragraphs, the arrow checklist, both numbers at display size, the partner's name, the film still and three counters.
5. **Our history** — four milestones along a brass rule.
6. **Our services** — the dark band: six bordered cards with brass icon tiles beside the tall stairwell photograph.
7. **Testimonials** — two placeholder client comments with the warning note.
8. **Our people** — the dark band: four portraits with ivory name cards overlapping their lower edge.
9. **Latest news** — three insight cards with dated meta and "View more" pills.
10. **Counters** — four stats with brass glyphs.
11. **Common questions** — six hairline FAQ rows.
12. **Consultations** — three options, the middle one the oxblood featured card.
13. **Contact** — the address, phone and email beside the form, the disclaimer, and the map.
14. **Footer** — the firm, Links, Support and the six-tile gallery, then the regulatory notice and the legal row.
15. **Call bar** — "Call the office" and the booking pill, below `lg` only.

## Placeholders to replace

Everything in [square brackets], plus:

- **Identity** — `brand.name` (`[Firm name]`) sets the wordmark, the footer and the page title in `src/app/law-firm/layout.tsx`.
- **Contact** — the address, the two numbers and the email appear in the contact strip, the phone menu, the about band, the contact band, the call bar and the footer. The `tel:` and `mailto:` links are built from those strings, so replace every one.
- **People** — the four attorney names, roles and admission years, the senior partner's name in the about band, and the insight authors.
- **Numbers** — the founding year, the solicitor count, the four timeline years, the three counters, and every consultation fee and duration. All of these render with `tnum`; keep them numerals so the columns stay aligned.
- **Fees and dates** — consultation fees are stored as plain numbers and formatted by `Intl.NumberFormat`; change `CURRENCY` and `LOCALE` at the top of `content.tsx` rather than editing each string. Insight dates are stored as ISO dates and formatted by `Intl.DateTimeFormat`. Check whether you are required to state that VAT or sales tax is included.
- **Photographs** — the files in `templates/law-firm/assets/` are AI-generated placeholders. Replace them at the same aspect ratios: `hero-portrait.jpg` 3:4, `hero-bg.jpg` 16:9, `video.jpg` 3:2, the four `attorney-*.jpg` 4:5, `practice.jpg` 3:4, the three `insight-*.jpg` 3:2, the two `avatar-*.jpg` 1:1, and the six `thumb-*.jpg` 1:1 for the footer gallery. **The hero portrait must be shot on a flat, even background**: the photograph itself is the hero's left panel, so a background with a horizon, a gradient or a shadow will show as a seam. The DESIGN.md asks for architecture and monochrome portraits and rules out gavels, scales and handshakes. Rewrite each `alt` in `content.tsx` to describe the real photograph.
- **The map** — the contact band embeds OpenStreetMap at a placeholder bounding box. Point it at the real office, or swap the provider. It loads a third-party frame lazily; if your privacy policy does not allow that, replace it with a static image and a link.
- **Links** — the legal links (`/privacy`, `/terms`, `/complaints`, `/accessibility`) have no pages behind them yet, and every practice-area and insight link currently points back at an anchor on this page.

## Legal copy you must have reviewed locally

This is the part of the template a firm cannot ship unchanged.

- **The footer notice** carries the entity type, registration number, regulator and jurisdiction, and says the site is general information rather than advice. Attorney-advertising rules differ by jurisdiction; replace this wording with what yours requires.
- **The contact disclaimer**, directly under the submit button, says that sending the form creates no solicitor–client relationship and that nothing in it is treated as confidential until engagement is confirmed. The consultation note says the same about booking. Keep both visible.
- **The legal aid FAQ answer** is written as an instruction to you, not as an answer. It must be made accurate before launch.
- **The testimonials are placeholders, deliberately.** Nothing on this page claims a result, an award, a ranking or a review. Some jurisdictions restrict or forbid client testimonials and comparative claims outright. Replace them only with real, attributable feedback you have written permission to publish, or delete the section.

## Notes

- The enquiry form validates in the browser and posts nowhere. When a handler is wired, disable the submit button and set `aria-busy` while the request is in flight.
- The FAQ uses native `<details>` rows that open independently, so two answers can be compared, and it works with JavaScript switched off.
- The film still opens a dialog holding a placeholder. Nothing on the page autoplays.
