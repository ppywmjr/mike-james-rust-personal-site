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
  })
  .refine((schema) => schema.vertices > 1 + schema.edges, { message: "That combination of numbers is not valid."});

export type FormSchemaType = z.infer<typeof formSchema>;
