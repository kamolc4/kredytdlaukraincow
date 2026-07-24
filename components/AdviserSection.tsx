import Image from "next/image"
import type { SiteContent } from "@/types/site-content"

type Props = {
  adviser: SiteContent["adviser"]
  contact: SiteContent["contact"]
}

export default function AdviserSection({ adviser, contact }: Props) {
  return (
    <section
      id={adviser.id}
      className="section section--alt"
      aria-labelledby={`${adviser.id}-heading`}
    >
      <div className="container">
        <h2 id={`${adviser.id}-heading`}>{adviser.title}</h2>

        <div className="adviser" style={{ marginTop: "1.5rem" }}>
          <Image
            src={contact.adviserImage}
            alt={contact.adviserName}
            width={120}
            height={120}
            className="adviser__image"
          />

          <div className="adviser__body">
            <p className="adviser__name">{contact.adviserName}</p>

            <div className="adviser__paragraphs">
              {adviser.text.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="adviser__contact">
              <a
                href={`tel:${contact.phone}`}
                className="btn btn--primary"
                data-action="phone"
                data-cta="adviser"
              >
                {contact.phoneDisplay}
              </a>
              <a
                href="#formularz"
                className="btn btn--outline"
                data-cta="adviser"
              >
                Napisz do nas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
