import type { ContentSection } from "@/types/site-content"

type CardsSectionType = Extract<ContentSection, { type: "cards" }>

type Props = { section: CardsSectionType }

export default function CardsSection({ section }: Props) {
  return (
    <section
      id={section.id}
      className="section"
      aria-labelledby={`${section.id}-heading`}
    >
      <div className="container">
        <h2 id={`${section.id}-heading`}>{section.title}</h2>

        {section.intro && <p className="section__intro">{section.intro}</p>}

        <ul className="cards-section__grid" role="list">
          {section.items.map((item, i) => (
            <li key={i} className="card">
              <h3 className="card__title">{item.title}</h3>
              <p className="card__text">{item.text}</p>
            </li>
          ))}
        </ul>

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
