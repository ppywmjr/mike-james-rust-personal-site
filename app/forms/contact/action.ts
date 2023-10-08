"use server";

import { formSchema, FormSchemaType } from "./schema";
import { revalidatePath } from "next/cache";
import sendMail from "./sendEmail";

export const action: (data: FormSchemaType) => Promise<any> = async (
  data: FormSchemaType
) => {
  const parsedData = formSchema.parse({
    email: data.email,
    message: data.message,
  });

  revalidatePath("/forms/contact");

  return sendMail(parsedData);
};
