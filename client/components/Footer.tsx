import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.logoBlock}>
          <div className={styles.logoImg} />
          <span className={styles.logoText}>
            TECHNOLOGY<br />PROJECT<br />GROUP
          </span>
        </div>
        <div className={styles.footerSections}>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Послуги</div>
            <div className={styles.sectionList}>
              <div className={styles.sectionItem}>Архітектурні концепції</div>
              <div className={styles.sectionItem}>Генеральне проєктування</div>
              <div className={styles.sectionItem}>Технологічні рішення</div>
              <div className={styles.sectionItem}>Лікувальні гази</div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Інформація</div>
            <div className={styles.sectionList}>
              <div className={styles.sectionItem}>Проєкти</div>
              <div className={styles.sectionItem}>Про компанію</div>
              <div className={styles.sectionItem}>Блог</div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Наша локація</div>
            <div className={styles.location}>
              Київ, Україна,
              <br />вул. Січових Стрільців, 77, 02000
            </div>
          </div>
        </div>
        <div>
          <div className={styles.socials}>
            {/* SVG-іконки соцмереж (заглушки) */}
            <span className={styles.socialIcon}>
              {/* LinkedIn */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#025595" />
                <path d="M10.666 13.333h2.667v8h-2.667v-8zm1.333-4a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zm3.334 4h2.56v1.093h.037c.356-.675 1.226-1.387 2.525-1.387 2.7 0 3.2 1.773 3.2 4.08v4.214h-2.667v-3.733c0-.89-.016-2.04-1.24-2.04-1.24 0-1.427.97-1.427 1.97v3.803h-2.667v-8z" fill="#fff"/>
              </svg>
            </span>
            <span className={styles.socialIcon}>
              {/* Facebook */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#025595" />
                <path d="M20.667 16h-2v8h-3.333v-8h-1.334v-2.667h1.334v-1.333c0-2.027 1.306-3.334 3.333-3.334.627 0 1.306.04 1.973.12v2.187h-1.12c-.56 0-.88.267-.88.8v1.227h2l-.267 2.667z" fill="#fff"/>
              </svg>
            </span>
            <span className={styles.socialIcon}>
              {/* Email */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#025595" />
                <path d="M8 12.667A2.667 2.667 0 0110.667 10h10.666A2.667 2.667 0 0124 12.667v6.666A2.667 2.667 0 0121.333 22H10.667A2.667 2.667 0 018 19.333v-6.666zm2.667 0v.56l5.333 3.56 5.333-3.56v-.56H10.667zm10.666 1.227l-5.333 3.56-5.333-3.56v5.106c0 .74.6 1.334 1.334 1.334h7.998c.734 0 1.334-.594 1.334-1.334v-5.106z" fill="#fff"/>
              </svg>
            </span>
          </div>
          <div className={styles.sectionList}>
            <div className={styles.sectionItem}>+380 (50) 853-21-34</div>
            <div className={styles.sectionItem}>office@tpgmedical.group</div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        © Technology Project Group. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
