import type { MetadataRoute } from "next"
import { siteContent } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const { site, seo } = siteContent

  if (seo.noindex) {
    return []
  }

  const base = site.canonicalUrl

  return [
    {
      url: base,
      lastModified: site.lastUpdated,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/polityka-prywatnosci`,
      lastModified: site.lastUpdated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
