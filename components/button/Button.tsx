import React, { FunctionComponent } from "react";
import { ButtonProps } from "./types";

const Button: FunctionComponent<ButtonProps> = ({ onClick, text, className }) => {
  return (
    <button
      className={`${className} block bg-mjr_orange hover:bg-mjr_very_dark_orange p-2 my-3 w-40 center rounded-sm`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
