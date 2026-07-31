import type { Metadata } from "next"
import { siteContent } from "@/lib/site-config"
import CookieSettingsButton from "@/components/CookieSettingsButton"

const { site, contact, brand } = siteContent

export const metadata: Metadata = {
  title: `Polityka prywatności – ${site.name}`,
  description:
    "Polityka prywatności serwisu KredytDlaUkraincow.pl. Sprawdź zasady przetwarzania danych, wykorzystywania formularza kontaktowego i plików cookies.",
  robots: { index: false, follow: true },
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

          {/* Uwaga: dokument opisuje faktyczne działanie serwisu.
              Przed opublikowaniem zalecana weryfikacja prawna. */}

          {/* 1. Administrator */}
          <section>
            <h2>1. Administrator danych osobowych</h2>
            <p>
              Administratorem danych osobowych jest <strong>{contact.adviserName}</strong>,
              prowadzący serwis <strong>{brand.logoText}</strong>.
            </p>
            <p>
              Kontakt w sprawach dotyczących danych osobowych:
            </p>
            <ul>
              <li>
                E-mail:{" "}
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                Telefon:{" "}
                <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
              </li>
            </ul>
            <p>
              Brak formalnego adresu pocztowego w tej polityce wynika z tego,
              że nie został on podany do publicznej wiadomości. W razie potrzeby
              kontaktu w sprawach danych osobowych skorzystaj z powyższych danych.
            </p>
          </section>

          {/* 2. Jakie dane */}
          <section>
            <h2>2. Jakie dane są zbierane</h2>
            <p>
              Zbieramy wyłącznie dane podane dobrowolnie przez Ciebie w formularzu
              kontaktowym:
            </p>
            <ul>
              <li>imię i nazwisko,</li>
              <li>numer telefonu,</li>
              <li>adres e-mail,</li>
              <li>rodzaj poszukiwanego kredytu,</li>
              <li>status pobytu,</li>
              <li>źródło dochodu,</li>
              <li>informacje wpisane w polu opisu sytuacji (opcjonalnie),</li>
              <li>
                techniczne informacje niezbędne do ochrony formularza przed
                nadużyciami (honeypot),
              </li>
              <li>decyzje dotyczące plików cookies.</li>
            </ul>
            <p>
              Nie zbieramy numerów PESEL, numerów dokumentów tożsamości,
              numerów kart płatniczych ani danych wrażliwych.
            </p>
          </section>

          {/* 3. Cele */}
          <section>
            <h2>3. Cele przetwarzania danych</h2>
            <p>Twoje dane przetwarzamy w następujących celach:</p>
            <ul>
              <li>udzielenie odpowiedzi na przesłane zapytanie,</li>
              <li>przeprowadzenie wstępnej analizy sytuacji kredytowej,</li>
              <li>kontakt telefoniczny lub e-mailowy w sprawie zapytania,</li>
              <li>
                przygotowanie informacji dotyczących możliwego finansowania,
              </li>
              <li>
                przekazanie sprawy odpowiedniemu ekspertowi kredytowemu, jeżeli
                będzie to potrzebne,
              </li>
              <li>
                zapewnienie kontaktu z ekspertem mówiącym po ukraińsku, jeżeli
                użytkownik o to poprosi,
              </li>
              <li>ochrona formularza przed nadużyciami i spamem,</li>
              <li>
                prowadzenie dokumentacji zapytania w systemie CRM,
              </li>
              <li>
                analiza ruchu na stronie – wyłącznie po uzyskaniu Twojej zgody,
                jeżeli używane są narzędzia analityczne.
              </li>
            </ul>
          </section>

          {/* 4. Podstawy prawne */}
          <section>
            <h2>4. Podstawy prawne przetwarzania</h2>
            <ul>
              <li>
                <strong>Zgoda (art. 6 ust. 1 lit. a RODO)</strong> – dotyczy
                kontaktu w sprawie zapytania, przekazania sprawy ekspertowi oraz
                opcjonalnych plików cookies analitycznych. Zgodę można wycofać
                w każdym momencie bez wpływu na legalność przetwarzania
                dokonanego przed jej wycofaniem.
              </li>
              <li>
                <strong>
                  Prawnie uzasadniony interes administratora (art. 6 ust. 1
                  lit. f RODO)
                </strong>{" "}
                – dotyczy obsługi korespondencji, zapewnienia bezpieczeństwa
                serwisu oraz ewentualnego dochodzenia lub obrony roszczeń.
              </li>
            </ul>
            <p>
              Zgoda przy formularzu nie jest zgodą marketingową – dotyczy
              wyłącznie obsługi przesłanego zapytania.
            </p>
          </section>

          {/* 5. Obsługa zgłoszeń */}
          <section>
            <h2>5. Obsługa zgłoszeń i systemy CRM</h2>
            <p>
              Dane przesłane przez formularz mogą zostać zapisane w jednym lub
              kilku systemach CRM wykorzystywanych do obsługi zapytań. Systemy
              te służą do rejestrowania zgłoszeń, organizacji kontaktu oraz
              obsługi dalszych etapów sprawy.
            </p>
            <p>
              Systemy CRM pozostają pod kontrolą administratora lub jego
              podwykonawców technicznych i nie stanowią odrębnego administratora
              danych. Zapisanie danych w systemie CRM nie oznacza ich
              publicznego udostępnienia.
            </p>
          </section>

          {/* 6. Eksperci i partnerzy */}
          <section>
            <h2>6. Przekazanie danych ekspertom i partnerom</h2>
            <p>
              Dane przesłane przez formularz mogą zostać przekazane ekspertowi
              kredytowemu prowadzącemu sprawę lub partnerowi współpracującemu
              przy obsłudze procesu uzyskania finansowania. Przekazanie następuje
              wyłącznie w zakresie niezbędnym do obsługi zgłoszenia i nie jest
              automatyczne w każdym przypadku.
            </p>
            <p>Przekazanie może dotyczyć w szczególności sytuacji, gdy:</p>
            <ul>
              <li>sprawa wymaga obsługi przez eksperta kredytowego,</li>
              <li>
                użytkownik poprosi o kontakt w języku ukraińskim – dane mogą
                zostać przekazane ekspertowi posługującemu się tym językiem,
              </li>
              <li>
                konieczne jest przekazanie zapytania osobie lub podmiotowi
                posiadającemu odpowiednie kompetencje.
              </li>
            </ul>
          </section>

          {/* 7. Odbiorcy */}
          <section>
            <h2>7. Odbiorcy danych</h2>
            <p>Odbiorcami danych mogą być:</p>
            <ul>
              <li>dostawcy hostingu i infrastruktury technicznej serwisu,</li>
              <li>dostawcy poczty elektronicznej i usług wysyłki e-mail,</li>
              <li>
                dostawcy systemów CRM wykorzystywanych do obsługi zapytań,
              </li>
              <li>eksperci kredytowi prowadzący sprawę,</li>
              <li>
                partnerzy współpracujący przy obsłudze procesu uzyskania
                finansowania,
              </li>
              <li>
                podmioty świadczące usługi techniczne niezbędne do działania
                serwisu,
              </li>
              <li>podmioty uprawnione na podstawie przepisów prawa.</li>
            </ul>
          </section>

          {/* 8. Okres */}
          <section>
            <h2>8. Okres przechowywania danych</h2>
            <p>
              Dane będą przechowywane przez okres niezbędny do obsługi
              zapytania i dalszego kontaktu, a następnie przez okres potrzebny
              do zabezpieczenia przed ewentualnymi roszczeniami. Dane
              przetwarzane na podstawie zgody będą przechowywane do czasu jej
              wycofania, chyba że istnieje inna podstawa ich dalszego
              przechowywania.
            </p>
          </section>

          {/* 9. Prawa */}
          <section>
            <h2>9. Twoje prawa</h2>
            <p>Przysługuje Ci prawo do:</p>
            <ul>
              <li>dostępu do swoich danych,</li>
              <li>sprostowania danych,</li>
              <li>usunięcia danych (prawo do bycia zapomnianym),</li>
              <li>ograniczenia przetwarzania,</li>
              <li>sprzeciwu wobec przetwarzania opartego na uzasadnionym interesie,</li>
              <li>przeniesienia danych (jeżeli ma zastosowanie),</li>
              <li>
                wycofania zgody w dowolnym momencie – bez wpływu na legalność
                przetwarzania dokonanego przed jej wycofaniem,
              </li>
              <li>
                złożenia skargi do Prezesa Urzędu Ochrony Danych Osobowych
                (uodo.gov.pl).
              </li>
            </ul>
            <p>
              Aby skorzystać z powyższych praw, skontaktuj się z administratorem
              pod adresem:{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
          </section>

          {/* 10. Dobrowolność */}
          <section>
            <h2>10. Dobrowolność podania danych</h2>
            <p>
              Podanie danych jest dobrowolne. Brak podania danych oznaczonych
              jako obowiązkowe (imię i nazwisko, numer telefonu, adres e-mail)
              uniemożliwi przesłanie formularza i udzielenie odpowiedzi. Pola
              opcjonalne (opis sytuacji) nie są wymagane.
            </p>
          </section>

          {/* 11. Profilowanie */}
          <section>
            <h2>11. Profilowanie i decyzje automatyczne</h2>
            <p>
              Przesłanie formularza nie powoduje automatycznego podjęcia
              decyzji kredytowej. Wstępna analiza nie jest decyzją banku,
              scoringiem BIK ani gwarancją finansowania. Dane nie są
              przetwarzane w sposób wywołujący skutki prawne na podstawie
              zautomatyzowanego przetwarzania.
            </p>
          </section>

          {/* 12. Cookies */}
          <section>
            <h2>12. Pliki cookies</h2>
            <p>
              Serwis używa niezbędnych plików cookies do prawidłowego działania
              strony oraz zapamiętania Twojego wyboru dotyczącego cookies. Za
              Twoją zgodą mogą być używane cookies analityczne, które pomagają
              zrozumieć sposób korzystania z serwisu.
            </p>
            <p>
              <strong>Niezbędne</strong> – wymagane do działania strony.
              Zapamiętują Twój wybór dotyczący cookies i chronią formularz przed
              nadużyciami. Nie wymagają zgody i nie można ich wyłączyć.
            </p>
            <p>
              <strong>Analityczne</strong> – opcjonalne. Uruchamiane wyłącznie
              po Twojej wyraźnej zgodzie. Pomagają zrozumieć sposób korzystania
              z serwisu.
            </p>
            <p>
              Swoją decyzję dotyczącą plików cookies możesz zmienić w dowolnym
              momencie, korzystając z przycisku „Ustawienia cookies"
              znajdującego się poniżej.
            </p>
            <CookieSettingsButton className="btn btn--outline" />
          </section>

          {/* 13. Narzędzia analityczne */}
          <section>
            <h2>13. Narzędzia analityczne</h2>
            <p>
              Serwis może korzystać z narzędzi analitycznych, takich jak Google
              Analytics 4, Google Tag Manager lub Microsoft Clarity. Narzędzia
              te mogą być wykorzystywane wyłącznie po uzyskaniu wyraźnej zgody
              użytkownika.
            </p>
            <p>
              Narzędzia analityczne służą do analizowania sposobu korzystania z
              serwisu, pomagają poprawiać jego działanie oraz komfort
              użytkowników. Mogą one zbierać anonimowe dane o ruchu, kliknięciach,
              czasie spędzonym na stronie i podobnych zdarzeniach.
            </p>
            <p>
              Zgoda na korzystanie z narzędzi analitycznych jest dobrowolna i
              niezależna od możliwości skorzystania z formularza kontaktowego.
              Użytkownik może w każdej chwili wycofać lub zmienić swoją zgodę,
              korzystając z przycisku „Ustawienia cookies" na stronie Polityki
              prywatności.
            </p>
            <p>
              Dostawcy tych narzędzi mogą przetwarzać dane zgodnie z własnymi
              politykami prywatności. Administratorami danych w rozumieniu tych
              narzędzi są odpowiednio: Google LLC (Google Analytics 4, Google Tag
              Manager) oraz Microsoft Corporation (Microsoft Clarity).
            </p>
          </section>

          <p className="privacy-page__updated">
            Ostatnia aktualizacja: {site.lastUpdated}
          </p>
        </div>
      </div>
    </div>
  )
}
