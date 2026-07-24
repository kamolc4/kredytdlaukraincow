import type { ContentSection } from "@/types/site-content"

type ChecklistSectionType = Extract<ContentSection, { type: "checklist" }>

type Props = { section: ChecklistSectionType }

function CheckIcon() {
  return (
    <svg className="checklist-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function ChecklistSection({ section }: Props) {
  return (
    <section
      id={section.id}
      className="section section--muted"
      aria-labelledby={`${section.id}-heading`}
    >
      <div className="container">
        <h2 id={`${section.id}-heading`}>{section.title}</h2>

        {section.intro && <p className="section__intro">{section.intro}</p>}

        <div className="checklist-section__groups">
          {section.groups.map((group, i) => (
            <div key={i}>
              <h3 className="checklist-group__title">{group.title}</h3>
              <ul className="checklist-group__items" role="list">
                {group.items.map((item, j) => (
                  <li key={j} className="checklist-item">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {section.notice && (
          <div className="checklist-section__notice" role="note">
            {section.notice}
          </div>
        )}

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
