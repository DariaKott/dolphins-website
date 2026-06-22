import styles from "./Header.module.scss";

const navItems = [
  { label: "О программе", href: "#method" },
  { label: "Лагуна Сатайя", href: "#location" },
  { label: "Яхта ATLANTY", href: "#yacht" },
  { label: "Даты и стоимость", href: "#pricing" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.inner} container`}>
        <a
          className={styles.logo}
          href="#top"
          aria-label="Путешествие к дельфинам"
        >
          Путешествие к дельфинам
        </a>

        <nav className={styles.nav} aria-label="Основная навигация">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className={styles.cta} href="#contact">
          Контакт
        </a>
      </div>
    </header>
  );
};
