import type { SiteContent } from "@/types/site-content"

type Props = {
  finalCta: SiteContent["finalCta"]
}

export default function FinalCTA({ finalCta }: Props) {
  return (
    <section className="final-cta" aria-label="Wezwanie do działania">
      <div className="container">
        <h2 className="final-cta__title">{finalCta.title}</h2>
        <p className="final-cta__text">{finalCta.text}</p>
        <a
          href={finalCta.buttonHref}
          className="btn btn--primary btn--lg"
          data-cta="final"
        >
          {finalCta.buttonLabel}
        </a>
      </div>
    </section>
  )
}
