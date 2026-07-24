"use client"

import { useState, useEffect, useRef, useId } from "react"
import type { SiteContent } from "@/types/site-content"

type Props = {
  config: SiteContent["form"]
  siteName: string
  primaryKeyword: string
}

type FieldErrors = Record<string, string>

type FormState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: FieldErrors }

function CheckCircleIcon() {
  return (
    <svg className="form-success__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  )
}

function BenefitIcon() {
  return (
    <svg className="form-layout__benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function useUtmParams() {
  const [utm, setUtm] = useState<Record<string, string>>({})
  useEffect(() => {
    if (typeof window === "undefined") return
    const params = new URLSearchParams(window.location.search)
    const fields = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]
    const result: Record<string, string> = {}
    fields.forEach((key) => {
      const val = params.get(key)
      if (val) result[key] = val
    })
    setUtm(result)
  }, [])
  return utm
}

export default function LeadForm({ config, siteName, primaryKeyword }: Props) {
  const uid = useId()
  const utm = useUtmParams()
  const liveRegionRef = useRef<HTMLDivElement>(null)

  const [formState, setFormState] = useState<FormState>({ status: "idle" })
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const [pageUrl, setPageUrl] = useState("")
  useEffect(() => {
    setPageUrl(window.location.href)
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState({ status: "loading" })
    setFieldErrors({})

    const form = e.currentTarget
    const data = new FormData(form)

    const payload: Record<string, unknown> = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email") || undefined,
      creditType: data.get("creditType"),
      situation: data.get("situation"),
      income: data.get("income"),
      description: data.get("description") || undefined,
      consent: data.get("consent") === "on",
      website: data.get("website") || undefined,
      siteName,
      pageUrl,
      primaryKeyword,
      utmSource: utm.utm_source,
      utmMedium: utm.utm_medium,
      utmCampaign: utm.utm_campaign,
      utmTerm: utm.utm_term,
      utmContent: utm.utm_content,
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const json = await res.json()

      if (!res.ok) {
        if (json.fieldErrors) {
          setFieldErrors(json.fieldErrors)
          setFormState({ status: "error", message: "Popraw błędy w formularzu.", fieldErrors: json.fieldErrors })
        } else {
          setFormState({ status: "error", message: json.error || "Wystąpił błąd. Spróbuj ponownie lub zadzwoń do nas." })
        }
        return
      }

      setFormState({ status: "success" })
    } catch {
      setFormState({
        status: "error",
        message: "Nie udało się połączyć z serwerem. Sprawdź połączenie lub zadzwoń do nas bezpośrednio.",
      })
    }
  }

  const isLoading = formState.status === "loading"
  const hasError = (field: string) => !!fieldErrors[field]

  if (formState.status === "success") {
    return (
      <section id={config.id} className="section section--muted" aria-labelledby={`${config.id}-heading`}>
        <div className="container">
          <div className="lead-form">
            <div className="form-success" role="status" aria-live="polite">
              <CheckCircleIcon />
              <h2 id={`${config.id}-heading`} className="form-success__title">{config.successTitle}</h2>
              <p className="form-success__text">{config.successMessage}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id={config.id}
      className="section section--muted"
      aria-labelledby={`${config.id}-heading`}
    >
      <div className="container">
        <div className="form-layout">
          {/* Lewa kolumna: nagłówek + opis + korzyści */}
          <div className="form-layout__lead">
            <h2 id={`${config.id}-heading`}>{config.title}</h2>
            <p className="form-layout__desc">{config.intro}</p>
            <ul className="form-layout__benefits" role="list">
              <li className="form-layout__benefit">
                <BenefitIcon />
                <span>Formularz nie wymaga numerów dokumentów ani danych bankowych</span>
              </li>
              <li className="form-layout__benefit">
                <BenefitIcon />
                <span>Analiza nie jest zapytaniem do BIK</span>
              </li>
              <li className="form-layout__benefit">
                <BenefitIcon />
                <span>Kontakt nastąpi po zapoznaniu się z Twoją sytuacją</span>
              </li>
            </ul>
          </div>

          {/* Prawa kolumna: karta formularza */}
          <div className="form-layout__card">
            <div className="lead-form">
              {config.languageNotice && (
                <p className="lead-form__lang-notice" aria-live="polite">
                  {config.languageNotice}
                </p>
              )}

              <div ref={liveRegionRef} aria-live="assertive" aria-atomic="true" className="sr-only" />

              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot – widoczne tylko dla botów */}
                <div className="form-honeypot" aria-hidden="true">
                  <label htmlFor={`${uid}-website`}>Zostaw to pole puste</label>
                  <input
                    id={`${uid}-website`}
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Imię */}
                <div className="form-group">
                  <label className="form-label" htmlFor={`${uid}-name`}>
                    Imię <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${uid}-name`}
                    name="name"
                    type="text"
                    className={`form-input${hasError("name") ? " form-input--error" : ""}`}
                    autoComplete="given-name"
                    required
                    aria-required="true"
                    aria-describedby={hasError("name") ? `${uid}-name-error` : undefined}
                    aria-invalid={hasError("name")}
                    disabled={isLoading}
                  />
                  {hasError("name") && (
                    <p id={`${uid}-name-error`} className="form-error" role="alert">
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                {/* Telefon */}
                <div className="form-group">
                  <label className="form-label" htmlFor={`${uid}-phone`}>
                    Telefon <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${uid}-phone`}
                    name="phone"
                    type="tel"
                    className={`form-input${hasError("phone") ? " form-input--error" : ""}`}
                    autoComplete="tel"
                    required
                    aria-required="true"
                    aria-describedby={hasError("phone") ? `${uid}-phone-error` : undefined}
                    aria-invalid={hasError("phone")}
                    disabled={isLoading}
                    placeholder="np. 600 100 200"
                  />
                  {hasError("phone") && (
                    <p id={`${uid}-phone-error`} className="form-error" role="alert">
                      {fieldErrors.phone}
                    </p>
                  )}
                </div>

                {/* E-mail (opcjonalny) */}
                <div className="form-group">
                  <label className="form-label" htmlFor={`${uid}-email`}>
                    E-mail{" "}
                    <span className="form-label__optional">(opcjonalnie)</span>
                  </label>
                  <input
                    id={`${uid}-email`}
                    name="email"
                    type="email"
                    className={`form-input${hasError("email") ? " form-input--error" : ""}`}
                    autoComplete="email"
                    aria-describedby={hasError("email") ? `${uid}-email-error` : undefined}
                    aria-invalid={hasError("email") || undefined}
                    disabled={isLoading}
                  />
                  {hasError("email") && (
                    <p id={`${uid}-email-error`} className="form-error" role="alert">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                {/* Rodzaj kredytu */}
                <div className="form-group">
                  <label className="form-label" htmlFor={`${uid}-creditType`}>
                    Rodzaj kredytu <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id={`${uid}-creditType`}
                    name="creditType"
                    className={`form-select${hasError("creditType") ? " form-select--error" : ""}`}
                    required
                    aria-required="true"
                    aria-describedby={hasError("creditType") ? `${uid}-creditType-error` : undefined}
                    aria-invalid={hasError("creditType")}
                    disabled={isLoading}
                    defaultValue=""
                  >
                    <option value="" disabled>Wybierz…</option>
                    {config.creditTypeOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {hasError("creditType") && (
                    <p id={`${uid}-creditType-error`} className="form-error" role="alert">
                      {fieldErrors.creditType}
                    </p>
                  )}
                </div>

                {/* Sytuacja / status pobytu */}
                <div className="form-group">
                  <label className="form-label" htmlFor={`${uid}-situation`}>
                    Status pobytu <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id={`${uid}-situation`}
                    name="situation"
                    className={`form-select${hasError("situation") ? " form-select--error" : ""}`}
                    required
                    aria-required="true"
                    aria-describedby={hasError("situation") ? `${uid}-situation-error` : undefined}
                    aria-invalid={hasError("situation")}
                    disabled={isLoading}
                    defaultValue=""
                  >
                    <option value="" disabled>Wybierz…</option>
                    {config.situationOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {hasError("situation") && (
                    <p id={`${uid}-situation-error`} className="form-error" role="alert">
                      {fieldErrors.situation}
                    </p>
                  )}
                </div>

                {/* Źródło dochodu */}
                <div className="form-group">
                  <label className="form-label" htmlFor={`${uid}-income`}>
                    Źródło dochodu <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id={`${uid}-income`}
                    name="income"
                    className={`form-select${hasError("income") ? " form-select--error" : ""}`}
                    required
                    aria-required="true"
                    aria-describedby={hasError("income") ? `${uid}-income-error` : undefined}
                    aria-invalid={hasError("income")}
                    disabled={isLoading}
                    defaultValue=""
                  >
                    <option value="" disabled>Wybierz…</option>
                    {config.incomeOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {hasError("income") && (
                    <p id={`${uid}-income-error`} className="form-error" role="alert">
                      {fieldErrors.income}
                    </p>
                  )}
                </div>

                {/* Opis (opcjonalny) */}
                <div className="form-group">
                  <label className="form-label" htmlFor={`${uid}-description`}>
                    Krótki opis sytuacji{" "}
                    <span className="form-label__optional">(opcjonalnie)</span>
                  </label>
                  <textarea
                    id={`${uid}-description`}
                    name="description"
                    className="form-textarea"
                    rows={3}
                    disabled={isLoading}
                    placeholder="Opisz krótko swoją sytuację, jeśli chcesz – pomoże nam lepiej przygotować ofertę."
                  />
                </div>

                {/* Zgoda */}
                <div>
                  <div className="form-consent">
                    <input
                      id={`${uid}-consent`}
                      name="consent"
                      type="checkbox"
                      className="form-consent__checkbox"
                      required
                      aria-required="true"
                      aria-describedby={hasError("consent") ? `${uid}-consent-error` : undefined}
                      aria-invalid={hasError("consent")}
                      disabled={isLoading}
                    />
                    <label className="form-consent__label" htmlFor={`${uid}-consent`}>
                      {config.consentText}{" "}
                      <span aria-hidden="true">*</span>
                    </label>
                  </div>
                  {hasError("consent") && (
                    <p id={`${uid}-consent-error`} className="form-consent__error" role="alert">
                      {fieldErrors.consent}
                    </p>
                  )}
                </div>

                {formState.status === "error" && !Object.keys(fieldErrors).length && (
                  <div className="form-global-error" role="alert" aria-live="assertive">
                    {formState.message}
                  </div>
                )}

                <div className="form-submit">
                  <button
                    type="submit"
                    className="btn btn--primary btn--lg btn--full"
                    disabled={isLoading}
                    data-action="form-submit"
                    aria-busy={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner" aria-hidden="true" />
                        Wysyłanie…
                      </>
                    ) : (
                      config.submitLabel
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
