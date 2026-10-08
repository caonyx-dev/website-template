// Marketing-agency homepage content in the composition of the Nimo "home 04 one page" reference (see the dated
// revision in templates/marketing-agency/DESIGN.md): the floating nav pill over a full-bleed hero, the poster
// headline anchored to the foot of the photograph, the about band with its running tile and years counter, the
// partner strip, the dark numbered service band, the pricing toggle, the staggered work grid, the awards table,
// the dark team band, the bento stats, the ghost testimonial word, the journal, the newsletter split and the
// wordmark footer. [Square brackets] are placeholders. No result, client or testimonial here is a claim.
import type { Img, LinkItem } from "@/lib/content";
import hero from "../../../templates/marketing-agency/assets/hero.jpg";
import about from "../../../templates/marketing-agency/assets/about.jpg";
import svcBrand from "../../../templates/marketing-agency/assets/svc-brand.jpg";
import svcWeb from "../../../templates/marketing-agency/assets/svc-web.jpg";
import svcGrowth from "../../../templates/marketing-agency/assets/svc-growth.jpg";
import workSphere from "../../../templates/marketing-agency/assets/work-sphere.jpg";
import workSpeaker from "../../../templates/marketing-agency/assets/work-speaker.jpg";
import bentoPortrait from "../../../templates/marketing-agency/assets/bento-portrait.jpg";
import crew1 from "../../../templates/marketing-agency/assets/crew-1.jpg";
import crew2 from "../../../templates/marketing-agency/assets/crew-2.jpg";
import crew3 from "../../../templates/marketing-agency/assets/crew-3.jpg";
import awardsPhoto from "../../../templates/marketing-agency/assets/awards.jpg";
import blog1 from "../../../templates/marketing-agency/assets/blog-1.jpg";
import blog2 from "../../../templates/marketing-agency/assets/blog-2.jpg";
import blog3 from "../../../templates/marketing-agency/assets/blog-3.jpg";
import ctaImg from "../../../templates/marketing-agency/assets/cta.jpg";

/** Prices are formatted rather than written out, so one change here re-denominates the whole table. */
export const CURRENCY = "GBP";
export const LOCALE = "en-GB";

export type MarketingContent = {
  brand: string;
  nav: { links: LinkItem[]; cta: LinkItem };
  hero: {
    lead: string;
    cta: LinkItem;
    image: Img;
    kicker: string;
    lineOne: string;
    lineTwo: string;
    lineTwoItalic: string;
    lineThree: string;
    scroll: string;
  };
  about: {
    eyebrow: string;
    title: string;
    mark: string;
    titleTail: string;
    lead: string;
    pillars: { n: string; title: string; text: string }[];
    years: { value: number; suffix: string; label: string };
    marquee: string[];
    marqueeLabel: string;
    image: Img;
    cta: LinkItem;
  };
  partners: { title: string; note: string; items: string[] };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    cta: LinkItem;
    items: { n: string; title: string; text: string; points: string[]; image: Img; href: string }[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    periods: { monthly: string; yearly: string };
    toggleLabel: string;
    yearlyNote: string;
    disclaimer: string;
    plans: { name: string; blurb: string; monthly: number; yearly: number; unit: string; features: string[]; cta: LinkItem; featured?: boolean }[];
  };
  work: {
    eyebrow: string;
    title: string;
    cta: LinkItem;
    items: { tag: string; title: string; text: string; result: string; image: Img; href: string }[];
    panel: { title: string; text: string; cta: LinkItem };
  };
  awards: {
    eyebrow: string;
    title: string;
    image: Img;
    note: string;
    rows: { year: string; title: string; org: string; place: string }[];
  };
  team: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { name: string; role: string; image: Img; links: LinkItem[] }[];
  };
  bento: {
    eyebrow: string;
    title: string;
    note: string;
    stats: { value: number; suffix: string; label: string }[];
    bars: { label: string; pct: number }[];
    barsTitle: string;
    image: Img;
    card: { title: string; text: string; cta: LinkItem };
  };
  testimonial: {
    ghost: string;
    eyebrow: string;
    note: string;
    items: { quote: string; name: string; role: string }[];
  };
  journal: {
    eyebrow: string;
    title: string;
    cta: LinkItem;
    items: { date: string; category: string; title: string; excerpt: string; image: Img; href: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    image: Img;
    email: string;
    phone: string;
    form: { label: string; placeholder: string; submit: string; confirm: string; error: string; note: string };
  };
  footer: {
    blurb: string;
    email: string;
    phone: string;
    address: string[];
    columns: { title: string; links: LinkItem[] }[];
    socials: LinkItem[];
    legal: LinkItem[];
    wordmark: string;
    copyrightName: string;
    copyrightYear: number;
  };
};

