import styles from "./Yacht.module.scss";

export const Yacht = () => {
  return (
    <section id="yacht" className="page-section" aria-labelledby="yacht-title">
      <div className={`${styles.inner} container`}>
        <div className={styles.image} aria-label="Temporary yacht image placeholder" />
        <div>
          <p className={styles.label}>Yacht</p>
          <h2 id="yacht-title">Vessel details placeholder</h2>
          <p>Temporary copy for capacity, comfort, amenities, and safety information.</p>
        </div>
      </div>
    </section>
  );
};
