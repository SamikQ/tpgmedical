"use client";
import React from "react";
import styles from "./ProjectsGeography.module.css";

const countries = [
  { name: "Germany", label: "Німеччина", style: styles.germany },
  { name: "Moldova", label: "Молдова", style: styles.moldova },
  { name: "Montenegro", label: "Чорногорія", style: styles.montenegro },
  { name: "Kazakhstan", label: "Казахстан", style: styles.kazakhstan },
  { name: "Ukraine", label: "Україна", style: styles.ukraine },
  { name: "Vietnam", label: "Вьетнам", style: styles.vietnam },
  { name: "Malaysia", label: "Малайзія", style: styles.malaysia },
  { name: "Bali", label: "Балі", style: styles.bali },
];

const ProjectsGeography: React.FC = () => {
  return (
    <section
      className={styles.root}
      aria-label="Projects Geography"
      tabIndex={0}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects Geography</h2>
        <div className={styles.mapWrapper}>
          <img
            src="/assets/images/projects-geography-map.svg"
            className={styles.map}
            alt="Projects geography map"
            aria-label="Projects geography map"
          />
          <img
            src="/assets/images/projects-geography-line29.svg"
            className={styles.line29}
            alt=""
            aria-hidden="true"
          />
          <img
            src="/assets/images/projects-geography-line30.svg"
            className={styles.line30}
            alt=""
            aria-hidden="true"
          />
          <img
            src="/assets/images/projects-geography-line31.svg"
            className={styles.line31}
            alt=""
            aria-hidden="true"
          />
          <img
            src="/assets/images/projects-geography-line32.svg"
            className={styles.line32}
            alt=""
            aria-hidden="true"
          />
          <img
            src="/assets/images/projects-geography-line33.svg"
            className={styles.line33}
            alt=""
            aria-hidden="true"
          />
          <img
            src="/assets/images/projects-geography-line34.svg"
            className={styles.line34}
            alt=""
            aria-hidden="true"
          />
          <img
            src="/assets/images/projects-geography-line36.svg"
            className={styles.line36}
            alt=""
            aria-hidden="true"
          />
          <img
            src="/assets/images/projects-geography-line37.svg"
            className={styles.line37}
            alt=""
            aria-hidden="true"
          />
          {countries.map((country) => (
            <span
              key={country.name}
              className={country.style}
              aria-label={country.name}
              tabIndex={0}>
              {country.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGeography;
