import z from "zod";

export const formSchema = z.object({
  email: z.string().email("must be an email, mike").nonempty("cannot be empty"),
  message: z.string().min(1, "giz a message").max(200),
});

export type FormSchemaType = z.infer<typeof formSchema>;
