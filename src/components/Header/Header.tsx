"use client";

import { useState } from "react";

import styles from "./Header.module.scss";

const navItems = [
  { label: "О программе", href: "#about" },
  { label: "Лагуна Сатайя", href: "#location" },
  { label: "Яхта ATLANTY", href: "#yacht" },
  { label: "Даты и стоимость", href: "#pricing" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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

        <div className={styles.actions}>
          <a className={styles.cta} href="#contact" onClick={closeMenu}>
            Контакт
          </a>
          <button
            className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ""}`}
            type="button"
            aria-label="Открыть меню"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}
        id="mobile-menu"
        aria-label="Мобильная навигация"
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};
