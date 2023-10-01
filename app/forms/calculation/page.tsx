import React from "react";
import PageHeading from "@components/page-heading";
import Hero from "@components/hero";
import Paragraph from "@components/article/paragraph";
import { CalculationForm } from "./CalculationForm";

export const metadata = {
  title: "Calculate",
  description: "A form that performs a mysterious calculation",
};

export default function Contact() {
  return (
    <div className="max-w-prose lg:max-w-3xl mx-auto">
      <PageHeading>A form calculate... something</PageHeading>
      <Hero
        imageSource={"/the-making-of/day-3/superhero.jpg"}
        altText={"A red squirrel poses like a superhero"}
        text={"Submit a form, and a mysterious unknown calculation will happen"}
      />
      <Paragraph>
        This form is simply for submitting some data and pperforming a small
        calculation and returning the result.
      </Paragraph>
      <CalculationForm />
    </div>
  );
}
