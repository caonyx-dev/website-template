# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js App Router page inside this repo (`src/app/real-estate`), static export friendly; no backend.

## Users

(inferred)

- **Investors and funding partners** assessing whether the group can originate and deliver. They want evidence of completed schemes, the shape of the team, and who carries the risk. Desktop, deliberate, often arriving from a referral or a pitch document.
- **Landowners and vendors** deciding who to take a site to. They are comparing two or three developers and want a quick read on competence, speed and whether the group actually builds or just packages. Often older, often phone-first.
- **Councils, planners and community groups** checking track record before or during a planning process. They look for completed work, the stated approach to the existing neighbourhood, and named accountable people.
- **Secondary**: main-contractor and subcontractor tenders, prospective employees, and buyers or tenants of a specific completed scheme looking for a contact.

## Product Purpose

The site is the group's credibility document and its front door for sites. It exists to show that development, construction and management sit under one roof, to make completed work judgeable from photographs and plain facts, and to convert one specific action: putting a site, a scheme or a tender in front of a named person. Success is qualified enquiries from landowners and investors, not traffic.

## Positioning

Placeholder, to be written by the group's owner: "[Group] is the only developer in [region] that [specific, verifiable claim: e.g., self-performs its own groundworks / holds and manages every scheme it builds / publishes its incident figures quarterly]." A generic competitor must not be able to copy the claim truthfully. Do not publish the placeholder.

## Operating Context

- **Arrival**: referrals and introductions, planning-process research, search for "[region] property developer", LinkedIn, and links shared inside pitch documents. A meaningful share of visitors arrive already knowing the name and looking for proof.
- **Devices**: desktop-heavy for investors and planners; phone for landowners and site visits. The enquiry form must work one-handed.
- **Moments of use**: considered and repeated. A landowner may visit three times across months before calling.
- **Offline touchpoints the site must support**: phone calls to named directors, site visits, meetings at the office, tender document exchange.
- **Content cadence**: projects change a few times a year; insights monthly; team rarely. Nothing on this site is a live feed.

## Capabilities and Constraints

- **Required sections (homepage)**: hero statement; who we are with vision and mission; impact figures; services; selected projects; what makes us different; testimonial; partners; leadership; enquiry; insights; closing call to action; footer.
- **Primary call to action**: "Get in touch" / "Get a call back" — one enquiry route, reachable from the nav, the enquiry section and the closing band.
- **Secondary calls to action**: view all projects, view all services, call the office directly.
- **Forms and flows**: one enquiry form — name, email, phone, and a subject select (a site, a scheme in planning, a construction tender, leasing or managing space, something else). Needs inline validation, a visible success state, and a plain note about what happens next. It posts nowhere until a handler is wired.
- **Must-have information**: office address and phone; named directors with roles; the regions served; the services actually self-performed versus subcontracted; company registration.
- **Integrations typically needed (undecided)**: form delivery to email or CRM; analytics. No listing feed, no map provider, no portal syndication — this is not a listings site.
- **Legal and compliance**: company registration and registered office; health-and-safety and incident reporting claims must be evidenced or removed; planning and marketing claims about consented schemes must be accurate; privacy and cookie notices for form data; image credits for all open-licence photography.
- **Explicit constraints**: no fabricated projects, clients, partners, testimonials or people. Figures shown in the template are illustrative placeholders and are marked as such in the content module.

## Brand Commitments

The group's name, logo, wordmark and voice are placeholders to be supplied by the owner. Inferred voice guidance: plain and concrete rather than visionary; specific about what the group does itself versus what it buys in; willing to name a number and stand behind it; respectful of the neighbourhoods it builds in, because planning outcomes depend on that being genuine. Avoid superlatives — the reference site's "largest privately held … in the world" is exactly the kind of claim a real client cannot ship unedited.

## Evidence on Hand

No real projects, figures, partners, testimonials, licences, people or photographs of the group's own work exist in this template, and none may be fabricated. The owner must supply: completed scheme photographs and names; delivery figures they can evidence; the fee and procurement model; incident and safety data if that claim is kept; director names, roles, photographs and contacts; partner and client permissions; company registration; office details and hours.

Photography currently in `templates/real-estate/assets/` is open-licence stock standing in for the group's own work; see `CREDITS.json` in that folder for source and licence per file. It must be replaced before launch — a developer's own schemes are the whole point of the projects section.

## Product Principles

1. **The work is the argument.** Photographs of completed schemes and plain facts about them do more than any claim about quality.
2. **One throat to choke.** The single thing that distinguishes this group is that development, construction and management are not three companies. Every section should make that concrete rather than assert it.
3. **No unevidenced numbers.** A figure on this site is either something the group can prove or it is not on the site. Placeholders stay visibly placeholders.
4. **A named person at the end of every path.** Enquiries convert offline; the site's job is to get a visitor to a specific director.
5. **Build for the planning reader.** Assume a planner or a neighbour will read it. Nothing should embarrass the group in a committee meeting.

## Accessibility & Inclusion

- Target WCAG 2.2 AA. The lime accent (#E4ED64) is a surface colour only and always carries black text (~15.6:1); it must never be used as text on white (~1.3:1).
- The mute grey (#8A8A8A, ~3.5:1 on white) is restricted to non-essential supporting text at 15px and above.
- Focus rings are black, not lime, so they remain visible against every band.
- Touch targets 44px minimum; the round arrow buttons stay 56px at all sizes.
- The pinned projects band must degrade to a plain stacked list below 1024px and under `prefers-reduced-motion: reduce`, and must never trap scroll.
- Counting statistics render their final value on the server and with JavaScript off.
- The enquiry form needs visible labels (not placeholder-only), errors tied to fields, and no time limit.
- Team and commitment photography should represent people inclusively; the group's own imagery must do the same when it replaces the stock.
