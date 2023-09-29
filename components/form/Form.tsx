import React, { FunctionComponent } from "react";
import { FormProps } from "./types";

const Form: FunctionComponent<FormProps> = ({ children, action }) => {
  return <form action={action}>{children}</form>;
};

export default Form;
