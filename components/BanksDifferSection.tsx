const points = [
  {
    title: "Zasady wobec cudzoziemców",
    text: "Każdy bank samodzielnie określa, jakie dokumenty pobytowe akceptuje i jakie wymagania stawia osobom nieposiadającym polskiego obywatelstwa. Nie istnieje jeden zuniformizowany standard.",
  },
  {
    title: "Wymagania dotyczące dokumentów",
    text: "Rodzaj wymaganego dokumentu pobytowego, minimalny okres jego ważności i ewentualne wymagania dodatkowe mogą być różne w zależności od instytucji.",
  },
  {
    title: "Ocena dochodu i zatrudnienia",
    text: "Forma zatrudnienia akceptowana przez jeden bank może nie spełniać wymagań innego. Dotyczy to m.in. umów zlecenia, działalności gospodarczej i dochodu uzyskiwanego w walutach obcych.",
  },
  {
    title: "Co wynika z tych różnic?",
    text: "Odmowa w jednym banku nie jest informacją o całym rynku. Zamiast wysyłać nieskoordynowane wnioski, warto zacząć od analizy sytuacji uwzględniającej zasady różnych instytucji.",
  },
]

export default function BanksDifferSection() {
  return (
    <section className="section section--muted" aria-labelledby="banks-differ-heading">
      <div className="container">
        <h2 id="banks-differ-heading">Dlaczego jeden bank może odmówić, a inny zaakceptować wniosek?</h2>
        <p className="section__intro">
          Ocena wniosku zależy nie tylko od Twojej sytuacji, ale też od zasad konkretnej instytucji. Banki nie stosują jednego wspólnego regulaminu wobec klientów z zagranicy.
        </p>
        <div className="banks-differ__grid">
          {points.map((point, i) => (
            <div key={i} className="banks-differ__item">
              <p className="banks-differ__item-title">{point.title}</p>
              <p className="banks-differ__item-text">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
