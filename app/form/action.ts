"use server";

import z from "zod";
import { revalidatePath } from "next/cache";

export async function action(formData: FormData) {
  const contactSchema = z.object({
    email: z.string().email().nonempty(),
    message: z.string().min(1).max(200),
  });

  try {
    const parse = contactSchema.parse({
      email: formData.get("email"),
      message: formData.get("message"),
    });
    console.log(parse);
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.log(err.issues);
    }
  }
  revalidatePath("/form");
}
