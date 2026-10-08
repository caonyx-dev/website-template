import SmoothScroll from "@/components/SmoothScroll";
import { content as c } from "@/templates/real-estate/content";
import Nav from "@/templates/real-estate/components/Nav";
import Hero from "@/templates/real-estate/components/Hero";
import About from "@/templates/real-estate/components/About";
import Impact from "@/templates/real-estate/components/Impact";
import Services from "@/templates/real-estate/components/Services";
import Projects from "@/templates/real-estate/components/Projects";
import Commitment from "@/templates/real-estate/components/Commitment";
import Testimonial from "@/templates/real-estate/components/Testimonial";
import Partners from "@/templates/real-estate/components/Partners";
import Team from "@/templates/real-estate/components/Team";
import EnquiryBand from "@/templates/real-estate/components/EnquiryBand";
import Insights from "@/templates/real-estate/components/Insights";
import Closing from "@/templates/real-estate/components/Closing";
import Footer from "@/templates/real-estate/components/Footer";

export default function RealEstateHome() {
  return (
    <SmoothScroll>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:font-semibold focus:text-on-primary"
      >
        Skip to content
      </a>
      <Nav brand={c.brand} nav={c.nav} />
      <main id="main" tabIndex={-1}>
        <Hero h={c.hero} />
        <About a={c.about} />
        <Impact i={c.impact} />
        <Services s={c.services} />
        <Projects p={c.projects} />
        <Commitment c={c.commitment} />
        <Testimonial t={c.testimonial} />
        <Partners p={c.partners} />
        <Team t={c.team} />
        <EnquiryBand e={c.enquiry} />
        <Insights n={c.insights} />
        <Closing c={c.closing} brand={c.brand} />
      </main>
      <Footer brand={c.brand} f={c.footer} />
    </SmoothScroll>
  );
}
