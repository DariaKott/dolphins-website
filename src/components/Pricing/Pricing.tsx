import styles from "./Pricing.module.scss";

const extraItems = [
  "авиабилеты;",
  "отели до и после яхтенного сафари;",
  "трансферы;",
  "медицинская страховка;",
  "туристическая виза.",
];

export const Pricing = () => {
  return (
    <section id="pricing" className={styles.pricing} aria-labelledby="pricing-title">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.heroBlock}>
            <h2 id="pricing-title" className={styles.title}>
              ДАТЫ И <span>СТОИМОСТЬ</span>
            </h2>
          </div>

          <div className={styles.datesBlock}>
            <h3 className={styles.sectionTitle}>ДАТЫ И ЛОГИСТИКА</h3>
            <div className={styles.period}>
              <span className={styles.periodLabel}>Период на яхте:</span>
              <strong>31 октября — 7 ноября 2026 года</strong>
            </div>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <strong>31 октября</strong>
                <span>
                  отправление на яхту от ресепшена отеля Dream Lagoon,
                  Марса-эль-Алам.
                </span>
              </div>
              <div className={styles.timelineItem}>
                <strong>1 ноября</strong>
                <span>официальный выход из порта Хамата в Сатайю.</span>
              </div>
              <div className={styles.timelineItem}>
                <strong>7 ноября</strong>
                <span>возвращение в порт.</span>
              </div>
            </div>
            <p className={styles.recommendation}>
              Рекомендуется прилететь на 2–3 дня раньше и после выезда остаться еще на 2–3
              дня для спокойной интеграции опыта.
            </p>
          </div>

          <div className={styles.priceBlock}>
            <h3 className={styles.sectionTitle}>СТОИМОСТЬ УЧАСТИЯ</h3>
            <div className={styles.priceLayout}>
              <div className={styles.priceTable}>
                <div className={styles.priceGroup}>
                  <h4 className={styles.priceGroupTitle}>Двухместное размещение:</h4>
                  <div className={styles.priceRow}>
                    <span>нижняя палуба</span>
                    <strong>2500 €</strong>
                  </div>
                  <div className={styles.priceRow}>
                    <span>верхняя палуба</span>
                    <strong>2700 €</strong>
                  </div>
                </div>
                <div className={styles.priceGroup}>
                  <h4 className={styles.priceGroupTitle}>Одноместное размещение:</h4>
                  <div className={styles.priceRow}>
                    <span>нижняя палуба</span>
                    <strong>4200 €</strong>
                  </div>
                  <div className={styles.priceRow}>
                    <span>верхняя палуба</span>
                    <strong>4600 €</strong>
                  </div>
                </div>
              </div>
              <p className={styles.included}>
                В стоимость входит морское обеспечение, проживание на яхте, питание,
                снаряжение, разрешения, билеты в заповедник и участие во внутренней
                программе.
              </p>
            </div>
          </div>

          <div className={styles.extraBlock}>
            <h3 className={styles.sectionTitle}>ЧТО ОПЛАЧИВАЕТСЯ ОТДЕЛЬНО</h3>
            <ul className={styles.extraList}>
              {extraItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
