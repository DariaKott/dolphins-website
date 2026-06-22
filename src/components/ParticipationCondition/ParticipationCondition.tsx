import styles from "./ParticipationCondition.module.scss";

export const ParticipationCondition = () => {
  return (
    <section className={styles.condition} aria-labelledby="condition-title">
      <div className="container">
        <div className={styles.content}>
          <p className={styles.eyebrow} id="condition-title">
            УСЛОВИЕ УЧАСТИЯ
          </p>
          <div className={styles.text}>
            <p>
              Подписание договора и оплата путешествия происходят после личного
              собеседования с Юлией.
            </p>
            <p>
              Это необходимо, чтобы сонастроиться по ценностям, сформировать группу людей
              со схожим мировосприятием и убедиться в готовности к участию в программе.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
