"use client";
import React from "react";
import styles from "@/assets/styles/not-found.module.css";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className={styles.wrapper404}>
      {/* Shape BG (можна замінити на SVG або div з background) */}
      <svg
        className={styles.shapeBG}
        viewBox="0 0 1440 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="1440" height="1080" fill="var(--color-bg-main)" />
      </svg>
      {/* Еліпси (Around Objects) */}
      <svg
        className={styles.ellipses}
        style={{
          top: 200,
          left: 416,
          width: 66,
          height: 65,
          position: "absolute",
        }}
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <ellipse
          cx="33"
          cy="32.5"
          rx="33"
          ry="32.5"
          fill="var(--color-bg-shape)"
        />
      </svg>
      <svg
        className={styles.ellipses}
        style={{
          top: 690,
          left: 295,
          width: 242,
          height: 241,
          position: "absolute",
        }}
        viewBox="0 0 242 241"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <ellipse
          cx="121"
          cy="120.5"
          rx="121"
          ry="120.5"
          fill="var(--color-bg-shape)"
        />
      </svg>
      <svg
        className={styles.ellipses}
        style={{
          top: 90,
          left: 796,
          width: 112,
          height: 109,
          position: "absolute",
        }}
        viewBox="0 0 112 109"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <ellipse
          cx="56"
          cy="54.5"
          rx="56"
          ry="54.5"
          fill="var(--color-bg-shape)"
        />
      </svg>
      <svg
        className={styles.ellipses}
        style={{
          top: 282,
          left: 0,
          width: 172,
          height: 173,
          position: "absolute",
        }}
        viewBox="0 0 172 173"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <ellipse
          cx="86"
          cy="86.5"
          rx="86"
          ry="86.5"
          fill="var(--color-bg-shape)"
        />
      </svg>
      <svg
        className={styles.ellipses}
        style={{
          top: 603,
          left: 908,
          width: 788,
          height: 784,
          position: "absolute",
        }}
        viewBox="0 0 788 784"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <ellipse
          cx="394"
          cy="392"
          rx="394"
          ry="392"
          fill="var(--color-bg-shape)"
        />
      </svg>
      <svg
        className={styles.ellipses}
        style={{
          top: 0,
          left: 748,
          width: 16,
          height: 15,
          position: "absolute",
        }}
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="8" cy="7.5" rx="8" ry="7.5" fill="var(--color-bg-shape)" />
      </svg>
      {/* 404 текст */}
      <div className={styles.text404}>404</div>
      {/* Опис */}
      <div className={styles.descriptionBlock}>
        <div className={styles.title}>Oops, This Page Could Not Be Found.</div>
        <div className={styles.subtitle}>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </div>
      </div>
      {/* Кнопка повернення */}
      <Link href="/" className={styles.backBtn}>
        <span>Back to home</span>
        <span className={styles.icon}>
          {/* SVG іконка зі стрілкою */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 12H19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5L19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
}
