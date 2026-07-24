import type { SiteContent } from "@/types/site-content"

const PLACEHOLDER_RE = /\[.+?\]/

function isReal(value: string): boolean {
  return !!value && !PLACEHOLDER_RE.test(value)
}

export function buildJsonLd(config: SiteContent): object[] {
  const { site, contact, faq, seo, brand } = config
  const baseUrl = site.canonicalUrl

  const schemas: object[] = []

  // WebSite
  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: baseUrl,
    inLanguage: site.language,
  })

  // WebPage
  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: site.title,
    description: site.description,
    url: baseUrl,
    inLanguage: site.language,
    dateModified: site.lastUpdated,
    isPartOf: { "@type": "WebSite", url: baseUrl },
  })

  // ProfessionalService lub FinancialService
  const serviceSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": seo.schemaType,
    name: isReal(contact.companyName) ? contact.companyName : brand.logoText,
    url: baseUrl,
    description: site.description,
    areaServed: isReal(contact.serviceArea)
      ? contact.serviceArea
      : "Polska",
  }

  if (isReal(contact.phone)) {
    serviceSchema.telephone = contact.phone
  }
  if (isReal(contact.email)) {
    serviceSchema.email = contact.email
  }
  if (isReal(contact.address)) {
    serviceSchema.address = {
      "@type": "PostalAddress",
      addressCountry: "PL",
      streetAddress: contact.address,
    }
  }

  schemas.push(serviceSchema)

  // FAQPage – tylko gdy mamy co najmniej 3 pytania
  if (faq.items.length >= 3) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    })
  }

  // Person – tylko gdy dane doradcy są wypełnione (bez placeholderów)
  if (isReal(contact.adviserName)) {
    const person: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: contact.adviserName,
      jobTitle: contact.adviserTitle || "Doradca kredytowy",
      worksFor: isReal(contact.companyName)
        ? { "@type": "Organization", name: contact.companyName }
        : undefined,
      url: baseUrl,
    }
    if (isReal(contact.phone)) person.telephone = contact.phone
    if (isReal(contact.email)) person.email = contact.email

    schemas.push(person)
  }

  return schemas
}
