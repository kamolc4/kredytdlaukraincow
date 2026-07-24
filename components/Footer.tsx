import type { SiteContent } from "@/types/site-content"

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
            <p className="footer__tagline">
              Informacje na stronie mają charakter ogólny i nie stanowią decyzji kredytowej.
            </p>
          </div>

          {/* Kolumna 2: kontakt */}
          <div className="footer__col">
            <p className="footer__col-title">Kontakt</p>
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

          {/* Kolumna 3: linki + dane firmy */}
          <div className="footer__col">
            <p className="footer__col-title">Informacje</p>
            <ul className="footer__col-links" role="list">
              <li>
                <a href="/polityka-prywatnosci" className="footer__link">
                  Polityka prywatności
                </a>
              </li>
            </ul>

            {contact.companyName && (
              <address className="footer__col-address">
                {contact.companyName}
                {contact.address && <><br />{contact.address}</>}
                {contact.nip && <><br />NIP: {contact.nip}</>}
              </address>
            )}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__disclaimer">{footer.disclaimer}</p>
          <p className="footer__copyright">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
