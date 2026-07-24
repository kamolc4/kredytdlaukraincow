import { siteContent } from "@/content/site-content"
import { validateSiteContent } from "@/lib/validation"

// Walidacja uruchamiana przy imporcie (czas builda i serwera)
validateSiteContent(siteContent)

export { siteContent }
export type { SiteContent } from "@/types/site-content"
