import styles from "./Experience.module.scss";

const outcomes = [
  "умение слышать свое тело;",
  "ощущение опоры на воду;",
  "больше свободы в позвоночнике и суставах;",
  "контакт с собой через пространство моря и дельфинов;",
  "состояние радости, тишины и наполненности;",
  "расширение эмоциональных и телесных возможностей.",
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className={styles.experience}
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div className={styles.content}>
          <p className={styles.eyebrow}>ОПЫТ</p>
          <h2 id="experience-title" className={styles.title}>
            ЧТО ВЫ МОЖЕТЕ
            <br />
            <span>ПРИОБРЕСТИ В ЭТОМ ОПЫТЕ</span>
          </h2>
          <ul className={styles.list}>
            {outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
