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
  .refine((schema) => schema.vertices > 1 + schema.edges, {
    path: ["form"],
    message:
      "That combination of numbers is not valid, but I'm not gonna tell you why!",
  });

export type FormSchemaType = z.infer<typeof formSchema>;
