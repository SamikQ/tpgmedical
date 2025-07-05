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
  ...props
}) => {
  const buttonClass = classNames(
    style.button,
    style[size],
    style[variant],
    {
      [style.full_width]: fullWidth,
    },
    className
  );
  return (
    <button className={buttonClass} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
