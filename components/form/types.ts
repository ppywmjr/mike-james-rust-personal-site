import { ReactNode } from "react";
import z from "zod";

export type FormProps = {
  action: any;
  children?: ReactNode;
  submitText?: string;
  isSubmitting?: boolean;
  schema: z.ZodObject<any>;
};
