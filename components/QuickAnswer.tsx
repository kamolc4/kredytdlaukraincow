import type { SiteContent } from "@/types/site-content"
import IllustrationKredyt from "./IllustrationKredyt"

type Props = {
  section: SiteContent["quickAnswer"]
}

export default function QuickAnswer({ section }: Props) {
  return (
    <section
      id={section.id}
      className="section section--alt"
      aria-labelledby={`${section.id}-heading`}
    >
      <div className="container">
        <h2 id={`${section.id}-heading`}>{section.title}</h2>

        <div className="illustrated-content">
          <div className="illustrated-content__text">
            <div className="quick-answer__paragraphs">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {section.notice && (
              <div className="quick-answer__notice" role="note">
                {section.notice.title && (
                  <p className="quick-answer__notice-title">{section.notice.title}</p>
                )}
                <p>{section.notice.text}</p>
              </div>
            )}
          </div>

          <div className="illustrated-content__image">
            <IllustrationKredyt />
          </div>
        </div>
      </div>
    </section>
  )
}
