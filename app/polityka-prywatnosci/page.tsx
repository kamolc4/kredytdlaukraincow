import type { Metadata } from "next"
import { siteContent } from "@/lib/site-config"

const { site, privacyPolicy, contact } = siteContent

export const metadata: Metadata = {
  title: `Polityka prywatności – ${site.name}`,
  description: `Polityka prywatności serwisu ${site.domain}.`,
  robots: { index: false, follow: false },
  alternates: { canonical: "/polityka-prywatnosci" },
}

export default function PrivacyPage() {
  return (
    <div style={{ background: "var(--background)" }}>
      <div className="container">
        <div className="privacy-page">
          <a href="/" className="back-link">
            ← Wróć na stronę główną
          </a>

          <h1>Polityka prywatności</h1>

          {/* UWAGA: Poniższy dokument jest szablonem i wymaga weryfikacji przez prawnika
              przed opublikowaniem. Nie stanowi porady prawnej ani gwarancji zgodności z RODO. */}

          <section>
            <h2>1. Administrator danych</h2>
            <p>
              Administratorem Twoich danych osobowych jest{" "}
              <strong>{privacyPolicy.adminName}</strong>, {privacyPolicy.adminAddress}.
            </p>
            <p>
              Kontakt w sprawach dotyczących danych osobowych:{" "}
              <a href={`mailto:${privacyPolicy.contactEmail}`}>
                {privacyPolicy.contactEmail}
              </a>
            </p>
          </section>

          <section>
            <h2>2. Cel i podstawa przetwarzania</h2>
            <p>
              Twoje dane osobowe przetwarzamy w celu:{" "}
              {privacyPolicy.processingPurpose}
            </p>
            <p>
              Podstawa prawna: {privacyPolicy.legalBasis}
            </p>
          </section>

          <section>
            <h2>3. Zakres zbieranych danych</h2>
            <p>Zbieramy wyłącznie dane podane przez Ciebie dobrowolnie w formularzu kontaktowym:</p>
            <ul>
              <li>Imię</li>
              <li>Numer telefonu</li>
              <li>Adres e-mail (opcjonalnie)</li>
              <li>Informacje o rodzaju poszukiwanego kredytu i sytuacji finansowej</li>
              <li>Opis sytuacji (opcjonalnie)</li>
            </ul>
            <p>
              Nie zbieramy numerów PESEL, numerów dokumentów tożsamości, numerów kart ani
              danych szczególnych kategorii.
            </p>
          </section>

          <section>
            <h2>4. Odbiorcy danych</h2>
            <p>Twoje dane mogą być przekazywane wyłącznie:</p>
            <ul>
              {privacyPolicy.dataRecipients.map((recipient, i) => (
                <li key={i}>{recipient}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>5. Okres przechowywania</h2>
            <p>
              Twoje dane przechowujemy przez: {privacyPolicy.dataRetentionPeriod}
            </p>
          </section>

          <section>
            <h2>6. Twoje prawa</h2>
            <p>Masz prawo do:</p>
            <ul>
              <li>dostępu do swoich danych,</li>
              <li>sprostowania danych,</li>
              <li>usunięcia danych (prawo do bycia zapomnianym),</li>
              <li>ograniczenia przetwarzania,</li>
              <li>przeniesienia danych,</li>
              <li>cofnięcia zgody w dowolnym momencie (bez wpływu na legalność przetwarzania przed cofnięciem),</li>
              <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (uodo.gov.pl).</li>
            </ul>
          </section>

          <section>
            <h2>7. Dobrowolność podania danych</h2>
            <p>
              Podanie danych osobowych jest dobrowolne, jednak niezbędne do udzielenia odpowiedzi
              na Twoje zapytanie. Brak podania danych uniemożliwi kontakt z doradcą.
            </p>
          </section>

          <section>
            <h2>8. Pliki cookie i narzędzia analityczne</h2>
            <p>
              Strona może korzystać z podstawowych plików cookie niezbędnych do jej działania.
              Jeśli korzystasz z narzędzi analitycznych lub remarketingowych, opisz je tutaj.
            </p>
          </section>

          <section>
            <h2>9. Kontakt</h2>
            <p>
              W sprawach dotyczących ochrony danych osobowych skontaktuj się z nami:
            </p>
            <p>
              E-mail:{" "}
              <a href={`mailto:${privacyPolicy.contactEmail}`}>
                {privacyPolicy.contactEmail}
              </a>
              <br />
              Telefon:{" "}
              <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
            </p>
          </section>

          <p style={{ marginTop: "2rem", fontSize: "0.8125rem", color: "var(--text-muted)", fontStyle: "italic" }}>
            Ostatnia aktualizacja: {site.lastUpdated}
          </p>
        </div>
      </div>
    </div>
  )
}
