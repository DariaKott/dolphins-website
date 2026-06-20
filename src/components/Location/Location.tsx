import styles from "./Location.module.scss";

export const Location = () => {
  return (
    <section id="location" className={styles.location} aria-labelledby="location-title">
      <div className="container">
        <div className={styles.headingBlock}>
          <p className={styles.eyebrow}>МЕСТО СИЛЫ</p>
          <h2 id="location-title" className={styles.title}>
            ЛАГУНА <span>САТАЙЯ</span>
          </h2>
          <div className={styles.textBlock}>
            <p>Наш основной дом на эту неделю — лагуна Сатайя на юге Красного моря.</p>
            <p>
              Это огромный коралловый риф в форме подковы, который защищает лагуну от
              штормов и течений. Каждый день сюда приходят свободные дельфины — отдыхать,
              спать и играть.
            </p>
            <p>
              Дельфины здесь абсолютно свободны. Они сами выбирают, находиться ли рядом,
              подплывать ближе и впускать человека в свое пространство.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
