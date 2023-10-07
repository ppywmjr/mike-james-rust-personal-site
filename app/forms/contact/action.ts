"use server";

import { formSchema, FormSchemaType } from "./schema";
import { revalidatePath } from "next/cache";
import sendMail from "./sendEmail";

export const action = async (data: FormSchemaType) => {
  try {
    const parse = formSchema.parse({
      email: data.email,
      message: data.message,
    });

    revalidatePath("/forms/contact");
    sendMail(parse);
    return parse;
  } catch (err) {
    revalidatePath("/forms/contact");
    return err;
  }
};
