import React, { FunctionComponent } from "react";
import { FormProps } from "./types";
import Submit from "./submit";

const Form: FunctionComponent<FormProps> = ({
  children,
  action,
  submitText = "Submit form",
}) => {
  return (
    <form action={action}>
      {children}
      <Submit>{submitText}</Submit>
    </form>
  );
};

export default Form;
