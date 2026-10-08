// Tech-startup homepage content, composed in the section rhythm of the Arolax AI-startup reference
// (see the dated revision in templates/tech-startup/DESIGN.md): nav, oversized hero statement, the grey
// "ai" card beside a wide render, what-we-do, the scattered capability blocks, the grey runtime panel,
// a numbered service index set at display scale, the explainer band, clients, a dark FAQ panel, news
// and the dark footer card.
//
// The business is an AI startup selling AI services, not a self-serve SaaS product.
// [Square brackets] mark anything the founders must supply. There is deliberately NOT a single
// accuracy, uptime or benchmark figure anywhere — PRODUCT.md rules them out, because in this industry
// an unevidenced number is the easiest thing to write and the most damaging.
import type { Img, LinkItem } from "@/lib/content";
import heroMedia from "../../../templates/tech-startup/assets/hero-media.jpg";
import hands from "../../../templates/tech-startup/assets/hands.jpg";
import capability from "../../../templates/tech-startup/assets/capability.jpg";
import runtime from "../../../templates/tech-startup/assets/runtime.jpg";
import explainer from "../../../templates/tech-startup/assets/explainer.jpg";
import news1 from "../../../templates/tech-startup/assets/news-1.jpg";
import avatars from "../../../templates/tech-startup/assets/avatars.jpg";

export type TechStartupContent = {
  brand: string;
  nav: { links: LinkItem[]; cta: LinkItem };
  hero: {
    proof: string;
    proofImage: Img;
    lines: string[];
    mark: string;
    blurb: string;
    cta: LinkItem;
    image: Img;
    chip: string;
  };
  about: {
    id: string;
    lines: string[];
    paragraphs: string[];
    cta: LinkItem;
    image: Img;
  };
  capabilities: {
    id: string;
    image: Img;
    list: string[];
    blocks: { title: string; text: string }[];
  };
  runtime: {
    lines: string[];
    image: Img;
    overlay: string;
    chip: string;
    rows: { title: string; text: string }[];
  };
  services: {
    id: string;
    label: string;
    items: { n: string; title: string; href: string }[];
  };
  explainer: {
    image: Img;
    cta: string;
    dialogTitle: string;
    dialogText: string;
  };
  clients: {
    id: string;
    checks: string[];
    lines: string[];
    items: { name: string; text: string }[];
  };
  faq: {
    lines: string[];
    blurb: string;
    cta: LinkItem;
    items: { q: string; a: string }[];
  };
  news: {
    id: string;
    lines: string[];
    cta: LinkItem;
    posts: { category: string; date: string; title: string; image: Img; href: string }[];
  };
  footer: {
    blurb: string;
    socials: LinkItem[];
    columns: { title: string; links: LinkItem[] }[];
    newsletter: { title: string; blurb: string; label: string; placeholder: string; submit: string; success: string };
    legal: LinkItem[];
    copyrightYear: number;
  };
};

