import React, { FunctionComponent } from "react";
import { FormProps } from "./types";

const Form: FunctionComponent<FormProps> = ({ children, action, error, className }) => {
  return (
    <form noValidate onSubmit={action} className={className}>
      {children}
      {error && (
        <span className="text-mjr_very_dark_orange block mt-2">
          {error}
        </span>
      )}
    </form>
  );
};

export default Form;
