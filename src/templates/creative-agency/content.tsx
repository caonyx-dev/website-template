// Creative agency homepage content, in the language of the Folex reference (folex-astro.pages.dev):
// oversized two-line hero, lime about block, accordion services, staggered portfolio, monochrome team,
// lime testimonial block, article cards, "Let's work together" close. Our placeholder copy throughout.
import type { ReactNode } from "react";
import type { Img, LinkItem } from "@/lib/content";
import aboutMan from "../../../templates/creative-agency/assets/about-man.jpg";
import workRocks from "../../../templates/creative-agency/assets/work-rocks.jpg";
import workRobot from "../../../templates/creative-agency/assets/work-robot.jpg";
import workOrange from "../../../templates/creative-agency/assets/work-orange.jpg";
import workSphere from "../../../templates/creative-agency/assets/work-sphere.jpg";
import team1 from "../../../templates/creative-agency/assets/team-1.jpg";
import team2 from "../../../templates/creative-agency/assets/team-2.jpg";
import team3 from "../../../templates/creative-agency/assets/team-3.jpg";
import team4 from "../../../templates/creative-agency/assets/team-4.jpg";
import testimonial from "../../../templates/creative-agency/assets/testimonial.jpg";
import blog1 from "../../../templates/creative-agency/assets/blog-1.jpg";
import blog2 from "../../../templates/creative-agency/assets/blog-2.jpg";
import blog3 from "../../../templates/creative-agency/assets/blog-3.jpg";

export type AgencyContent = {
  brand: string;
  nav: {
    mega: { label: string; services: { title: string; text: string; href: string }[]; quote: { label: string; text: string } };
    pages: { label: string; groups: { label: string; items: { href: string; label: string; badge?: string }[] }[] };
    elements: { href: string; label: string; badge: string };
    lang: string;
    cta: LinkItem;
    offcanvas: { blurb: string; address: string; phone: string; email: string; socials: LinkItem[]; cta: LinkItem };
  };
  hero: { line1: string; line2: string; lead: string; cta: LinkItem; award: string };
  about: { title: ReactNode; p1: string; p2: string; link: LinkItem; image: Img };
  services: { title: ReactNode; items: { title: string; text: string; href: string }[] };
  work: { items: { tags: string[]; title: string; image: Img; href: string }[]; all: LinkItem };
  team: { title: ReactNode; people: { name: string; role: string; image: Img; href: string }[] };
  testimonials: { title: string; image: Img; items: { text: string; name: string; role: string }[] };
  blog: { title: ReactNode; items: { date: string; tags: string[]; title: string; image: Img; href: string }[] };
  cta: { title: ReactNode; text: string; button: LinkItem };
  footer: { links: LinkItem[]; legal: LinkItem[]; socials: LinkItem[]; copyright: string };
};

