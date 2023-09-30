"use server";

import { formSchema, FormSchemaType } from "./schema";
import { revalidatePath } from "next/cache";

export const action = async ( data: FormSchemaType) => {
  try {
    const parse = formSchema.parse({
      email: data.email,
      message: data.message,
    });
    console.log(data)
    setTimeout(()=> {console.log("I waited")}, 5000);
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/forms/contact");
};
