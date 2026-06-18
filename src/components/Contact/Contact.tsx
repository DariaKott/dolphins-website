import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <section id="contact" className="page-section" aria-labelledby="contact-title">
      <div className={`${styles.inner} container`}>
        <div>
          <p className={styles.label}>Contact</p>
          <h2 id="contact-title">Contact section placeholder</h2>
          <p>Temporary content for phone, email, social links, or booking request details.</p>
        </div>

        <form className={styles.form}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Trip details" rows={5} />
          </label>
          <button type="submit">Send request</button>
        </form>
      </div>
    </section>
  );
};
