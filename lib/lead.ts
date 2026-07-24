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

function formatPhoneDisplay(phone: string): string {
  if (!phone.startsWith("+48") || phone.length !== 12) return phone
  const d = phone.slice(3)
  return `+48 ${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6, 9)}`
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

export function buildLeadEmail(data: LeadFormData): { subject: string; html: string; text: string } {
  const now = new Date().toLocaleString("pl-PL", { timeZone: "Europe/Warsaw" })

  const utm = [
    data.utmSource ? `source: ${data.utmSource}` : null,
    data.utmMedium ? `medium: ${data.utmMedium}` : null,
    data.utmCampaign ? `campaign: ${data.utmCampaign}` : null,
    data.utmTerm ? `term: ${data.utmTerm}` : null,
    data.utmContent ? `content: ${data.utmContent}` : null,
  ]
    .filter(Boolean)
    .join(", ")

  const subject = `Nowe zapytanie – ${data.siteName} [${data.primaryKeyword}]`

  const rows: [string, string][] = [
    ["Strona", data.siteName],
    ["URL", data.pageUrl],
    ["Fraza", data.primaryKeyword],
    ["Data", now],
    ["─────", "──────────────────────────"],
    ["Imię i nazwisko", data.name],
    ["Telefon", formatPhoneDisplay(data.phone)],
    ["E-mail", data.email],
    ["─────", "──────────────────────────"],
    ["Rodzaj kredytu", data.creditType],
    ["Status pobytu", data.situation],
    ["Dochód", data.income],
    ["Opis", data.description || "–"],
    ["─────", "──────────────────────────"],
    ["UTM", utm || "–"],
  ]

  const textBody = rows.map(([k, v]) => `${k}: ${v}`).join("\n")

  const htmlRows = rows
    .map(([k, v]) =>
      k.startsWith("─")
        ? `<tr><td colspan="2" style="padding:4px 0;border-top:1px solid #e0e0e0"></td></tr>`
        : `<tr><td style="padding:4px 12px 4px 0;color:#555;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:4px 0;font-weight:500">${v}</td></tr>`
    )
    .join("")

  const html = `<!DOCTYPE html><html lang="pl"><body style="font-family:system-ui,sans-serif;color:#111;max-width:560px;margin:0 auto;padding:24px">
<h2 style="margin:0 0 16px;font-size:18px">Nowe zapytanie kredytowe</h2>
<table style="width:100%;border-collapse:collapse">${htmlRows}</table>
<p style="margin-top:24px;font-size:12px;color:#999">Wiadomość wygenerowana automatycznie przez ${data.siteName}</p>
</body></html>`

  return { subject, html, text: textBody }
}
