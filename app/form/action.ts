// "use server";

import z from "zod";
import { SubmitHandler } from "react-hook-form";
// import { revalidatePath } from "next/cache";

export const formSchema = z.object({
  email: z.string().email("must be an email").nonempty("cannot be empty"),
  message: z.string().min(1, "giz a message").max(200),
});

export type FormSchemaType = z.infer<typeof formSchema>;


  // const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
  //   console.log(data);
  // };


export const action: SubmitHandler<FormSchemaType> = (data) => {
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
    if (err instanceof z.ZodError) {
      console.log(err.issues);
    }
  }
  // revalidatePath("/form");
};