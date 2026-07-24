import { NextRequest, NextResponse } from "next/server"
import { validateLeadForm, buildLeadEmail } from "@/lib/lead"

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe dane" }, { status: 400 })
  }

  const result = validateLeadForm(body)

  if (!result.valid) {
    return NextResponse.json(
      { error: "Błąd walidacji", fieldErrors: result.errors },
      { status: 422 }
    )
  }

  const { data } = result

  // Honeypot – zwróć sukces, aby nie zdradzać filtrowania botów
  if (data.website) {
    return NextResponse.json({ success: true })
  }

  const apiKey = process.env.RESEND_API_KEY
  const contactEmail = process.env.CONTACT_EMAIL
  const fromEmail = process.env.FROM_EMAIL || "lead@noreply.example.com"

  if (!apiKey || !contactEmail) {
    if (process.env.NODE_ENV === "development") {
      console.log("\n──────────────────────────────────────")
      console.log("📩 LEAD (tryb dev – Resend nie skonfigurowany)")
      console.log("──────────────────────────────────────")
      console.log(`Strona:    ${data.siteName}`)
      console.log(`Imię:      ${data.name}`)
      console.log(`Telefon:   ${data.phone}`)
      console.log(`E-mail:    ${data.email || "–"}`)
      console.log(`Kredyt:    ${data.creditType}`)
      console.log(`Sytuacja:  ${data.situation}`)
      console.log(`Dochód:    ${data.income}`)
      if (data.description) console.log(`Opis:      ${data.description}`)
      console.log("──────────────────────────────────────\n")
      return NextResponse.json({ success: true })
    }
    return NextResponse.json(
      { error: "Wysyłanie formularza jest tymczasowo niedostępne. Zadzwoń do nas bezpośrednio." },
      { status: 503 }
    )
  }

  const { Resend } = await import("resend")
  const resend = new Resend(apiKey)
  const email = buildLeadEmail(data)

  try {
    await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      subject: email.subject,
      html: email.html,
      text: email.text,
      replyTo: data.email || undefined,
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[lead] Błąd wysyłania e-mail:", err)
    return NextResponse.json(
      { error: "Nie udało się wysłać formularza. Spróbuj ponownie lub zadzwoń do nas." },
      { status: 500 }
    )
  }
}
