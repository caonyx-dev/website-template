// Gym homepage content in the language of the FitFive reference (see the DESIGN.md revision): full-bleed
// photographic hero with the headline bottom-left, statement block, training programmes, why us, memberships,
// class types, the weekly schedule, trainers, a testimonial over a photograph, the BMI calculator, insights
// and a footer over a photograph. [Square brackets] are placeholders; nothing real is invented.
import type { Img, LinkItem } from "@/lib/content";
import hero from "../../../templates/gym/assets/hero.jpg";
import aboutRunner from "../../../templates/gym/assets/about-runner.jpg";
import aboutPushup from "../../../templates/gym/assets/about-pushup.jpg";
import pt from "../../../templates/gym/assets/pt.jpg";
import why from "../../../templates/gym/assets/why.jpg";
import programs from "../../../templates/gym/assets/programs.jpg";
import trainer1 from "../../../templates/gym/assets/trainer-1.jpg";
import trainer2 from "../../../templates/gym/assets/trainer-2.jpg";
import trainer3 from "../../../templates/gym/assets/trainer-3.jpg";
import trainer4 from "../../../templates/gym/assets/trainer-4.jpg";
import quoteBg from "../../../templates/gym/assets/quote-bg.jpg";
import blog1 from "../../../templates/gym/assets/blog-1.jpg";
import blog2 from "../../../templates/gym/assets/blog-2.jpg";
import footerBg from "../../../templates/gym/assets/footer-bg.jpg";

export type Intensity = "low" | "mid" | "high";
export type Category = "strength" | "cardio" | "mobility";
export type ProgramIcon = "flame" | "barbell" | "lightning" | "heartbeat";
export type GymContent = {
  brand: string;
  nav: { address: string; links: LinkItem[]; cta: LinkItem; phone: string; hours: string };
  hero: { image: Img; title: [string, string]; stats: { value: string; label: string }[] };
  about: { statement: string; runner: Img; card: { title: string; video: string; image: Img }; rated: { value: string; label: string; avatars: Img[] }; stats: { value: string; label: string }[] };
  programs: { n: string; label: string; title: [string, string]; cta: LinkItem; feature: { title: string; text: string; image: Img; href: string; bars: { label: string; value: number }[]; barsTitle: string }; cards: { icon: ProgramIcon; title: string; text: string; href: string }[]; more: string };
  why: { statement: string; points: { title: string; text: string }[]; image: Img; chart: { title: string; ours: string; others: string; items: { label: string; ours: number; others: number }[] } };
  memberships: { n: string; label: string; title: [string, string]; tiers: { name: string; featured?: boolean; badge?: string; text: string; price: string; per: string; includes: string[]; cta: LinkItem }[]; note: string };
  classes: { n: string; label: string; title: [string, string]; lead: string; items: { icon: ProgramIcon; title: string; text: string; intensity: Intensity; category: Category }[]; image: Img; cta: LinkItem };
  schedule: { n: string; label: string; title: [string, string]; days: string[]; rows: Record<string, { time: string; name: string; intensity: Intensity; category: Category; trainer: string; spots: string; urgent?: boolean }[]>; book: string; note: string };
  trainers: { n: string; label: string; title: [string, string]; people: { name: string; role: string; image: Img; href: string }[] };
  testimonials: { image: Img; items: { text: string; name: string; role: string; avatar: Img }[] };
  bmi: { title: [string, string, string]; fields: { height: string; weight: string; age: string; sex: string }; sexes: string[]; submit: string; disclaimer: string };
  insights: { n: string; label: string; title: [string, string]; items: { date: string; category: string; title: string; text: string; image: Img; href: string }[]; more: string };
  footer: { image: Img; title: [string, string]; cta: LinkItem; links: { title: string; items: LinkItem[] }; contact: { title: string; phone: string; email: string; address: string; directions: LinkItem; hours: { day: string; time: string }[] }; socials: LinkItem[]; legal: LinkItem[]; disclaimer: string; copyright: string };
};

