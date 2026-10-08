import SmoothScroll from "@/components/SmoothScroll";
import { content as c } from "@/templates/tech-startup/content";
import Nav from "@/templates/tech-startup/components/Nav";
import Hero from "@/templates/tech-startup/components/Hero";
import About from "@/templates/tech-startup/components/About";
import Capabilities from "@/templates/tech-startup/components/Capabilities";
import Runtime from "@/templates/tech-startup/components/Runtime";
import ServiceIndex from "@/templates/tech-startup/components/ServiceIndex";
import Explainer from "@/templates/tech-startup/components/Explainer";
import Clients from "@/templates/tech-startup/components/Clients";
import Faq from "@/templates/tech-startup/components/Faq";
import News from "@/templates/tech-startup/components/News";
import Footer from "@/templates/tech-startup/components/Footer";

export default function TechStartupHome() {
  return (
    <SmoothScroll>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:font-semibold focus:text-on-primary"
      >
        Skip to content
      </a>
      <Nav brand={c.brand} nav={c.nav} />
      <main id="main" tabIndex={-1}>
        <Hero h={c.hero} />
        <About a={c.about} />
        <Capabilities c={c.capabilities} />
        <Runtime r={c.runtime} />
        <ServiceIndex s={c.services} />
        <Explainer e={c.explainer} />
        <Clients c={c.clients} />
        <Faq f={c.faq} />
        <News n={c.news} />
      </main>
      <Footer brand={c.brand} f={c.footer} id="contact" />
    </SmoothScroll>
  );
}
