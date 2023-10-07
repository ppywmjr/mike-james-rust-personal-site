import z from 'zod';

export const formSchema = z
  .object({
    email: z
      .string()
      .email("This must be an valid email")
      .max(100, "I'm afraid I don't accept emails this long, maybe you have a shorter one?")
      .or(z.literal("")),
    message: z
      .string()
      .min(1, "You must enter a message.")
      .max(500, "This message is getting a little long, can you keep it under 500 characters."),
  })
  .partial();

export type FormSchemaType = z.infer<typeof formSchema>;
