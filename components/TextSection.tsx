import type { ContentSection } from "@/types/site-content"

type TextSectionType = Extract<ContentSection, { type: "text" }>

type Props = { section: TextSectionType }

export default function TextSection({ section }: Props) {
  return (
    <section
      id={section.id}
      className="section section--alt"
      aria-labelledby={`${section.id}-heading`}
    >
      <div className="container">
        <h2 id={`${section.id}-heading`}>{section.title}</h2>

        {section.intro && <p className="section__intro">{section.intro}</p>}

        <div className="text-section__paragraphs">
          {section.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
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
