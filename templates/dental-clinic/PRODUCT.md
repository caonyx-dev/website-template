# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS (inferred template default; undecided - confirm per project)

## Users

(inferred) Patients, in three situations:

- **New patients researching a clinic** — often anxious, comparing two or three local practices. They want to see who the dentists are, what the clinic looks like, what a first visit involves, what it costs, and whether their insurance or plan is accepted. They decide on reassurance and clarity more than on features.
- **Existing patients booking or managing an appointment** — they want the booking route and the phone number without reading anything else.
- **People with a dental emergency** — in pain, on a phone, possibly out of hours. They need the emergency number and what to do, immediately.

Parents booking for children, older patients, and nervous patients are important sub-groups.

## Product Purpose

(inferred) The site exists to turn local interest into booked appointments, to make the first visit less frightening, and to answer routine questions (hours, prices, insurance, what to bring) so the front desk is not answering them by phone. Success looks like appointment bookings and booking requests, calls from the site, completed new-patient forms before the visit, and emergency callers reaching the right number fast.

## Positioning

Placeholder, to be written by the clinic: "[Clinic] is the [neighbourhood] practice where [the specific, true thing — e.g. a named clinician's specialism, a particular approach for nervous patients, same-day emergency slots, extended hours] — which a generic clinic site cannot truthfully copy." Keep it factual and verifiable.

## Operating Context

- **Arrival**: local search ("dentist near me", "emergency dentist [area]"), maps listings, insurer directories, referrals from friends and other clinicians, and appointment reminder messages linking back to the site.
- **Devices**: predominantly mobile, especially for emergencies and bookings; desktop for new-patient research and forms.
- **Moments**: urgent (pain, a broken tooth, a lost filling — usually mobile, sometimes at night) and researched (choosing a clinic, checking prices). Both paths must be obvious from the first screen.
- **Offline touchpoints**: phone (the main booking channel for many patients), the physical clinic (address, parking, access), paper or PDF new-patient forms, insurer paperwork. The site must support all of them.

## Capabilities and Constraints

- **Required pages/sections**: home, treatments (per treatment family), team (clinicians with credentials placeholders), book an appointment, new patients (what to expect, what to bring, downloadable forms), insurance and pricing, opening hours and location, emergency information, FAQ, privacy and legal.
- **Primary CTA**: "Book an appointment". **Secondary**: "Call the clinic". **Emergency**: "Dental emergency" — tap-to-call, visible on every page.
- **Forms/flows**: booking request (treatment, preferred clinician, preferred date/time, contact details) — integration with an online booking provider vs. a request form vs. link-out is undecided; new-patient registration form (may be a PDF download until a secure form exists); contact form.
- **Must-have information**: treatments offered with plain-language descriptions, clinician names and roles, opening hours including emergency hours, address, parking and step-free access, accepted insurers and plans, price guidance labelled "from", what happens at a first visit, what to do in an emergency, cancellation policy.
- **Integrations typically needed**: online booking system, practice management software, maps embed, form handling, review platform (display only, with permission). All undecided.
- **Legal/compliance**: health information must be accurate, general, and reviewed by a clinician; no diagnosis or treatment advice beyond general guidance; patient data captured by forms must be handled under applicable health-privacy rules (secure transport, minimal collection, clear notice); no fabricated before/after images, reviews, or outcomes; regulator and registration numbers shown as placeholders until supplied; accessibility statement.
- **Explicitly undecided**: clinic name, treatment list and prices, clinicians, insurers accepted, booking integration, emergency arrangements out of hours.

## Brand Commitments

Clinic name, logo, photography, and voice are placeholders to be supplied. Inferred voice for the industry: warm, calm, plain-spoken; second person ("you", "your child"); no jargon without a plain explanation; no fear-based copy; reassurance for nervous patients is explicit. Avoid superlatives ("best", "pain-free") that cannot be substantiated.

## Evidence on Hand

None. No real clinicians, credentials, registration numbers, reviews, testimonials, before/after images, photographs, treatment prices, insurer names, or outcome figures exist in this template, and none may be fabricated. The owner must supply: treatment list and "from" prices, clinician bios and credentials, clinic and team photography, accepted insurers and plans, opening and emergency hours, address and access details, forms, and any patient reviews with consent and platform attribution.

## Product Principles

1. **Reassure first.** Every page answers "what will happen to me and will it hurt?" before it sells anything.
2. **Two taps to help.** Book and call are always visible; the emergency number is never more than one tap away.
3. **Honest about cost and cover.** Prices are shown as guidance, labelled, and never hidden; insurance acceptance is explicit.
4. **Clinically accurate, plainly written.** Health content is reviewed by a clinician and written for a nervous reader.
5. **Nothing fabricated.** Reviews, images, credentials, and outcomes appear only when real and consented.

## Accessibility & Inclusion

- Target WCAG 2.2 AA. Mint teal is used only as a fill with dark text; links use the deeper teal to hold 4.5:1 on white.
- Older patients and low-vision users: body text at 16px minimum, generous line height, large tap targets (44–48px), high-contrast focus states.
- Nervous patients: calm language, no auto-playing media, no clinical close-up imagery.
- Emergency path works on a phone in one hand: tap-to-call, short strip, no modal.
- Forms with clear labels, error messages in plain language, and no time limits; PDF forms with accessible alternatives.
- Screen-reader friendly accordion, tabs, and tables; meaningful alt text for team portraits.
- Multilingual readiness for the local community (languages undecided); plain-language summaries of insurance terms.
- Respect `prefers-reduced-motion`; hero decoration is static when motion is reduced.
