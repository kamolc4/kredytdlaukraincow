import type { SiteContent } from "@/types/site-content"
import CookieSettingsButton from "./CookieSettingsButton"

type Props = {
  footer: SiteContent["footer"]
  brand: SiteContent["brand"]
  contact: SiteContent["contact"]
  siteName: string
}

export default function Footer({ footer, brand, contact }: Props) {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Kolumna 1: marka + opis */}
          <div className="footer__col">
            <p className="footer__brand">{brand.logoText}</p>
            <p className="footer__tagline">{footer.disclaimer}</p>
          </div>

          {/* Kolumna 2: kontakt */}
          <div className="footer__col">
            <p className="footer__col-title">Kontakt</p>
            <div className="footer__contact-block">
              <p className="footer__contact-name">{contact.adviserName}</p>
              {contact.adviserTitle && (
                <p className="footer__contact-role">{contact.adviserTitle}</p>
              )}
            </div>
            <ul className="footer__col-links" role="list">
              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="footer__link"
                  data-action="phone"
                  data-cta="footer"
                >
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="footer__link">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Kolumna 3: linki */}
          <div className="footer__col">
            <p className="footer__col-title">Informacje</p>
            <ul className="footer__col-links" role="list">
              <li>
                <a href="/polityka-prywatnosci" className="footer__link">
                  Polityka prywatności
                </a>
              </li>
              <li>
                <CookieSettingsButton className="footer__cookie-btn" />
              </li>
              {contact.creditReportUrl && (
                <li>
                  <a
                    href={contact.creditReportUrl}
                    className="footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RaportKredytowy.pl
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
