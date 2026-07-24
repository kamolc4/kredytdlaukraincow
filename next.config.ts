import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Zezwala na next/image z SVG (dla placeholder doradcy)
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Dodaj zewnętrzne domeny, jeśli potrzebujesz zewnętrznych obrazów:
    // remotePatterns: []
  },
}

export default nextConfig
