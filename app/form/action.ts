"use server";

import { formSchema, FormSchemaType } from "./schema";
import { revalidatePath } from "next/cache";

export const action = (data: FormSchemaType) => {
  // export async function action(formData: FormData) {
  console.log("in action");
  try {
    const parse = formSchema.parse({
      email: data.email,
      message: data.message,
    });
    console.log(parse);
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/form");
};