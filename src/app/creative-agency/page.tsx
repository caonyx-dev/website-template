import { content as c } from "@/templates/creative-agency/content";
import Header from "@/templates/creative-agency/components/Header";
import Hero from "@/templates/creative-agency/components/Hero";
import About from "@/templates/creative-agency/components/About";
import Services from "@/templates/creative-agency/components/Services";
import Work from "@/templates/creative-agency/components/Work";
import Team from "@/templates/creative-agency/components/Team";
import Testimonials from "@/templates/creative-agency/components/Testimonials";
import Blog from "@/templates/creative-agency/components/Blog";
import Footer from "@/templates/creative-agency/components/Footer";

export default function CreativeAgencyHome() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2.5 focus:text-white">Skip to content</a>
      <Header brand={c.brand} nav={c.nav} />
      <main id="main">
        <Hero h={c.hero} />
        <About a={c.about} />
        <Services s={c.services} />
        <Work w={c.work} />
        <Team t={c.team} />
        <Testimonials t={c.testimonials} />
        <Blog b={c.blog} />
      </main>
      <Footer c={c.cta} f={c.footer} />
    </>
  );
}
