import { ImageResponse } from "next/og"
import { siteContent } from "@/lib/site-config"

export const runtime = "edge"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  const { site, hero, theme, brand } = siteContent

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px 72px",
          background: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Pasek kolorystyczny na górze */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: theme.primary,
          }}
        />

        {/* Logo */}
        <div
          style={{
            position: "absolute",
            top: "48px",
            left: "72px",
            fontSize: "22px",
            fontWeight: "700",
            color: "#0f1117",
          }}
        >
          {brand.logoText}
        </div>

        {/* Tytuł */}
        <div
          style={{
            fontSize: "52px",
            fontWeight: "800",
            color: "#0f1117",
            lineHeight: 1.15,
            marginBottom: "20px",
            maxWidth: "900px",
          }}
        >
          {site.ogTitle}
        </div>

        {/* Lead */}
        <div
          style={{
            fontSize: "26px",
            color: "#5a6272",
            lineHeight: 1.4,
            maxWidth: "780px",
            marginBottom: "40px",
          }}
        >
          {site.ogDescription}
        </div>

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              background: theme.primary,
              color: "#fff",
              padding: "10px 24px",
              borderRadius: "8px",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {hero.primaryCta.label}
          </div>
          <div
            style={{
              color: "#5a6272",
              fontSize: "18px",
            }}
          >
            {site.domain}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
