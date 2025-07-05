import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "large";
  variant?: "primary" | "secondary" | "tertiary";
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  size = "large",
  variant = "primary",
  fullWidth,
  className,
  children,
  ...props
}) => {
  const buttonClass = classNames(
    style[variant],
    style[size],
    {
      [style.full_width]: fullWidth,
    },
    className
  );

  // Умовний рендеринг для кнопки variant === "tertiary"
  if (variant === "tertiary") {
    return (
      <button className={buttonClass}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={style.arr2}
          viewBox="0 0 24 24">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
        <span className={style.text}>Більше проєктів</span>
        <span className={style.circle}></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={style.arr1}
          viewBox="0 0 24 24">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </button>
    );
  }

  // Рендеринг для інших варіантів кнопки
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