export const content: TechStartupContent = {
  brand: "[Startup]",

  nav: {
    links: [
      { href: "#what-we-do", label: "What we do" },
      { href: "#capabilities", label: "Capabilities" },
      { href: "#services", label: "Services" },
      { href: "#clients", label: "Clients" },
      { href: "#news", label: "News" },
    ],
    cta: { href: "#contact", label: "Get in touch" },
  },

  hero: {
    proof: "[00]+ teams run on models we built",
    proofImage: { src: avatars, alt: "[Placeholder] Colleagues working together at a table." },
    lines: ["Put a model", "where the work", "actually happens"],
    mark: "ai",
    blurb: "An AI team that ships into your systems — not a demo, not a slide deck. Working since [year].",
    cta: { href: "#contact", label: "Get started" },
    image: { src: heroMedia, alt: "Abstract render of iridescent orange and teal filaments on a near-black ground." },
    chip: "built, deployed and handed over",
  },

  about: {
    id: "what-we-do",
    lines: ["We take one slow", "process and make it", "disappear"],
    paragraphs: [
      "Most AI work fails at the handover. A model performs in a notebook, then meets real data, real permissions and real people, and quietly stops being used. We work the other way round — starting from the process, the system it lives in, and who has to trust the output.",
      "That means we spend the first weeks on your data and your constraints rather than on model selection. What we hand over runs in your infrastructure, logs what it did, and can be switched off without taking a department down with it.",
    ],
    cta: { href: "#capabilities", label: "Learn more" },
    image: { src: hands, alt: "A robotic hand and a human hand reaching toward each other on a white ground." },
  },

  capabilities: {
    id: "capabilities",
    image: { src: capability, alt: "Abstract render of navy and crimson fluid forms." },
    list: [
      "Document extraction",
      "Support triage",
      "Forecasting",
      "Search and retrieval",
      "Quality inspection",
      "Internal copilots",
    ],
    blocks: [
      { title: "Evaluation", text: "We build the test set before the model. If we cannot measure whether it is working, we will tell you that rather than ship it." },
      { title: "Deployment", text: "It runs where your data already lives — your cloud, your VPC, or on your own hardware where the data cannot leave." },
      { title: "Handover", text: "Your engineers get the code, the evaluation harness and the runbook. No black box, no dependency on us." },
    ],
  },

  runtime: {
    lines: ["Where your data sits", "is the first question,", "not the last"],
    image: { src: runtime, alt: "Abstract render of black, cyan and deep red liquid forms." },
    overlay: "[Startup] runtime",
    chip: "See a worked example",
    rows: [
      { title: "Scoped in weeks, not quarters", text: "We start with one process and a fixed scope, so you find out whether this works before committing a budget to it." },
      { title: "Measured against your own data", text: "Every engagement starts by building an evaluation set from your real cases, including the awkward ones." },
      { title: "Yours at the end", text: "Code, weights where we train them, the evaluation harness and the documentation. You can keep going without us." },
    ],
  },

  services: {
    id: "services",
    label: "What we are asked for most",
    items: [
      { n: "01", title: "Document extraction", href: "#contact" },
      { n: "02", title: "Support triage", href: "#contact" },
      { n: "03", title: "Forecasting", href: "#contact" },
      { n: "04", title: "Retrieval and search", href: "#contact" },
      { n: "05", title: "Internal copilots", href: "#contact" },
    ],
  },

  explainer: {
    image: { src: explainer, alt: "Wide abstract render of black and deep red forms with cyan highlights." },
    cta: "Watch how it works",
    dialogTitle: "How a [Startup] engagement runs",
    dialogText:
      "A short walkthrough of a typical engagement, from the first scoping session to handover. [Replace with the real video once it exists — this template ships without one, and nothing here autoplays.]",
  },

  clients: {
    id: "clients",
    checks: ["Process audit", "Data readiness review", "Cost and benefit model"],
    lines: ["[00] organisations run", "something we built"],
    items: [
      { name: "[Client one]", text: "[One line on what was built, written and approved by the client.]" },
      { name: "[Client two]", text: "[One line on what was built, written and approved by the client.]" },
      { name: "[Client three]", text: "[One line on what was built, written and approved by the client.]" },
      { name: "[Client four]", text: "[One line on what was built, written and approved by the client.]" },
    ],
  },

  faq: {
    lines: ["The questions", "we get asked first"],
    blurb: "If something here is not answered, it is probably the thing worth asking us directly.",
    cta: { href: "#contact", label: "Learn more" },
    items: [
      {
        q: "Where does our data go?",
        a: "Into your own environment, in most engagements. We default to deploying inside your cloud account or on your hardware, and we will tell you plainly when a hosted model is the only workable option and what that means.",
      },
      {
        q: "How do we know it actually works?",
        a: "Because we build the evaluation set first, from your real cases, and report against it throughout. If the numbers are bad, you see the bad numbers.",
      },
      {
        q: "What happens when you leave?",
        a: "You keep the code, the evaluation harness, any weights we trained and the runbook. Handover is a deliverable, not a favour.",
      },
      {
        q: "Do you replace our team?",
        a: "No. Almost everything we build sits behind a person who reviews the output. We will say so when a process genuinely can run unattended, and that is rarer than the industry suggests.",
      },
      {
        q: "What does it cost?",
        a: "Scoping is fixed-price. Delivery is quoted per engagement once the scope is known. [Replace with the real commercial model.]",
      },
    ],
  },

  news: {
    id: "news",
    lines: ["What we are", "learning in production"],
    cta: { href: "#contact", label: "Read all news" },
    posts: [
      {
        category: "Evaluation",
        date: "[Date]",
        title: "Why we build the test set before the model",
        image: { src: news1, alt: "[Placeholder] A person working at a laptop." },
        href: "#contact",
      },
      {
        category: "Deployment",
        date: "[Date]",
        title: "Running models where the data already lives",
        image: { src: explainer, alt: "Abstract render of black and deep red forms with cyan highlights." },
        href: "#contact",
      },
    ],
  },

  footer: {
    blurb: "[Startup] is an AI team based in [city]. We build systems that go into production and stay there.",
    socials: [
      { href: "https://www.linkedin.com", label: "LinkedIn" },
      { href: "https://github.com", label: "GitHub" },
      { href: "https://x.com", label: "X" },
      { href: "https://www.youtube.com", label: "YouTube" },
    ],
    columns: [
      {
        title: "Services",
        links: [
          { href: "#services", label: "Document extraction" },
          { href: "#services", label: "Support triage" },
          { href: "#services", label: "Forecasting" },
          { href: "#services", label: "Retrieval and search" },
          { href: "#services", label: "Internal copilots" },
        ],
      },
      {
        title: "Company",
        links: [
          { href: "#what-we-do", label: "What we do" },
          { href: "#capabilities", label: "Capabilities" },
          { href: "#clients", label: "Clients" },
          { href: "#news", label: "News" },
          { href: "#contact", label: "Careers" },
          { href: "#contact", label: "Contact" },
        ],
      },
    ],
    newsletter: {
      title: "Newsletter",
      blurb: "One email a month on what actually shipped, and what did not work.",
      label: "Email address",
      placeholder: "you@company.com",
      submit: "Subscribe",
      success: "Thank you — you are on the list. This demo form does not send anywhere until a handler is wired.",
    },
    legal: [
      { href: "privacy/", label: "Privacy" },
      { href: "cookies/", label: "Cookies" },
      { href: "data-processing/", label: "Data processing" },
      { href: "accessibility/", label: "Accessibility" },
    ],
    copyrightYear: 2026,
  },
};
