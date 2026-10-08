import { content as c } from "@/templates/creative-studio/content";
import Header from "@/templates/creative-studio/components/Header";
import Hero from "@/templates/creative-studio/components/Hero";
import Stats from "@/templates/creative-studio/components/Stats";
import Portfolio from "@/templates/creative-studio/components/Portfolio";
import Services from "@/templates/creative-studio/components/Services";
import About from "@/templates/creative-studio/components/About";
import Testimonials from "@/templates/creative-studio/components/Testimonials";
import Team from "@/templates/creative-studio/components/Team";
import Pricing from "@/templates/creative-studio/components/Pricing";
import Faq from "@/templates/creative-studio/components/Faq";
import News from "@/templates/creative-studio/components/News";
import Contact from "@/templates/creative-studio/components/Contact";
import Footer from "@/templates/creative-studio/components/Footer";

export default function CreativeStudioHome() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2.5 focus:text-ink">Skip to content</a>
      <Header brand={c.brand} nav={c.nav} />
      <main id="main">
        <Hero h={c.hero} />
        <Stats st={c.stats} />
        <Portfolio p={c.portfolio} />
        <Services s={c.services} />
        <About a={c.about} brand={c.brand} />
        <Testimonials t={c.testimonials} />
        <Team t={c.team} />
        <Pricing p={c.pricing} />
        <Faq f={c.faq} />
        <News n={c.news} />
        <Contact c={c.contact} />
      </main>
      <Footer f={c.footer} />
    </>
  );
}
