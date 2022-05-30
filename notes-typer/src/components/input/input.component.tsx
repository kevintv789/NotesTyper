import React, { ChangeEvent } from "react";
import "./input.component.css";
import TextareaAutosize from "react-textarea-autosize";

type InputProps = {
  onChange: (
    e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>
  ) => void;
  value?: string | number;
  label: string;
  placeholder?: string;
  className?: string;
  type: "input" | "textarea";
};

const Input: React.FC<InputProps> = ({
  onChange,
  value,
  label,
  className,
  type = "input",
}) => {
  return (
    <div className={`input-container ${className}`}>
      <div className="input-label">{label}</div>
      {type === "input" && (
        <input
          type="text"
          placeholder="Enter your text here"
          className="input"
          value={value}
          onChange={onChange}
        />
      )}
      {type === "textarea" && (
        <TextareaAutosize
          placeholder="Enter your text here"
          className="input"
          value={value}
          onChange={onChange}
          maxRows={20}
        />
      )}
    </div>
  );
};

export default Input;
