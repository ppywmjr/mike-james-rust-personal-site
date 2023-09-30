import React, { useTransition } from "react";
import PageHeading from "@components/page-heading";
import Hero from "@components/hero";
import Paragraph from "@components/article/paragraph";
import { ContactForm } from "./ContactForm";

export const metadata = {
  title: "Contact me",
  description: "A sample form",
};

export default function Contact() {
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
        This form is simply for submitting some data. It is validated on the
        front end with react-hook-form and the payload is handled by the Next.js
        13 server action. The front and back end validations use zod to for the
        validation rules. The server and front end do nothing with the form
        submission.
      </Paragraph>
      <ContactForm />
    </div>
  );
}
