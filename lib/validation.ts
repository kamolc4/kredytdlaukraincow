import type { SiteContent } from "@/types/site-content"

const PLACEHOLDER_RE = /\[.+?\]/

function hasPlaceholder(value: string): boolean {
  return PLACEHOLDER_RE.test(value)
}

function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(`[site-config] ${message}`)
  }
}

function warn(message: string): void {
  console.warn(`\x1b[33m[site-config] WARN: ${message}\x1b[0m`)
}

export function validateSiteContent(config: SiteContent): void {
  const { site, hero, faq, form, seo, contact } = config

  // Wymagania bezwarunkowe
  assert(!!site.domain, "site.domain nie może być pusty")
  assert(
    site.canonicalUrl.startsWith("https://"),
    "site.canonicalUrl musi zaczynać się od https://"
  )
  assert(!!site.title, "site.title nie może być pusty")
  assert(!!site.description, "site.description nie może być pusty")
  assert(!!hero.h1, "hero.h1 nie może być pusty")
  assert(
    config.sections.length >= 1,
    "Musi istnieć co najmniej jedna sekcja w sections[]"
  )
  assert(
    faq.items.length >= 3,
    "FAQ musi zawierać co najmniej 3 pytania i odpowiedzi"
  )
  assert(
    form.creditTypeOptions.length >= 2,
    "form.creditTypeOptions musi zawierać co najmniej 2 opcje"
  )
  assert(
    form.situationOptions.length >= 2,
    "form.situationOptions musi zawierać co najmniej 2 opcje"
  )
  assert(
    form.incomeOptions.length >= 2,
    "form.incomeOptions musi zawierać co najmniej 2 opcje"
  )

  // Gdy strona jest indeksowalna – nie może zawierać placeholderów
  if (!seo.noindex) {
    const placeholderFields: Array<[string, string]> = [
      ["site.name", site.name],
      ["site.domain", site.domain],
      ["site.canonicalUrl", site.canonicalUrl],
      ["site.title", site.title],
      ["site.description", site.description],
      ["hero.h1", hero.h1],
      ["contact.adviserName", contact.adviserName],
      ["contact.companyName", contact.companyName],
      ["contact.phone", contact.phone],
      ["contact.email", contact.email],
      ["contact.address", contact.address],
      ["contact.nip", contact.nip],
      ["form.consentText", form.consentText],
    ]

    const withPlaceholders = placeholderFields.filter(([, v]) =>
      hasPlaceholder(v)
    )

    if (withPlaceholders.length > 0) {
      const fields = withPlaceholders.map(([k]) => `  • ${k}`).join("\n")
      throw new Error(
        `[site-config] seo.noindex jest false, ale następujące pola zawierają placeholdery:\n${fields}\n\nUzupełnij wszystkie dane przed opublikowaniem strony.`
      )
    }
  } else {
    // Przy noindex tylko ostrzeżenia
    const sensitiveFields: Array<[string, string]> = [
      ["site.domain", site.domain],
      ["site.title", site.title],
      ["hero.h1", hero.h1],
    ]
    sensitiveFields.forEach(([key, val]) => {
      if (hasPlaceholder(val)) {
        warn(`${key} zawiera placeholder – pamiętaj uzupełnić przed publikacją`)
      }
    })
  }
}
