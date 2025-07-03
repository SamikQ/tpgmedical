import styles from "./index.module.css";

interface SectionTitleProps {
  children: string;
  alignment?: "left" | "center";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  alignment = "center",
}) => {
  return <h2 className={`${styles.title} ${styles[alignment]}`}>{children}</h2>;
};

export default SectionTitle;
