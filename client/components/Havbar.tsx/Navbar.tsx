import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className="max-w-3xl mx-auto py-4 flex gap-x-4 border-b-1">
      <Link href="/" className={styles.link}>
        Home
      </Link>
      <Link
        href="/projects"
        className="text-xl text-blue-500 inline-block mt-8">
        Проєкти
      </Link>
      <Link
        href="/services"
        className="text-xl text-blue-500 inline-block mt-8">
        Послуги
      </Link>
      <Link href="/about" className="text-xl text-blue-500 inline-block mt-8">
        Про компанію
      </Link>
      <Link href="/blog" className="text-xl text-blue-500 inline-block mt-8">
        Блог
      </Link>
      <Link
        href="/contacts"
        className="text-xl text-blue-500 inline-block mt-8">
        Контакти
      </Link>
    </nav>
  );
};

export default Navbar;
