import z from "zod";

export const formSchema = z
  .object({
    vertices: z.coerce
      .number()
      .int("Both numbers should be integers.")
      .positive("Both numbers should be positive."),
    edges: z.coerce
      .number()
      .int("Both numbers should be integers.")
      .positive("Both numbers should be positive."),
  });

export type FormSchemaType = z.infer<typeof formSchema>;
