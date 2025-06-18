import styles from './Hero.module.css';

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.content}>
      <h1 className={styles.title}>Технологічне проектування медзакладів</h1>
      <p className={styles.subtitle}>
        Довірте розробку професіоналам Технолоджі Проджект Груп
      </p>
      <a href="/contacts" className={styles.cta}>Зв&apos;язатись з нами</a>
    </div>
  </section>
);

export default Hero;
