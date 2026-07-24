const items = [
  "osoby posiadające kartę pobytu (stałego lub czasowego)",
  "osoby legitymujące się numerem PESEL UKR lub innym dokumentem pobytu",
  "osoby zatrudnione na umowie zlecenie lub umowie o dzieło",
  "osoby prowadzące własną działalność gospodarczą",
  "osoby, które wcześniej spotkały się z odmową kredytu",
  "osoby, które nie wiedzą od czego zacząć",
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
        <p id="who-i-help-heading" className="who-i-help__title">Najczęściej pomagam...</p>
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
