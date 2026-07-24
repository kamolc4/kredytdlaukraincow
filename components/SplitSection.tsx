import type { ContentSection } from "@/types/site-content"

type SplitSectionType = Extract<ContentSection, { type: "split" }>

type Props = { section: SplitSectionType }

export default function SplitSection({ section }: Props) {
  return (
    <section
      id={section.id}
      className="section"
      aria-labelledby={`${section.id}-heading`}
    >
      <div className="container">
        <h2 id={`${section.id}-heading`}>{section.title}</h2>

        {section.intro && <p className="section__intro">{section.intro}</p>}

        <div className="split-section__grid">
          {section.columns.map((col, i) => (
            <div key={i} className="split-section__col">
              <h3 className="split-section__col-title">{col.title}</h3>

              {col.paragraphs.map((p, j) => (
                <p key={j} style={{ fontSize: "0.9375rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
                  {p}
                </p>
              ))}

              {col.bullets && col.bullets.length > 0 && (
                <ul className="split-section__bullets" role="list">
                  {col.bullets.map((b, k) => (
                    <li key={k} className="split-section__bullet">{b}</li>
                  ))}
                </ul>
              )}
            </div>
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
