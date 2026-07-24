export type Cta = {
  label: string
  href: string
}

export type ContentSection =
  | {
      type: "text"
      id: string
      title: string
      intro?: string
      paragraphs: string[]
      cta?: Cta
    }
  | {
      type: "split"
      id: string
      title: string
      intro?: string
      columns: Array<{
        title: string
        paragraphs: string[]
        bullets?: string[]
      }>
      cta?: Cta
    }
  | {
      type: "checklist"
      id: string
      title: string
      intro?: string
      groups: Array<{
        title: string
        items: string[]
      }>
      notice?: string
      cta?: Cta
    }
  | {
      type: "cards"
      id: string
      title: string
      intro?: string
      items: Array<{
        title: string
        text: string
      }>
      cta?: Cta
    }
  | {
      type: "highlight"
      id: string
      title: string
      paragraphs: string[]
      notice?: string
      cta?: Cta
    }

export type SiteContent = {
  site: {
    name: string
    domain: string
    canonicalUrl: string
    language: string
    locale: string
    title: string
    description: string
    ogTitle: string
    ogDescription: string
    lastUpdated: string
  }

  brand: {
    logoText: string
    shortName: string
    accentText?: string
  }

  theme: {
    primary: string
    primaryHover: string
    primarySoft: string
  }

  contact: {
    adviserName: string
    adviserTitle?: string
    companyName: string
    phone: string
    phoneDisplay: string
    email: string
    address: string
    nip: string
    serviceArea: string
    adviserImage: string
    privacyEmail: string
  }

  navigation: Array<{
    label: string
    href: string
  }>

  hero: {
    eyebrow?: string
    h1: string
    lead: string
    primaryCta: Cta
    secondaryCta?: Cta
    checklistTitle?: string
    checklist: string[]
    badge?: string
  }

  quickAnswer: {
    id: string
    title: string
    paragraphs: string[]
    notice?: {
      title?: string
      text: string
    }
  }

  sections: ContentSection[]

  process: {
    id: string
    title: string
    intro?: string
    steps: Array<{
      title: string
      text: string
    }>
  }

  issues: {
    id: string
    title: string
    intro?: string
    items: string[]
    notice?: string
  }

  form: {
    id: string
    title: string
    intro: string
    submitLabel: string
    successTitle: string
    successMessage: string
    languageNotice?: string
    creditTypeOptions: string[]
    situationOptions: string[]
    incomeOptions: string[]
    consentText: string
  }

  adviser: {
    id: string
    title: string
    text: string[]
  }

  faq: {
    id: string
    title: string
    items: Array<{
      question: string
      answer: string
    }>
  }

  finalCta: {
    title: string
    text: string
    buttonLabel: string
    buttonHref: string
  }

  footer: {
    disclaimer: string
    copyright: string
  }

  privacyPolicy: {
    adminName: string
    adminAddress: string
    contactEmail: string
    dataRetentionPeriod: string
    dataRecipients: string[]
    processingPurpose: string
    legalBasis: string
  }

  seo: {
    primaryKeyword: string
    secondaryKeywords: string[]
    noindex: boolean
    schemaType: "ProfessionalService" | "FinancialService"
  }
}
