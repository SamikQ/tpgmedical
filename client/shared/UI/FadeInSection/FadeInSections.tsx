import { motion } from "framer-motion";
import classNames from "classnames";
import style from "./style.module.scss";

interface FadeInSectionProps {
  children: React.ReactNode;
  position?: "left" | "center" | "right"; // Позиція є необов'язковою
  padding?: boolean;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  position,
  padding,
}) => {
  const containerClass = classNames({
    // Якщо передано position, додаємо відповідний клас (наприклад, .left, .center, .right)
    [style[position as keyof typeof style]]: position,
    // Якщо передано padding, додаємо відповідний клас .padding
    [style.padding]: padding,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={containerClass} // Додавання класів через classNames
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
