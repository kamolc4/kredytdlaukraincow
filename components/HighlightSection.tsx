import type { ContentSection } from "@/types/site-content"
import IllustrationHipoteka from "./IllustrationHipoteka"
import IllustrationBIK from "./IllustrationBIK"

type HighlightSectionType = Extract<ContentSection, { type: "highlight" }>

type Props = { section: HighlightSectionType }

export default function HighlightSection({ section }: Props) {
  const Illustration =
    section.id === "historia-kredytowa" ? IllustrationBIK : IllustrationHipoteka

  return (
    <section
      id={section.id}
      className="section section--muted"
      aria-labelledby={`${section.id}-heading`}
    >
      <div className="container">
        <h2 id={`${section.id}-heading`}>{section.title}</h2>

        <div className="illustrated-content">
          <div className="illustrated-content__text">
            <div className="highlight-section__paragraphs">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {section.notice && (
              <p className="highlight-section__notice">{section.notice}</p>
            )}
          </div>

          <div className="illustrated-content__image">
            <Illustration />
          </div>
        </div>

        {section.cta && (
          <div className="section__cta">
            <a href={section.cta.href} className="btn btn--primary" data-cta="section">
              {section.cta.label}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
