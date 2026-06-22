import styles from "./Method.module.scss";

const programItems = [
  "телесно-ориентированные практики;",
  "соматические настройки и разминки;",
  "акватерапия в воде;",
  "терапевтическая интеграция;",
  "работа с ощущением опоры на воду;",
  "мягкое раскрытие ресурсов тела.",
];

export const Method = () => {
  return (
    <section id="method" className={styles.method} aria-labelledby="method-title">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.headingColumn}>
            <p className={styles.eyebrow}>МЕТОД</p>
            <h2 id="method-title" className={styles.title}>
              МЕТОД
              <br />
              <span>AQUATERRA</span>
            </h2>
          </div>
          <div className={styles.textColumn}>
            <div className={styles.description}>
              <p className={styles.lead}>
                <span className={styles.accent}>Aquaterra</span> — это тонкое соединение
                телесно-ориентированной терапии, соматической релаксации и трансформации
                сознания через физическую опору на воду.
              </p>
              <p>
                В программе мы будем работать с тем, что глубоко запаковано в теле, помогая
                ему бережно раскрываться через структуру водной среды, телесные практики и
                контакт со свободными дельфинами.
              </p>
            </div>
            <div className={styles.program}>
              <h3 className={styles.programTitle}>ЧТО БУДЕТ ПРОИСХОДИТЬ НА ПРОГРАММЕ</h3>
              <ul className={styles.programList}>
                {programItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
