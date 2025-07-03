"use client";
import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import heroBg from "@/assets/images/hero-bg.png";
import StyledButton from "../StyledButton/StyledButton";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.bgImage}>
        <Image src={heroBg} alt="Hero background" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Технологічне проєктування
          <br />
          медичних закладів та лабораторій
        </h1>
        <StyledButton
          onClick={() => {
            window.location.href = "#projects";
          }}>
          Детальніше про проєкт
        </StyledButton>
      </div>
    </section>
  );
};

export default Hero;
