import React from "react";
import styles from "./StyledButton.module.css";

interface StyledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  className = "",
  onClick,
  ...props
}) => {
  return (
    <button
      className={`${styles.styledBtn} ${className}`}
      {...props}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default StyledButton;
