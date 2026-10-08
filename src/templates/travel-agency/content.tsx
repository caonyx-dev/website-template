// Travel-agency homepage content in the composition of the Arolax reference (see the dated revision in
// templates/travel-agency/DESIGN.md): the floating header over a drawn sky, the poster hero with its inset
// photograph and flight path, the full-bleed world band, the reasons grid, the scrolling word, the destination
// carousel, the journal, the gallery, the quote, the counting figures and the closing invitation.
// The enquiry bar and the credential bar are this template's own, required by its DESIGN.md.
// [Square brackets] are placeholders. No price, credential or figure here is a claim.
import type { Img, LinkItem } from "@/lib/content";
import heroPill from "../../../templates/travel-agency/assets/hero-pill.jpg";
import world from "../../../templates/travel-agency/assets/world.jpg";
import destPeaks from "../../../templates/travel-agency/assets/dest-peaks.jpg";
import destCliffs from "../../../templates/travel-agency/assets/dest-cliffs.jpg";
import destDunes from "../../../templates/travel-agency/assets/dest-dunes.jpg";
import destDome from "../../../templates/travel-agency/assets/dest-dome.jpg";
import destAurora from "../../../templates/travel-agency/assets/dest-aurora.jpg";
import destPaddies from "../../../templates/travel-agency/assets/dest-paddies.jpg";
import galRidge from "../../../templates/travel-agency/assets/gal-ridge.jpg";
import galKayak from "../../../templates/travel-agency/assets/gal-kayak.jpg";
import galLake from "../../../templates/travel-agency/assets/gal-lake.jpg";
import galStreet from "../../../templates/travel-agency/assets/gal-street.jpg";
import galIsland from "../../../templates/travel-agency/assets/gal-island.jpg";
import journalPack from "../../../templates/travel-agency/assets/journal-pack.jpg";
import journalAirport from "../../../templates/travel-agency/assets/journal-airport.jpg";
import journalPool from "../../../templates/travel-agency/assets/journal-pool.jpg";
import quotePalm from "../../../templates/travel-agency/assets/quote-palm.jpg";
import ctaImg from "../../../templates/travel-agency/assets/cta.jpg";

/** One place to re-denominate every price on the page. */
export const LOCALE = "en-GB";
export const CURRENCY = "GBP";

export type ReasonIcon = "compass" | "shield" | "suitcase" | "map" | "island" | "headset";

export type TravelContent = {
  brand: string;
  nav: {
    links: LinkItem[];
    cta: LinkItem;
    menu: string;
    close: string;
    panel: { title: string; email: string; phone: string; address: string[]; note: string };
  };
  hero: {
    eyebrow: string[];
    lines: string[];
    lead: string;
    cta: LinkItem;
    image: Img;
    watch: { label: string; ring: string; dialogTitle: string; dialogText: string; close: string };
    scroll: string;
    socials: LinkItem[];
  };
  enquiry: {
    title: string;
    where: { label: string; placeholder: string; options: string[] };
    when: { label: string; placeholder: string; options: string[] };
    who: { label: string; adults: string; adultOne: string; children: string; childOne: string };
    submit: string;
    confirm: string;
    error: string;
    note: string;
  };
  trust: { title: string; note: string; items: { label: string; detail: string }[] };
  world: {
    title: string;
    lead: string;
    image: Img;
    links: LinkItem[];
  };
  reasons: { title: string; items: { icon: ReasonIcon; title: string; text: string }[] };
  band: { word: string; pause: string; play: string; label: string };
  destinations: {
    eyebrow: string;
    title: string;
    lead: string;
    cta: LinkItem;
    prev: string;
    next: string;
    footnote: string;
    items: { name: string; region: string; text: string; nights: string; from: number; image: Img; href: string }[];
  };
  journal: {
    title: string;
    lead: string;
    cta: LinkItem;
    items: { date: string; comments: string; title: string; image: Img; href: string }[];
  };
  gallery: { title: string; items: Img[] };
  quote: {
    label: string;
    image: Img;
    note: string;
    prev: string;
    next: string;
    items: { text: string; name: string; role: string }[];
  };
  stats: { title: string; note: string; items: { value: number; decimals?: number; suffix: string; label: string }[] };
  cta: { title: string; lead: string; action: LinkItem; image: Img };
  footer: { copyrightName: string; copyrightYear: number; socials: LinkItem[]; legal: LinkItem[]; top: string };
};

