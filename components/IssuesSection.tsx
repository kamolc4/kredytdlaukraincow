import type { SiteContent } from "@/types/site-content"

type Props = {
  issues: SiteContent["issues"]
  phone: string
  phoneDisplay: string
}

function AlertIcon() {
  return (
    <svg className="issues__item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  )
}

export default function IssuesSection({ issues, phone, phoneDisplay }: Props) {
  return (
    <section
      id={issues.id}
      className="section"
      aria-labelledby={`${issues.id}-heading`}
    >
      <div className="container">
        <h2 id={`${issues.id}-heading`}>{issues.title}</h2>

        {issues.intro && <p className="section__intro">{issues.intro}</p>}

        <ul className="issues__list" role="list">
          {issues.items.map((item, i) => (
            <li key={i} className="issues__item">
              <AlertIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {issues.notice && (
          <div className="issues__notice" role="note">
            {issues.notice}
            {" "}
            <a href={`tel:${phone}`} data-action="phone" data-cta="issues">
              {phoneDisplay}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
