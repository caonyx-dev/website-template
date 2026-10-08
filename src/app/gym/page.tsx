import { content as c } from "@/templates/gym/content";
import Nav from "@/templates/gym/components/Nav";
import Hero from "@/templates/gym/components/Hero";
import About from "@/templates/gym/components/About";
import Programs from "@/templates/gym/components/Programs";
import Why from "@/templates/gym/components/Why";
import Memberships from "@/templates/gym/components/Memberships";
import Classes from "@/templates/gym/components/Classes";
import Schedule from "@/templates/gym/components/Schedule";
import Trainers from "@/templates/gym/components/Trainers";
import Testimonials from "@/templates/gym/components/Testimonials";
import Bmi from "@/templates/gym/components/Bmi";
import Insights from "@/templates/gym/components/Insights";
import Footer from "@/templates/gym/components/Footer";
import MobileBar from "@/templates/gym/components/MobileBar";

export default function GymHome() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2.5 focus:text-on-primary">Skip to content</a>
      <Nav brand={c.brand} nav={c.nav} />
      <main id="main" className="relative">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 mx-auto hidden max-w-[1320px] grid-cols-3 px-8 lg:grid"><span className="border-l border-hairline/60" /><span className="border-l border-hairline/60" /><span className="border-x border-hairline/60" /></div>
        <div className="relative z-[1]">
          <Hero h={c.hero} />
          <About a={c.about} />
          <Programs p={c.programs} />
          <Why w={c.why} brand={c.brand} />
          <Memberships m={c.memberships} />
          <Classes k={c.classes} />
          <Schedule s={c.schedule} />
          <Trainers t={c.trainers} />
          <Testimonials t={c.testimonials} />
          <Bmi b={c.bmi} />
          <Insights i={c.insights} />
        </div>
      </main>
      <Footer brand={c.brand} f={c.footer} />
      <MobileBar cta={c.nav.cta} phone={c.nav.phone} />
    </>
  );
}
