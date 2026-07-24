import type { SiteContent } from "@/types/site-content"

type Props = {
  faq: SiteContent["faq"]
}

function ChevronIcon() {
  return (
    <svg className="faq__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export default function FAQ({ faq }: Props) {
  return (
    <section
      id={faq.id}
      className="section section--muted"
      aria-labelledby={`${faq.id}-heading`}
    >
      <div className="container">
        <h2 id={`${faq.id}-heading`}>{faq.title}</h2>

        <dl className="faq__list">
          {faq.items.map((item, i) => (
            <div key={i}>
              <details className="faq__item">
                <summary>
                  <span>{item.question}</span>
                  <ChevronIcon />
                </summary>
                <dd className="faq__answer">{item.answer}</dd>
              </details>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
