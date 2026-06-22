import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className="container">
        <div className={styles.content}>
          <p className={styles.eyebrow}>МОРСКОЙ ВЫЕЗД</p>

          <h1 id="hero-title" className={styles.title}>
            КОНТАКТ С
            <br />
            ДЕЛЬФИНАМИ
            <br />И СТИХИЯМИ
          </h1>

          <p className={styles.subtitle}>
            Египет, риф Сатайя
            <br />
            31 октября — 7 ноября 2026 года
          </p>

          <a className={styles.cta} href="#contact">
            Оставить заявку
          </a>
        </div>
      </div>
    </section>
  );
};
