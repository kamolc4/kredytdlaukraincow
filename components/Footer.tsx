import type { SiteContent } from "@/types/site-content"

type Props = {
  footer: SiteContent["footer"]
  brand: SiteContent["brand"]
  contact: SiteContent["contact"]
  siteName: string
}

export default function Footer({ footer, brand, contact, siteName }: Props) {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          <p className="footer__brand">{brand.logoText}</p>

          <nav aria-label="Linki w stopce">
            <ul className="footer__links" role="list">
              <li>
                <a href="/polityka-prywatnosci" className="footer__link">
                  Polityka prywatności
                </a>
              </li>
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
          </nav>

          {contact.companyName && (
            <address style={{ fontStyle: "normal", fontSize: "0.8125rem", color: "rgba(255,255,255,0.55)" }}>
              {contact.companyName}
              {contact.address && <> · {contact.address}</>}
              {contact.nip && <> · NIP: {contact.nip}</>}
            </address>
          )}

          <p className="footer__disclaimer">{footer.disclaimer}</p>

          <p className="footer__copyright">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
