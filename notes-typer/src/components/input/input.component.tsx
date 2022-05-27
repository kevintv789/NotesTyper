import React, { ChangeEvent, ChangeEventHandler } from "react";
import "./input.component.css";

type InputProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  label: string;
  placeholder?: string;
  className?: string;
};

const Input: React.FC<InputProps> = ({ onChange, value, label, className }) => {
  return (
    <div className={`input-container ${className}`}>
      <div className="input-label">{label}</div>
      <input
        type="text"
        placeholder="Enter your text here"
        className="input"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
