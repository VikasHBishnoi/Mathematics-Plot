import React from "react";
import "./Button.scss";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgClassName?: string;
  iconClass?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  bgClassName,
  iconClass,
  icon,
  children,
  ...rest
}) => {
  return (
    <button className={`custom-btn ${bgClassName}`} {...rest}>
      {icon && (
        <span className={iconClass} style={{ marginRight: children ? 8 : 0 }}>
          {icon}
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