export const content: TravelContent = {
  brand: "[Agency name]",

  nav: {
    links: [
      { href: "#destinations", label: "Destinations" },
      { href: "#why", label: "Why us" },
      { href: "#journal", label: "Journal" },
      { href: "#enquiry", label: "Plan a trip" },
    ],
    cta: { href: "#cta", label: "Talk to us" },
    menu: "Open menu",
    close: "Close menu",
    panel: {
      title: "Get in touch",
      email: "[hello@agency.example]",
      phone: "[+44 20 7946 0000]",
      address: ["[Second floor, 12 Example Street]", "[Bristol BS1 4ST]"],
      note: "We answer enquiries within one working day. If you would rather talk it through, say so and we will call you.",
    },
  },

  hero: {
    eyebrow: ["Hello, we are", "[Agency name]"],
    lines: ["Your", "tailor-made", "trip planners"],
    lead: "A small agency planning trips one at a time. You get a named specialist who has been where you are going, a plan that fits how you actually travel, and a number that answers while you are away.",
    cta: { href: "#why", label: "How we work" },
    image: { src: heroPill, alt: "A turquoise tropical bay with two long-tail boats moored over white sand." },
    watch: {
      label: "Watch the film",
      ring: "Watch the film · Watch the film · ",
      dialogTitle: "Film placeholder",
      dialogText: "No film ships with this template. Put your own here — a short piece of your guides or your travellers, hosted wherever you host video — and nothing will autoplay.",
      close: "Close",
    },
    scroll: "Scroll to begin",
    socials: [
      { href: "https://www.instagram.com/", label: "Instagram" },
      { href: "https://www.facebook.com/", label: "Facebook" },
      { href: "https://www.youtube.com/", label: "YouTube" },
    ],
  },

  enquiry: {
    title: "Start with where and when",
    where: {
      label: "Where to",
      placeholder: "Choose a region",
      options: ["Anywhere — help me choose", "Europe", "Asia", "Africa", "The Americas", "Oceania", "Polar"],
    },
    when: {
      label: "When",
      placeholder: "Not fixed yet",
      options: ["Not fixed yet", "Within 3 months", "3–6 months", "6–12 months", "More than a year away"],
    },
    who: { label: "Travellers", adults: "Adults", adultOne: "adult", children: "Children", childOne: "child" },
    submit: "Start planning",
    confirm: "This is the outline that would be sent. Nothing has been submitted — this template has no enquiry inbox behind it yet.",
    error: "Choose where you would like to go, even if the answer is “help me choose”.",
    note: "No account, no deposit, no obligation — this is the start of a conversation, not a booking. The bar is not wired to an inbox in this template; connect it before launch.",
  },

  trust: {
    title: "How your money and your trip are protected",
    note: "Every item here is a credential slot, not a claim. Replace each with a licence or membership you actually hold and link it to the register entry, or delete the row. Nothing on this bar may ship unverified.",
    items: [
      { label: "[Bonding scheme]", detail: "[Licence number]" },
      { label: "[Trade association]", detail: "[Membership number]" },
      { label: "[Insurance]", detail: "[Policy reference]" },
      { label: "Established [year]", detail: "[Company number]" },
    ],
  },

  world: {
    title: "Go further than the photograph",
    lead: "We plan around how you actually travel — how early you want to be up, how far you will walk, how much of a day you want unplanned. The places are the easy part.",
    image: { src: world, alt: "Jungle-covered limestone cliffs rising out of a turquoise lagoon, seen from the air." },
    links: [
      { href: "#destinations", label: "Walking and trekking" },
      { href: "#destinations", label: "Island hopping" },
      { href: "#destinations", label: "Food and markets" },
      { href: "#destinations", label: "Wildlife" },
    ],
  },

  reasons: {
    title: "Why plan it with us",
    items: [
      { icon: "compass", title: "One specialist", text: "The person who plans your trip is the person you speak to all the way through, and the one who answers if something changes." },
      { icon: "map", title: "Been there", text: "We only sell places a member of the team has travelled themselves, which is why the list is short." },
      { icon: "suitcase", title: "Built around you", text: "Nothing off a shelf. We start from how you like to travel and work outwards to the route." },
      { icon: "shield", title: "Protected", text: "Your money sits under the arrangements set out on the bar above. Check them before you pay anything." },
      { icon: "island", title: "Local guides", text: "Guides who live where they guide, paid properly, chosen because travellers come back asking for them." },
      { icon: "headset", title: "A number that answers", text: "One number, staffed while you are away, in your time zone rather than ours." },
    ],
  },

  band: { word: "Travel", pause: "Pause the scrolling word", play: "Start the scrolling word", label: "Travel, repeated" },

  destinations: {
    eyebrow: "Where we go",
    title: "Places we know well",
    lead: "Six regions we have walked, eaten and got lost in. Every one of them is planned from scratch around you.",
    cta: { href: "#enquiry", label: "Explore more" },
    prev: "Previous destinations",
    next: "More destinations",
    footnote: "Every “from” price is a placeholder. Prices are per person based on two sharing, exclude international flights, and must be replaced with your own before launch.",
    items: [
      { name: "The high passes", region: "[Region]", text: "Seven days on foot between valley villages, with the gear carried for you.", nights: "7 nights", from: 1450, image: { src: destPeaks, alt: "Jagged grey mountain peaks rising above a sea of cloud at dawn." }, href: "#enquiry" },
      { name: "Wild coast", region: "[Region]", text: "Cliff paths, cold water and a different harbour town every night.", nights: "6 nights", from: 1180, image: { src: destCliffs, alt: "Green sea cliffs dropping into deep blue ocean with surf breaking on rocks." }, href: "#enquiry" },
      { name: "Desert nights", region: "[Region]", text: "Dunes at dawn, a camp under the stars, and nothing on the horizon.", nights: "5 nights", from: 1620, image: { src: destDunes, alt: "Orange sand dunes at sunset with a line of footprints climbing a ridge." }, href: "#enquiry" },
      { name: "Old cities", region: "[Region]", text: "Three cities by slow train, with the mornings yours and the evenings planned.", nights: "9 nights", from: 1990, image: { src: destDome, alt: "An ornate stone cathedral dome with a green roof against a pink sunset sky." }, href: "#enquiry" },
      { name: "Under the lights", region: "[Region]", text: "A week of long nights, hot springs and a good chance of the aurora.", nights: "7 nights", from: 2340, image: { src: destAurora, alt: "Green aurora rippling over a still dark fjord with snow-dusted peaks." }, href: "#enquiry" },
      { name: "Terraced valleys", region: "[Region]", text: "Rice terraces, village kitchens and a guide who grew up in them.", nights: "8 nights", from: 1760, image: { src: destPaddies, alt: "Terraced emerald rice paddies stepping down a misty hillside at dawn." }, href: "#enquiry" },
    ],
  },

  journal: {
    title: "Travel notes",
    lead: "What we have learned planning other people's trips, written down so you do not have to ask.",
    cta: { href: "#journal", label: "Browse all" },
    items: [
      { date: "2026-03-12", comments: "[4] comments", title: "When to book, and when to wait", image: { src: journalPack, alt: "An open suitcase on a wooden floor with a linen shirt, a straw hat and a camera." }, href: "#journal" },
      { date: "2026-02-24", comments: "[2] comments", title: "The case for the slower route", image: { src: journalAirport, alt: "A traveller seen from behind at a tall airport window at dawn." }, href: "#journal" },
      { date: "2026-02-05", comments: "[6] comments", title: "What travel insurance actually covers", image: { src: journalPool, alt: "A woman in a straw hat seen from behind at the edge of an infinity pool." }, href: "#journal" },
    ],
  },

  gallery: {
    title: "From recent trips",
    items: [
      { src: galRidge, alt: "A lone hiker on a rocky ridge looking out over layered blue mountain ranges." },
      { src: galIsland, alt: "An aerial view of a small tropical island with a thatched hut among palms." },
      { src: galKayak, alt: "Two kayakers in yellow boats paddling across a breaking turquoise wave." },
      { src: galLake, alt: "A still alpine lake mirroring snow-capped peaks at golden hour." },
      { src: galStreet, alt: "A narrow sunlit street of pastel old-town houses with flower boxes." },
    ],
  },

  quote: {
    label: "What travellers say",
    image: { src: quotePalm, alt: "A single palm tree leaning over a white sand beach against a clear blue sky." },
    note: "Both quotations are written placeholders, not real feedback. Replace them with comments you have written permission to publish and can attribute, or delete the section.",
    prev: "Previous comment",
    next: "Next comment",
    items: [
      { text: "[Replace this with a real traveller's comment. Name the person and, if they agree, the trip and the month they travelled — a specific sentence about one thing that went right is worth more than a paragraph of praise.]", name: "[Traveller name]", role: "[Trip, month and year]" },
      { text: "[Replace this with a real traveller's comment. Keep a copy of their written permission to publish it, and do not edit the wording to make it stronger than they meant it.]", name: "[Traveller name]", role: "[Trip, month and year]" },
    ],
  },

  stats: {
    title: "By the numbers",
    note: "All three figures are placeholders. Replace them with numbers you can evidence, or remove the row.",
    items: [
      { value: 2.3, decimals: 1, suffix: "k", label: "Trips planned" },
      { value: 15, suffix: "+", label: "Years planning them" },
      { value: 6, suffix: "", label: "Regions we know well" },
    ],
  },

  cta: {
    title: "Tell us where you want to wake up",
    lead: "One conversation, no obligation, and an outline within a working day.",
    action: { href: "#enquiry", label: "Start planning" },
    image: { src: ctaImg, alt: "Layered blue mountain ranges rising out of a low sea of cloud with a tiny hiker on a sunlit summit." },
  },

  footer: {
    copyrightName: "[Agency name] Ltd",
    copyrightYear: 2026,
    socials: [
      { href: "https://www.instagram.com/", label: "Instagram" },
      { href: "https://www.facebook.com/", label: "Facebook" },
      { href: "https://www.youtube.com/", label: "YouTube" },
    ],
    legal: [
      { href: "/booking-conditions", label: "Booking conditions" },
      { href: "/privacy", label: "Privacy" },
      { href: "/cancellation", label: "Cancellation policy" },
    ],
    top: "Back to top",
  },
};
