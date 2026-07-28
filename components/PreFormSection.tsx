const steps = [
  {
    num: "1",
    text: "Zapoznaję się z przesłanymi informacjami i sprawdzam, jakie elementy sytuacji mogą mieć znaczenie.",
  },
  {
    num: "2",
    text: "Kontaktuję się z Tobą telefonicznie lub e-mailowo. W razie potrzeby zadaję pytania uzupełniające.",
  },
  {
    num: "3",
    text: "Wyjaśniam, jakie możliwości mogą być dostępne w Twojej sytuacji i co byłoby potrzebne do dalszych kroków.",
  },
  {
    num: "4",
    text: "Jeżeli sytuacja daje podstawy do działania, możemy przejść do dokładniejszej analizy lub przygotowania dokumentów.",
  },
]

export default function PreFormSection() {
  return (
    <section className="section section--alt" aria-labelledby="pre-form-heading">
      <div className="container">
        <h2 id="pre-form-heading">Co dzieje się po wysłaniu formularza?</h2>
        <p className="section__intro">
          Formularz uruchamia proces wstępnej analizy. Oto jak wygląda kolejność dalszych działań.
        </p>
        <div className="pre-form__steps">
          {steps.map((step) => (
            <div key={step.num} className="pre-form__step">
              <span className="pre-form__step-num" aria-hidden="true">{step.num}</span>
              <p className="pre-form__step-text">{step.text}</p>
            </div>
          ))}
        </div>
        <p className="pre-form__notice" role="note">
          Formularz nie jest wnioskiem kredytowym i nie powoduje zapytania do BIK. Wysłanie formularza nie oznacza złożenia wniosku do banku. Wstępna analiza nie jest decyzją kredytową.
        </p>
      </div>
    </section>
  )
}
