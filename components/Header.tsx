"use client"

import { useState, useCallback } from "react"
import type { SiteContent } from "@/types/site-content"

type Props = {
  brand: SiteContent["brand"]
  navigation: SiteContent["navigation"]
  phone: string
  phoneDisplay: string
  ctaLabel: string
  ctaHref: string
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.29 6.29l.95-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

export default function Header({ brand, navigation, phone, phoneDisplay, ctaLabel, ctaHref }: Props) {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="header__inner">
          <a href="#main-content" className="header__logo" aria-label={`${brand.logoText} – strona główna`}>
            {brand.accentText
              ? brand.logoText.replace(brand.accentText, "")
              : brand.logoText}
            {brand.accentText && (
              <span className="header__logo-accent">{brand.accentText}</span>
            )}
          </a>

          <nav className="header__nav" aria-label="Nawigacja główna">
            <ul className="header__nav-list" role="list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="header__nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <a
              href={`tel:${phone}`}
              className="header__phone"
              data-action="phone"
              data-cta="header"
              aria-label={`Zadzwoń: ${phoneDisplay}`}
            >
              <PhoneIcon />
              {phoneDisplay}
            </a>

            <a href={ctaHref} className="btn btn--primary" data-cta="header" style={{ display: "none" }}>
              {ctaLabel}
            </a>

            <button
              className="header__menu-btn"
              aria-label="Otwórz menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Nawigacja mobilna"
          role="dialog"
          aria-modal="true"
        >
          <div className="mobile-nav__header">
            <span className="header__logo">{brand.logoText}</span>
            <button
              className="mobile-nav__close"
              aria-label="Zamknij menu"
              onClick={close}
            >
              <CloseIcon />
            </button>
          </div>

          <ul role="list">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="mobile-nav__link" onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-nav__phone">
            <a
              href={`tel:${phone}`}
              className="btn btn--outline btn--lg btn--full"
              data-action="phone"
              data-cta="mobile-nav"
              onClick={close}
            >
              <PhoneIcon />
              {phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
