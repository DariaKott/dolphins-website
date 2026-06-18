import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={`${styles.inner} container`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Private Adriatic yacht experience</p>
          <h1 id="hero-title">Dolphins yacht landing page foundation</h1>
          <p>
            Placeholder content for the primary landing page message. Final copy and visual
            direction will be added later.
          </p>
        </div>
        <div className={styles.media} aria-label="Temporary visual placeholder" />
      </div>
    </section>
  );
};
