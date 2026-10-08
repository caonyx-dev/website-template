import { content as c } from "@/templates/marketing-agency/content";
import Nav from "@/templates/marketing-agency/components/Nav";
import Hero from "@/templates/marketing-agency/components/Hero";
import About from "@/templates/marketing-agency/components/About";
import Partners from "@/templates/marketing-agency/components/Partners";
import Services from "@/templates/marketing-agency/components/Services";
import Pricing from "@/templates/marketing-agency/components/Pricing";
import Work from "@/templates/marketing-agency/components/Work";
import Awards from "@/templates/marketing-agency/components/Awards";
import Team from "@/templates/marketing-agency/components/Team";
import Bento from "@/templates/marketing-agency/components/Bento";
import Testimonial from "@/templates/marketing-agency/components/Testimonial";
import Journal from "@/templates/marketing-agency/components/Journal";
import Contact from "@/templates/marketing-agency/components/Contact";
import Footer from "@/templates/marketing-agency/components/Footer";
import ActionBar from "@/templates/marketing-agency/components/ActionBar";

export default function MarketingAgencyHome() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-(--t-on-primary)">Skip to content</a>
      <Nav brand={c.brand} nav={c.nav} />
      <main id="main" tabIndex={-1}>
        <Hero h={c.hero} />
        <About a={c.about} />
        <Partners p={c.partners} />
        <Services s={c.services} />
        <Pricing p={c.pricing} />
        <Work w={c.work} />
        <Awards a={c.awards} />
        <Team t={c.team} />
        <Bento b={c.bento} />
        <Testimonial t={c.testimonial} />
        <Journal j={c.journal} />
        <Contact c={c.contact} />
      </main>
      <Footer brand={c.brand} f={c.footer} />
      <ActionBar cta={c.nav.cta} email={c.contact.email} />
    </>
  );
}
