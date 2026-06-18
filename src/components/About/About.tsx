import styles from "./About.module.scss";

export const About = () => {
  return (
    <section id="about" className="page-section" aria-labelledby="about-title">
      <div className={`${styles.inner} container`}>
        <p className={styles.label}>About</p>
        <div>
          <h2 id="about-title">A simple introduction section</h2>
          <p>
            Temporary content describing the offer, audience, and value of the experience.
          </p>
        </div>
      </div>
    </section>
  );
};
