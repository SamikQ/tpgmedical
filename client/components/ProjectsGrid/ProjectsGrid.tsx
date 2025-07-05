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
import Button from "@/shared/UI/Button";

const projects = [
  {
    id: 1,
    area: "cards-one",
    title: "Project 1",
    image: project1,
    link: "/projects/1",
    alt: "Project 1 preview",
  },
  {
    id: 2,
    area: "cards-two",
    title: "Project 2",
    image: project2,
    link: "/projects/2",
    alt: "Project 2 preview",
  },
  {
    id: 3,
    area: "cards-three",
    title: "Project 3",
    image: project3,
    link: "/projects/3",
    alt: "Project 3 preview",
  },
  {
    id: 4,
    area: "cards-four",
    title: "Project 4",
    image: project4,
    link: "/projects/4",
    alt: "Project 4 preview",
  },
  {
    id: 5,
    area: "cards-five",
    title: "Project 5",
    image: project5,
    link: "/projects/5",
    alt: "Project 5 preview",
  },
];

const ProjectsGrid: React.FC = () => (
  <section className="container">
    <SectionTitle alignment="left">Наші проєкти</SectionTitle>

    <FadeInSection>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${styles.card} ${project.area}`}
            style={{ gridArea: project.area }}>
            <Image src={project.image} alt={project.alt} />
            <div className={styles.overlay}>
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </FadeInSection>
    <FadeInSection>
      <Button variant="tertiary">Більше проєктів</Button>
    </FadeInSection>
  </section>
);

export default ProjectsGrid;