export const content: AgencyContent = {
  brand: "[Agency]",
  nav: {
    mega: {
      label: "Services",
      services: [
        { title: "Brand identity", text: "Names, marks, systems and the rules that keep them loud for years.", href: "services/identity/" },
        { title: "Web development", text: "Sites that load fast, read well and are built to be changed.", href: "services/web/" },
        { title: "Campaigns", text: "One idea, every channel, with the budget spent where it works.", href: "services/campaigns/" },
        { title: "Motion and 3D", text: "Title sequences, product films and loops for the places brands live now.", href: "services/motion/" },
        { title: "Social", text: "Formats people stop for, posted on a cadence the team can keep.", href: "services/social/" },
        { title: "Content", text: "Words and pictures that explain the product better than the product does.", href: "services/content/" },
      ],
      quote: { label: "Testimonial", text: "[A two-sentence client quote, supplied by the agency with the client's permission.]" },
    },
    pages: { label: "Pages", groups: [
      { label: "Home", items: [{ href: "#top", label: "Creative agency" }, { href: "about/", label: "About us" }] },
      { label: "Work", items: [{ href: "work/", label: "Portfolio" }, { href: "work/single/", label: "Case study" }] },
      { label: "Studio", items: [{ href: "team/", label: "Team" }, { href: "journal/", label: "Journal" }, { href: "faq/", label: "FAQ" }, { href: "contact/", label: "Contact" }] },
    ] },
    elements: { href: "#work", label: "Work", badge: "New" },
    lang: "EN",
    cta: { href: "#contact", label: "Get started" },
    offcanvas: { blurb: "We are a creative agency that helps brands be noticed, with identity, campaigns, motion and web.", address: "[Street address], [City, postcode]", phone: "[+00 000 000 000]", email: "[hello@agency.example]", socials: [{ href: "https://facebook.com/", label: "Facebook" }, { href: "https://instagram.com/", label: "Instagram" }, { href: "https://linkedin.com/", label: "LinkedIn" }], cta: { href: "#contact", label: "Let's talk with us" } },
  },
  hero: { line1: "We make brands", line2: "Loud.", lead: "Identity, campaigns, motion and web for brands that would rather be noticed than safe. [Agency] is a studio of [number] in [City].", cta: { href: "#work", label: "View our work" }, award: "Agency of the year [year], [award body]" },
  about: {
    title: <>Loud is a discipline, not a volume.</>,
    p1: "Ask our clients what it is like working with [Agency] and they will talk about how much we care about the result. A creative director on every account, strategy before pixels, work shown weekly.",
    p2: "We are a studio of [number] designers, writers, animators and developers in [City], founded in [year]. We credit everyone who made the work.",
    link: { href: "about/", label: "About us" },
    image: { src: aboutMan, alt: "A designer in a mustard shirt and red beanie thinking at a laptop" },
  },
  services: {
    title: <>What we can do for your brand</>,
    items: [
      { title: "Brand identity", text: "Names, marks, systems and the rules that keep them loud for years. You receive the identity, the guidelines and the files.", href: "services/identity/" },
      { title: "Web development", text: "Sites that load fast, read well and are built to be changed by your team without calling us.", href: "services/web/" },
      { title: "Campaigns", text: "One idea, every channel, with the budget spent where it works and a report that says so.", href: "services/campaigns/" },
      { title: "Motion and 3D", text: "Title sequences, product films and loops for the places brands live now.", href: "services/motion/" },
      { title: "Social", text: "Formats people stop for, posted on a cadence the team can keep.", href: "services/social/" },
      { title: "Content", text: "Words and pictures that explain the product better than the product does.", href: "services/content/" },
    ],
  },
  work: {
    items: [
      { tags: ["Identity", "Web", "Campaign"], title: "[Project name]", image: { src: workRocks, alt: "Floating boulders with chrome cylinders and spheres" }, href: "work/one/" },
      { tags: ["Motion", "3D"], title: "[Project name]", image: { src: workRobot, alt: "A yellow walking robot in dry grass" }, href: "work/two/" },
      { tags: ["Identity", "Content"], title: "[Project name]", image: { src: workOrange, alt: "Glossy orange and copper tubular shapes" }, href: "work/three/" },
      { tags: ["Campaign", "Social"], title: "[Project name]", image: { src: workSphere, alt: "A dark sphere wrapped in a copper lattice" }, href: "work/four/" },
    ],
    all: { href: "work/", label: "View all" },
  },
  team: {
    title: <>The people behind the studio</>,
    people: [
      { name: "[Name]", role: "Creative director", image: { src: team1, alt: "Portrait placeholder" }, href: "team/one/" },
      { name: "[Name]", role: "Design lead", image: { src: team2, alt: "Portrait placeholder" }, href: "team/two/" },
      { name: "[Name]", role: "Motion lead", image: { src: team3, alt: "Portrait placeholder" }, href: "team/three/" },
      { name: "[Name]", role: "Developer", image: { src: team4, alt: "Portrait placeholder" }, href: "team/four/" },
    ],
  },
  testimonials: {
    title: "Testimonials",
    image: { src: testimonial, alt: "A bearded man in a flannel shirt working at a desktop computer by a window" },
    items: [
      { text: "[Client quote placeholder. Replace with a verified quote and the client's permission. Two or three sentences.]", name: "[Client name]", role: "[Role], [Company]" },
      { text: "[Client quote placeholder. Replace with a verified quote and the client's permission. Two or three sentences.]", name: "[Client name]", role: "[Role], [Company]" },
      { text: "[Client quote placeholder. Replace with a verified quote and the client's permission. Two or three sentences.]", name: "[Client name]", role: "[Role], [Company]" },
    ],
  },
  blog: {
    title: <>Read our articles and news</>,
    items: [
      { date: "[Day Month Year]", tags: ["Identity", "Process"], title: "[Headline placeholder: a lesson from a recent launch]", image: { src: blog1, alt: "A team at a long desk with laptops" }, href: "journal/one/" },
      { date: "[Day Month Year]", tags: ["Campaigns"], title: "[Headline placeholder: what a campaign is actually for]", image: { src: blog2, alt: "Two people laughing at a cafe table" }, href: "journal/two/" },
      { date: "[Day Month Year]", tags: ["Studio"], title: "[Headline placeholder: how we run a workshop]", image: { src: blog3, alt: "Colleagues at a glass wall of notes" }, href: "journal/three/" },
    ],
  },
  cta: { title: <>Let’s work together</>, text: "A sentence about the brand and what has to change is enough. [Name] replies within [number] working days.", button: { href: "contact/", label: "Let’s talk with us" } },
  footer: {
    links: [{ href: "about/", label: "About company" }, { href: "careers/", label: "Our careers" }, { href: "#services", label: "Services" }, { href: "contact/", label: "Contact" }],
    legal: [{ href: "privacy/", label: "Privacy policy" }, { href: "terms/", label: "Terms and conditions" }],
    socials: [{ href: "https://facebook.com/", label: "Facebook" }, { href: "https://instagram.com/", label: "Instagram" }, { href: "https://linkedin.com/", label: "LinkedIn" }],
    copyright: "Copyright © [Year] [Agency]",
  },
};
