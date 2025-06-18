import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <p>&copy; {new Date().getFullYear()} TPG Medical Group</p>
  </footer>
);

export default Footer;
