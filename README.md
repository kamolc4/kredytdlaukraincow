# kredytdlaukraincow.pl

Strona lead generation dla osób z Ukrainy mieszkających w Polsce, szukających kredytu hipotecznego lub gotówkowego.

Zbudowana na Next.js App Router + TypeScript. Wdrażana na Vercel.

---

## Checklist przed publikacją

- [ ] 1. Uzupełnić dane doradcy – `contact.adviserName` w `content/site-content.ts`
- [ ] 2. Uzupełnić nazwę firmy – `contact.companyName`
- [ ] 3. Uzupełnić NIP – `contact.nip`
- [ ] 4. Uzupełnić adres – `contact.address`
- [ ] 5. Uzupełnić telefon – `contact.phone` i `contact.phoneDisplay`
- [ ] 6. Uzupełnić e-mail – `contact.email` i `contact.privacyEmail`
- [ ] 7. Wgrać zdjęcie doradcy – `public/adviser.webp` (kwadrat, min 200×200 px), zaktualizować ścieżkę `contact.adviserImage`
- [ ] 8. Zweryfikować politykę prywatności – skonsultować z prawnikiem przed publikacją
- [ ] 9. Utworzyć `.env.local` (skopiować `.env.example` i uzupełnić wartości)
- [ ] 10. Skonfigurować Resend – zarejestrować konto na resend.com, uzyskać klucz API
- [ ] 11. Zweryfikować domenę nadawcy w Resend
- [ ] 12. Przetestować formularz lokalnie (`npm run dev`) – sprawdzić konsolę pod kątem logów
- [ ] 13. Przetestować formularz na Vercel – sprawdzić, czy e-mail trafia na `CONTACT_EMAIL`
- [ ] 14. Podłączyć `kredytdlaukraincow.pl` do projektu Vercel
- [ ] 15. Ustawić przekierowanie `www` → apex (lub odwrotnie, zgodnie z wybraną strategią)
- [ ] 16. Sprawdzić canonical – `/` powinien zwracać `https://kredytdlaukraincow.pl/`
- [ ] 17. Sprawdzić `robots.txt` – przy `noindex: true` powinien blokować crawlery
- [ ] 18. Sprawdzić `sitemap.xml` – przy `noindex: true` powinien być pusty
- [ ] 19. Zmienić `noindex` na `false` w `content/site-content.ts` – dopiero gdy wszystkie powyższe punkty są spełnione
- [ ] 20. Ponownie uruchomić produkcyjny build po zmianie `noindex`
- [ ] 21. Dodać stronę do Google Search Console
- [ ] 22. Dodać stronę do Bing Webmaster Tools
- [ ] 23. Wysłać sitemap w obu narzędziach
- [ ] 24. Poprosić o indeksację dopiero po pełnym uzupełnieniu strony i weryfikacji wszystkich danych

---

## Uwaga dotycząca polityki prywatności

Treść polityki prywatności w `/polityka-prywatnosci` jest szablonem. **Przed opublikowaniem wymaga weryfikacji przez radcę prawnego lub adwokata.** Nie stanowi porady prawnej i nie gwarantuje zgodności z RODO.

---

## Szybki start (lokalny)

```bash
npm install
cp .env.example .env.local
# uzupełnij .env.local
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000).

Bez skonfigurowanego `RESEND_API_KEY` formularz działa w trybie dev – leady są wypisywane do konsoli, nie są wysyłane e-maile.

---

## Skrypty

```bash
npm run dev        # Serwer deweloperski
npm run build      # Build produkcyjny (uruchamia walidację konfiguracji)
npm run start      # Serwer produkcyjny
npm run typecheck  # TypeScript bez emitowania plików
```

---

## Zmienne środowiskowe

| Zmienna | Opis |
|---|---|
| `RESEND_API_KEY` | Klucz API Resend (resend.com) |
| `CONTACT_EMAIL` | Adres e-mail, na który trafiają leady |
| `FROM_EMAIL` | Nadawca e-maila (musi być zweryfikowany w Resend) |
| `NEXT_PUBLIC_SITE_URL` | URL produkcyjny bez trailing slash |
| `NEXT_PUBLIC_PHONE` | Telefon (opcjonalne, dla dynamicznych komponentów) |
| `NEXT_PUBLIC_PHONE_DISPLAY` | Telefon do wyświetlenia |

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

components/           – Generyczne, nie edytować
content/
  site-content.ts     – JEDYNE MIEJSCE EDYCJI TREŚCI
lib/
  site-config.ts      – Import i walidacja konfiguracji
  validation.ts       – Walidacja budowania
  lead.ts             – Walidacja formularza, budowanie e-maila
  schema.ts           – Generowanie JSON-LD
types/
  site-content.ts     – Typy TypeScript
```

Walidacja w `lib/validation.ts` blokuje build, gdy `seo.noindex = false` i pozostały pola z placeholderami `[…]`.

---

## Technologie

- Next.js 16 App Router
- TypeScript
- CSS variables (bez Tailwind, bez bibliotek UI)
- Resend (wysyłka e-mail)
- Vercel (hosting)
