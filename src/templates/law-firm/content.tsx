// Law firm homepage content, rebuilt against the Lawsight one-page reference (see the DESIGN.md revision): the
// split hero, the three overlapping action cards, the about band with its video still and counters, the dark
// practice band, the dark team band, the testimonial pair, the insight cards, the counter row, the contact band
// with its map, and the four-column dark footer. Palette and typefaces stay this template's own.
// [Square brackets] are placeholders. Nothing here claims a result, an award or a review a real firm has not earned.
import type { Img, LinkItem } from "@/lib/content";
import heroPortrait from "../../../templates/law-firm/assets/hero-portrait.jpg";
import heroBg from "../../../templates/law-firm/assets/hero-bg.jpg";
import videoStill from "../../../templates/law-firm/assets/video.jpg";
import practiceImg from "../../../templates/law-firm/assets/practice.jpg";
import p1 from "../../../templates/law-firm/assets/attorney-1.jpg";
import p2 from "../../../templates/law-firm/assets/attorney-2.jpg";
import p3 from "../../../templates/law-firm/assets/attorney-3.jpg";
import p4 from "../../../templates/law-firm/assets/attorney-4.jpg";
import news1 from "../../../templates/law-firm/assets/insight-1.jpg";
import news2 from "../../../templates/law-firm/assets/insight-2.jpg";
import news3 from "../../../templates/law-firm/assets/insight-3.jpg";
import av1 from "../../../templates/law-firm/assets/avatar-1.jpg";
import av2 from "../../../templates/law-firm/assets/avatar-2.jpg";
import g1 from "../../../templates/law-firm/assets/thumb-about.jpg";
import g2 from "../../../templates/law-firm/assets/thumb-band.jpg";
import g3 from "../../../templates/law-firm/assets/thumb-practice.jpg";
import g4 from "../../../templates/law-firm/assets/thumb-insight-1.jpg";
import g5 from "../../../templates/law-firm/assets/thumb-insight-2.jpg";
import g6 from "../../../templates/law-firm/assets/thumb-insight-3.jpg";

export type PracticeIcon = "family" | "employment" | "property" | "commercial" | "estates" | "immigration";
export type CardIcon = "calendar" | "phone" | "scales";
export type CounterIcon = "briefcase" | "users" | "shield" | "handshake";

