import { FieldError, UseFormRegister } from "react-hook-form";

export type TextInputProps = {
  id?: string;
  name: string;
  label: string;
  type?: "email";
  register: UseFormRegister<any>;
  errors?: FieldError;
};
