import styles from "./Method.module.scss";

const steps = ["Choose the route", "Confirm the details", "Enjoy the trip"];

export const Method = () => {
  return (
    <section id="method" className="page-section" aria-labelledby="method-title">
      <div className="container">
        <div className={styles.header}>
          <p>Method</p>
          <h2 id="method-title">A clear booking flow placeholder</h2>
        </div>

        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};
