/**
 * ─────────────────────────────────────────────────────────────────────────────
 * KONFIGURACJA STRONY: kredytdlaukraincow.pl
 * ─────────────────────────────────────────────────────────────────────────────
 * Edytuj wyłącznie ten plik oraz .env.local.
 * Placeholdery [ … ] muszą być uzupełnione przed ustawieniem seo.noindex = false.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { SiteContent } from "@/types/site-content"

export const siteContent: SiteContent = {
  // ── STRONA / SEO ────────────────────────────────────────────────────────────
  site: {
    name: "Kredyt dla Ukraińców",
    domain: "kredytdlaukraincow.pl",
    canonicalUrl: "https://kredytdlaukraincow.pl",
    language: "pl",
    locale: "pl_PL",
    // Tytuł strony (do ~60 znaków)
    title: "Kredyt dla Ukraińców w Polsce – warunki i pomoc",
    // Meta description (do ~155 znaków)
    description:
      "Sprawdź warunki kredytu dla Ukraińców w Polsce. Kredyt hipoteczny, gotówkowy, karta pobytu, PESEL UKR, dokumenty i wstępna analiza sytuacji.",
    ogTitle: "Kredyt dla Ukraińców w Polsce – warunki i pomoc",
    ogDescription:
      "Sprawdź warunki kredytu dla Ukraińców w Polsce. Kredyt hipoteczny, gotówkowy, karta pobytu, PESEL UKR i wstępna analiza sytuacji.",
    lastUpdated: "2026-07-24",
  },

  // ── MARKA ───────────────────────────────────────────────────────────────────
  brand: {
    logoText: "KredytDlaUkrainca.pl",
    shortName: "KdU",
    accentText: ".pl",
  },

  // ── MOTYW KOLORYSTYCZNY ─────────────────────────────────────────────────────
  theme: {
    primary: "#1d6fa4",
    primaryHover: "#155d8c",
    primarySoft: "#e8f2fa",
  },

  // ── DANE KONTAKTOWE ─────────────────────────────────────────────────────────
  contact: {
    adviserName: "Kamil Olczyk",
    adviserTitle: "Ekspert Kredytowy",
    companyName: "[NAZWA FIRMY]",
    phone: "+48533727030",
    phoneDisplay: "+48 533 727 030",
    email: "kamil.olczyk@lendi.pl",
    address: "[ADRES]",
    nip: "[NIP]",
    serviceArea: "[OBSZAR OBSŁUGI]",
    adviserImage: "/images/MyPhoto.png",
    privacyEmail: "kamil.olczyk@lendi.pl",
    creditReportUrl: "https://raportkredytowy.pl",
  },

  // ── NAWIGACJA ───────────────────────────────────────────────────────────────
  navigation: [
    { label: "Rodzaje kredytu", href: "#rodzaje-kredytu" },
    { label: "Status pobytu", href: "#status-pobytu" },
    { label: "Dokumenty", href: "#dokumenty" },
    { label: "Proces", href: "#proces" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#formularz" },
  ],

  // ── HERO ────────────────────────────────────────────────────────────────────
  hero: {
    badge: "Analiza bez zapytania do BIK",
    h1: "Kredyt dla Ukraińców w Polsce – sprawdź swoją sytuację",
    lead: "Sprawdź, jakie znaczenie mają status pobytu, forma zatrudnienia, dochód, historia kredytowa i wymagane dokumenty. Wstępna analiza nie jest decyzją banku ani gwarancją finansowania.",
    primaryCta: {
      label: "Sprawdź swoją sytuację",
      href: "#formularz",
    },
    secondaryCta: {
      label: "Zadzwoń do eksperta",
      href: "tel:+48533727030",
    },
    checklistTitle: "Bank może brać pod uwagę:",
    checklist: [
      "Status i legalność pobytu",
      "Rodzaj oraz ważność dokumentów",
      "Formę zatrudnienia",
      "Wysokość i walutę dochodu",
      "Historię kredytową",
      "Aktualne zobowiązania",
      "Liczbę osób w gospodarstwie domowym",
      "Wkład własny przy kredycie hipotecznym",
      "Rodzaj finansowanej nieruchomości",
    ],
  },

  // ── SZYBKA ODPOWIEDŹ ────────────────────────────────────────────────────────
  quickAnswer: {
    id: "o-kredycie",
    title: "Czy Ukrainiec może dostać kredyt w Polsce?",
    paragraphs: [
      "Obywatelstwo Ukrainy samo w sobie nie oznacza automatycznej odmowy. Osoba nieposiadająca polskiego obywatelstwa może ubiegać się o kredyt – zarówno gotówkowy, jak i hipoteczny – jednak każdy bank stosuje własne zasady i może stawiać dodatkowe wymagania wobec cudzoziemców.",
      "Rodzaj posiadanego dokumentu pobytowego i okres jego ważności mogą mieć istotne znaczenie przy ocenie wniosku. Bank ocenia stabilność sytuacji klienta, dochód i jego regularność, aktualne zobowiązania, koszty utrzymania gospodarstwa domowego oraz historię terminowych spłat.",
      "Wymagania dla kredytu hipotecznego są zwykle bardziej szczegółowe niż dla gotówkowego. Ostateczny wynik zależy od całości sytuacji klienta i aktualnych zasad wybranego banku – różnice między instytucjami mogą być znaczące.",
    ],
    notice: {
      title: "Ważne:",
      text: "Informacje na stronie mają charakter ogólny. Wstępna analiza nie jest decyzją kredytową ani gwarancją uzyskania finansowania.",
    },
  },

  // ── SEKCJE TREŚCI ───────────────────────────────────────────────────────────
  sections: [
    // 1. Rodzaje kredytu
    {
      type: "split",
      id: "rodzaje-kredytu",
      title: "Jaki kredyt może otrzymać obywatel Ukrainy?",
      intro:
        "Możliwe są dwa główne rodzaje kredytu. Różnią się celem, procesem i wymaganiami. Wymagania dla kredytu hipotecznego są zazwyczaj bardziej szczegółowe.",
      columns: [
        {
          title: "Kredyt hipoteczny dla Ukraińców",
          paragraphs: [
            "Kredyt hipoteczny może finansować zakup mieszkania lub domu, budowę albo inny cel mieszkaniowy akceptowany przez bank. Proces jest dłuższy i bardziej szczegółowy niż przy kredycie gotówkowym.",
            "Bank analizuje nieruchomość, wymaga dokumentów od sprzedającego lub dewelopera, ocenia wkład własny i weryfikuje status pobytu. Nie każdy bank obsługuje kredyty hipoteczne dla obywateli Ukrainy na tych samych zasadach.",
          ],
          bullets: [
            "Cel: zakup, budowa lub remont nieruchomości",
            "Zabezpieczenie: hipoteka na finansowanej nieruchomości",
            "Wkład własny: standardowo wymagany",
            "Status pobytu może mieć decydujące znaczenie",
            "Wymagania różnią się pomiędzy bankami",
          ],
        },
        {
          title: "Kredyt gotówkowy dla Ukraińców",
          paragraphs: [
            "Kredyt gotówkowy może być przeznaczony na różne cele. Bank ocenia dochód, zatrudnienie i zobowiązania. Może wymagać dokumentów pobytowych, uwzględniać historię rachunku i sprawdzać BIK.",
            "Warunki różnią się pomiędzy bankami. Dostępna kwota nie oznacza automatycznie, że dane zobowiązanie będzie odpowiednie dla Twojej sytuacji.",
          ],
          bullets: [
            "Cel: dowolny",
            "Brak wymogu zabezpieczenia na nieruchomości",
            "Szybsza decyzja niż przy kredycie hipotecznym",
            "Wymagania zależą od banku i sytuacji klienta",
          ],
        },
      ],
      cta: {
        label: "Sprawdź swoją sytuację",
        href: "#formularz",
      },
    },

    // 2. Status pobytu
    {
      type: "cards",
      id: "status-pobytu",
      title: "Karta pobytu, PESEL UKR i status pobytowy",
      intro:
        "Status pobytowy jest jednym z elementów ocenianych przy wniosku kredytowym. Wymagania różnią się w zależności od banku i rodzaju kredytu.",
      items: [
        {
          title: "Kredyt z kartą czasowego pobytu",
          text: "Karta czasowego pobytu może być akceptowana przez niektóre banki, ale nie przez wszystkie na tych samych zasadach. Znaczenie może mieć okres ważności dokumentu – krótki termin ważności bywa czynnikiem negatywnym przy ocenie wniosku.",
        },
        {
          title: "Kredyt z kartą stałego pobytu",
          text: "Karta stałego pobytu może ułatwiać ocenę stabilności sytuacji pobytowej. Nie gwarantuje jednak pozytywnej decyzji – bank nadal ocenia dochód, zobowiązania i pozostałe elementy zdolności kredytowej.",
        },
        {
          title: "Kredyt bez karty pobytu",
          text: "Brak karty pobytu utrudnia spełnienie wymagań większości banków, ale nie jest automatyczną przeszkodą w każdym przypadku. Wymagania dla kredytu gotówkowego i hipotecznego mogą się różnić. Każdy przypadek wymaga indywidualnej weryfikacji.",
        },
        {
          title: "Czy PESEL UKR wystarczy?",
          text: "PESEL UKR potwierdza rejestrację w systemie, ale sam w sobie nie musi spełniać wszystkich wymagań banku dotyczących dokumentu pobytowego. Bank może wymagać dodatkowego dokumentu potwierdzającego legalność i status pobytu.",
        },
      ],
      cta: {
        label: "Sprawdź, co dotyczy Twojej sytuacji",
        href: "#formularz",
      },
    },

    // 3. Wkład własny
    {
      type: "highlight",
      id: "wklad-wlasny",
      title: "Kredyt hipoteczny dla Ukraińców bez wkładu własnego – czy to możliwe?",
      paragraphs: [
        "Standardowe kredyty hipoteczne zwykle wymagają odpowiedniego wkładu własnego lub innego zabezpieczenia akceptowanego przez bank. Samo nieposiadanie gotówki na wkład własny nie eliminuje pozostałych wymagań – bank nadal ocenia dochód, zdolność kredytową, zobowiązania, nieruchomość i status pobytu.",
        "Istnieją rozwiązania gwarancyjne, które mogą zastąpić część wymaganego wkładu. Mają one jednak szczegółowe warunki, a zasady i grono uczestniczących banków mogą się zmieniać. Możliwość skorzystania z takiego rozwiązania przez osobę z Ukrainy zależy od aktualnych warunków konkretnego programu i banku.",
        "Możliwość uzyskania kredytu hipotecznego bez standardowego wkładu własnego należy sprawdzać indywidualnie, uwzględniając aktualną sytuację klienta i bieżące zasady banku.",
      ],
      notice:
        "Dostępność rozwiązań bez wkładu własnego może zmieniać się w czasie. Zawsze warto sprawdzić aktualne warunki indywidualnie.",
    },

    // 4. Dokumenty
    {
      type: "checklist",
      id: "dokumenty",
      title: "Jakie dokumenty mogą być potrzebne?",
      intro:
        "Poniżej typowe dokumenty, które mogą być wymagane. Dokładna lista zależy od rodzaju kredytu, banku, źródła dochodu i statusu pobytu.",
      groups: [
        {
          title: "Tożsamość i pobyt",
          items: [
            "Paszport lub inny akceptowany dokument tożsamości",
            "Karta pobytu albo inny dokument legalizujący pobyt",
            "Decyzja pobytowa, jeśli wymagana przez bank",
            "PESEL, jeśli wymagany przez bank lub proces",
            "Dokument potwierdzający adres zamieszkania, jeśli wymagany",
            "Dokumenty uzupełniające wskazane przez bank",
          ],
        },
        {
          title: "Dochód i zatrudnienie",
          items: [
            "Umowa o pracę, zlecenie lub umowa o dzieło",
            "Zaświadczenie o zatrudnieniu i dochodach",
            "Historia wpływów na rachunek bankowy",
            "Wyciągi bankowe z wymaganego okresu",
            "Dokumenty podatkowe, jeśli wymagane",
            "Dokumenty działalności gospodarczej, jeśli dotyczy",
            "Dokumenty potwierdzające ciągłość dochodu",
          ],
        },
        {
          title: "Kredyt hipoteczny",
          items: [
            "Umowa rezerwacyjna, przedwstępna lub deweloperska",
            "Dokumenty nieruchomości wskazane przez bank",
            "Dokumenty sprzedającego lub dewelopera",
            "Potwierdzenie wkładu własnego",
            "Dokumenty do wyceny nieruchomości",
            "Kosztorys lub harmonogram przy budowie lub remoncie, jeśli wymagany",
            "Dodatkowe dokumenty wskazane przez bank",
          ],
        },
      ],
      notice:
        "Dokładna lista zależy od rodzaju kredytu, banku, źródła dochodu, statusu pobytu i konkretnej nieruchomości.",
      cta: {
        label: "Dowiedz się, co będzie potrzebne w Twoim przypadku",
        href: "#formularz",
      },
    },

    // 5. Dochód i zatrudnienie
    {
      type: "text",
      id: "dochod",
      title: "Dochód i zatrudnienie a zdolność kredytowa",
      intro:
        "Bank ocenia nie tylko to, ile zarabiasz, ale też w jaki sposób i czy dochód jest stabilny. Banki różnią się sposobem oceny poszczególnych form zatrudnienia i rodzajów dochodu.",
      paragraphs: [
        "Umowa o pracę na czas nieokreślony jest zwykle oceniana najkorzystniej. Umowa na czas określony może być akceptowana, ale bank może sprawdzać termin jej ważności. Umowa zlecenie lub o dzieło bywa akceptowana przez część banków, jednak może wymagać udokumentowania ciągłości przez określony czas – wymagania są różne.",
        "Działalność gospodarcza wymaga zazwyczaj dłuższej historii prowadzenia i dokumentacji dochodowej lub podatkowej. Dochód w PLN jest oceniany bezpośrednio. Dochód w innej walucie bank może przeliczać według własnych zasad lub stosować dodatkowe bufory, co może wpływać na obliczoną zdolność kredytową.",
        "Znaczenie mają też stabilność wpływów, długość historii zatrudnienia u obecnego pracodawcy oraz ewentualny okres próbny. Każdy bank stosuje własne kryteria – nie istnieje jedna obowiązująca zasada dotycząca minimalnego stażu pracy.",
        "Na zdolność kredytową wpływają również aktualne zobowiązania: raty innych kredytów, limity na kartach kredytowych, limity w rachunku, koszty utrzymania gospodarstwa domowego i liczba osób na utrzymaniu. Im wyższe zobowiązania w stosunku do dochodu, tym niżej oceniana zdolność.",
      ],
    },

    // 6. Historia kredytowa
    {
      type: "highlight",
      id: "historia-kredytowa",
      title: "Historia kredytowa i BIK",
      paragraphs: [
        "BIK gromadzi informacje o zobowiązaniach kredytowych raportowanych przez instytucje finansowe współpracujące z BIK. Bank może sprawdzać terminowość spłat, aktualny poziom zadłużenia i historię korzystania z produktów kredytowych.",
        "Brak historii kredytowej nie jest tym samym co historia negatywna – może jednak oznaczać, że bank ma mniej danych do oceny. Aktywne zobowiązania wpływają na obliczoną zdolność. Sam dobry wynik w BIK nie gwarantuje pozytywnej decyzji – każdy bank stosuje własny scoring i własne kryteria oceny.",
        "Wstępna analiza wykonywana na podstawie przesłanego formularza nie jest scoringiem BIK i nie jest zapytaniem do rejestru. To wstępna ocena sytuacji na podstawie podanych informacji.",
      ],
      notice:
        "Formularz nie pobiera ani nie przetwarza raportu BIK. Analiza opiera się wyłącznie na informacjach podanych przez klienta.",
      cta: {
        label: "Sprawdź swoją sytuację",
        href: "#formularz",
      },
    },
  ],

  // ── PROCES ──────────────────────────────────────────────────────────────────
  process: {
    id: "proces",
    title: "Jak wygląda pomoc krok po kroku?",
    intro: "Każda sprawa zaczyna się od zebrania podstawowych informacji.",
    steps: [
      {
        title: "Przesyłasz podstawowe informacje",
        text: "Opisujesz rodzaj kredytu, status pobytu, źródło dochodu i swoją sytuację. Formularz nie wymaga podawania numerów dokumentów ani danych bankowych.",
      },
      {
        title: "Wstępna analiza sytuacji",
        text: "Sprawdzane są najważniejsze informacje dotyczące pobytu, dochodu, zatrudnienia, zobowiązań i celu kredytu. Analiza nie jest decyzją banku ani scoringiem BIK.",
      },
      {
        title: "Informacja o dalszych możliwościach",
        text: "Otrzymujesz informację, jakie elementy wymagają doprecyzowania i jakie dokumenty mogą być potrzebne do kolejnego etapu.",
      },
      {
        title: "Dalsze przygotowanie sprawy",
        text: "Jeżeli sytuacja daje podstawy do dalszego działania, można przejść do dokładniejszej analizy i przygotowania dokumentów niezbędnych do złożenia wniosku.",
      },
    ],
  },

  // ── TRUDNOŚCI ───────────────────────────────────────────────────────────────
  issues: {
    id: "trudnosci",
    title: "Co może utrudnić uzyskanie kredytu?",
    intro:
      "Każda z poniższych okoliczności może mieć wpływ na ocenę wniosku. Nie każda jest jednak automatyczną przeszkodą.",
    items: [
      "Zbyt krótki okres ważności dokumentu pobytowego",
      "Brak dokumentu akceptowanego przez wybrany bank",
      "Krótka historia uzyskiwania dochodu w Polsce",
      "Nieregularne lub zmienne wpływy na rachunek",
      "Dochód w walucie nieakceptowanej przez bank",
      "Okres próbny w bieżącym zatrudnieniu",
      "Częste zmiany zatrudnienia lub przerwy w ciągłości",
      "Wysokie raty innych kredytów lub pożyczek",
      "Aktywne limity kredytowe i limity w rachunku",
      "Opóźnienia w spłacie zobowiązań",
      "Brak wymaganego wkładu własnego",
      "Niekompletna lub niespójna dokumentacja",
      "Problemy prawne albo techniczne nieruchomości",
    ],
    notice:
      "Odmowa w jednym banku nie oznacza automatycznie odmowy w każdym banku. Nie warto jednak wysyłać wielu nieskoordynowanych wniosków bez wcześniejszej analizy sytuacji.",
  },

  // ── FORMULARZ ───────────────────────────────────────────────────────────────
  form: {
    id: "formularz",
    title: "Sprawdź swoją sytuację",
    intro:
      "Przekaż podstawowe informacje. Pozwolą one przygotować się do pierwszego kontaktu i ustalić, jakie dane lub dokumenty mogą być potrzebne.",
    submitLabel: "Poproś o wstępną analizę",
    successTitle: "Dziękujemy za przesłanie formularza",
    successMessage:
      "Twoje zapytanie zostało przesłane. Kontakt nastąpi po zapoznaniu się z podanymi informacjami.",
    languageNotice:
      "Потрібна консультація українською мовою? Повідомте нам про це в полі повідомлення, і з Вами зв'яжеться експерт, який розмовляє українською.",
    creditTypeOptions: [
      "Kredyt hipoteczny",
      "Kredyt gotówkowy",
      "Kredyt konsolidacyjny",
      "Jeszcze nie wiem",
    ],
    situationOptions: [
      "Karta stałego pobytu",
      "Karta czasowego pobytu",
      "PESEL UKR lub inny dokument",
      "Brak karty pobytu",
      "Oczekiwanie na decyzję pobytową",
      "Wolę omówić telefonicznie",
    ],
    incomeOptions: [
      "Umowa o pracę",
      "Umowa zlecenie lub umowa o dzieło",
      "Działalność gospodarcza",
      "Dochód zagraniczny",
      "Inne",
    ],
    consentText:
      "Wyrażam zgodę na kontakt w sprawie przesłanego zapytania oraz potwierdzam zapoznanie się z Polityką prywatności.",
  },

  // ── DORADCA ─────────────────────────────────────────────────────────────────
  adviser: {
    id: "doradca",
    title: "Kto analizuje Twoją sytuację?",
    text: [
      "Każda sytuacja jest analizowana indywidualnie. Wstępna rozmowa służy ustaleniu, jakie informacje i dokumenty będą potrzebne oraz czy istnieje realna podstawa do dalszego porównania możliwości finansowania.",
      "Zakres dalszej pomocy zależy od rodzaju kredytu, sytuacji klienta, dokumentów oraz aktualnych zasad instytucji finansowych.",
    ],
  },

  // ── FAQ ─────────────────────────────────────────────────────────────────────
  faq: {
    id: "faq",
    title: "Najczęstsze pytania",
    items: [
      {
        question: "Czy Ukrainiec może dostać kredyt w Polsce?",
        answer:
          "Obywatelstwo Ukrainy samo w sobie nie jest przeszkodą. Osoba z Ukrainy może ubiegać się o kredyt, jednak każdy bank stosuje własne wymagania wobec cudzoziemców. Kluczowe znaczenie mają status pobytowy, dochód, forma zatrudnienia i historia spłat. Wynik zależy od całości sytuacji.",
      },
      {
        question: "Czy można dostać kredyt bez karty pobytu?",
        answer:
          "Brak karty pobytu utrudnia spełnienie wymagań większości banków, szczególnie przy kredycie hipotecznym. Część banków może brać pod uwagę inne dokumenty potwierdzające legalność pobytu. Każdy przypadek wymaga indywidualnej weryfikacji – nie ma jednej reguły obowiązującej we wszystkich bankach.",
      },
      {
        question: "Czy karta czasowego pobytu wystarczy do kredytu?",
        answer:
          "Część banków może akceptować kartę czasowego pobytu, ale nie wszystkie stosują te same zasady. Znaczenie ma też okres ważności dokumentu – krótki termin może być czynnikiem negatywnym. Wymagania różnią się dla kredytu gotówkowego i hipotecznego.",
      },
      {
        question: "Czy karta stałego pobytu gwarantuje otrzymanie kredytu?",
        answer:
          "Karta stałego pobytu może ułatwiać ocenę stabilności sytuacji pobytowej, jednak nie gwarantuje pozytywnej decyzji kredytowej. Bank nadal ocenia dochód, zatrudnienie, zobowiązania, historię spłat i inne elementy zdolności kredytowej.",
      },
      {
        question: "Czy PESEL UKR wystarczy do kredytu?",
        answer:
          "PESEL UKR potwierdza rejestrację w systemie, ale sam w sobie może nie spełniać wszystkich wymagań banku. Bank może wymagać dodatkowo dokumentu potwierdzającego status i legalność pobytu. Wymagania zależą od banku i rodzaju kredytu.",
      },
      {
        question: "Czy Ukrainiec może dostać kredyt hipoteczny?",
        answer:
          "Kredyt hipoteczny dla obywatela Ukrainy jest możliwy w niektórych bankach, jednak wymagania są zazwyczaj bardziej szczegółowe niż dla obywateli polskich. Status pobytu, dochód, wkład własny i dokumenty mają decydujące znaczenie. Nie każdy bank oferuje ten produkt dla cudzoziemców na tych samych zasadach.",
      },
      {
        question: "Czy Ukrainiec może dostać kredyt gotówkowy?",
        answer:
          "Kredyt gotówkowy jest dostępny w części banków dla osób z Ukrainy. Bank ocenia dochód, zatrudnienie i aktualne zobowiązania. Może wymagać dokumentów pobytowych i sprawdzać historię rachunku. Warunki różnią się pomiędzy instytucjami.",
      },
      {
        question: "Czy możliwy jest kredyt hipoteczny bez wkładu własnego?",
        answer:
          "Standardowe kredyty hipoteczne wymagają wkładu własnego. Istnieją rozwiązania gwarancyjne, które mogą zastąpić część wkładu, jednak mają szczegółowe warunki i nie są dostępne dla każdego. Dostępność takich rozwiązań dla osób z Ukrainy należy sprawdzać indywidualnie.",
      },
      {
        question: "Jakie dokumenty mogą być potrzebne?",
        answer:
          "Zazwyczaj wymagany jest dokument tożsamości, dokument potwierdzający status pobytu oraz dokumenty dochodowe – umowa, zaświadczenie, wyciągi bankowe. Przy kredycie hipotecznym dochodzą dokumenty nieruchomości. Dokładna lista zależy od banku, rodzaju kredytu i Twojej sytuacji.",
      },
      {
        question: "Jak długo trzeba pracować w Polsce?",
        answer:
          "Nie ma jednej obowiązującej zasady. Każdy bank stosuje własne wymagania dotyczące okresu zatrudnienia. Forma umowy, ciągłość zatrudnienia i historia dochodu mogą być równie ważne jak sam staż. Warto sprawdzić wymagania konkretnego banku.",
      },
      {
        question: "Czy dochód w obcej walucie może być zaakceptowany?",
        answer:
          "Część banków akceptuje dochód w walutach obcych, jednak może go przeliczać według własnych zasad lub stosować dodatkowe bufory bezpieczeństwa. Może to wpłynąć na obliczoną zdolność kredytową. Podejście zależy od konkretnego banku.",
      },
      {
        question: "Czy brak historii w BIK oznacza odmowę?",
        answer:
          "Brak historii kredytowej nie jest tym samym co historia negatywna. Może jednak oznaczać, że bank ma mniej danych do oceny wiarygodności kredytowej. Część banków jest bardziej elastyczna wobec osób bez historii kredytowej. Każdy wniosek jest oceniany całościowo.",
      },
      {
        question: "Czy dochód z umowy zlecenia może być zaakceptowany?",
        answer:
          "Tak, część banków akceptuje dochód z umowy zlecenia, jednak mogą wymagać udokumentowania ciągłości przez określony czas i regularności wpływów. Wymagania różnią się pomiędzy bankami.",
      },
      {
        question: "Czy wstępna analiza jest decyzją banku?",
        answer:
          "Nie. Wstępna analiza na podstawie przesłanego formularza to ocena sytuacji oparta na podanych informacjach. Nie jest decyzją banku, nie jest scoringiem BIK i nie jest gwarancją uzyskania finansowania. Służy ustaleniu, czy sytuacja daje podstawy do dalszego działania.",
      },
    ],
  },

  // ── KOŃCOWE CTA ─────────────────────────────────────────────────────────────
  finalCta: {
    title: "Nie wiesz, jakie wymagania dotyczą Twojej sytuacji?",
    text: "Opisz krótko swoją sytuację. Wstępna analiza pomoże ustalić, jakie informacje będą potrzebne i czy warto przejść do kolejnego etapu.",
    buttonLabel: "Poproś o wstępną analizę",
    buttonHref: "#formularz",
  },

  // ── STOPKA ──────────────────────────────────────────────────────────────────
  footer: {
    disclaimer:
      "Informacje zamieszczone na stronie mają charakter ogólny i nie stanowią decyzji kredytowej, rekomendacji ani gwarancji uzyskania finansowania.",
    copyright: `© ${new Date().getFullYear()} KredytDlaUkrainca.pl. Administratorem serwisu jest Kamil Olczyk. Wszelkie prawa zastrzeżone.`,
  },

  // ── POLITYKA PRYWATNOŚCI ────────────────────────────────────────────────────
  privacyPolicy: {
    adminName: "Kamil Olczyk",
    adminAddress: "",
    contactEmail: "kamil.olczyk@lendi.pl",
    dataRetentionPeriod:
      "Dane będą przechowywane przez okres niezbędny do obsługi zapytania i dalszego kontaktu, a następnie przez okres potrzebny do zabezpieczenia przed ewentualnymi roszczeniami. Dane przetwarzane na podstawie zgody będą przechowywane do czasu jej wycofania, chyba że istnieje inna podstawa ich dalszego przechowywania.",
    dataRecipients: [
      "Dostawcy hostingu i infrastruktury technicznej serwisu",
      "Dostawcy poczty elektronicznej i usług wysyłki e-mail",
      "Dostawcy systemów CRM wykorzystywanych do obsługi zapytań",
      "Eksperci kredytowi prowadzący sprawę",
      "Partnerzy współpracujący przy obsłudze procesu uzyskania finansowania",
      "Podmioty świadczące usługi techniczne niezbędne do działania serwisu",
      "Podmioty uprawnione na podstawie przepisów prawa",
    ],
    processingPurpose:
      "Udzielenie odpowiedzi na zapytanie dotyczące kredytu, wstępna analiza sytuacji kredytowej oraz kontakt w sprawie możliwego finansowania.",
    legalBasis:
      "Zgoda osoby, której dane dotyczą (art. 6 ust. 1 lit. a RODO) oraz prawnie uzasadniony interes administratora w zakresie obsługi korespondencji i bezpieczeństwa (art. 6 ust. 1 lit. f RODO).",
  },

  // ── SEO ─────────────────────────────────────────────────────────────────────
  seo: {
    primaryKeyword: "kredyt dla ukraińców",
    secondaryKeywords: [
      "kredyt dla ukraińców w Polsce",
      "kredyt hipoteczny dla ukraińców",
      "kredyt gotówkowy dla ukraińców",
      "kredyt dla ukraińców z kartą pobytu",
      "kredyt dla ukraińców bez karty pobytu",
      "zdolność kredytowa dla Ukraińca",
      "dokumenty do kredytu dla Ukraińca",
    ],
    // WAŻNE: ustaw na false dopiero po uzupełnieniu wszystkich danych i konfiguracji Resend
    noindex: true,
    schemaType: "FinancialService",
  },
}