/** Fees are stored as numbers and formatted with Intl, so changing jurisdiction means changing one constant. */
export const LOCALE = "en-GB";
export const CURRENCY = "GBP";
export const money = (n: number) => new Intl.NumberFormat(LOCALE, { style: "currency", currency: CURRENCY, maximumFractionDigits: 0 }).format(n);
export const longDate = (iso: string) => new Intl.DateTimeFormat(LOCALE, { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${iso}T00:00:00Z`));

export type LawContent = {
  brand: string;
  topbar: { address: string; phonePrimary: string; phoneSecondary: string; email: string; status: string };
  nav: { links: LinkItem[]; cta: LinkItem };
  hero: { titleLines: string[]; lead: string; cta: LinkItem; portrait: Img; background: Img };
  entryCards: { icon: CardIcon; kicker: string; title: string; text: string; href: string; featured?: boolean }[];
  about: {
    eyebrow: string; titleLead: string; titleEm: string; paras: string[]; points: string[];
    callLabel: string; phones: string[]; signature: string; signatureRole: string;
    video: { image: Img; buttonLabel: string; dialogTitle: string; dialogText: string };
    counters: { value: string; label: string }[];
  };
  timeline: { eyebrow: string; titleLead: string; titleEm: string; text: string; items: { year: string; title: string; text: string }[] };
  practices: { eyebrow: string; titleLead: string; titleEm: string; text: string; items: { icon: PracticeIcon; title: string; text: string }[]; image: Img; cta: LinkItem };
  attorneys: { eyebrow: string; titleLead: string; titleEm: string; text: string; items: { name: string; role: string; admitted: string; tags: string[]; image: Img }[] };
  testimonials: { eyebrow: string; titleLead: string; titleEm: string; note: string; items: { text: string; name: string; role: string; avatar: Img }[] };
  insights: { eyebrow: string; titleLead: string; titleEm: string; text: string; items: { date: string; author: string; title: string; href: string; image: Img }[] };
  counters: { icon: CounterIcon; value: string; label: string }[];
  faq: { eyebrow: string; titleLead: string; titleEm: string; text: string; items: { q: string; a: string }[] };
  consultation: { eyebrow: string; titleLead: string; titleEm: string; text: string; items: { name: string; duration: string; fee: number; feeNote: string; text: string; points: string[]; cta: string; featured?: boolean }[]; note: string };
  contact: {
    eyebrow: string; titleLead: string; titleEm: string;
    address: string[]; phone: string; email: string;
    form: { firstName: string; lastName: string; email: string; matter: string; message: string; submit: string; confirm: string; matters: string[] };
    disclaimer: string;
    map: { title: string; src: string; href: string; linkLabel: string };
  };
  footer: {
    blurb: string; phone: string; email: string; address: string[];
    links: { title: string; items: LinkItem[] }[];
    gallery: { title: string; items: Img[] };
    socials: LinkItem[]; legal: LinkItem[]; notice: string; copyright: string;
  };
};

export const content: LawContent = {
  brand: "[Firm name]",

  topbar: {
    address: "[14 Gray’s Court, City]",
    phonePrimary: "[020 7946 0145]",
    phoneSecondary: "[020 7946 0188]",
    email: "[clerks@firm.example]",
    status: "Currently accepting new matters",
  },

  nav: {
    links: [
      { href: "#top", label: "Home" },
      { href: "#approach", label: "About" },
      { href: "#practices", label: "Services" },
      { href: "#testimonials", label: "Testimonials" },
      { href: "#insights", label: "Insights" },
      { href: "#contact", label: "Contact" },
    ],
    cta: { href: "#consultation", label: "Book a consultation" },
  },

  hero: {
    titleLines: ["Considered counsel", "when the stakes", "are personal"],
    lead: "A boutique practice of [nine] solicitors in [city]. We take on fewer matters than we are offered, so the partner you meet is the one who runs your file.",
    cta: { href: "#contact", label: "Contact us today" },
    portrait: { src: heroPortrait, alt: "A solicitor in a charcoal suit standing with arms folded" },
    background: { src: heroBg, alt: "" },
  },

  entryCards: [
    { icon: "calendar", kicker: "Book an", title: "Appointment", text: "Fixed fee, [45] minutes, in person or by video. You will know your options and the likely cost before you leave.", href: "#consultation" },
    { icon: "phone", kicker: "Speak to a", title: "Solicitor today", text: "The clerks answer the phone between [8:30am] and [6:00pm]. If the matter is urgent, say so and you will be put through.", href: "#contact", featured: true },
    { icon: "scales", kicker: "Find the right", title: "Practice area", text: "Family, employment, property, commercial, estates and immigration. Each is led by a partner, not passed down the corridor.", href: "#practices" },
  ],

  about: {
    eyebrow: "About us",
    titleLead: "We are here to manage your matter with",
    titleEm: "care",
    paras: [
      "We opened in [1994] above a bookshop on [Gray’s Court] with two solicitors and one clerk. We are [nine] solicitors now and still in the same building, because the thing that made the firm work was never the size of it.",
      "Every matter is run by the partner you first meet. You will be told what a case is likely to cost before it starts, and told again if that changes.",
    ],
    points: [
      "One partner per matter",
      "Costs estimated in writing",
      "Fixed-fee first consultation",
      "Plain English, always",
    ],
    callLabel: "Call to ask",
    phones: ["[020 7946 0145]", "[020 7946 0188]"],
    signature: "[Partner name]",
    signatureRole: "Senior partner",
    video: {
      image: { src: videoStill, alt: "Two colleagues talking across a timber table in a panelled office" },
      buttonLabel: "Play the film about the firm",
      dialogTitle: "A film about the firm",
      dialogText: "Drop your own film in here. Nothing autoplays on this page: the still above is a poster, and the player only loads once a visitor asks for it.",
    },
    counters: [
      { value: "[30]", label: "Years in practice" },
      { value: "[9]", label: "Solicitors" },
      { value: "[6]", label: "Practice areas" },
    ],
  },

  timeline: {
    eyebrow: "Our history",
    titleLead: "Thirty years on the same",
    titleEm: "street",
    text: "The firm has grown slowly and on purpose. These are the points at which it changed shape.",
    items: [
      { year: "[1994]", title: "The firm opens", text: "Two solicitors and one clerk take three rooms above a bookshop on [Gray’s Court]." },
      { year: "[2003]", title: "Family practice founded", text: "A dedicated family team is established after a decade of taking the work on referral." },
      { year: "[2012]", title: "The building is bought", text: "The firm buys the freehold it had rented for eighteen years and takes the whole of it." },
      { year: "[2021]", title: "Employment and commercial", text: "Two partners join from [larger practices] and the firm reaches its present size." },
    ],
  },

  practices: {
    eyebrow: "Our services",
    titleLead: "Six practices, each led by a",
    titleEm: "partner",
    text: "We do not practise in every area of law. These six are the ones we have done long enough to be genuinely good at.",
    cta: { href: "#consultation", label: "Discuss your matter" },
    image: { src: practiceImg, alt: "A stone stairwell inside a historic civic building, with a carved balustrade and a tall arched window" },
    items: [
      { icon: "family", title: "Family Law", text: "Divorce, finances, and arrangements for children. Collaborative where possible, firm where it is not." },
      { icon: "employment", title: "Employment Law", text: "Settlement agreements, discrimination and unfair dismissal, for employees and for small employers." },
      { icon: "property", title: "Property Law", text: "Residential and commercial conveyancing, leases, boundary disputes and landlord matters." },
      { icon: "commercial", title: "Commercial Law", text: "Company formation, shareholder agreements, commercial contracts and the disputes that follow." },
      { icon: "estates", title: "Wills and Estates", text: "Wills, powers of attorney, probate, and the administration of estates of any size." },
      { icon: "immigration", title: "Immigration Law", text: "Family and work visas, settlement applications and appeals, for individuals and small employers." },
    ],
  },

  attorneys: {
    eyebrow: "Our people",
    titleLead: "We feel very proud of our",
    titleEm: "partners",
    text: "Nine solicitors, six practices, one building. Every file is opened by a partner and stays with them until it closes, so the person who hears the matter first is the person who argues it.",
    items: [
      { name: "[Name]", role: "Family Lawyer", admitted: "Admitted [1996]", tags: ["Family"], image: { src: p1, alt: "Monochrome studio portrait of a solicitor in a dark tailored suit" } },
      { name: "[Name]", role: "Commercial Lawyer", admitted: "Admitted [1999]", tags: ["Commercial"], image: { src: p2, alt: "Monochrome studio portrait of a solicitor in a charcoal suit and tie" } },
      { name: "[Name]", role: "Employment Lawyer", admitted: "Admitted [2009]", tags: ["Employment"], image: { src: p3, alt: "Monochrome studio portrait of a solicitor in a dark blazer" } },
      { name: "[Name]", role: "Property Lawyer", admitted: "Admitted [2011]", tags: ["Property"], image: { src: p4, alt: "Monochrome studio portrait of a solicitor in a dark suit with an open collar" } },
    ],
  },

  testimonials: {
    eyebrow: "Testimonial",
    titleLead: "Clients are very satisfied to work with",
    titleEm: "us",
    note: "Replace these with real, attributable client feedback, and check your jurisdiction’s rules on testimonials before publishing any of it.",
    items: [
      { text: "[Placeholder client comment. Replace with a real, attributable quotation, with the client’s written permission and any identifying detail removed.]", name: "[Client name]", role: "[Family matter, 2025]", avatar: { src: av1, alt: "Monochrome head and shoulders portrait of a client" } },
      { text: "[Placeholder client comment. Replace with a real, attributable quotation, with the client’s written permission and any identifying detail removed.]", name: "[Client name]", role: "[Employment matter, 2025]", avatar: { src: av2, alt: "Monochrome head and shoulders portrait of a client" } },
    ],
  },

  insights: {
    eyebrow: "Latest news",
    titleLead: "Notes on the law, in plain",
    titleEm: "English",
    text: "Short pieces written by the people who run the files. General information only, never advice on your own matter.",
    items: [
      { date: "2026-02-18", author: "[Author]", title: "What a settlement agreement actually commits you to", href: "#insights", image: { src: news1, alt: "A stack of bound legal volumes and a fountain pen on a dark oak desk beside a brass lamp" } },
      { date: "2026-01-27", author: "[Author]", title: "Buying a leasehold flat: the four questions to ask first", href: "#insights", image: { src: news2, alt: "An empty panelled meeting room with a long timber table and leather chairs" } },
      { date: "2026-01-09", author: "[Author]", title: "Making a will when the family is not straightforward", href: "#insights", image: { src: news3, alt: "A carved stone cornice and tall sash windows on a historic office building" } },
    ],
  },

  counters: [
    { icon: "briefcase", value: "[1,825]", label: "Matters handled" },
    { icon: "users", value: "[9]", label: "Solicitors" },
    { icon: "shield", value: "[30]", label: "Years in practice" },
    { icon: "handshake", value: "[1,258]", label: "Clients advised" },
  ],

  faq: {
    eyebrow: "Common questions",
    titleLead: "The questions the clerks are asked",
    titleEm: "most",
    text: "If yours is not here, the office will answer it on the phone without charge.",
    items: [
      { q: "What does the first consultation cost?", a: "A fixed fee of [£150] including VAT for [45] minutes, in person or by video. If we take the matter on, that fee is credited against your first invoice." },
      { q: "Will I deal with the same solicitor throughout?", a: "Yes. A partner opens every file and keeps it until it closes. Trainees and paralegals assist, but they do not take over the matter, and you will always have the direct line of the partner acting." },
      { q: "How quickly can I be seen?", a: "Usually within [five] working days, and sooner where a deadline or a hearing requires it. Tell the clerks the date you are working to when you call." },
      { q: "How are your fees calculated?", a: "Either a fixed fee or an hourly rate, agreed in writing before work begins. You receive a written estimate at the outset and an updated one whenever the scope changes." },
      { q: "Do you offer legal aid?", a: "[State your position here.] Set out which categories of work are covered, the eligibility test, and who to contact if the firm cannot assist. This answer must be accurate for your jurisdiction." },
      { q: "What should I bring to the first meeting?", a: "Photo identification, proof of address, and any correspondence, contracts or court papers relating to the matter. If you are not sure whether a document is relevant, bring it." },
    ],
  },

  consultation: {
    eyebrow: "Consultations",
    titleLead: "Three ways to",
    titleEm: "start",
    text: "Every option begins with a conversation and ends with you knowing what the matter is likely to cost. Fees include VAT.",
    note: "Booking a consultation does not create a solicitor–client relationship. Please do not send confidential details until we have confirmed in writing that we are able to act.",
    items: [
      { name: "Initial consultation", duration: "[45] minutes", fee: 150, feeNote: "fixed fee", text: "A first conversation about the matter, your options and the likely cost. Credited against your first invoice if we go on to act.", points: ["In person or by video", "Written summary within [2] working days", "Credited if we act"], cta: "Book a consultation" },
      { name: "Fixed-fee review", duration: "[2] hours", fee: 450, feeNote: "fixed fee", text: "We read the papers before we meet and come back to you with a written view on the merits and the realistic routes forward.", points: ["Papers read in advance", "Written opinion on the merits", "A costed plan for the next stage"], cta: "Book a review", featured: true },
      { name: "Ongoing counsel", duration: "Monthly", fee: 800, feeNote: "per month", text: "For small businesses that would rather have a solicitor on the end of the phone than a bill after the fact.", points: ["Named partner, direct line", "Contract review included", "Cancel with [30] days’ notice"], cta: "Discuss a retainer" },
    ],
  },

  contact: {
    eyebrow: "Contact us",
    titleLead: "Feel free to ask any question to",
    titleEm: "us",
    address: ["[14 Gray’s Court, Old Quarter]", "[City, AB1 2CD]"],
    phone: "[020 7946 0145]",
    email: "[clerks@firm.example]",
    form: {
      firstName: "First name", lastName: "Last name", email: "Email address", matter: "Type of matter", message: "What has happened",
      submit: "Submit", confirm: "Thank you. A member of the team will reply within one working day.",
      matters: ["Family", "Employment", "Property", "Commercial", "Wills and estates", "Immigration", "Something else"],
    },
    disclaimer: "Sending this form does not create a solicitor–client relationship and the information in it is not treated as confidential until we confirm in writing that we are able to act. Please do not include sensitive details, and do not rely on anything on this page as advice on your own matter.",
    map: {
      title: "Map of the office location",
      src: "https://www.openstreetmap.org/export/embed.html?bbox=-0.1065%2C51.4995%2C-0.0865%2C51.5085&layer=mapnik",
      href: "https://www.openstreetmap.org/",
      linkLabel: "Open the office location in a new tab",
    },
  },

  footer: {
    blurb: "We believe that as a boutique practice we are better placed to respond quickly to our clients and to give each matter the partner time it deserves.",
    phone: "[020 7946 0145]",
    email: "[clerks@firm.example]",
    address: ["[14 Gray’s Court, Old Quarter]", "[City, AB1 2CD]"],
    links: [
      { title: "Links", items: [{ href: "#top", label: "Home" }, { href: "#practices", label: "Services" }, { href: "#approach", label: "About us" }, { href: "#testimonials", label: "Testimonials" }, { href: "#insights", label: "Insights" }, { href: "#contact", label: "Contact" }] },
      { title: "Support", items: [{ href: "#contact", label: "Contact us" }, { href: "#consultation", label: "Book a consultation" }, { href: "#faq", label: "Common questions" }, { href: "/complaints", label: "Complaints procedure" }, { href: "/terms", label: "Terms of business" }, { href: "/privacy", label: "Privacy" }] },
    ],
    gallery: {
      title: "Gallery",
      items: [
        { src: g1, alt: "The law library reading room" },
        { src: g2, alt: "The colonnade outside the building" },
        { src: g3, alt: "The stairwell inside the building" },
        { src: g4, alt: "Bound legal volumes on a desk" },
        { src: g5, alt: "The panelled meeting room" },
        { src: g6, alt: "The carved stone cornice of the building" },
      ],
    },
    socials: [
      { href: "https://www.linkedin.com/", label: "LinkedIn" },
      { href: "https://x.com/", label: "X" },
      { href: "https://www.facebook.com/", label: "Facebook" },
    ],
    legal: [{ href: "/privacy", label: "Privacy" }, { href: "/terms", label: "Terms of business" }, { href: "/complaints", label: "Complaints" }, { href: "/accessibility", label: "Accessibility" }],
    notice: "[Firm name] is a limited liability partnership registered in [jurisdiction] under number [OC000000], authorised and regulated by [the regulator] under number [000000]. A list of members is available at the registered office. This website is general information, not legal advice, and is intended for clients in [jurisdiction]. Replace this notice with the attorney-advertising and regulatory wording your jurisdiction requires.",
    copyright: "© 2026 [Firm name] LLP. All rights reserved.",
  },
};
