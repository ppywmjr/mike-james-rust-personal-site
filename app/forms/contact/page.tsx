import React from "react";
import PageHeading from "@components/page-heading";
import Hero from "@components/hero";
import Paragraph from "@components/article/paragraph";
import { ContactForm } from "./ContactForm";
import formsMetaData from "../formsMetadata";
import NeighbourNavigation from "@components/article/neighbour-navigation";

export const metadata = {
  title: "Contact me",
  description: "I'd love to hear from you!",
};

const currentPageIndex = 0;
const previousPage = formsMetaData.pages[currentPageIndex - 1];
const nextPage = formsMetaData.pages[currentPageIndex + 1];

export default function Contact() {
  return (
    <>
      <PageHeading>Submit a contact form</PageHeading>
      <Hero
        imageSource={"/profile.jpg"}
        altText={
          "My selfie. A handsome chap with long wavy hair, a tidy beard and a big smile"
        }
        text={"What are you thinking? What would you like to see next?"}
      />
      <Paragraph>
        Heya, so you want to get in touch? I&rsquo;d love to hear from you. Have
        you got any requests for me? Or a suggestion, perhaps? Maybe you want to point out
        a bug to me? Whatever it is, I&rsquo;m looking forward to it.
      </Paragraph>
      <Paragraph>x x Mike</Paragraph>
      <ContactForm />
      <NeighbourNavigation
        previousTarget={previousPage?.uri}
        nextTarget={nextPage?.uri}
        nextDescription={nextPage?.linkDescription}
      />
    </>
  );
}
