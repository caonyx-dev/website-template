import { content as c } from "@/templates/corporate/content";
import Header from "@/templates/corporate/components/Header";
import Hero from "@/templates/corporate/components/Hero";
import About from "@/templates/corporate/components/About";
import Marquee from "@/templates/corporate/components/Marquee";
import ServicesList from "@/templates/corporate/components/ServicesList";
import Numbers from "@/templates/corporate/components/Numbers";
import Testimonials from "@/templates/corporate/components/Testimonials";
import Features from "@/templates/corporate/components/Features";
import CaseStudies from "@/templates/corporate/components/CaseStudies";
import Logos from "@/templates/corporate/components/Logos";
import VideoBand from "@/templates/corporate/components/VideoBand";
import Blog from "@/templates/corporate/components/Blog";
import Contact from "@/templates/corporate/components/Contact";
import Footer from "@/templates/corporate/components/Footer";

export default function CorporateHome() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2.5 focus:text-white">Skip to content</a>
      <Header brand={c.brand} nav={c.nav} />
      <main id="main">
        <Hero h={c.hero} />
        <About a={c.about} />
        <Marquee items={c.marquee} />
        <ServicesList s={c.services} />
        <Numbers n={c.numbers} />
        <Testimonials t={c.testimonials} />
        <Features f={c.features} />
        <CaseStudies c={c.cases} />
        <Logos l={c.logos} />
        <VideoBand v={c.video} />
        <Blog b={c.blog} />
        <Contact c={c.contact} />
      </main>
      <Footer f={c.footer} />
    </>
  );
}
