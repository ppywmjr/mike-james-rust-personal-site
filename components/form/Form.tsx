import React, { FunctionComponent } from "react";
import { FormProps } from "./types";

const Form: FunctionComponent<FormProps> = ({ children, action }) => {
  return (
    <form onSubmit={action} className="">
      {children}
    </form>
  );
};

export default Form;