export const content: MarketingContent = {
  brand: "[Agency]",

  nav: {
    links: [
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#pricing", label: "Pricing" },
      { href: "#work", label: "Work" },
      { href: "#team", label: "Team" },
      { href: "#journal", label: "Journal" },
    ],
    cta: { href: "#contact", label: "Let’s talk" },
  },

  hero: {
    kicker: "Strategy · Brand · Performance",
    lineOne: "Agency",
    lineTwo: "Digital",
    lineTwoItalic: "That",
    lineThree: "Inspires",
    lead: "We are a small strategy and performance studio. We build the brand, the site and the campaigns, then we show you what each one actually moved.",
    cta: { href: "#services", label: "Discover now" },
    image: { src: hero, alt: "[Placeholder] A portrait in a mirrored visor and headphones, lit in teal and magenta." },
    scroll: "Scroll to read",
  },

  about: {
    eyebrow: "About the studio",
    title: "Work that earns its ",
    mark: "budget",
    titleTail: ", not just its applause.",
    lead: "Six people, one room, no account layer. You talk to the people doing the work, every week, and you see the same dashboard we do.",
    pillars: [
      { n: "Mission", title: "Make the number move", text: "Every engagement opens with the one metric the quarter is judged on, written down and agreed before anything is designed." },
      { n: "Vision", title: "Marketing worth reading", text: "Advertising people would choose to look at. If the work only performs because it was bought enough times, it is not our work." },
      { n: "Goal", title: "Leave you self-sufficient", text: "We hand back the system, the templates and the playbook. A good engagement ends with you needing us less." },
    ],
    years: { value: 2, suffix: "+", label: "Years running as an independent studio" },
    marquee: ["Brand systems", "Campaign strategy", "Web design", "Paid social", "Content", "Lifecycle", "Analytics"],
    marqueeLabel: "What we work on",
    image: { src: about, alt: "[Placeholder] Three colleagues around a tablet and laptop in a bright open-plan studio." },
    cta: { href: "#work", label: "See the work" },
  },

  partners: {
    title: "Teams we have worked alongside",
    note: "Every name above is a placeholder. Replace them only with clients who have agreed in writing to be named, or delete the strip.",
    items: ["[Client one]", "[Client two]", "[Client three]", "[Client four]", "[Client five]", "[Client six]"],
  },

  services: {
    eyebrow: "What we do",
    title: "Three things, done properly",
    lead: "We would rather be the best studio you have worked with at three things than a passable one at nine.",
    cta: { href: "#contact", label: "Start a project" },
    items: [
      {
        n: "01",
        title: "Brand & identity",
        text: "The name, the voice and the system that holds them together — built as files your team can actually use.",
        points: ["Positioning and messaging", "Identity and art direction", "Design system and templates", "Tone-of-voice guide"],
        image: { src: svcBrand, alt: "[Placeholder] A rendered handheld device in white and orange on a pale grey ground." },
        href: "#contact",
      },
      {
        n: "02",
        title: "Web & product site",
        text: "A site that loads fast, reads well and tells you which page is doing the selling.",
        points: ["Information architecture", "Design and build", "CMS and handover", "Analytics and events"],
        image: { src: svcWeb, alt: "[Placeholder] A rendered laptop showing a ringed planet on a pale blue ground." },
        href: "#contact",
      },
      {
        n: "03",
        title: "Growth & campaigns",
        text: "Paid, organic and lifecycle run as one plan, with a weekly read on what to keep and what to stop.",
        points: ["Channel strategy", "Creative production", "Testing and measurement", "Monthly reporting"],
        image: { src: svcGrowth, alt: "[Placeholder] Two blank stand-up pouches photographed on a warm sand ground." },
        href: "#contact",
      },
    ],
  },

  pricing: {
    eyebrow: "How we charge",
    title: "Retainers, priced in the open",
    periods: { monthly: "Monthly", yearly: "Yearly" },
    toggleLabel: "Billing period",
    yearlyNote: "Two months free",
    disclaimer: "Every figure in this table is a placeholder for the template. Replace every one with your real rate, and state whether VAT or sales tax is included, before this page goes anywhere near a client.",
    plans: [
      {
        name: "Sprint",
        blurb: "One problem, one month, a fixed scope.",
        monthly: 2400,
        yearly: 24000,
        unit: "per month",
        features: ["One workstream at a time", "Weekly working session", "Shared board and files", "Two rounds of revision"],
        cta: { href: "#contact", label: "Book a call" },
      },
      {
        name: "Studio",
        blurb: "A standing team for brand, web and campaigns.",
        monthly: 6800,
        yearly: 68000,
        unit: "per month",
        features: ["Everything in Sprint", "Named strategist and designer", "Campaign production included", "Monthly performance read", "Priority turnaround"],
        cta: { href: "#contact", label: "Book a call" },
        featured: true,
      },
      {
        name: "Partner",
        blurb: "Embedded with your team, quarter by quarter.",
        monthly: 12500,
        yearly: 125000,
        unit: "per month",
        features: ["Everything in Studio", "Quarterly planning offsite", "Your channels, run in-house with us", "Training and handover built in"],
        cta: { href: "#contact", label: "Book a call" },
      },
    ],
  },

  work: {
    eyebrow: "Selected work",
    title: "A few things we are proud of",
    cta: { href: "#contact", label: "All case studies" },
    items: [
      {
        tag: "Brand · B2B",
        title: "[Project name]",
        text: "A full identity and site rebuild for a company whose product had outgrown its first logo.",
        result: "[00%] — replace with the real, client-approved result",
        image: { src: workSphere, alt: "[Placeholder] A matte red sphere casting a long shadow against a concrete wall." },
        href: "#contact",
      },
      {
        tag: "Campaign · DTC",
        title: "[Project name]",
        text: "A launch campaign built around one claim we could actually stand behind, run across paid and owned.",
        result: "[00%] — replace with the real, client-approved result",
        image: { src: workSpeaker, alt: "[Placeholder] Two portable speakers, one orange and one charcoal, on a pale ground." },
        href: "#contact",
      },
    ],
    panel: {
      title: "Your project could sit here",
      text: "We take on four engagements at a time so each one gets the room it needs.",
      cta: { href: "#contact", label: "Tell us about it" },
    },
  },

  awards: {
    eyebrow: "Recognition",
    title: "Shortlists, wins and the odd near miss",
    image: { src: bentoPortrait, alt: "[Placeholder] A black-and-white editorial portrait of a person in a cloth blindfold, one hand raised." },
    note: "Every row is a placeholder. List only awards you can evidence, with the year and the awarding body named.",
    rows: [
      { year: "[2025]", title: "[Award name]", org: "[Awarding body]", place: "Winner" },
      { year: "[2025]", title: "[Award name]", org: "[Awarding body]", place: "Shortlist" },
      { year: "[2024]", title: "[Award name]", org: "[Awarding body]", place: "Winner" },
      { year: "[2024]", title: "[Award name]", org: "[Awarding body]", place: "Finalist" },
    ],
  },

  team: {
    eyebrow: "The people",
    title: "Meet our team",
    lead: "The same three names are on your kickoff call and on your last invoice.",
    items: [
      { name: "[Name]", role: "Strategy", image: { src: crew1, alt: "[Placeholder] Black-and-white portrait of a bearded man seated against a plain wall." }, links: [{ href: "https://www.linkedin.com/", label: "LinkedIn" }] },
      { name: "[Name]", role: "Design", image: { src: crew2, alt: "[Placeholder] Black-and-white portrait of a smiling woman in round glasses." }, links: [{ href: "https://www.linkedin.com/", label: "LinkedIn" }] },
      { name: "[Name]", role: "Growth", image: { src: crew3, alt: "[Placeholder] Black-and-white portrait of a woman with curly hair, arms folded." }, links: [{ href: "https://www.linkedin.com/", label: "LinkedIn" }] },
    ],
  },

  bento: {
    eyebrow: "By the numbers",
    title: "What two years looks like",
    note: "Every figure and every bar on this panel is a placeholder. Replace them with numbers you can evidence, or remove the panel.",
    stats: [
      { value: 48, suffix: "+", label: "Projects shipped" },
      { value: 12, suffix: "", label: "Clients on retainer" },
      { value: 6, suffix: "", label: "People in the studio" },
    ],
    barsTitle: "Where the hours go",
    bars: [
      { label: "Strategy and research", pct: 24 },
      { label: "Design and build", pct: 46 },
      { label: "Campaign and measurement", pct: 30 },
    ],
    image: { src: awardsPhoto, alt: "[Placeholder] A person in a grey suit working on a laptop in a moulded chair." },
    card: {
      title: "Working with us",
      text: "A kickoff in week one, something real in week two, and a written read on what moved at the end of every month.",
      cta: { href: "#contact", label: "Book a strategy call" },
    },
  },

  testimonial: {
    ghost: "Testimonial",
    eyebrow: "What clients say",
    note: "These are written placeholders, not real quotations. Replace them with attributable feedback you have written permission to publish, or delete the section.",
    items: [
      { quote: "[Replace this with a real client comment. Name the person, their role and the company, and keep a copy of their written permission to publish it.]", name: "[Client name]", role: "[Role, Company]" },
      { quote: "[Replace this with a real client comment. A short, specific sentence about the work beats a paragraph of praise.]", name: "[Client name]", role: "[Role, Company]" },
    ],
  },

  journal: {
    eyebrow: "Journal",
    title: "Notes from the studio",
    cta: { href: "#contact", label: "Read everything" },
    items: [
      {
        date: "2026-02-18",
        category: "Strategy",
        title: "The one number a quarter should be judged on",
        excerpt: "Most briefs arrive with nine goals. Picking the one that actually decides whether the quarter worked is the hardest hour of the engagement, and the most useful.",
        image: { src: blog1, alt: "[Placeholder] A matte-black audio controller beside a stone vase on a marble surface." },
        href: "#journal",
      },
      {
        date: "2026-01-29",
        category: "Brand",
        title: "A design system your team will actually open",
        excerpt: "Why we ship fewer components than you asked for, and write the usage notes first.",
        image: { src: blog2, alt: "[Placeholder] Two colleagues working together at a laptop beside a window." },
        href: "#journal",
      },
      {
        date: "2026-01-07",
        category: "Growth",
        title: "When to stop spending",
        excerpt: "The report we send when a channel has stopped working, and why we send it early.",
        image: { src: blog3, alt: "[Placeholder] Three colleagues reading a wall-mounted screen in a meeting room." },
        href: "#journal",
      },
    ],
  },

  contact: {
    eyebrow: "Say hello",
    title: "Got a growth problem? Let’s talk.",
    text: "Tell us the number you need to move and when you need it moved by. We will tell you honestly whether we are the right studio for it.",
    image: { src: ctaImg, alt: "[Placeholder] Three people in overcoats standing outdoors against a clear sky." },
    email: "[hello@agency.example]",
    phone: "[+44 20 7946 0000]",
    form: {
      label: "Your email address",
      placeholder: "you@company.com",
      submit: "Send",
      confirm: "Thanks — we have your address and will reply within two working days.",
      error: "Enter an email address so we can reply.",
      note: "One note a month about the work, and nothing else. Unsubscribe in a click.",
    },
  },

  footer: {
    blurb: "A small strategy and performance studio. Brand, web and campaigns for companies that need the numbers to move.",
    email: "[hello@agency.example]",
    phone: "[+44 20 7946 0000]",
    address: ["[Studio 4, 118 Example Street]", "[London EC1A 1AA]"],
    columns: [
      {
        title: "Studio",
        links: [
          { href: "#about", label: "About" },
          { href: "#team", label: "Team" },
          { href: "#journal", label: "Journal" },
          { href: "#contact", label: "Contact" },
        ],
      },
      {
        title: "Services",
        links: [
          { href: "#services", label: "Brand & identity" },
          { href: "#services", label: "Web & product site" },
          { href: "#services", label: "Growth & campaigns" },
          { href: "#pricing", label: "Pricing" },
        ],
      },
      {
        title: "Elsewhere",
        links: [
          { href: "https://www.linkedin.com/", label: "LinkedIn" },
          { href: "https://www.instagram.com/", label: "Instagram" },
          { href: "https://x.com/", label: "X" },
          { href: "https://dribbble.com/", label: "Dribbble" },
        ],
      },
    ],
    socials: [
      { href: "https://www.linkedin.com/", label: "LinkedIn" },
      { href: "https://www.instagram.com/", label: "Instagram" },
      { href: "https://x.com/", label: "X" },
    ],
    legal: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/accessibility", label: "Accessibility" },
    ],
    wordmark: "[Agency]",
    copyrightName: "[Agency Ltd]",
    copyrightYear: 2026,
  },
};
