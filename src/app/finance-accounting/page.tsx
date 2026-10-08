import { content as c } from "@/templates/finance-accounting/content";
import Nav from "@/templates/finance-accounting/components/Nav";
import Hero from "@/templates/finance-accounting/components/Hero";
import About from "@/templates/finance-accounting/components/About";
import Services from "@/templates/finance-accounting/components/Services";
import Tiles from "@/templates/finance-accounting/components/Tiles";
import Process from "@/templates/finance-accounting/components/Process";
import Stats from "@/templates/finance-accounting/components/Stats";
import Testimonials from "@/templates/finance-accounting/components/Testimonials";
import Badges from "@/templates/finance-accounting/components/Badges";
import Pricing from "@/templates/finance-accounting/components/Pricing";
import Deadlines from "@/templates/finance-accounting/components/Deadlines";
import Guides from "@/templates/finance-accounting/components/Guides";
import Contact from "@/templates/finance-accounting/components/Contact";
import SocialStrip from "@/templates/finance-accounting/components/SocialStrip";
import Footer from "@/templates/finance-accounting/components/Footer";
import MobileBar from "@/templates/finance-accounting/components/MobileBar";

export default function FinanceAccountingHome() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:bg-accent focus:px-4 focus:py-2.5 focus:text-ink">Skip to content</a>
      <Nav brand={c.brand} topbar={c.topbar} nav={c.nav} />
      <main id="main">
        <Hero h={c.hero} />
        <About a={c.about} />
        <Services s={c.services} />
        <Tiles tiles={c.tiles} />
        <Process p={c.process} />
        <Stats s={c.stats} />
        <Testimonials t={c.testimonials} />
        <Badges b={c.badges} />
        <Pricing p={c.pricing} />
        <Deadlines d={c.deadlines} />
        <Guides g={c.guides} />
        <Contact c={c.contact} />
        <SocialStrip socials={c.socials} />
      </main>
      <Footer brand={c.brand} f={c.footer} />
      <MobileBar primary={c.hero.cta} phone={c.nav.phone} />
    </>
  );
}
