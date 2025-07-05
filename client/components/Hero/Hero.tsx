"use client";
import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import heroBg from "@/assets/images/hero-bg.png";
import Button from "@/shared/UI/Button";

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
        <Button variant="primary">Детальніше про проєкт</Button>
      </div>
    </section>
  );
};

export default Hero;
