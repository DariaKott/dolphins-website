import yuliaPhoto from "@/assets/images/yulia.png";

import styles from "./About.module.scss";

export const About = () => {
  return (
    <section id="about" className={styles.leader} aria-labelledby="leader-title">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>ВЕДУЩАЯ ПРОГРАММЫ</p>
            <h2 id="leader-title" className={styles.title}>
              РАКОВСКАЯ
              <br />
              <span>ЮЛИЯ</span>
              <br />
              ВЛАДИМИРОВНА
            </h2>
            <div className={styles.text}>
              <p>Автор программы, ведущая в контакт со свободными дельфинами.</p>
              <p>
                Телесно-ориентированный психотерапевт, психолог, практик
                энерго-информационной коррекции, кандидат физико-математических и
                психологических наук. Автор метода Aquaterra.
              </p>
            </div>
          </div>
          <div className={styles.photoColumn}>
            <div className={styles.photoFrame}>
              <img
                className={styles.photo}
                src={yuliaPhoto.src}
                alt="Раковская Юлия Владимировна"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
