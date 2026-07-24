"use client"

import { useState, useEffect, useRef, useCallback } from "react"

const CONSENT_KEY = "cookie-consent"
const CONSENT_VERSION = "1.0"

type ConsentData = {
  version: string
  categories: string[]
  date: string
}

function loadConsent(): ConsentData | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    return JSON.parse(raw) as ConsentData
  } catch {
    return null
  }
}

function saveConsent(categories: string[]): void {
  const data: ConsentData = {
    version: CONSENT_VERSION,
    categories,
    date: new Date().toISOString(),
  }
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(data))
  } catch {}
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  const modalRef = useRef<HTMLDivElement>(null)
  const settingsBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const consent = loadConsent()
    if (!consent || consent.version !== CONSENT_VERSION) {
      setVisible(true)
    }

    function handleOpen() {
      const stored = loadConsent()
      setAnalyticsEnabled(stored?.categories.includes("analytics") ?? false)
      setVisible(true)
      setSettingsOpen(true)
    }

    window.addEventListener("open-cookie-settings", handleOpen)
    return () => window.removeEventListener("open-cookie-settings", handleOpen)
  }, [])

  const closeSettings = useCallback(() => {
    setSettingsOpen(false)
    requestAnimationFrame(() => settingsBtnRef.current?.focus())
  }, [])

  // Focus trap inside settings modal
  useEffect(() => {
    if (!settingsOpen || !modalRef.current) return

    const modal = modalRef.current
    const focusable = Array.from(
      modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.hasAttribute("disabled"))

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    first?.focus()

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault()
        closeSettings()
        return
      }
      if (e.key !== "Tab") return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [settingsOpen, closeSettings])

  function acceptAll() {
    saveConsent(["necessary", "analytics"])
    setVisible(false)
    setSettingsOpen(false)
  }

  function rejectOptional() {
    saveConsent(["necessary"])
    setVisible(false)
    setSettingsOpen(false)
  }

  function openSettings() {
    const stored = loadConsent()
    setAnalyticsEnabled(stored?.categories.includes("analytics") ?? false)
    setSettingsOpen(true)
  }

  function saveSettings() {
    const cats: string[] = ["necessary", ...(analyticsEnabled ? ["analytics"] : [])]
    saveConsent(cats)
    setVisible(false)
    setSettingsOpen(false)
  }

  if (!visible) return null

  return (
    <>
      {settingsOpen && (
        <>
          <div
            className="cookie-overlay"
            aria-hidden="true"
            onClick={closeSettings}
          />
          <div
            ref={modalRef}
            className="cookie-settings"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-heading"
          >
            <div className="cookie-settings__header">
              <h2 id="cookie-settings-heading" className="cookie-settings__title">
                Ustawienia cookies
              </h2>
              <button
                type="button"
                className="cookie-settings__close"
                onClick={closeSettings}
                aria-label="Zamknij ustawienia cookies"
              >
                <span aria-hidden="true">✕</span>
              </button>
            </div>

            <div className="cookie-settings__body">
              {/* Niezbędne – zawsze aktywne */}
              <div className="cookie-category">
                <div className="cookie-category__row">
                  <div className="cookie-category__info">
                    <p className="cookie-category__name">Niezbędne</p>
                    <p className="cookie-category__desc">
                      Wymagane do prawidłowego działania strony, zapamiętania Twojego wyboru dotyczącego cookies i ochrony formularza przed nadużyciami. Nie można ich wyłączyć.
                    </p>
                  </div>
                  <span className="cookie-category__always-on">Zawsze aktywne</span>
                </div>
              </div>

              {/* Analityczne – opcjonalne */}
              <div className="cookie-category">
                <div className="cookie-category__row">
                  <div className="cookie-category__info">
                    <p className="cookie-category__name">Analityczne</p>
                    <p className="cookie-category__desc">
                      Pomagają zrozumieć sposób korzystania z serwisu. Uruchamiane wyłącznie po Twojej zgodzie.
                    </p>
                  </div>
                  <label className="cookie-toggle">
                    <input
                      type="checkbox"
                      className="cookie-toggle__input"
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                      aria-label={`Cookies analityczne – ${analyticsEnabled ? "włączone" : "wyłączone"}`}
                    />
                    <span className="cookie-toggle__track" aria-hidden="true" />
                  </label>
                </div>
              </div>
            </div>

            <div className="cookie-settings__footer">
              <button type="button" className="btn btn--outline btn--sm" onClick={rejectOptional}>
                Odrzucam opcjonalne
              </button>
              <button type="button" className="btn btn--primary btn--sm" onClick={saveSettings}>
                Zapisz ustawienia
              </button>
            </div>
          </div>
        </>
      )}

      {!settingsOpen && (
        <div
          className="cookie-banner"
          role="region"
          aria-label="Informacja o plikach cookies"
        >
          <div className="cookie-banner__inner">
            <p className="cookie-banner__text">
              Używamy niezbędnych plików cookies do prawidłowego działania strony. Za Twoją zgodą możemy również używać cookies analitycznych, które pomagają nam zrozumieć sposób korzystania z serwisu.{" "}
              <a href="/polityka-prywatnosci" className="cookie-banner__policy-link">
                Polityka prywatności
              </a>
            </p>
            <div className="cookie-banner__actions">
              <button
                ref={settingsBtnRef}
                type="button"
                className="cookie-banner__btn cookie-banner__btn--ghost"
                onClick={openSettings}
              >
                Ustawienia
              </button>
              <button
                type="button"
                className="cookie-banner__btn cookie-banner__btn--outline"
                onClick={rejectOptional}
              >
                Odrzucam opcjonalne
              </button>
              <button
                type="button"
                className="cookie-banner__btn cookie-banner__btn--primary"
                onClick={acceptAll}
              >
                Akceptuję wszystkie
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
