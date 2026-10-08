# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16 App Router at the repo root, route `/architect` (content in `src/templates/architect/content.tsx`). Tailwind v4 with tokens from this DESIGN.md, Motion, GSAP + ScrollTrigger, Lenis, anime.js, React Three Fiber. Decided by the owner on 2026-10-07. The earlier static build has been removed.

## Users

(inferred)

- **Prospective clients** — homeowners planning a house or extension, and developers or institutions commissioning residential, commercial or public buildings. They are comparing a shortlist of studios, judging taste, scale of past work, and whether the studio has done "something like ours". They arrive researched, on desktop or tablet, and want to see the work before reading a word.
- **Press and editors** — looking for a specific project, high-resolution images, project facts and a press contact.
- **Job applicants** — architects, graduates and technicians checking the studio's work, culture, people and open roles.

## Product Purpose

(inferred) The site is the studio's portfolio and front door: it presents the built and in-progress work at gallery quality, explains who the studio is and how it works, and converts the right visitors into project enquiries. Success looks like qualified enquiries ("start a project" / "enquire") from clients whose brief and budget fit, press requests that can be answered from the project pages, and credible applications to open roles.

## Positioning

Placeholder, to be written by the studio: "[Studio name] is the [city]-based practice that [the claim a generic competitor could not truthfully make — e.g. a specific typology, climate, material, procurement route or working method]." This line must be supplied by the owner; the template ships with it marked as a placeholder.

## Operating Context

- Visitors arrive via referrals and word of mouth, search for "[typology] architect [city]", awards and publication links, social (image-led platforms), and directory listings.
- Desktop and tablet dominate for clients and press; mobile for applicants and casual browsing. Imagery must look right at 1440 px and still load fast on a phone.
- Use is researched, not urgent: visitors return several times before enquiring. The enquiry form, email and phone number all need to be present; most first contact is by email or form.
- Offline touchpoints the site must support: a phone call to the studio, an email to a named contact, a downloadable portfolio or capability PDF, and a visit to the studio address.

## Capabilities and Constraints

- **Required pages / sections**: home (statement + featured projects), project index (filterable by type), project detail pages (full-bleed images, narrative, facts column, drawings), studio (philosophy, people, awards placeholder), process (how a project runs from brief to handover), journal or news (optional), careers, contact (enquiry form + address + map).
- **Primary CTA**: "Start a project" / "Enquire" (form). **Secondary**: "View work", "Download portfolio", "Press enquiries", "Careers".
- **Enquiry form fields** (undecided, suggested): name, email, phone, project type, location, approximate budget band, timeline, message; consent checkbox.
- **Must-have information**: studio address, email, phone, professional registration / chartered status placeholders, social links, copyright and privacy policy.
- **Integrations typically needed**: form handling with spam protection, image CDN or responsive image pipeline, optional careers board, analytics with consent.
- **Legal / compliance**: professional registration statements per jurisdiction (placeholder), image credits for photographers, privacy policy and cookie consent, accessibility statement.
- **Explicitly undecided**: CMS vs. static, number of projects at launch, whether the journal exists, whether a press kit is gated.

## Brand Commitments

- Business name, wordmark, logo, photography and voice are placeholders to be supplied by the studio.
- Inferred voice for the industry: calm, precise, confident, unhurried; sentence-case; short statements; no superlatives; facts (location, area, status, year) presented plainly; photographer and collaborator credits always given.

## Evidence on Hand

No real projects, photographs, drawings, client names, testimonials, awards, press mentions, team members, registrations or metrics exist in this template, and none may be fabricated. The owner must supply: project images and credits, project facts, narrative texts, studio biography, team portraits and roles, awards and publications, registration details, address and contact details, and open roles.

## Product Principles

1. **The work leads.** Every page exists to present the buildings; chrome, copy and decoration defer to the imagery.
2. **Facts over adjectives.** Project pages state what was built, where, for whom (as a type), how big and when — and let the images do the persuading.
3. **One next step per page.** Each page routes to exactly one action: enquire, view work, or contact press.
4. **Credit everyone.** Photographers, engineers and collaborators are named; it is both ethical and a signal of professionalism.
5. **Quiet durability.** The site should look right in five years; avoid trends, animations and effects that date.

## Accessibility & Inclusion

- Target WCAG 2.2 AA. Body text and captions meet 4.5:1; the terracotta accent is used for small links only in its deep variant.
- Every project image carries meaningful alt text (what the building is, not "image 3"); drawings have text descriptions.
- Keyboard-navigable gallery and lightbox with visible focus; no hover-only reveals.
- Respect reduced-motion preferences; no autoplaying video.
- Readable at 200 % zoom; the facts column reflows beneath the narrative.
- Plain-language process page for first-time clients unfamiliar with architectural stages; consider a second language where the studio's region warrants it.
