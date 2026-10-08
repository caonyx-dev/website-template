import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ModelBand from "@/components/ModelBand";
import { Button } from "@/components/ui";
import { Intro, DarkBand, Services, Process, Testimonial, Contact, SiteFooter } from "@/components/sections";
import WorkGallery from "@/templates/architect/components/WorkGallery";
import { content as c } from "@/templates/architect/content";

export default function ArchitectHome() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2.5 focus:text-on-primary">Skip to content</a>
      <Nav brand={c.brand} {...c.nav} />
      <main id="main">
        <Hero
          image={c.hero.image}
          eyebrow={c.hero.eyebrow}
          lines={c.hero.lines}
          lead={c.hero.lead}
          caption={c.hero.caption}
          scrollTo={c.hero.scrollTo}
          stripe={c.hero.stripe}
          actions={
            <>
              <Button href={c.hero.primary.href}>{c.hero.primary.label} <ArrowRightIcon size={18} weight="light" aria-hidden="true" /></Button>
              {c.hero.secondary && <Button href={c.hero.secondary.href} variant="ghost-dark">{c.hero.secondary.label}</Button>}
            </>
          }
        />
        <Intro c={c.intro} />
        <DarkBand c={c.band} />
        <Services c={c.services} />
        <ModelBand {...c.model} />
        <Process c={c.process} />
        <WorkGallery c={c.work} />
        <Testimonial c={c.quote} />
        <Contact c={c.contact} />
      </main>
      <SiteFooter brand={c.brand} c={c.footer} />
    </>
  );
}
