import React from "react";
import PageHeading from "@components/page-heading";
import Hero from "@components/hero";
import Paragraph from "@components/article/paragraph";
import { ContactForm } from "./ContactForm";
import formsMetaData from "../formsMetadata";
import NeighbourNavigation from "@components/article/neighbour-navigation";

export const metadata = {
  title: "Contact me",
  description: "A sample form",
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
        text={"Submit a form, and nothing will happen!"}
      />
      <Paragraph>
        This form is simply for submitting some data. It doesn&rsquo;t actually
        send a message, it&rsquo;s a demo of client and server side validation.
        It is validated on the front end with react-hook-form and the payload is
        handled by a Next.js 13 server action. The front and back end
        validations use Zod for the validation rules. The browser logs the data
        sent in the browser console. The back end returns the parsed data back
        to the browser, and the broswer also logs that. If you open the browser
        console (Windows: Ctrl + Shift + J. Mac: Cmd + Opt +J) you can see that
        nothing is submitted until the form is valid. And you can see the front
        and back end data. Because they are using the same schema to validate,
        they should be the same.
      </Paragraph>
      <Paragraph>
        The data returned from the server is displayed on the screen
      </Paragraph>
      <ContactForm />
      <NeighbourNavigation
        previousTarget={previousPage?.uri}
        nextTarget={nextPage?.uri}
        nextDescription={nextPage?.linkDescription}
      />
    </>
  );
}
