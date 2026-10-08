// Small-business homepage content in the composition of the cleaning-service reference (see the dated revision
// in templates/small-business/DESIGN.md): the photographic hero with its booking card, the four-service row,
// the achievements split, the photo band with its credentials card, the figures, the three steps, the mint
// why-us panel, the review placeholders, the FAQ, the news row, the orange offer bar and the dark footer.
// The hours card, the booking band and the sticky call bar are this template's own, required by its DESIGN.md.
// [Square brackets] are placeholders. No price, figure, review or credential here is a claim.
import type { Img, LinkItem } from "@/lib/content";
import hero from "../../../templates/small-business/assets/hero.jpg";
import band from "../../../templates/small-business/assets/band.jpg";
import whyus from "../../../templates/small-business/assets/whyus.jpg";
import news1 from "../../../templates/small-business/assets/news-1.jpg";
import news2 from "../../../templates/small-business/assets/news-2.jpg";
import news3 from "../../../templates/small-business/assets/news-3.jpg";

/** One place to re-denominate every "from" price on the page. */
export const LOCALE = "en-GB";
export const CURRENCY = "GBP";

/** Lives here rather than in the primitives, which are a client module a server section cannot call into. */
export const money = (n: number, locale: string, currency: string) =>
  new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 0 }).format(n);

export type ServiceIcon = "sparkle" | "house" | "building" | "broom";
export type StepIcon = "calendar" | "spray" | "smile";

export type SmallBusinessContent = {
  brand: string;
  nav: {
    links: LinkItem[];
    phone: string;
    phoneLabel: string;
    cta: LinkItem;
    status: { open: string; closed: string; note: string };
    menu: string;
    close: string;
  };
  hero: {
    titleLines: string[];
    lead: string;
    ctas: { explore: LinkItem; call: string };
    trust: string[];
    image: Img;
    form: {
      title: string;
      lead: string;
      name: string;
      optional: string;
      namePlaceholder: string;
      contact: string;
      contactPlaceholder: string;
      service: string;
      servicePlaceholder: string;
      services: string[];
      area: string;
      areaOver: string;
      areaUnit: string;
      submit: string;
      confirm: string;
      error: string;
      note: string;
    };
  };
  services: {
    title: string;
    lead: string;
    cta: LinkItem;
    detailsLabel: string;
    fromLabel: string;
    priceNote: string;
    items: { icon: ServiceIcon; title: string; text: string; from: number; href: string }[];
  };
  about: { title: string; paras: string[]; cta: LinkItem };
  bandBlock: {
    image: Img;
    card: { title: string; note: string; items: string[] };
  };
  stats: { note: string; items: { value: number; suffix: string; label: string }[] };
  steps: { title: string; lead: string; items: { icon: StepIcon; step: string; title: string; text: string }[] };
  why: { title: string; lead: string; checks: string[]; cta: LinkItem; image: Img };
  reviews: {
    title: string;
    lead: string;
    note: string;
    items: { text: string; name: string; role: string; tone: "mint" | "peach" }[];
  };
  faq: { title: string; lead: string; items: { q: string; a: string }[] };
  hours: {
    title: string;
    note: string;
    /** IANA zone the opening hours are stated in. The chip is computed in this zone, not the reader's. */
    timeZone: string;
    rows: { day: string; hours: string }[];
    phone: string;
    email: string;
    area: { title: string; towns: string[]; note: string };
  };
  booking: { title: string; lead: string; phone: string; cta: LinkItem };
  news: { title: string; lead: string; cta: LinkItem; items: { date: string; title: string; image: Img; href: string }[] };
  offer: { text: string; phone: string; pause: string; play: string; label: string; note: string };
  footer: {
    blurb: string;
    columns: { title: string; links: LinkItem[] }[];
    contact: { title: string; address: string[]; phone: string; email: string };
    legal: LinkItem[];
    registration: string;
    copyrightName: string;
    copyrightYear: number;
    socials: LinkItem[];
  };
  sticky: { call: string; book: string };
};

