import { FieldError, UseFormRegister } from "react-hook-form";

export type InputProps = {
  id?: string;
  name: string;
  label: string;
  type?: "email" | "number" | "text" | "multiline" ;
  register: UseFormRegister<any>;
  errors?: FieldError;
};
