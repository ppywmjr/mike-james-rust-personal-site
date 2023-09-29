import { ReactNode } from "react";

export type FormProps = {
  action: (formData: FormData) => void;
  children: ReactNode;
};
