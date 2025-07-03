"use client";
import React from "react";
import styles from "./ProjectsGrid.module.css";
import SectionTitle from "../SectionTitle";

const projects = [
  {
    title: "Project 1",
    image: "/assets/images/project-1.jpg",
    link: "/projects/1",
    alt: "Project 1 preview",
  },
  {
    title: "Project 2",
    image: "/assets/images/project-2.jpg",
    link: "/projects/2",
    alt: "Project 2 preview",
  },
  {
    title: "Project 3",
    image: "/assets/images/project-3.jpg",
    link: "/projects/3",
    alt: "Project 3 preview",
  },
  {
    title: "Project 4",
    image: "/assets/images/project-4.jpg",
    link: "/projects/4",
    alt: "Project 4 preview",
  },
  {
    title: "Project 5",
    image: "/assets/images/project-5.jpg",
    link: "/projects/5",
    alt: "Project 5 preview",
  },
];

const ProjectsGrid: React.FC = () => (
  <section>
    <SectionTitle alignment="left">Наші проєкти</SectionTitle>
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <a
          key={project.title}
          href={project.link}
          className={styles.card}
          aria-label={project.title}
          tabIndex={0}
          style={{
            gridColumn: index === 2 || index === 3 ? "span 2" : "span 1",
          }}>
          <img src={project.image} alt={project.alt} className={styles.image} />
          <span className={styles.cardTitle}>{project.title}</span>
        </a>
      ))}
    </div>
    <a
      href="/projects"
      className={styles.moreBtn}
      aria-label="Більше проєктів"
      tabIndex={0}>
      <span className={styles.moreText}>Більше проєктів</span>
      <img
        src="/assets/icons/arrow-2-right-long.svg"
        alt="Arrow right"
        className={styles.moreIcon}
      />
    </a>
  </section>
);

export default ProjectsGrid;
