"use server";

import { formSchema, FormSchemaType } from "./schema";
import { revalidatePath } from "next/cache";

export const action = async (data: FormSchemaType) => {
  try {
    const parse = formSchema.parse({
      email: data.email,
      message: data.message,
    });

    revalidatePath("/forms/contact");
    return data;
  } catch (err) {
    revalidatePath("/forms/contact");
    return err;
  }
};
