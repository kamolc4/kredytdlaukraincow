import type { Metadata } from "next"
import "./globals.css"
import { siteContent } from "@/lib/site-config"
import { buildJsonLd } from "@/lib/schema"
import JsonLd from "@/components/JsonLd"
import CookieBanner from "@/components/CookieBanner"

const { site, seo, theme } = siteContent

// Bezpieczne parsowanie URL – fallback na localhost gdy canonicalUrl to placeholder
function safeUrl(url: string): URL {
  try {
    return new URL(url)
  } catch {
    return new URL("http://localhost:3000")
  }
}

export const metadata: Metadata = {
  metadataBase: safeUrl(site.canonicalUrl),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  robots: seo.noindex
    ? { index: false, follow: false }
    : { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    url: site.canonicalUrl,
    siteName: site.name,
    title: site.ogTitle,
    description: site.ogDescription,
    locale: site.locale,
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.ogTitle,
    description: site.ogDescription,
  },
}

// CSS variables nadpisujące domyślne z globals.css
const themeStyle = {
  "--primary": theme.primary,
  "--primary-hover": theme.primaryHover,
  "--primary-soft": theme.primarySoft,
} as React.CSSProperties

const schemas = buildJsonLd(siteContent)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.language} style={themeStyle}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        {schemas.map((schema, i) => (
          <JsonLd key={i} schema={schema} />
        ))}
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Przejdź do treści
        </a>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
