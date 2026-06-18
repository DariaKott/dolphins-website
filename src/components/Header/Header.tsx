import styles from "./Header.module.scss";

const navItems = ["About", "Method", "Location", "Experience", "Yacht", "Pricing"];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.inner} container`}>
        <a className={styles.logo} href="#top" aria-label="Dolphins home">
          Dolphins
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <a className={styles.cta} href="#contact">
          Contact
        </a>
      </div>
    </header>
  );
};
