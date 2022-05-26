import React, { ChangeEvent, ChangeEventHandler } from "react";
import "./input.component.css";

type InputProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  label: string;
  placeholder?: string
};

const Input: React.FC<InputProps> = ({ onChange, value, label, placeholder }) => {
  return (
    <div className="input-container">
      <div className="input-label">{label}</div>
      <input
        type="text"
        placeholder={placeholder}
        className="input"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
