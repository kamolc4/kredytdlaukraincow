type Props = {
  phone: string
  phoneDisplay: string
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.29 6.29l.95-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

export default function StickyMobileCTA({ phone, phoneDisplay }: Props) {
  return (
    <div className="sticky-mobile-cta" role="complementary" aria-label="Szybki kontakt">
      <a
        href={`tel:${phone}`}
        className="sticky-mobile-cta__phone"
        data-action="phone"
        data-cta="sticky-mobile"
        aria-label={`Zadzwoń: ${phoneDisplay}`}
      >
        <PhoneIcon />
        Zadzwoń
      </a>
      <a
        href="#formularz"
        className="sticky-mobile-cta__form"
        data-cta="sticky-mobile"
      >
        Wyślij zapytanie
      </a>
    </div>
  )
}
