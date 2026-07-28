export type LeadFormData = {
  name: string
  phone: string
  email: string
  creditType: string
  situation: string
  income: string
  description?: string
  consent: boolean
  website?: string
  siteName: string
  pageUrl: string
  primaryKeyword: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmTerm?: string
  utmContent?: string
}

export type LeadSubmitResult =
  | { success: true }
  | { success: false; error: string; fieldErrors?: Record<string, string> }

function isValidName(value: string): boolean {
  const trimmed = value.trim()
  if (trimmed.length < 3) return false
  const parts = trimmed.split(/\s+/)
  if (parts.length < 2) return false
  if (!parts.every((p) => /\p{L}/u.test(p))) return false
  if (!/^[\p{L}\p{M}'\-\s]+$/u.test(trimmed)) return false
  return true
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function normalizePhone(raw: string): string {
  return raw.replace(/[^\d+]/g, "")
}

function isValidPhone(normalized: string): boolean {
  if (!/^\+48\d{9}$/.test(normalized)) return false
  const digits = normalized.slice(3)
  if (/^(\d)\1{8}$/.test(digits)) return false
  if (digits === "123456789") return false
  return true
}


export function validateLeadForm(
  data: unknown
): { valid: true; data: LeadFormData } | { valid: false; errors: Record<string, string> } {
  const errors: Record<string, string> = {}
  const raw = data as Record<string, unknown>

  // Honeypot – cichy sukces (bot)
  if (raw.website) {
    return { valid: true, data: raw as unknown as LeadFormData }
  }

  // Imię i nazwisko
  const rawName = typeof raw.name === "string" ? raw.name : ""
  if (!isValidName(rawName)) {
    errors.name = "Podaj imię i nazwisko (np. Anna Kowalska)."
  }

  // Telefon – oczekiwany format +48XXXXXXXXX
  const rawPhone = typeof raw.phone === "string" ? raw.phone : ""
  const normalizedPhone = normalizePhone(rawPhone)
  if (!isValidPhone(normalizedPhone)) {
    errors.phone = "Podaj poprawny 9-cyfrowy numer telefonu."
  }

  // E-mail – teraz wymagany
  const rawEmail = typeof raw.email === "string" ? raw.email.trim().toLowerCase() : ""
  if (!rawEmail) {
    errors.email = "Podaj poprawny adres e-mail."
  } else if (!isValidEmail(rawEmail)) {
    errors.email = "Podaj poprawny adres e-mail."
  }

  if (!raw.creditType || typeof raw.creditType !== "string") {
    errors.creditType = "Wybierz rodzaj kredytu"
  }

  if (!raw.situation || typeof raw.situation !== "string") {
    errors.situation = "Wybierz swoją sytuację"
  }

  if (!raw.income || typeof raw.income !== "string") {
    errors.income = "Wybierz źródło dochodu"
  }

  if (!raw.consent) {
    errors.consent = "Zgoda na kontakt jest wymagana"
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors }
  }

  return {
    valid: true,
    data: {
      name: rawName.trim(),
      phone: normalizedPhone,
      email: rawEmail,
      creditType: String(raw.creditType),
      situation: String(raw.situation),
      income: String(raw.income),
      description: raw.description ? String(raw.description).trim() : undefined,
      consent: Boolean(raw.consent),
      website: raw.website ? String(raw.website) : undefined,
      siteName: String(raw.siteName || ""),
      pageUrl: String(raw.pageUrl || ""),
      primaryKeyword: String(raw.primaryKeyword || ""),
      utmSource: raw.utmSource ? String(raw.utmSource) : undefined,
      utmMedium: raw.utmMedium ? String(raw.utmMedium) : undefined,
      utmCampaign: raw.utmCampaign ? String(raw.utmCampaign) : undefined,
      utmTerm: raw.utmTerm ? String(raw.utmTerm) : undefined,
      utmContent: raw.utmContent ? String(raw.utmContent) : undefined,
    },
  }
}

