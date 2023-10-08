import z from "zod";

export const formSchema = z.object({
  equation: z.coerce
    .string()
    .nonempty("You haven't guessed anything")
    .max(
      100,
      "Woah there, that's a long answer, just enter a couple of words so that I can check if you've guessed the equation."
    )
    .toLowerCase(),
});

export type FormSchemaType = z.infer<typeof formSchema>;
