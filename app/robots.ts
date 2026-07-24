import type { MetadataRoute } from "next"
import { siteContent } from "@/lib/site-config"

export default function robots(): MetadataRoute.Robots {
  const { site, seo } = siteContent

  if (seo.noindex) {
    return {
      rules: { userAgent: "*", disallow: "/" },
      host: site.canonicalUrl,
    }
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.canonicalUrl}/sitemap.xml`,
    host: site.canonicalUrl,
  }
}
