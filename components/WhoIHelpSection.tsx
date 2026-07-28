const items = [
  "posiadają PESEL UKR lub inny dokument pobytu",
  "posiadają kartę czasowego pobytu",
  "posiadają kartę stałego pobytu",
  "nie mają jeszcze karty pobytu",
  "pracują na umowę o pracę",
  "pracują na umowę zlecenie lub umowę o dzieło",
  "prowadzą własną działalność gospodarczą",
  "chcą kupić pierwsze mieszkanie lub nieruchomość",
  "wcześniej otrzymały odmowę kredytu",
  "chcą sprawdzić swoją zdolność kredytową",
]

function CheckIcon() {
  return (
    <svg className="who-i-help__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function WhoIHelpSection() {
  return (
    <section className="who-i-help" aria-labelledby="who-i-help-heading">
      <div className="container">
        <p id="who-i-help-heading" className="who-i-help__title">Najczęściej pomagam osobom, które:</p>
        <ul className="who-i-help__list" role="list">
          {items.map((item, i) => (
            <li key={i} className="who-i-help__item">
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
