import { siteContent } from "@/lib/site-config"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import QuickAnswer from "@/components/QuickAnswer"
import SectionRenderer from "@/components/SectionRenderer"
import ProcessSection from "@/components/ProcessSection"
import IssuesSection from "@/components/IssuesSection"
import LeadForm from "@/components/LeadForm"
import AdviserSection from "@/components/AdviserSection"
import FAQ from "@/components/FAQ"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"
import StickyMobileCTA from "@/components/StickyMobileCTA"
import WhoIHelpSection from "@/components/WhoIHelpSection"

export default function HomePage() {
  const {
    brand,
    contact,
    navigation,
    hero,
    quickAnswer,
    sections,
    process,
    issues,
    form,
    adviser,
    faq,
    finalCta,
    footer,
    site,
  } = siteContent

  return (
    <>
      <Header
        brand={brand}
        navigation={navigation}
        phone={contact.phone}
        phoneDisplay={contact.phoneDisplay}
        ctaLabel={hero.primaryCta.label}
        ctaHref={hero.primaryCta.href}
      />

      <main id="main-content">
        <Hero hero={hero} />

        <QuickAnswer section={quickAnswer} />

        {sections.map((section) => (
          <SectionRenderer key={section.id} section={section} />
        ))}

        <IssuesSection issues={issues} />

        <ProcessSection process={process} />

        <AdviserSection
          adviser={adviser}
          contact={contact}
        />

        <WhoIHelpSection />

        <LeadForm
          config={form}
          siteName={site.name}
          primaryKeyword={siteContent.seo.primaryKeyword}
        />

        <FAQ faq={faq} />

        <FinalCTA finalCta={finalCta} />
      </main>

      <Footer footer={footer} brand={brand} contact={contact} siteName={site.name} />
      <StickyMobileCTA />
    </>
  )
}
