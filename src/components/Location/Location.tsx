import styles from "./Location.module.scss";

export const Location = () => {
  return (
    <section id="location" className="page-section" aria-labelledby="location-title">
      <div className={`${styles.inner} container`}>
        <div>
          <p className={styles.label}>Location</p>
          <h2 id="location-title">Route and destination placeholder</h2>
          <p>Temporary content for coastline, marina, and route details.</p>
        </div>
        <div className={styles.map} aria-label="Temporary map placeholder" />
      </div>
    </section>
  );
};
