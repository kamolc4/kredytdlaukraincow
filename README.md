# Szablon strony lead generation – kredyt

Uniwersalny, lekki szablon one-page dla wyspecjalizowanych stron pozyskiwania leadów kredytowych z Google.

Zbudowany na Next.js App Router + TypeScript. Wdrażany na Vercel jako osobny projekt dla każdej domeny.

---

## Jak utworzyć nową stronę na podstawie szablonu

1. **Sklonuj repozytorium** lub skopiuj je jako nowe repo (GitHub: _Use this template_).
2. **Utwórz nowe repozytorium** i wypchnij tam kod.
3. **Edytuj `content/site-content.ts`** – to jedyne miejsce, gdzie wprowadzasz treść i dane nowej strony. Zastąp wszystkie placeholdery `[...]` prawdziwymi danymi.
4. **Uzupełnij `.env.local`** (skopiuj `.env.example` i wpisz klucz Resend, adres e-mail i domenę).
5. **Podmień zdjęcie doradcy** – wgraj plik `public/adviser.webp` (kwadrat, min 200×200 px). Zaktualizuj ścieżkę `contact.adviserImage` w site-content, jeśli inna.
6. **Podmień favicon** (opcjonalnie) – zastąp `public/favicon.svg` własną ikoną SVG.
7. **Uruchom lint, typecheck i build lokalnie:**
   ```bash
   npm run typecheck
   npm run build
   ```
8. **Wdróż na Vercel** – połącz repozytorium, wpisz zmienne środowiskowe z `.env.local`.
9. **Podłącz domenę** w panelu Vercel.
10. **Sprawdź canonical, sitemap i robots** – otwórz `/sitemap.xml` i `/robots.txt`.
11. **Uzupełnij Google Search Console** – dodaj domenę i prześlij sitemap.
12. **Przetestuj formularz** – wypełnij i upewnij się, że e-mail dotarł na `CONTACT_EMAIL`.
13. **Zweryfikuj politykę prywatności** pod adresem `/polityka-prywatnosci` – skonsultuj treść z prawnikiem przed publikacją.
14. **Ustaw `seo.noindex: false`** w `site-content.ts` dopiero gdy strona jest gotowa do indeksowania. Build nie pozwoli opublikować strony z `noindex: false` i pozostałymi placeholderami.

---

## Lista miejsc do zmiany dla nowej domeny

To jedyna rzecz, którą musisz zrobić:

| Co | Gdzie |
|---|---|
| Wszystkie treści, dane kontaktowe, domena | `content/site-content.ts` |
| Klucz Resend, e-mail, URL produkcyjny | `.env.local` |
| Zdjęcie doradcy | `public/adviser.webp` |
| Favicon (opcjonalnie) | `public/favicon.svg` |

Komponentów **nie edytujesz**.

---

## Jak wygenerować treść dla nowej strony (z AI)

Użyj modelu językowego (np. Claude), aby wygenerować kompletny obiekt `SiteContent` dla nowej grupy docelowej.

Przykładowy prompt:

> Wygeneruj pełny obiekt TypeScript zgodny z typem `SiteContent` (z pliku `types/site-content.ts`) dla strony `kredytdlalekarzy.pl`. Strona kierowana jest do lekarzy szukających kredytu hipotecznego lub gotówkowego. Użyj realnych, merytorycznych treści po polsku. Nie modyfikuj komponentów.

Model zwróci gotowy obiekt – wklej go do `content/site-content.ts`, uzupełnij dane kontaktowe i wdróż.

---

## Architektura

```
app/
  layout.tsx          – Metadata, JSON-LD, theme CSS vars
  page.tsx            – Kompozycja strony z komponentów
  globals.css         – Design system (CSS variables, reset, klasy)
  robots.ts           – Generowany z konfiguracji
  sitemap.ts          – Generowany z konfiguracji
  opengraph-image.tsx – OG image generowany z konfiguracji
  polityka-prywatnosci/page.tsx
  api/lead/route.ts   – Handler formularza (Resend)

components/
  Header.tsx          – Logo, nawigacja, menu mobilne (Client)
  Hero.tsx            – H1, lead, CTA, checklist
  QuickAnswer.tsx     – Sekcja "co to jest"
  SectionRenderer.tsx – Dispatcher typów sekcji
  TextSection.tsx     – Sekcja tekstowa
  SplitSection.tsx    – Dwie kolumny
  ChecklistSection.tsx – Lista z grupami
  CardsSection.tsx    – Siatka kart
  HighlightSection.tsx – Wyróżniony blok
  ProcessSection.tsx  – Kroki numerowane
  IssuesSection.tsx   – Lista trudności
  LeadForm.tsx        – Formularz (Client, walidacja, UTM, honeypot)
  AdviserSection.tsx  – Zdjęcie i opis doradcy
  FAQ.tsx             – Akordeon <details><summary>
  FinalCTA.tsx        – Sekcja końcowego wezwania
  Footer.tsx          – Stopka z linkami
  JsonLd.tsx          – Wstrzykiwanie JSON-LD

content/
  site-content.ts     – JEDYNE MIEJSCE EDYCJI TREŚCI

lib/
  site-config.ts      – Import i walidacja konfiguracji
  validation.ts       – Walidacja budowania (chroni przed placeholderami)
  lead.ts             – Walidacja formularza, budowanie e-maila
  schema.ts           – Generowanie JSON-LD z konfiguracji

types/
  site-content.ts     – Typy TypeScript (SiteContent, ContentSection, itd.)
```

---

## Zmienne środowiskowe

| Zmienna | Opis |
|---|---|
| `RESEND_API_KEY` | Klucz API Resend (resend.com) |
| `CONTACT_EMAIL` | Adres e-mail, na który trafiają leady |
| `FROM_EMAIL` | Nadawca e-maila (musi być zweryfikowany w Resend) |
| `NEXT_PUBLIC_SITE_URL` | URL produkcyjny bez trailing slash |
| `NEXT_PUBLIC_PHONE` | Telefon (opcjonalne, dla klienta) |
| `NEXT_PUBLIC_PHONE_DISPLAY` | Telefon do wyświetlenia |

W trybie dev bez `RESEND_API_KEY` leady są wypisywane do konsoli.

---

## Uruchomienie lokalne

```bash
npm install
cp .env.example .env.local
# uzupełnij .env.local
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000).

---

## Skrypty

```bash
npm run dev        # Serwer deweloperski
npm run build      # Build produkcyjny (uruchamia walidację konfiguracji)
npm run start      # Serwer produkcyjny
npm run typecheck  # TypeScript bez emitowania plików
```

---

## Uwagi prawne

> Treść polityki prywatności w `/polityka-prywatnosci` jest szablonem. Przed opublikowaniem wymaga weryfikacji przez radcę prawnego lub adwokata. Nie stanowi porady prawnej i nie gwarantuje zgodności z RODO.

---

## Technologie

- Next.js 16 App Router
- TypeScript
- CSS variables (bez Tailwind, bez bibliotek UI)
- Resend (wysyłka e-mail)
- Vercel (hosting)
