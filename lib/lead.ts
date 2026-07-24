export type LeadFormData = {
  // Dane kontaktowe
  name: string
  phone: string
  email?: string
  // Dane kredytowe
  creditType: string
  situation: string
  income: string
  description?: string
  // Zgoda
  consent: boolean
  // Honeypot (musi być pusty)
  website?: string
  // Pola techniczne
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

export function validateLeadForm(
  data: unknown
): { valid: true; data: LeadFormData } | { valid: false; errors: Record<string, string> } {
  const errors: Record<string, string> = {}
  const raw = data as Record<string, unknown>

  // Honeypot – cichy błąd (bot)
  if (raw.website) {
    return { valid: true, data: raw as unknown as LeadFormData }
  }

  if (!raw.name || typeof raw.name !== "string" || raw.name.trim().length < 2) {
    errors.name = "Podaj imię (minimum 2 znaki)"
  }

  if (!raw.phone || typeof raw.phone !== "string") {
    errors.phone = "Podaj numer telefonu"
  } else {
    const digits = raw.phone.replace(/[\s\-().+]/g, "")
    if (!/^\d{9,12}$/.test(digits)) {
      errors.phone = "Podaj poprawny numer telefonu (9–12 cyfr)"
    }
  }

  if (raw.email && typeof raw.email === "string" && raw.email.trim()) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw.email)) {
      errors.email = "Podaj poprawny adres e-mail"
    }
  }

  if (!raw.creditType || typeof raw.creditType !== "string") {
    errors.creditType = "Wybierz rodzaj kredytu"
  }

  if (!raw.situation || typeof raw.situation !== "string") {
    errors.situation = "Wybierz swoją sytuację"
  }

  if (!raw.income || typeof raw.income !== "string") {
    errors.income = "Wybierz przedział dochodów"
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
      name: String(raw.name).trim(),
      phone: String(raw.phone).trim(),
      email: raw.email ? String(raw.email).trim() : undefined,
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

  const rows = [
    ["Strona", data.siteName],
    ["URL", data.pageUrl],
    ["Fraza", data.primaryKeyword],
    ["Data", now],
    ["─────", "──────────────────────────"],
    ["Imię", data.name],
    ["Telefon", data.phone],
    ["E-mail", data.email || "–"],
    ["─────", "──────────────────────────"],
    ["Rodzaj kredytu", data.creditType],
    ["Sytuacja", data.situation],
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
