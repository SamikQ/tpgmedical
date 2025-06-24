"use client";
import React from "react";
import styles from "./Contacts.module.css";

const ContactsPage = () => {
  return (
    <div className={styles.contactsWrapper}>
      {/* Верхній блок з назвою */}
      <div className={styles.headerSection}>
        <h1 className={styles.title}>Контакти</h1>
        <div className={styles.companyName}>Technology Project group</div>
        <div className={styles.officeAddress}>
          Офіс: вул. Січових Стрільців, 77, Київ, 02000
        </div>
        <div className={styles.phone}>+380 (50) 853-21-34</div>
        <div className={styles.email}>office@tpgmedical.group</div>
        <button className={styles.consultButton}>Замовити консультацію</button>
        <div className={styles.socials}>{/* SVG-іконки соцмереж тут */}</div>
      </div>
      {/* Мапа та додаткова інформація */}
      <div className={styles.mapSection}>
        {/* Тут буде карта або зображення */}
      </div>
    </div>
  );
};

export default ContactsPage;
