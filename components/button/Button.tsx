import React, { FunctionComponent } from "react";
import { ButtonProps } from "./types";

const Button: FunctionComponent<ButtonProps> = ({
  importance = "primary",
  onClick,
  text,
  className,
  disabled,
  type,
}) => {
  const isPrimary = importance === "primary";
  return (
    <button
      className={`${
        isPrimary
          ? "bg-mjr_orange hover:bg-mjr_very_dark_orange"
          : "bg-mjr_light_orange hover:bg-mjr_dark_orange"
      } 
      block p-2 my-3 w-40 center rounded-sm ${className} `}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
