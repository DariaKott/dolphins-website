import styles from "./Experience.module.scss";

const items = ["Swimming stops", "Scenic route", "Onboard comfort", "Flexible timing"];

export const Experience = () => {
  return (
    <section id="experience" className="page-section" aria-labelledby="experience-title">
      <div className="container">
        <div className={styles.header}>
          <p>Experience</p>
          <h2 id="experience-title">Experience highlights placeholder</h2>
        </div>

        <ul className={styles.grid}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
