import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className="container">
        <div className={styles.content}>
          <p className={styles.eyebrow}>КОНТАКТ</p>
          <h2 id="contact-title" className={styles.title}>
            Готовы услышать себя и свое тело иначе?
          </h2>
          <p className={styles.text}>
            Оставьте заявку, чтобы обсудить участие в программе.
          </p>
          <div className={styles.actions}>
            <a className={styles.button} href="https://t.me/" target="_blank" rel="noreferrer">
              Написать в Telegram
            </a>
            <a
              className={styles.button}
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
