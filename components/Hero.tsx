import type { SiteContent } from "@/types/site-content"

type Props = {
  hero: SiteContent["hero"]
}

function CheckIcon() {
  return (
    <svg className="hero__check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}

export default function Hero({ hero }: Props) {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container">
        {hero.badge && (
          <div className="hero__badge">
            <ShieldIcon />
            {hero.badge}
          </div>
        )}

        {hero.eyebrow && (
          <p className="hero__eyebrow" aria-hidden="true">
            {hero.eyebrow}
          </p>
        )}

        <h1 id="hero-heading" className="hero__h1">
          {hero.h1}
        </h1>

        <p className="hero__lead">{hero.lead}</p>

        <div className="hero__actions">
          <a
            href={hero.primaryCta.href}
            className="btn btn--primary btn--lg"
            data-cta="hero-primary"
          >
            {hero.primaryCta.label}
          </a>

          {hero.secondaryCta && (
            <a
              href={hero.secondaryCta.href}
              className="btn btn--outline btn--lg"
              data-cta="hero-secondary"
              data-action={hero.secondaryCta.href.startsWith("tel:") ? "phone" : undefined}
            >
              {hero.secondaryCta.label}
            </a>
          )}
        </div>

        {hero.checklist.length > 0 && (
          <div>
            {hero.checklistTitle && (
              <p className="hero__checklist-title">{hero.checklistTitle}</p>
            )}
            <ul className="hero__checklist" role="list">
              {hero.checklist.map((item, i) => (
                <li key={i} className="hero__checklist-item">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
