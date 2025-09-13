import React from "react";
import "./Input.scss";
interface InputProps {
  id: string;
  inputValue: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
const Input: React.FC<InputProps> = ({
  id,
  inputValue,
  handleInputChange,
  className,
}) => {
  return (
    <input
      id={id}
      type="text"
      className={`function-input ${className ?? ""}`}
      placeholder="Enter your function here"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};
export default Input;
