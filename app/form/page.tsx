import React, { useTransition } from "react";
import PageHeading from "@components/page-heading";
import Hero from "@components/hero";
import Paragraph from "@components/article/paragraph";
import { SampleForm } from "./SampleForm";

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
        This form is simply for submitting some data. It is not validated on the
        front end but it is validated on the server. Then the server does
        nothing with it.
      </Paragraph>
      <SampleForm />
    </div>
  );
}