export const content: SmallBusinessContent = {
  brand: "[Business name]",

  nav: {
    links: [
      { href: "#services", label: "Services" },
      { href: "#why", label: "Why us" },
      { href: "#reviews", label: "Reviews" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
    phone: "[01234 567 890]",
    phoneLabel: "Call",
    cta: { href: "#book", label: "Book now" },
    status: {
      open: "Open now",
      closed: "Closed",
      note: "The status chip is worked out from the opening hours below. Set those to match your Google Business Profile exactly, or the chip will be wrong.",
    },
    menu: "Open menu",
    close: "Close menu",
  },

  hero: {
    titleLines: ["We keep your home", "spotless and calm"],
    lead: "A small, family-run cleaning team covering [Town] and the surrounding villages. Same cleaners each visit, your own key safe, and a price agreed before we start.",
    ctas: { explore: { href: "#services", label: "See our services" }, call: "Call [01234 567 890]" },
    trust: ["[Fully insured — insurer and policy no.]", "Family run since [year]", "[Town] & surrounding villages"],
    image: { src: hero, alt: "A cleaner in a denim shirt and yellow gloves vacuuming a grey sofa in a bright living room." },
    form: {
      title: "Get a price in a minute",
      lead: "Tell us roughly what you need and we will come back with a fixed quote.",
      name: "Your name",
      optional: "optional",
      namePlaceholder: "First and last name…",
      contact: "Phone or email",
      contactPlaceholder: "07700 900123 or you@example.com",
      service: "What do you need?",
      servicePlaceholder: "Choose a service",
      services: ["Regular home clean", "One-off deep clean", "End of tenancy", "Office or small premises", "Something else"],
      area: "Roughly how big is the space?",
      areaOver: "400 m² or more — tell us in the message",
      areaUnit: "m²",
      submit: "Get my quote",
      confirm: "That is what we would send. Nothing has been submitted — this template has no inbox behind it yet.",
      error: "Add a phone number or email so we can send the quote back.",
      note: "No deposit and no obligation, and we confirm the price before anyone turns up. This form is not connected to an inbox in this template — wire it up before launch.",
    },
  },

  services: {
    title: "What we clean",
    lead: "Four things, done properly. If what you need is not here, ask — it usually is.",
    cta: { href: "#book", label: "See all services" },
    detailsLabel: "View details",
    fromLabel: "From",
    priceNote: "Every “from” price is a placeholder. Replace them with your own rates and say clearly what the price includes, or remove the price line entirely.",
    items: [
      { icon: "sparkle", title: "Deep cleans", text: "Top to bottom, inside the oven and behind the appliances. Usually a one-off.", from: 180, href: "#book" },
      { icon: "house", title: "Home cleans", text: "Weekly or fortnightly, same team each time, your own checklist.", from: 45, href: "#book" },
      { icon: "building", title: "Office cleans", text: "Early mornings or after hours for small premises and shops.", from: 60, href: "#book" },
      { icon: "broom", title: "End of tenancy", text: "To the standard letting agents actually sign off, with a written list.", from: 240, href: "#book" },
    ],
  },

  about: {
    title: "Twenty-odd years of other people's kitchens",
    paras: [
      "We started with one van and a dozen regulars in [Town]. We are still small on purpose — it is the only way to send you the same two people every visit, and the only way we can promise you will recognise who is at the door.",
      "[Everyone on the team is employed rather than subcontracted, paid above the living wage, insured and reference-checked.] That costs more than the cheapest quote you will get. It is the difference you are paying for. Only keep the parts of this that are true of your business.",
    ],
    cta: { href: "#why", label: "More about us" },
  },

  bandBlock: {
    image: { src: band, alt: "A cleaner mopping a polished wooden floor in a bright kitchen-diner." },
    card: {
      title: "Checked and covered",
      note: "Every line here is a placeholder. Replace each with a policy or check you actually hold and keep the reference number to hand, or delete the card.",
      items: ["Public liability — [insurer, policy no.]", "Employer's liability — [insurer, policy no.]", "DBS checked — [year last renewed]", "Registered — [company number]"],
    },
  },

  stats: {
    note: "All four figures are placeholders. Replace them with numbers you can evidence, or remove the row.",
    items: [
      { value: 23, suffix: "+", label: "Years cleaning in [Town]" },
      { value: 400, suffix: "+", label: "Homes on the books" },
      { value: 12, suffix: "", label: "People on the team" },
      { value: 98, suffix: "%", label: "Customers who stay past a year" },
    ],
  },

  steps: {
    title: "Three steps, then we are out of your way",
    lead: "No sales visit, no contract to sign, no notice period.",
    items: [
      { icon: "calendar", step: "Step 01", title: "You tell us", text: "Fill in the form or call. We will ask a few questions about the space and when suits you." },
      { icon: "spray", step: "Step 02", title: "We clean", text: "The same two people each visit, with our own kit and products. You do not need to be in." },
      { icon: "smile", step: "Step 03", title: "You check", text: "Not right? Tell us within [24 hours] and we come back and put it right [at no charge] — confirm this is a promise you can keep before you ship it." },
    ],
  },

  why: {
    title: "Why people stay with us",
    lead: "Most of our work comes from people who moved house and took us with them. These are the reasons they give.",
    checks: [
      "The same two cleaners every visit",
      "A fixed price agreed before we start",
      "Products that are safe around pets and children",
      "No contract and no notice period",
      "Someone answers the phone between [8am and 6pm]",
    ],
    cta: { href: "#book", label: "Book a first clean" },
    image: { src: whyus, alt: "A housekeeper folding a crisp white towel onto a made bed in a calm bedroom." },
  },

  reviews: {
    title: "What customers say",
    lead: "Three slots, waiting for real reviews.",
    note: "These are labelled placeholders, not real reviews, and nothing on this page claims a star rating. Replace them with reviews you have permission to quote — or better, connect your Google or Checkatrade feed and let it fill this row — then delete this note. An aggregate score may only appear once a real feed is connected.",
    items: [
      { text: "[Review placeholder — replace with a real review, or connect a review feed. Quote the customer's own words, give their first name and the month, and keep a record of their permission.]", name: "[First name]", role: "[Area, month and year]", tone: "mint" },
      { text: "[Review placeholder — replace with a real review, or connect a review feed. A short, specific sentence about one visit is worth more than a paragraph of praise.]", name: "[First name]", role: "[Area, month and year]", tone: "peach" },
      { text: "[Review placeholder — replace with a real review, or connect a review feed. Do not edit a customer's wording to make it stronger than they meant it.]", name: "[First name]", role: "[Area, month and year]", tone: "mint" },
    ],
  },

  faq: {
    title: "Questions we get asked",
    lead: "If yours is not here, call and ask — we would rather answer it before you book.",
    items: [
      { q: "How much does a clean cost?", a: "It depends on the size of the place and how often we come. Fill in the form with rough measurements and we will send a fixed price — we will not start work on an estimate. [Replace this with your own pricing basis before launch.]" },
      { q: "Do I need to be home?", a: "No. Most of our regulars give us a key or a key-safe code, which we hold under [your key-handling policy — describe it here]. If you would rather be in, that is fine too." },
      { q: "What products do you use?", a: "[List the products or standards you actually use.] If anyone in the house has an allergy or you would rather we used your own products, tell us and we will." },
      { q: "Are you insured?", a: "[State your public and employer's liability cover and the insurer here, and keep the policy numbers to hand.] Do not publish this answer until it is accurate — it is the one a customer is most likely to rely on." },
      { q: "What if I am not happy?", a: "Tell us within 24 hours and we will come back and redo it at no charge. [Confirm this is a promise you can actually keep before you ship it.]" },
      { q: "How do I cancel or reschedule?", a: "Call or message by [your notice period] and there is no charge. [Set out your own cancellation terms here.]" },
    ],
  },

  hours: {
    title: "Opening hours",
    timeZone: "Europe/London",
    note: "These must match your Google Business Profile exactly — a customer who drives over on a wrong time will not call back.",
    rows: [
      { day: "Monday", hours: "[08:00 – 18:00]" },
      { day: "Tuesday", hours: "[08:00 – 18:00]" },
      { day: "Wednesday", hours: "[08:00 – 18:00]" },
      { day: "Thursday", hours: "[08:00 – 18:00]" },
      { day: "Friday", hours: "[08:00 – 17:00]" },
      { day: "Saturday", hours: "[09:00 – 13:00]" },
      { day: "Sunday", hours: "Closed" },
    ],
    phone: "[01234 567 890]",
    email: "[hello@business.example]",
    area: {
      title: "Where we cover",
      towns: ["[Town]", "[Village one]", "[Village two]", "[Village three]", "[Village four]", "[Village five]"],
      note: "A little further out? Call and ask — we can usually fit it around an existing round.",
    },
  },

  booking: {
    title: "Ready when you are",
    lead: "Book online in a minute, or call and talk it through with whoever picks up.",
    phone: "[01234 567 890]",
    cta: { href: "#book", label: "Book a clean" },
  },

  news: {
    title: "From the van",
    lead: "Short, useful things we have learned cleaning other people's houses.",
    cta: { href: "#news", label: "Read more" },
    items: [
      { date: "2026-03-09", title: "The five minutes that keep a kitchen clean all week", image: { src: news1, alt: "Hands in blue gloves wiping a kitchen worktop with a yellow cloth." }, href: "#news" },
      { date: "2026-02-20", title: "What “eco-friendly” on a bottle actually means", image: { src: news2, alt: "A shelf of cleaning supplies in plain amber glass bottles beside folded cloths." }, href: "#news" },
      { date: "2026-02-03", title: "Why we clean windows on a cloudy day", image: { src: news3, alt: "A person cleaning a large window from inside with a squeegee." }, href: "#news" },
    ],
  },

  offer: {
    text: "[Your offer here — say exactly what it is, who it applies to and when it ends]",
    phone: "[01234 567 890]",
    pause: "Pause the offer banner",
    play: "Start the offer banner",
    label: "Current offer",
    note: "The offer line is a placeholder and carries no terms. Replace it with an offer you are actually running, state who it applies to and when it ends, or delete the bar.",
  },

  footer: {
    blurb: "A small, family-run cleaning team covering [Town] and the surrounding villages. Employed staff, fixed prices, and the same faces every visit.",
    columns: [
      {
        title: "Services",
        links: [
          { href: "#services", label: "Deep cleans" },
          { href: "#services", label: "Home cleans" },
          { href: "#services", label: "Office cleans" },
          { href: "#services", label: "End of tenancy" },
        ],
      },
      {
        title: "About",
        links: [
          { href: "#why", label: "Why us" },
          { href: "#reviews", label: "Reviews" },
          { href: "#faq", label: "Questions" },
          { href: "#news", label: "From the van" },
        ],
      },
    ],
    contact: {
      title: "Find us",
      address: ["[Unit 3, Example Yard]", "[Example Road]", "[Town, AB1 2CD]"],
      phone: "[01234 567 890]",
      email: "[hello@business.example]",
    },
    legal: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/cancellation", label: "Cancellation" },
    ],
    registration: "[Business name] Ltd is registered in [England and Wales], company number [00000000]. Registered office: [address].",
    copyrightName: "[Business name] Ltd",
    copyrightYear: 2026,
    socials: [
      { href: "https://www.facebook.com/", label: "Facebook" },
      { href: "https://www.instagram.com/", label: "Instagram" },
    ],
  },

  sticky: { call: "Call", book: "Book" },
};
