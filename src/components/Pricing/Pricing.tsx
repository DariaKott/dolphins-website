import styles from "./Pricing.module.scss";

const options = ["Half day", "Full day"];

export const Pricing = () => {
  return (
    <section id="pricing" className="page-section" aria-labelledby="pricing-title">
      <div className="container">
        <div className={styles.header}>
          <p>Pricing</p>
          <h2 id="pricing-title">Pricing structure placeholder</h2>
        </div>

        <div className={styles.cards}>
          {options.map((option) => (
            <article key={option} className={styles.card}>
              <h3>{option}</h3>
              <p>Temporary package description and pricing details.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
