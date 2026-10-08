// Corporate homepage content, rebuilt in the language of the Lumio reference (lumio-astro.pages.dev):
// uppercase display hero over an image slider, blue feature card, about with word-by-word reveal, blue
// marquee, numbered services, numbers, blue testimonial slider, features, case studies, logos, video band,
// blog rows, dark contact form, black footer. Our placeholder copy; nothing real is invented.
import type { ReactNode } from "react";
import type { Img, LinkItem } from "@/lib/content";
import heroPhone from "../../../templates/corporate/assets/hero-phone-man.jpg";
import heroControlRoom from "../../../templates/corporate/assets/hero-control-room.jpg";
import workshop from "../../../templates/corporate/assets/workshop.jpg";
import teamLaptop from "../../../templates/corporate/assets/team-laptop-tall.jpg";
import cafeMeeting from "../../../templates/corporate/assets/cafe-meeting.jpg";
import devTeam from "../../../templates/corporate/assets/dev-team.jpg";
import manYellow from "../../../templates/corporate/assets/man-yellow-jacket.jpg";
import manThinking from "../../../templates/corporate/assets/man-thinking.jpg";
import threeMen from "../../../templates/corporate/assets/three-men.jpg";
import portrait1 from "../../../templates/corporate/assets/portrait-1.jpg";
import portrait2 from "../../../templates/corporate/assets/portrait-2.jpg";
import contactMan from "../../../templates/corporate/assets/contact-man.jpg";
import dataCentre from "../../../templates/corporate/assets/data-centre.jpg";
import headquarters from "../../../templates/corporate/assets/headquarters.jpg";

export type MegaItem = { href: string; label: string; text: string; badge?: string };
export type CorporateContent = {
  brand: string;
  nav: {
    home: LinkItem;
    mega: { label: string; columns: { title: string; lead: string; items: MegaItem[] }[]; panel: { eyebrow: string; title: string; text: string; cta: LinkItem } };
    pages: { label: string; groups: { label: string; items: LinkItem[] }[] };
    links: { href: string; label: string; badge?: string }[];
    lang: string;
    cta: LinkItem;
  };
  hero: {
    socials: LinkItem[];
    line1: string; line2: string; line3: string;
    clients: { count: string; label: string };
    text: string;
    slides: Img[];
    features: { title: string; text: string }[];
  };
  about: { eyebrow: string; title: string; text: string; rating: { big: string; small: string }; image1: Img; image2: Img; watermark: string };
  marquee: string[];
  services: { id: string; eyebrow: string; title: string; image: Img; watermark: string; items: { title: string; text: string; href: string }[]; foot: string; footLink: LinkItem };
  numbers: { title: string; image: Img; watermark: string; items: { big: string; text: string }[] };
  testimonials: { title: string; items: { image: Img; text: string; name: string; role: string }[] };
  features: { eyebrow: string; title: string; watermark: string; image: Img; items: { title: string; text: string }[] };
  cases: { title: string; items: { title: string; tag: string; image: Img; href: string }[] };
  logos: { title: string; items: string[] };
  video: { poster: Img; play: string; left: string; cta: LinkItem; right: string };
  blog: { eyebrow: string; title: string; watermark: string; items: { category: string; date: string; title: string; read: string; image: Img; href: string }[] };
  contact: { id: string; eyebrow: string; title: ReactNode; image: Img; watermark: string; subjects: string[]; departments: string[]; sources: string[]; submit: string; reply: string };
  footer: { talk: string; about: { title: string; text: string; newsletter: string }; office: { title: string; address: string; email: string; phone: string }; columns: { title: string; items: LinkItem[] }[]; copyright: string };
};

