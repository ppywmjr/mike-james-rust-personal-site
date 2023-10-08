"use server";

import { formSchema, FormSchemaType } from "./schema";
import { revalidatePath } from "next/cache";

const validateGuess: (guess: string, guessNumber: number) => boolean = (
  guess: string,
  guessNumber: number
) => {
  if (guessNumber > 10) {
    return true;
  }
  if (guess.includes("euler")) {
    return true;
  }
  if (guess.includes("polyhedr")) {
    return true;
  }
  if (
    guess.includes("face") &&
    guess.includes("edges") &&
    guess.includes("vertices")
  ) {
    return true;
  }
  if (
    guess.includes("f") &&
    guess.includes("e") &&
    guess.includes("v") &&
    guess.includes("2") &&
    guess.includes("+")
  ) {
    return true;
  }
  return false;
};

const errorResponses = [
  "Nope, I don't think that's it. I mean, it could be me, why not have another go?",
  "I don't think that's it either, maybe put in the name of the Mathematician, or even just guess some famous mathsy types?",
  "You can actually put the equation, so long as you name the variables correctly.",
  "Honestly, not many people have heard of it. The fact the result is called Faces is meant to be a clue, it might be worth googling?",
  "You are pretty persistent, I'll give you that.",
  "One of the variables is Faces, have I mentioned that?",
  "Go on, keep trying.",
  "I'm sure you just get it by random chance if you try enough times.",
  "To be honest, this algorithm to check if you got the right answer is pretty stupid, if you just get enough of the right words, it'll be happy.",
  "Any idea what the other varables are? It's to do with shapes.",
  "Nope that's not it, you know what, I'm gonna assume I just didn't understand, take one more guess and I'll just assume you were right and I was wrong.",
];

export const action = async (data: FormSchemaType, guessNumber: number) => {
  try {
    const parsedData = formSchema.parse({
      equation: data.equation,
    });
    revalidatePath("/forms/calculation");
    const correct = validateGuess(parsedData.equation, guessNumber);
    const message = correct
      ? "Congrats you worked out that it is Euler's polyhedron formula! Which is that for convex 3-dimensional polyhedra V + F - E = 2, where V = the number of vertices, F = the number of faces, and E = the number of edges! "
      : errorResponses[guessNumber];
    return { correct: correct, message: message };
  } catch (err) {
    revalidatePath("/forms/calculation");
    console.log(err);
    return;
  }
};
