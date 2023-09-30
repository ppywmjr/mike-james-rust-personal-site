"use server";

import { formSchema, FormSchemaType } from "./schema";
import { revalidatePath } from "next/cache";

export const action = (data: FormSchemaType) => {
  try {
    const parse = formSchema.parse({
      email: data.email,
      message: data.message,
    });
    console.log(data)
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/forms/contact");
};
