"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

import logo from "@/public/tpg-logo.svg";

const LANGUAGES = [
  { code: "uk", label: "UA" },
  { code: "en", label: "EN" },
];

const NAV_LINKS = [
  { href: "/projects", label: "Проєкти" },
  { href: "/services", label: "Послуги" },
  { href: "/about", label: "Про компанію" },
  { href: "/blog", label: "Блог" },
  { href: "/contacts", label: "Контакти" },
];

const Header: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("uk");
  const langRef = useRef<HTMLButtonElement>(null);

  // Закривати меню мови при кліку поза ним
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    if (langOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [langOpen]);

  // Закривати бургер при переході
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.logoBlock}>
        {/* Логотип (замість div можна підключити картинку) */}
        <Image src={logo} alt="TPG logo" />
        <span className={styles.logoText}>
          TECHNOLOGY
          <br />
          PROJECT
          <br />
          GROUP
        </span>
      </div>
      <button
        className={styles.burger}
        aria-label="Відкрити меню"
        onClick={() => setNavOpen((v) => !v)}
      >
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </button>
      <nav className={`${styles.nav} ${navOpen ? styles.open : ""}`}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.navLink}
            onClick={() => setNavOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <button
          ref={langRef}
          className={styles.langSelect}
          onClick={() => setLangOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={langOpen}
        >
          {LANGUAGES.find((l) => l.code === currentLang)?.label}
          {langOpen && (
            <div className={styles.langDropdown} role="listbox">
              {LANGUAGES.filter((l) => l.code !== currentLang).map((lang) => (
                <button
                  key={lang.code}
                  className={styles.langOption}
                  onClick={() => {
                    setCurrentLang(lang.code);
                    setLangOpen(false);
                  }}
                  role="option"
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