const PHONE = "[+00 000 000 000]";
const CLASS = (time: string, name: string, intensity: Intensity, category: Category, trainer: string, spots: string, urgent = false) => ({ time, name, intensity, category, trainer, spots, urgent });

export const content: GymContent = {
  brand: "[Gym]",
  nav: {
    address: "[Street address], [Town]",
    links: [{ href: "#programs", label: "Classes" }, { href: "#schedule", label: "Schedule" }, { href: "#memberships", label: "Memberships" }, { href: "#trainers", label: "Trainers" }, { href: "#contact", label: "Contact" }],
    cta: { href: "trial/", label: "Start free trial" },
    phone: PHONE,
    hours: "Mon – Fri 06:00 – 22:00 · Sat – Sun 08:00 – 20:00",
  },
  hero: {
    image: { src: hero, alt: "A sprinter mid-stride against a bright sky, in black and white" },
    title: ["Train", "Smarter"],
    stats: [{ value: "[00]k+", label: "Members" }, { value: "[00]+", label: "Trainers" }],
  },
  about: {
    statement: "Coaching that knows your name, equipment that is never out of order, and a floor that makes you want to come back tomorrow.",
    runner: { src: aboutRunner, alt: "A runner in a dark technical top jogging outdoors" },
    card: { title: "Where strength meets discipline", video: "Watch the tour", image: { src: aboutPushup, alt: "A man doing a push-up on a barbell on the gym floor" } },
    rated: { value: "[0.0]", label: "Rated by [000] members", avatars: [{ src: trainer1, alt: "" }, { src: trainer2, alt: "" }, { src: trainer3, alt: "" }] },
    stats: [{ value: "[00]+", label: "Years open" }, { value: "[00]k+", label: "Active members" }],
  },
  programs: {
    n: "02", label: "Training", title: ["Training", "Programs"], cta: { href: "classes/", label: "See all classes" },
    feature: { title: "Personal training", text: "One-to-one coaching built around your goal, your schedule and your body.", image: { src: pt, alt: "A tattooed athlete in a white tank top, in black and white" }, href: "classes/personal-training/", barsTitle: "Training performance", bars: [{ label: "Strength", value: 84 }, { label: "Endurance", value: 60 }, { label: "Mobility", value: 50 }, { label: "Recovery", value: 70 }] },
    cards: [
      { icon: "barbell", title: "Strength training", text: "Build muscle and raise your numbers with structured, progressive programmes.", href: "classes/strength/" },
      { icon: "heartbeat", title: "Conditioning", text: "Engine work for people who want to run, row and recover faster.", href: "classes/conditioning/" },
    ],
    more: "Learn more",
  },
  why: {
    statement: "A gym designed around real performance and long-term results.",
    points: [
      { title: "Group classes", text: "Coached sessions from certified trainers, every hour of the day." },
      { title: "Modern equipment", text: "Dedicated zones for lifting, cardio, mobility and recovery." },
      { title: "Flexible membership", text: "Plans for every schedule, with freeze and cancel on your terms." },
      { title: "Community support", text: "Train in a motivating, goal-driven environment." },
    ],
    image: { src: why, alt: "A man seen from behind in a grey technical hooded sweatshirt" },
    chart: { title: "Gym strengths", ours: "Our strengths", others: "Others", items: [{ label: "Equipment", ours: 90, others: 60 }, { label: "Trainers", ours: 95, others: 55 }, { label: "Satisfaction", ours: 88, others: 50 }, { label: "Cleanliness", ours: 92, others: 45 }] },
  },
  memberships: {
    n: "03", label: "Memberships", title: ["Flexible", "Membership"],
    tiers: [
      { name: "Basic", text: "For beginners and casual gym users.", price: "[00]", per: "/month", includes: ["Full gym access", "Locker room access", "Starter fitness assessment", "App booking"], cta: { href: "memberships/basic/", label: "Get started" } },
      { name: "Pro", featured: true, badge: "Most popular", text: "For people training four or more times a week.", price: "[00]", per: "/month", includes: ["Everything in Basic", "Unlimited group classes", "Nutrition guidance session", "[0] personal-training sessions a month"], cta: { href: "memberships/pro/", label: "Start Pro" } },
      { name: "Elite", text: "For athletes with a date on the calendar.", price: "[000]", per: "/month", includes: ["Everything in Pro", "Weekly personal training", "Recovery zone and sauna", "Guest passes"], cta: { href: "memberships/elite/", label: "Go Elite" } },
    ],
    note: "Prices are placeholders until the gym supplies them. Every membership can be frozen or cancelled with [N] days’ notice; trial terms and the health questionnaire are explained before your first session.",
  },
  classes: {
    n: "04", label: "Classes", title: ["Fitness", "Programs"], lead: "Programmes designed for real transformation and long-term fitness.",
    items: [
      { icon: "flame", title: "Weight loss", text: "Burn fat. Stay lean.", intensity: "mid", category: "cardio" },
      { icon: "barbell", title: "Muscle building", text: "Build size. Gain strength.", intensity: "mid", category: "strength" },
      { icon: "lightning", title: "HIIT", text: "Fast, intense calorie burn.", intensity: "high", category: "cardio" },
      { icon: "heartbeat", title: "Mobility and recovery", text: "Move better. Recover faster.", intensity: "low", category: "mobility" },
    ],
    image: { src: programs, alt: "A smiling man sitting cross-legged holding a foam roller" },
    cta: { href: "#schedule", label: "View the schedule" },
  },
  schedule: {
    n: "05", label: "Schedule", title: ["This", "Week"], days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    rows: {
      Mon: [CLASS("06:30", "Strength foundations", "mid", "strength", "[Coach]", "[0] spots"), CLASS("12:15", "Lunch HIIT", "high", "cardio", "[Coach]", "[0] spots left", true), CLASS("18:00", "Mobility flow", "low", "mobility", "[Coach]", "[0] spots")],
      Tue: [CLASS("07:00", "Spin", "high", "cardio", "[Coach]", "[0] spots"), CLASS("17:30", "Olympic lifting", "high", "strength", "[Coach]", "Waitlist", true), CLASS("19:00", "Core and conditioning", "mid", "cardio", "[Coach]", "[0] spots")],
      Wed: [CLASS("06:30", "Strength foundations", "mid", "strength", "[Coach]", "[0] spots"), CLASS("12:15", "Lunch HIIT", "high", "cardio", "[Coach]", "[0] spots"), CLASS("18:00", "Yoga for lifters", "low", "mobility", "[Coach]", "[0] spots")],
      Thu: [CLASS("07:00", "Spin", "high", "cardio", "[Coach]", "[0] spots"), CLASS("17:30", "Powerlifting club", "high", "strength", "[Coach]", "[0] spots left", true), CLASS("19:00", "Boxing conditioning", "high", "cardio", "[Coach]", "[0] spots")],
      Fri: [CLASS("06:30", "Strength foundations", "mid", "strength", "[Coach]", "[0] spots"), CLASS("12:15", "Lunch HIIT", "high", "cardio", "[Coach]", "[0] spots"), CLASS("18:00", "Mobility flow", "low", "mobility", "[Coach]", "[0] spots")],
      Sat: [CLASS("09:00", "Saturday sweat", "high", "cardio", "[Coach]", "[0] spots"), CLASS("10:30", "Beginners’ lifting", "low", "strength", "[Coach]", "[0] spots")],
      Sun: [CLASS("09:30", "Long row and run", "mid", "cardio", "[Coach]", "[0] spots"), CLASS("11:00", "Recovery and stretch", "low", "mobility", "[Coach]", "[0] spots")],
    },
    book: "Book", note: "Times and coaches are placeholders. Members book through the app; non-members can book a class as part of the free trial.",
  },
  trainers: {
    n: "06", label: "Trainers", title: ["Meet the", "Coaches"],
    people: [
      { name: "[Name]", role: "Fat-loss specialist", image: { src: trainer1, alt: "Portrait placeholder" }, href: "trainers/one/" },
      { name: "[Name]", role: "Strength coach", image: { src: trainer2, alt: "Portrait placeholder" }, href: "trainers/two/" },
      { name: "[Name]", role: "Conditioning", image: { src: trainer3, alt: "Portrait placeholder" }, href: "trainers/three/" },
      { name: "[Name]", role: "Mobility and yoga", image: { src: trainer4, alt: "Portrait placeholder" }, href: "trainers/four/" },
    ],
  },
  testimonials: {
    image: { src: quoteBg, alt: "An athlete crouched in a sprinter's start position" },
    items: [
      { text: "[Testimonial placeholder. Replace with a real member quote, used with their permission.]", name: "[Member name]", role: "Member since [year]", avatar: { src: trainer1, alt: "" } },
      { text: "[Testimonial placeholder. Replace with a real member quote, used with their permission.]", name: "[Member name]", role: "Member since [year]", avatar: { src: trainer4, alt: "" } },
    ],
  },
  bmi: { title: ["Check", "BMI", "Instantly"], fields: { height: "Height (cm)", weight: "Weight (kg)", age: "Age", sex: "Sex" }, sexes: ["Female", "Male", "Other"], submit: "Calculate it now", disclaimer: "BMI is a rough screening number, not a diagnosis. Consult a doctor before starting a new exercise programme." },
  insights: {
    n: "07", label: "Insights", title: ["Fitness", "Insights"],
    items: [
      { date: "[Date]", category: "Training", title: "The best exercises for building lean muscle", text: "Five compound lifts and how to progress them.", image: { src: blog1, alt: "An athlete reaching towards the camera, in black and white" }, href: "insights/lean-muscle/" },
      { date: "[Date]", category: "Habits", title: "How to stay consistent with your workout routine", text: "What our most consistent members do differently.", image: { src: blog2, alt: "A bearded man in a vest looking up into the light, in black and white" }, href: "insights/consistency/" },
    ],
    more: "Learn more",
  },
  footer: {
    image: { src: footerBg, alt: "" },
    title: ["Join the", "Gym today"], cta: { href: "trial/", label: "Book free trial" },
    links: { title: "Quick links", items: [{ href: "#about", label: "About" }, { href: "#trainers", label: "Trainers" }, { href: "#programs", label: "Classes" }, { href: "#memberships", label: "Memberships" }, { href: "#insights", label: "Insights" }, { href: "#contact", label: "Contact" }] },
    contact: { title: "Get in touch", phone: PHONE, email: "[hello@gym.example]", address: "[Street address], [Town]", directions: { href: "https://maps.google.com/", label: "Get directions" }, hours: [{ day: "Mon – Fri", time: "06:00 – 22:00" }, { day: "Sat – Sun", time: "08:00 – 20:00" }, { day: "Holidays", time: "[hours]" }] },
    socials: [{ href: "https://instagram.com/", label: "Instagram" }, { href: "https://facebook.com/", label: "Facebook" }, { href: "https://youtube.com/", label: "YouTube" }, { href: "https://tiktok.com/", label: "TikTok" }],
    legal: [{ href: "privacy/", label: "Privacy policy" }, { href: "terms/", label: "Trial and membership terms" }, { href: "waiver/", label: "Health waiver" }],
    disclaimer: "All members complete a health questionnaire and liability waiver before their first session. Consult a doctor before starting a new exercise programme. Figures on this page are placeholders.",
    copyright: "© 2026 [Gym]. All rights reserved.",
  },
};
