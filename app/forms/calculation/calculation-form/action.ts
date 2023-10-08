"use server";

import { formSchema, FormSchemaType } from "./schema";
import { revalidatePath } from "next/cache";

export const action = async (data: FormSchemaType) => {
  try {
    const parse = formSchema.parse({
      vertices: data.vertices,
      edges: data.edges,
    });
    // Euler's polyhedron formula
    const faces = 2 - parse.vertices + parse.edges;
    revalidatePath("/forms/calculation");
    return  { faces: faces, vertices: parse.vertices, edges: parse.edges };
  } catch (err) {
    revalidatePath("/forms/calculation");
    console.log(err);
    return;
  }
};
