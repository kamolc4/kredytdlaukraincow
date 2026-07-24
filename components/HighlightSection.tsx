import type { ContentSection } from "@/types/site-content"

type HighlightSectionType = Extract<ContentSection, { type: "highlight" }>

type Props = { section: HighlightSectionType }

export default function HighlightSection({ section }: Props) {
  return (
    <section
      id={section.id}
      className="section section--muted"
      aria-labelledby={`${section.id}-heading`}
    >
      <div className="container">
        <h2 id={`${section.id}-heading`}>{section.title}</h2>

        <div className="highlight-section">
          <div className="highlight-section__paragraphs">
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {section.notice && (
            <p className="highlight-section__notice">{section.notice}</p>
          )}
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
