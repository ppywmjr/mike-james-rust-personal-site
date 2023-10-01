"use server";

import { formSchema, FormSchemaType } from "./schema";
import { revalidatePath } from "next/cache";

export const action = async (data: FormSchemaType) => {
  try {
    const parse = formSchema.parse({
      vertices: data.vertices,
      edges: data.edges,
    });
    const faces = 2 - parse.vertices + parse.edges;
    revalidatePath("/forms/calculation");
    return { faces: faces };
  } catch (err) {
    revalidatePath("/forms/calculation");
    return err;
  }
};
