/**
 * ─────────────────────────────────────────────────────────────────────────────
 * INSTRUKCJA DLA NOWEJ STRONY
 * ─────────────────────────────────────────────────────────────────────────────
 * Aby utworzyć nową stronę, edytuj wyłącznie ten plik, `.env.local`
 * oraz opcjonalnie grafikę doradcy (public/adviser.webp) i favicon (public/favicon.svg).
 *
 * Komponenty są generyczne i nie wymagają edycji.
 *
 * Placeholdery w nawiasach kwadratowych [ … ] muszą być wypełnione
 * przed ustawieniem seo.noindex = false (build zatrzyma się, gdy je wykryje).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { SiteContent } from "@/types/site-content"

export const siteContent: SiteContent = {
  // ── STRONA / SEO ────────────────────────────────────────────────────────────
  site: {
    name: "[NAZWA STRONY]",
    domain: "[NAZWA DOMENY].pl",
    canonicalUrl: "https://[NAZWA DOMENY].pl",
    language: "pl",
    locale: "pl_PL",
    // Tytuł strony (do ~60 znaków)
    title: "[TYTUŁ STRONY] – [GŁÓWNA FRAZA]",
    // Meta description (do ~155 znaków)
    description:
      "Uzyskaj [GŁÓWNA FRAZA] szybko i bezpiecznie. Bezpłatna analiza zdolności kredytowej. Skontaktuj się z doradcą – [TELEFON].",
    ogTitle: "[TYTUŁ STRONY] – [GŁÓWNA FRAZA]",
    ogDescription:
      "Sprawdź, jak uzyskać [GŁÓWNA FRAZA]. Bezpłatna analiza i wsparcie doradcy kredytowego.",
    // Format ISO 8601: YYYY-MM-DD
    lastUpdated: "2026-07-24",
  },

  // ── MARKA ───────────────────────────────────────────────────────────────────
  brand: {
    logoText: "[NAZWA STRONY]",
    shortName: "[SKRÓT]",
    // Opcjonalny wyróżniony fragment w logo (wyświetlany innym kolorem)
    accentText: ".pl",
  },

  // ── MOTYW KOLORYSTYCZNY ─────────────────────────────────────────────────────
  // Zmień jeden kolor akcentowy dla całej strony.
  theme: {
    primary: "#1d6fa4",
    primaryHover: "#155d8c",
    primarySoft: "#e8f2fa",
  },

  // ── DANE KONTAKTOWE ─────────────────────────────────────────────────────────
  contact: {
    adviserName: "[IMIĘ I NAZWISKO]",
    companyName: "[NAZWA FIRMY]",
    // Numer w formacie tel: (bez spacji, z prefiksem +48 lub bez)
    phone: "+48000000000",
    // Numer wyświetlany na stronie
    phoneDisplay: "000 000 000",
    email: "[E-MAIL]",
    address: "[ADRES]",
    nip: "[NIP]",
    serviceArea: "[OBSZAR OBSŁUGI]",
    // Ścieżka do zdjęcia doradcy w /public
    adviserImage: "/adviser-placeholder.svg",
    privacyEmail: "[E-MAIL DO SPRAW PRYWATNOŚCI]",
  },

  // ── NAWIGACJA ───────────────────────────────────────────────────────────────
  navigation: [
    { label: "O kredycie", href: "#o-kredycie" },
    { label: "Wymagania", href: "#wymagania" },
    { label: "Proces", href: "#proces" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#formularz" },
  ],

  // ── HERO ────────────────────────────────────────────────────────────────────
  hero: {
    // Opcjonalny nadtytuł nad H1
    eyebrow: "[KRÓTKIE HASŁO / NADTYTUŁ]",
    // Główny nagłówek H1 – jeden na całej stronie
    h1: "[GŁÓWNA FRAZA] – bezpłatna analiza zdolności kredytowej",
    lead: "Pomagamy uzyskać [GŁÓWNA FRAZA] nawet w trudnych sytuacjach. Sprawdź swoje możliwości bez zobowiązań.",
    primaryCta: {
      label: "Sprawdź bezpłatnie",
      href: "#formularz",
    },
    secondaryCta: {
      label: "Zadzwoń teraz",
      href: "tel:+48000000000",
    },
    checklistTitle: "Dlaczego warto:",
    checklist: [
      "Bezpłatna analiza zdolności kredytowej",
      "Pomoc doradcy na każdym etapie",
      "Szybka odpowiedź – nawet w 24 h",
      "Obsługa trudnych przypadków",
    ],
    badge: "Bezpłatna konsultacja",
  },

  // ── SZYBKA ODPOWIEDŹ ────────────────────────────────────────────────────────
  quickAnswer: {
    id: "o-kredycie",
    title: "Czym jest [GŁÓWNA FRAZA]?",
    paragraphs: [
      "[GŁÓWNA FRAZA] to forma finansowania dostępna dla [GRUPA KLIENTÓW]. W odróżnieniu od standardowych produktów bankowych, uwzględnia specyficzną sytuację tej grupy – m.in. [SPECYFIKA 1] oraz [SPECYFIKA 2].",
      "Dzięki znajomości oferty wielu banków i instytucji finansowych jesteśmy w stanie dopasować produkt do Twojej konkretnej sytuacji, nawet jeśli wcześniej spotkałeś się z odmową.",
    ],
    notice: {
      title: "Ważne:",
      text: "Każda sytuacja jest inna. Skontaktuj się z nami, aby uzyskać indywidualną ocenę Twojej zdolności kredytowej.",
    },
  },

  // ── SEKCJE TREŚCI ───────────────────────────────────────────────────────────
  // Możesz zmieniać kolejność, usuwać lub dodawać sekcje.
  // Dostępne typy: "text" | "split" | "checklist" | "cards" | "highlight"
  sections: [
    {
      type: "split",
      id: "rodzaje-kredytow",
      title: "Rodzaje finansowania dla [GRUPA KLIENTÓW]",
      intro:
        "Współpracujemy z bankami i instytucjami, które mają doświadczenie w obsłudze [GRUPA KLIENTÓW].",
      columns: [
        {
          title: "Kredyt gotówkowy",
          paragraphs: [
            "Środki wypłacane jednorazowo na dowolny cel. Idealne rozwiązanie, gdy potrzebujesz szybko określonej kwoty.",
          ],
          bullets: [
            "Kwota od [X] do [Y] zł",
            "Okres spłaty do [N] lat",
            "Decyzja w [N] dni roboczych",
          ],
        },
        {
          title: "Kredyt hipoteczny",
          paragraphs: [
            "Finansowanie zakupu nieruchomości lub remontu z zabezpieczeniem na hipotece.",
          ],
          bullets: [
            "Wkład własny od [N]%",
            "Okres spłaty do [N] lat",
            "Możliwość konsolidacji",
          ],
        },
      ],
    },
    {
      type: "checklist",
      id: "wymagania",
      title: "Wymagania i dokumenty",
      intro:
        "Lista dokumentów może różnić się w zależności od banku i rodzaju kredytu. Poniżej przedstawiamy typowe wymagania.",
      groups: [
        {
          title: "Dokumenty tożsamości",
          items: [
            "[DOKUMENT 1] – wymagany przez wszystkie banki",
            "[DOKUMENT 2] – jeśli dotyczy",
            "[DOKUMENT 3] – opcjonalnie",
          ],
        },
        {
          title: "Dokumenty dochodowe",
          items: [
            "[DOKUMENT 1] – umowa o pracę lub inny dokument",
            "[DOKUMENT 2] – zaświadczenie o zarobkach",
            "[DOKUMENT 3] – wyciąg z konta za ostatnie 3 miesiące",
          ],
        },
      ],
      notice:
        "Nie posiadasz wszystkich dokumentów? Skontaktuj się z nami – pomożemy znaleźć rozwiązanie.",
    },
    {
      type: "cards",
      id: "zrodla-dochodu",
      title: "Akceptowane źródła dochodu",
      intro:
        "Pracujemy z klientami o różnych źródłach dochodu. Oto najczęstsze, z którymi możemy pomóc:",
      items: [
        {
          title: "Umowa o pracę",
          text: "Najkorzystniejsze warunki. Akceptowana przez wszystkich partnerów bankowych.",
        },
        {
          title: "Działalność gospodarcza",
          text: "Możliwe po przepracowaniu minimum [N] miesięcy. Wymagane zeznania podatkowe.",
        },
        {
          title: "Umowa zlecenie / o dzieło",
          text: "Część banków akceptuje. Wymagana ciągłość przez ostatnie [N] miesięcy.",
        },
        {
          title: "Inne źródła",
          text: "Emerytura, renta, wynajem, alimenty – każdy przypadek analizujemy indywidualnie.",
        },
      ],
    },
    {
      type: "highlight",
      id: "dlaczego-my",
      title: "Dlaczego klienci wybierają naszą pomoc?",
      paragraphs: [
        "Specjalizujemy się w trudniejszych przypadkach. Znamy wymagania i procedury banków współpracujących z [GRUPA KLIENTÓW].",
        "Nie pobieramy opłat z góry. Nasza prowizja pochodzi wyłącznie od banku, z którym ostatecznie zawrzesz umowę.",
      ],
      notice:
        "Działamy na terenie [OBSZAR OBSŁUGI]. Konsultacje prowadzimy online i telefonicznie.",
    },
  ],

  // ── PROCES ──────────────────────────────────────────────────────────────────
  process: {
    id: "proces",
    title: "Jak przebiega współpraca?",
    intro: "Prosty, przejrzysty proces w kilku krokach.",
    steps: [
      {
        title: "Wypełnij formularz",
        text: "Podaj podstawowe informacje o swojej sytuacji. Zajmuje to mniej niż 3 minuty.",
      },
      {
        title: "Bezpłatna analiza",
        text: "Doradca skontaktuje się z Tobą i przeanalizuje Twoją zdolność kredytową.",
      },
      {
        title: "Dopasowanie oferty",
        text: "Przedstawiamy najlepsze dostępne opcje i pomagamy wybrać najkorzystniejszą.",
      },
      {
        title: "Złożenie wniosku",
        text: "Pomagamy przygotować dokumenty i przeprowadzamy przez cały proces aplikacji.",
      },
      {
        title: "Wypłata środków",
        text: "Po pozytywnej decyzji banku środki trafiają na Twoje konto.",
      },
    ],
  },

  // ── TRUDNOŚCI / ISSUES ──────────────────────────────────────────────────────
  issues: {
    id: "trudne-przypadki",
    title: "Pomagamy nawet w trudnych sytuacjach",
    intro:
      "Nie zrażaj się wcześniejszymi odmowami. Wiele osób uzyskuje kredyt po skonsultowaniu się z doradcą.",
    items: [
      "Wcześniejsza odmowa kredytu w banku",
      "Nieregularne lub mieszane źródła dochodu",
      "Krótki staż pracy lub nowa umowa",
      "Wpis w BIK lub BIG",
      "Brak historii kredytowej",
      "[SPECYFICZNA TRUDNOŚĆ DLA TEJ GRUPY]",
    ],
    notice:
      "Każdą sytuację analizujemy indywidualnie. Zadzwoń lub wypełnij formularz – bez zobowiązań.",
  },

  // ── FORMULARZ ───────────────────────────────────────────────────────────────
  form: {
    id: "formularz",
    title: "Zapytaj o swoje możliwości",
    intro:
      "Wypełnij formularz – oddzwonimy do Ciebie w ciągu jednego dnia roboczego.",
    submitLabel: "Wyślij zapytanie",
    successTitle: "Dziękujemy za kontakt!",
    successMessage:
      "Twoje zapytanie zostało przyjęte. Doradca skontaktuje się z Tobą wkrótce.",
    // Opcjonalna informacja o obsłudze w innym języku
    languageNotice: undefined,
    creditTypeOptions: [
      "Kredyt gotówkowy",
      "Kredyt hipoteczny",
      "Konsolidacja kredytów",
      "Inne / nie wiem",
    ],
    situationOptions: [
      "Stała praca (umowa o pracę)",
      "Własna działalność gospodarcza",
      "Umowa zlecenie / o dzieło",
      "Emerytura / renta",
      "Inna sytuacja",
    ],
    incomeOptions: [
      "Do 3 000 zł netto",
      "3 000–5 000 zł netto",
      "5 000–8 000 zł netto",
      "Powyżej 8 000 zł netto",
      "Wolę nie podawać",
    ],
    consentText:
      "Wyrażam zgodę na przetwarzanie moich danych osobowych przez [NAZWA FIRMY] w celu udzielenia odpowiedzi na moje zapytanie oraz przedstawienia oferty kredytowej. Wiem, że mogę cofnąć zgodę w każdej chwili.",
  },

  // ── DORADCA ─────────────────────────────────────────────────────────────────
  adviser: {
    id: "doradca",
    title: "Twój doradca kredytowy",
    text: [
      "[IMIĘ I NAZWISKO] – doradca kredytowy z doświadczeniem w obsłudze [GRUPA KLIENTÓW]. Pomaga klientom uzyskać finansowanie bankowe dostosowane do ich specyficznej sytuacji.",
      "Działam na terenie [OBSZAR OBSŁUGI]. Konsultacje prowadzę online i telefonicznie – skontaktuj się ze mną bezpośrednio.",
    ],
  },

  // ── FAQ ─────────────────────────────────────────────────────────────────────
  faq: {
    id: "faq",
    title: "Najczęstsze pytania",
    items: [
      {
        question: "Czy usługa doradztwa jest bezpłatna?",
        answer:
          "Tak. Doradztwo i analiza zdolności kredytowej są bezpłatne. Wynagrodzenie doradcy pochodzi wyłącznie od banku, z którym podpiszesz umowę kredytową.",
      },
      {
        question: "Jak długo trwa proces uzyskania kredytu?",
        answer:
          "Czas zależy od rodzaju kredytu i banku. Kredyt gotówkowy można uzyskać nawet w ciągu kilku dni roboczych. Kredyt hipoteczny trwa zwykle od 4 do 8 tygodni.",
      },
      {
        question: "Co, jeśli mam negatywną historię kredytową?",
        answer:
          "Negatywna historia w BIK nie oznacza automatycznej odmowy. Pracujemy z bankami, które stosują indywidualne podejście do oceny ryzyka. Skontaktuj się z nami, aby omówić Twoją sytuację.",
      },
      {
        question: "[PYTANIE SPECYFICZNE DLA TEJ GRUPY 1]",
        answer:
          "[ODPOWIEDŹ SPECYFICZNA DLA TEJ GRUPY 1 – opisz konkretne wymagania lub procedury]",
      },
      {
        question: "[PYTANIE SPECYFICZNE DLA TEJ GRUPY 2]",
        answer: "[ODPOWIEDŹ SPECYFICZNA DLA TEJ GRUPY 2]",
      },
      {
        question: "Jak mogę się skontaktować z doradcą?",
        answer:
          "Zadzwoń na numer [TELEFON] lub wypełnij formularz kontaktowy na tej stronie. Oddzwaniamy w ciągu jednego dnia roboczego.",
      },
    ],
  },

  // ── KOŃCOWE CTA ─────────────────────────────────────────────────────────────
  finalCta: {
    title: "Gotowy sprawdzić swoje możliwości?",
    text: "Bezpłatna analiza zdolności kredytowej. Bez zobowiązań.",
    buttonLabel: "Wypełnij formularz",
    buttonHref: "#formularz",
  },

  // ── STOPKA ──────────────────────────────────────────────────────────────────
  footer: {
    disclaimer:
      "Treści zamieszczone na stronie mają charakter informacyjny i nie stanowią oferty w rozumieniu Kodeksu Cywilnego. Warunki kredytu zależą od indywidualnej oceny banku.",
    copyright: `© ${new Date().getFullYear()} [NAZWA FIRMY]. Wszelkie prawa zastrzeżone.`,
  },

  // ── POLITYKA PRYWATNOŚCI ────────────────────────────────────────────────────
  privacyPolicy: {
    adminName: "[IMIĘ I NAZWISKO / NAZWA FIRMY]",
    adminAddress: "[ADRES]",
    contactEmail: "[E-MAIL DO SPRAW PRYWATNOŚCI]",
    dataRetentionPeriod: "[OKRES PRZECHOWYWANIA – np. 3 lata od zakończenia współpracy]",
    dataRecipients: [
      "Banki i instytucje finansowe – w zakresie niezbędnym do przedstawienia oferty kredytowej",
      "Dostawcy usług IT – wyłącznie w zakresie niezbędnym do obsługi technicznej strony",
    ],
    processingPurpose:
      "Udzielenie odpowiedzi na zapytanie kredytowe oraz przedstawienie spersonalizowanej oferty.",
    legalBasis:
      "Art. 6 ust. 1 lit. a RODO (zgoda osoby, której dane dotyczą).",
  },

  // ── SEO ─────────────────────────────────────────────────────────────────────
  seo: {
    primaryKeyword: "[GŁÓWNA FRAZA]",
    secondaryKeywords: [
      "[FRAZA POBOCZNA 1]",
      "[FRAZA POBOCZNA 2]",
      "[FRAZA POBOCZNA 3]",
    ],
    // WAŻNE: ustaw na false dopiero przed publikacją i po wypełnieniu wszystkich placeholderów
    noindex: true,
    schemaType: "FinancialService",
  },
}
