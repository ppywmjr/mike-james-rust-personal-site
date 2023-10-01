import z from 'zod';

export const formSchema = z
  .object({
    name: z
      .string()
      .max(
        30,
        'If your name is longer than 30 characters, just use a nickname'
      ),
    email: z.string().email('This must be an valid email.').or(z.literal('')),
    message: z
      .string()
      .min(1, 'You must enter a message.')
      .max(20, "I'm not going to read something longer than 20 characters."),
  })
  .partial();

export type FormSchemaType = z.infer<typeof formSchema>;
