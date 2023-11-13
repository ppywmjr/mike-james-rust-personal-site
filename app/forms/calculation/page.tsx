import React from "react";
import PageHeading from "@components/page-heading";
import Hero from "@components/hero";
import Paragraph from "@components/article/paragraph";
import NeighbourNavigation from "@components/article/neighbour-navigation";
import CalculationForm from "./calculation-form";
import formsMetaData from "../formsMetadata";

export const metadata = {
  title: "Calculate",
  description: "A form that performs a mysterious calculation",
};

const currentPageIndex = 1;
const previousPage = formsMetaData.pages[currentPageIndex - 1];
const currentPage = formsMetaData.pages[currentPageIndex];
const nextPage = formsMetaData.pages[currentPageIndex + 1];

export default function Contact() {
  return (
    <>
      <PageHeading>A form to calculate... something</PageHeading>
      <Hero
        imageSource={currentPage.imageData.source}
        altText={currentPage.imageData.altText}
        text={"Submit a form, and a mysterious unknown calculation will happen"}
      />
      <Paragraph>
        This form is simply for submitting some data and performing a small
        calculation and returning the result. Maybe you can work out what the
        calculation is?
      </Paragraph>
      <CalculationForm />
      <NeighbourNavigation
        previousTarget={previousPage?.uri}
        nextTarget={nextPage?.uri}
        nextDescription={nextPage?.linkDescription}
      />
    </>
  );
}
