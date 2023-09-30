"use server";

export type FormData = {
  name: string;
  description: string;
};

export async function action(data: FormData) {
  console.log(data);
}
