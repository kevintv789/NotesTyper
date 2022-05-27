import React from "react";
import "./button.component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type ButtonProps = {
  label: string;
  className?: string;
  icon?: IconDefinition;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, className, icon, onClick }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          color="black"
          fontSize={16}
          className="icon"
        />
      )}
      {label}
    </button>
  );
};

export default Button;