export const content: CorporateContent = {
  brand: "[Company]",
  nav: {
    home: { href: "#top", label: "Home" },
    mega: {
      label: "Solutions",
      columns: [
        { title: "Core services", lead: "Delivery work for organisations that run critical operations.", items: [
          { href: "solutions/assessment/", label: "[Solution one]", text: "Assess where operations stand and what to change first." },
          { href: "solutions/platform/", label: "[Solution two]", text: "Design and deliver the platform the operation runs on." },
          { href: "solutions/managed/", label: "[Solution three]", text: "Run it day to day with a named account team.", badge: "Popular" },
          { href: "solutions/compliance/", label: "Compliance and certification", text: "Meet [standard placeholders] without slowing the business." },
        ] },
        { title: "Engagement models", lead: "Ways clients usually bring [Company] in.", items: [
          { href: "engage/sprint/", label: "Assessment sprint", text: "A compact scope to find the number and the plan." },
          { href: "engage/team/", label: "Team augmentation", text: "Plug specialists into an in-house team." },
          { href: "engage/replatform/", label: "Rebuild and replatform", text: "Move off fragile setups without losing continuity." },
          { href: "engage/managed/", label: "Managed services", text: "Continuous operation with monthly reviews." },
        ] },
        { title: "Proof and next steps", lead: "What buyers want before they book a call.", items: [
          { href: "cases/featured/", label: "Featured case study", text: "One project from problem framing to measured results." },
          { href: "cases/", label: "All case studies", text: "Recent delivery work across sectors." },
          { href: "insights/", label: "Insights and articles", text: "Process notes and practical ideas." },
          { href: "#contact", label: "Book a discovery call", text: "Start with scope, timeline and budget." },
        ] },
      ],
      panel: { eyebrow: "Delivery partner", title: "Need a team that can assess, build and run without extra layers?", text: "Explore the service lines, then move to a real scope conversation when the fit is clear.", cta: { href: "#contact", label: "Start a project" } },
    },
    pages: { label: "Pages", groups: [
      { label: "Company", items: [{ href: "about/", label: "About" }, { href: "leadership/", label: "Leadership" }, { href: "careers/", label: "Careers" }] },
      { label: "Work", items: [{ href: "cases/", label: "Case studies" }, { href: "insights/", label: "Insights" }, { href: "services/", label: "Services" }] },
      { label: "Other", items: [{ href: "pricing/", label: "Pricing" }, { href: "faq/", label: "FAQ" }, { href: "investors/", label: "Investors" }] },
    ] },
    links: [{ href: "#industries", label: "Industries" }, { href: "#contact", label: "Contact" }],
    lang: "EN",
    cta: { href: "#contact", label: "Get started" },
  },
  hero: {
    socials: [{ href: "https://linkedin.com/", label: "LinkedIn" }, { href: "https://youtube.com/", label: "YouTube" }, { href: "https://x.com/", label: "Twitter" }],
    line1: "Reliable", line2: "Infrastructure for your", line3: "Success",
    clients: { count: "[00]+", label: "clients in [sector]" },
    text: "[Company] helps organisations in [sector] run critical operations with confidence, from first assessment to day-to-day support.",
    slides: [
      { src: heroPhone, alt: "A professional in a beige blazer on the phone at a bright office desk" },
      { src: heroControlRoom, alt: "Two colleagues at a curved desk in an operations control room" },
      { src: workshop, alt: "Colleagues at a glass wall covered in notes during a workshop" },
    ],
    features: [
      { title: "Named account team", text: "The same people from the first workshop to steady state. Nothing is handed to a team you have not met." },
      { title: "24/7 support", text: "Monitoring and response in [regions], with monthly reviews against the agreed number." },
      { title: "Certified delivery", text: "Platforms, processes and controls certified to [standard placeholders]." },
    ],
  },
  about: {
    eyebrow: "About company",
    title: "[Company] partners with organisations across [sector] to run critical operations with confidence and fuel measurable growth.",
    text: "We are [number] people in [00] countries, founded in [year]. Every engagement starts with the figure that matters to you and ends with it moved. Figures and names on this page are placeholders until the company supplies them.",
    rating: { big: "[0.0] rated", small: "Rated by [000] clients on [platform]" },
    image1: { src: teamLaptop, alt: "Three colleagues gathered around a laptop in a bright office" },
    image2: { src: cafeMeeting, alt: "Two businessmen laughing at a cafe table with a laptop" },
    watermark: "Since, [year]",
  },
  marquee: ["Assessment", "Platforms", "Managed services", "Compliance", "Resilience"],
  services: {
    id: "services",
    eyebrow: "Our services",
    title: "Services built around the number that matters to you.",
    image: { src: devTeam, alt: "Four developers at a long desk with laptops in a wood-panelled office" },
    watermark: "Our services",
    items: [
      { title: "[Solution one]", text: "Assess where operations stand, what is at risk and what to change first. You receive a prioritised plan.", href: "solutions/assessment/" },
      { title: "[Solution two]", text: "Design and deliver the platform, process and controls the operation runs on.", href: "solutions/platform/" },
      { title: "[Solution three]", text: "Run it day to day with a named account team and reporting your board can read.", href: "solutions/managed/" },
      { title: "Compliance and certification", text: "Meet [standard placeholders] without slowing the business down.", href: "solutions/compliance/" },
      { title: "Resilience and continuity", text: "Keep critical operations running through change, incident and growth.", href: "solutions/resilience/" },
    ],
    foot: "Need a different kind of help?",
    footLink: { href: "services/", label: "View all services" },
  },
  numbers: {
    title: "We build operations that your teams can rely on",
    image: { src: manYellow, alt: "A man in a mustard overshirt and red beanie looking at colour swatches in a studio" },
    watermark: "Numbers",
    items: [
      { big: "[00]", text: "Engagements delivered last year across [sector], each measured against an agreed number." },
      { big: "[00]", text: "Percent client renewal, reflecting how we report, escalate and keep promises." },
      { big: "[00]", text: "Years of shared experience navigating complex operations for organisations across [regions]." },
    ],
  },
  testimonials: {
    title: "A few words from clients we have worked with over the past couple of years.",
    items: [
      { image: { src: portrait1, alt: "Portrait placeholder" }, text: "[Testimonial placeholder. Replace with a verified client quote and the client's permission. Two or three sentences at most.]", name: "[Client name]", role: "[Role] at [Organisation]" },
      { image: { src: portrait2, alt: "Portrait placeholder" }, text: "[Testimonial placeholder. Replace with a verified client quote and the client's permission. Two or three sentences at most.]", name: "[Client name]", role: "[Role] at [Organisation]" },
      { image: { src: portrait1, alt: "Portrait placeholder" }, text: "[Testimonial placeholder. Replace with a verified client quote and the client's permission. Two or three sentences at most.]", name: "[Client name]", role: "[Role] at [Organisation]" },
    ],
  },
  features: {
    eyebrow: "Features",
    title: "We care about the outcomes of your operation",
    watermark: "Features",
    image: { src: manThinking, alt: "A thoughtful man in a mustard shirt and red beanie at a laptop" },
    items: [
      { title: "Operations", text: "One accountable team, weekly reports and a number we agreed to move. No hand-offs to people you have not met." },
      { title: "Quality assurance", text: "Staged delivery you can stop between, certified to [standard placeholders], with evidence your auditors can read." },
      { title: "People", text: "Specialists who join your team, not a ticket queue. Named leads, monthly reviews, honest escalation." },
    ],
  },
  cases: {
    title: "Case studies that show the work from problem framing to measured results",
    items: [
      { title: "[Project name]", tag: "Finance", image: { src: devTeam, alt: "Developers at a long desk in a wood-panelled office" }, href: "cases/one/" },
      { title: "[Project name]", tag: "Healthcare", image: { src: workshop, alt: "Colleagues at a glass wall during a workshop" }, href: "cases/two/" },
      { title: "[Project name]", tag: "Public sector", image: { src: cafeMeeting, alt: "Two businessmen at a cafe table with a laptop" }, href: "cases/three/" },
    ],
  },
  logos: { title: "From start-ups to the largest organisations in [sector]", items: ["[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]"] },
  video: {
    poster: { src: threeMen, alt: "Three bearded men in glasses studying something together" },
    play: "Play",
    left: "Operations, platforms and people for organisations that cannot stand still",
    cta: { href: "#contact", label: "Get in touch" },
    right: "Let us work together to move the number that matters",
  },
  blog: {
    eyebrow: "Recent insights",
    title: "Notes from the work: process, launches and lessons your team can apply",
    watermark: "Insights",
    items: [
      { category: "Operations", date: "[Day Month Year]", title: "[Headline placeholder: a point of view on the sector]", read: "3 min read", image: { src: dataCentre, alt: "A data centre corridor with rows of server racks" }, href: "insights/one/" },
      { category: "Compliance", date: "[Day Month Year]", title: "[Headline placeholder: a practical note on certification]", read: "4 min read", image: { src: workshop, alt: "Colleagues at a glass wall during a workshop" }, href: "insights/two/" },
      { category: "Company", date: "[Day Month Year]", title: "[Headline placeholder: an announcement or new office]", read: "2 min read", image: { src: headquarters, alt: "A glass and stone headquarters building at dusk" }, href: "insights/three/" },
    ],
  },
  contact: {
    id: "contact",
    eyebrow: "Contact",
    title: <>Have a project in mind?<br />Let&rsquo;s talk.</>,
    image: { src: contactMan, alt: "A smiling businessman in a blue blazer in a bright office" },
    watermark: "Contact",
    subjects: ["[Solution one]", "[Solution two]", "[Solution three]", "Other"],
    departments: ["Sales", "Support", "Partnerships", "Press"],
    sources: ["Search", "Social media", "Referral"],
    submit: "Send a message",
    reply: "Thank you. A solutions lead will reply within [number] working days.",
  },
  footer: {
    talk: "Let's talk",
    about: { title: "About us", text: "[Company] helps organisations in [sector] run critical operations with confidence, from first assessment to day-to-day support.", newsletter: "Email address" },
    office: { title: "Office", address: "[Country] — [Street address], [City, postcode]", email: "[info@company.example]", phone: "[+00 000 000 000]" },
    columns: [
      { title: "Links", items: [{ href: "#top", label: "Home" }, { href: "about/", label: "About us" }, { href: "#services", label: "Services" }, { href: "cases/", label: "Case studies" }, { href: "#contact", label: "Contact" }] },
      { title: "Services", items: [{ href: "solutions/assessment/", label: "[Solution one]" }, { href: "solutions/platform/", label: "[Solution two]" }, { href: "solutions/managed/", label: "[Solution three]" }, { href: "solutions/compliance/", label: "Compliance" }, { href: "solutions/resilience/", label: "Resilience" }] },
      { title: "Social", items: [{ href: "https://linkedin.com/", label: "LinkedIn" }, { href: "https://x.com/", label: "Twitter" }, { href: "https://youtube.com/", label: "YouTube" }, { href: "https://instagram.com/", label: "Instagram" }] },
    ],
    copyright: "Copyright © [Year] [Company]. All rights reserved.",
  },
};
