import type { ContentSection } from "@/types/site-content"
import TextSection from "@/components/TextSection"
import SplitSection from "@/components/SplitSection"
import ChecklistSection from "@/components/ChecklistSection"
import CardsSection from "@/components/CardsSection"
import HighlightSection from "@/components/HighlightSection"

type Props = {
  section: ContentSection
}

export default function SectionRenderer({ section }: Props) {
  switch (section.type) {
    case "text":
      return <TextSection section={section} />
    case "split":
      return <SplitSection section={section} />
    case "checklist":
      return <ChecklistSection section={section} />
    case "cards":
      return <CardsSection section={section} />
    case "highlight":
      return <HighlightSection section={section} />
    default:
      return null
  }
}
