"use client";
import React from "react";
import Image from "next/image";
import styles from "./ProjectsGrid.module.css";
import SectionTitle from "../SectionTitle";
import project1 from "@/assets/images/projects/project1.jpg";
import project2 from "@/assets/images/projects/project2.jpg";
import project3 from "@/assets/images/projects/project3.jpg";
import project4 from "@/assets/images/projects/project4.jpg";
import project5 from "@/assets/images/projects/project5.jpg";
import FadeInSection from "@/shared/UI/FadeInSection/FadeInSections";

const projects = [
  {
    title: "Project 1",
    image: project1,
    link: "/projects/1",
    alt: "Project 1 preview",
  },
  {
    title: "Project 2",
    image: project2,
    link: "/projects/2",
    alt: "Project 2 preview",
  },
  {
    title: "Project 3",
    image: project3,
    link: "/projects/3",
    alt: "Project 3 preview",
  },
  {
    title: "Project 4",
    image: project4,
    link: "/projects/4",
    alt: "Project 4 preview",
  },
  {
    title: "Project 5",
    image: project5,
    link: "/projects/5",
    alt: "Project 5 preview",
  },
];

const ProjectsGrid: React.FC = () => (
  <section className={styles.container}>
    <SectionTitle alignment="left">Наші проєкти</SectionTitle>

    <FadeInSection>
      <div className={styles.grid}>
        {projects.slice(0, 2).map((project) => (
          <a
            key={project.title}
            href={project.link}
            className={styles.card}
            aria-label={project.title}
            tabIndex={0}
          >
            <Image
              src={project.image}
              alt={project.alt}
              className={styles.image}
            />
          </a>
        ))}
      </div>
    </FadeInSection>

    <FadeInSection>
      <div className={styles.grid}>
        {projects.slice(2).map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            className={styles.card}
            aria-label={project.title}
            tabIndex={0}
            style={{
              gridColumn: index === 0 || index === 1 ? "span 2" : "span 1",
            }}
          >
            <Image
              src={project.image}
              alt={project.alt}
              className={styles.image}
            />
          </a>
        ))}
      </div>
    </FadeInSection>

    <FadeInSection>
      <a
        href="/projects"
        className={styles.moreBtn}
        aria-label="Більше проєктів"
      >
        <span className={styles.moreText}>Більше проєктів</span>
        <img
          src="/assets/icons/arrow-2-right-long.svg"
          alt="Arrow right"
          className={styles.moreIcon}
        />
      </a>
    </FadeInSection>
  </section>
);

export default ProjectsGrid;
