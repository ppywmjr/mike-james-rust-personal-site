import React from "react";
import PageHeading from "@components/page-heading";
import Hero from "@components/hero";
import z from "zod";
import { revalidatePath } from "next/cache";
import Paragraph from "@components/article/paragraph";
import Form from "@components/form";
import Submit from "@components/form/submit";
import TextInput from "@components/form/text-input/TextInput";

export const metadata = {
  title: "Contact me",
  description: "A sample form",
};

export default function Contact() {
  async function create(formData: FormData) {
    "use server";

    const contactSchema = z.object({
      email: z.string().email().nonempty(),
      message: z.string().min(1).max(200),
    });

    try {
      const parse = contactSchema.parse({
        email: formData.get("email"),
        message: formData.get("message"),
      });
      // TODO handle success
    } catch (err) {
      if (err instanceof z.ZodError) {
        // TODO handle errors
      }
    }
    revalidatePath("/form");
  }

  return (
    <div className="max-w-prose lg:max-w-3xl mx-auto">
      <PageHeading>Submit a form</PageHeading>
      <Hero
        imageSource={"/profile.jpg"}
        altText={
          "My selfie. A handsome chap with long wavy hair, a tidy beard and a big smile"
        }
        text={"Submit a form, and nothing will happen!"}
      />
      <Paragraph>
        This form is simply for submitting some data. It is not validated on the
        front end but it is validated on the server. Then the server does
        nothing with it.
      </Paragraph>
      <Form action={create}>
        <TextInput name="message" label="Message:" />
        <TextInput name="email" label="Email:" />
      </Form>
    </div>
  );
}
