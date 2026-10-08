import { content as c } from "@/templates/law-firm/content";
import Nav from "@/templates/law-firm/components/Nav";
import Hero from "@/templates/law-firm/components/Hero";
import EntryCards from "@/templates/law-firm/components/EntryCards";
import About from "@/templates/law-firm/components/About";
import Timeline from "@/templates/law-firm/components/Timeline";
import Practices from "@/templates/law-firm/components/Practices";
import Attorneys from "@/templates/law-firm/components/Attorneys";
import Testimonials from "@/templates/law-firm/components/Testimonials";
import Insights from "@/templates/law-firm/components/Insights";
import Counters from "@/templates/law-firm/components/Counters";
import Faq from "@/templates/law-firm/components/Faq";
import Consultation from "@/templates/law-firm/components/Consultation";
import Contact from "@/templates/law-firm/components/Contact";
import Footer from "@/templates/law-firm/components/Footer";
import CallBar from "@/templates/law-firm/components/CallBar";

export default function LawFirmHome() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:bg-primary focus:px-4 focus:py-2.5 focus:text-white">Skip to content</a>
      <Nav brand={c.brand} top={c.topbar} nav={c.nav} />
      {/* tabIndex lets the skip link actually move focus, not just scroll. */}
      <main id="main" tabIndex={-1} className="scroll-mt-[112px] focus:outline-none">
        <Hero h={c.hero} />
        <EntryCards cards={c.entryCards} />
        <About a={c.about} />
        <Timeline t={c.timeline} />
        <Practices p={c.practices} />
        <Testimonials t={c.testimonials} />
        <Attorneys a={c.attorneys} />
        <Insights i={c.insights} />
        <Counters items={c.counters} />
        <Faq f={c.faq} />
        <Consultation c={c.consultation} />
        <Contact c={c.contact} />
      </main>
      <Footer brand={c.brand} f={c.footer} />
      <CallBar cta={c.nav.cta} phone={c.topbar.phonePrimary} />
    </>
  );
}
