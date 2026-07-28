import { NextRequest, NextResponse } from "next/server"
import { validateLeadForm } from "@/lib/lead"

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

function field(value: string | undefined): string {
  return value ? escapeHtml(value) : "-"
}

function buildTelegramMessage(data: ReturnType<typeof validateLeadForm> & { valid: true }): string {
  const d = data.data
  return [
    `🏠 <b>New Lead</b>`,
    ``,
    `👤 <b>Name:</b> ${field(d.name)}`,
    `📞 <b>Phone:</b> ${field(d.phone)}`,
    `📧 <b>Email:</b> ${field(d.email)}`,
    ``,
    `🇺🇦 <b>Status:</b> ${field(d.situation)}`,
    `💼 <b>Employment:</b> ${field(d.income)}`,
    `💰 <b>Monthly income:</b> -`,
    `🏦 <b>Loan amount:</b> ${field(d.creditType)}`,
    ``,
    `📝 <b>Message:</b>`,
    field(d.description),
    ``,
    `🌐 kredytdlaukraincow.pl`,
  ].join("\n")
}

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

  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    if (process.env.NODE_ENV === "development") {
      console.log("\n──────────────────────────────────────")
      console.log("📩 LEAD (tryb dev – Telegram nie skonfigurowany)")
      console.log("──────────────────────────────────────")
      console.log(`Imię i nazwisko: ${data.name}`)
      console.log(`Telefon:         ${data.phone}`)
      console.log(`E-mail:          ${data.email}`)
      console.log(`Status:          ${data.situation}`)
      console.log(`Zatrudnienie:    ${data.income}`)
      console.log(`Kredyt:          ${data.creditType}`)
      if (data.description) console.log(`Opis:            ${data.description}`)
      console.log("──────────────────────────────────────\n")
      return NextResponse.json({ success: true })
    }
    return NextResponse.json(
      { error: "Wysyłanie formularza jest tymczasowo niedostępne. Zadzwoń do nas bezpośrednio." },
      { status: 503 }
    )
  }

  const text = buildTelegramMessage(result)

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
      }
    )

    if (!response.ok) {
      const errorBody = await response.text()
      console.error("[lead] Telegram error:", response.status, errorBody)
    }
  } catch (err) {
    console.error("[lead] Błąd wysyłania Telegram:", err)
  }

  return NextResponse.json({ success: true })
}
