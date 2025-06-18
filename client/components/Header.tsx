import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        TPG
      </Link>
      <nav className={styles.nav}>
        <Link href="/projects">Проєкти</Link>
        <Link href="/services">Послуги</Link>
        <Link href="/about">Про компанію</Link>
        <Link href="/blog">Блог</Link>
        <Link href="/contacts">Контакти</Link>
      </nav>
    </header>
  );
};

export default Header;
