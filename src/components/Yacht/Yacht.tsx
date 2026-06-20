"use client";

import { useEffect, useState } from "react";

import yacht1 from "@/assets/images/yacht/yacht1.jpg";
import yacht2 from "@/assets/images/yacht/yacht2.jpg";
import yacht3 from "@/assets/images/yacht/yacht3.jpg";
import yacht4 from "@/assets/images/yacht/yacht4.jpg";
import yacht5 from "@/assets/images/yacht/yacht5.jpg";

import styles from "./Yacht.module.scss";

const yachtImages = [
  { src: yacht1.src, alt: "Яхта ATLANTY на воде" },
  { src: yacht2.src, alt: "Палуба яхты ATLANTY" },
  { src: yacht3.src, alt: "Каюта яхты ATLANTY" },
  { src: yacht4.src, alt: "Пространство яхты ATLANTY" },
  { src: yacht5.src, alt: "Детали яхты ATLANTY" },
];

const providedItems = [
  "Неделя на комфортабельной яхте ATLANTY;",
  "Высококлассное четырехразовое питание (Full Board), чай, кофе и закуски без ограничений;",
  "Возможность заранее выбрать вегетарианское или индивидуальное меню;",
  "Снаряжение для погружения: маски, трубки, ласты и жилеты;",
  "Сопровождение опытных дайв-гидов.",
];

export const Yacht = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const activeImage = activeImageIndex === null ? null : yachtImages[activeImageIndex];

  useEffect(() => {
    if (activeImageIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImageIndex(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageIndex]);

  return (
    <section id="yacht" className={styles.yacht} aria-labelledby="yacht-title">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>ДОМ НА ВОДЕ</p>
            <h2 id="yacht-title" className={styles.title}>
              ЯХТА <span>ATLANTY</span>
            </h2>
            <div className={styles.intro}>
              <p>На время морского выезда яхта становится вашим домом на воде.</p>
              <p>
                Комфортные каюты, питание, команда, дайв-гиды и безопасное сопровождение
                создают пространство, в котором можно расслабиться, погрузиться в практику
                и быть в контакте с морем.
              </p>
            </div>
            <div className={styles.provided}>
              <h3 className={styles.providedTitle}>Что мы предоставляем</h3>
              <ul className={styles.providedList}>
                {providedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.note}>
              <p>
                Важное условие: алкоголь на протяжении всего морского выезда полностью
                исключен — для сохранения чистоты восприятия, безопасности и глубины
                процесса.
              </p>
            </div>
          </div>
          <div className={styles.gallery} aria-label="Фотографии яхты ATLANTY">
            {yachtImages.map((image, index) => (
              <button
                className={styles.galleryItem}
                key={image.src}
                type="button"
                onClick={() => setActiveImageIndex(index)}
              >
                <img src={image.src} alt={image.alt} />
              </button>
            ))}
          </div>
        </div>
      </div>
      {activeImage ? (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр фотографии яхты"
          onClick={() => setActiveImageIndex(null)}
        >
          <button
            className={styles.closeButton}
            type="button"
            aria-label="Закрыть"
            onClick={() => setActiveImageIndex(null)}
          >
            ×
          </button>
          <img
            className={styles.lightboxImage}
            src={activeImage.src}
            alt={activeImage.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  );
};
