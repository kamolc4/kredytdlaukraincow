import type { SiteContent } from "@/types/site-content"

type Props = {
  process: SiteContent["process"]
}

export default function ProcessSection({ process }: Props) {
  return (
    <section
      id={process.id}
      className="section section--alt"
      aria-labelledby={`${process.id}-heading`}
    >
      <div className="container">
        <h2 id={`${process.id}-heading`}>{process.title}</h2>

        {process.intro && <p className="section__intro">{process.intro}</p>}

        <ol className="process__steps" role="list">
          {process.steps.map((step, i) => (
            <li key={i} className="process__step">
              <span className="process__num" aria-hidden="true">{i + 1}</span>
              <div className="process__step-body">
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
