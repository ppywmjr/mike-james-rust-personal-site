import Image from "next/image";
import React from "react";
import LinkCard from "../components/link-card";
import PageHeading from "../components/page-heading";
import makingOfMetaData from "./how-to-make-a-website/makingOfMetadata";
import formsMetaData from "./forms/formsMetadata";

const LINK_CARDS: {
  target: string;
  heading: string;
  description: string;
  imageData: { source: string; altText: string };
}[] = [
  {
    target: makingOfMetaData.pages[0].uri,
    heading: makingOfMetaData.pages[0].menuText,
    description: makingOfMetaData.pages[0].linkDescription,
    imageData: makingOfMetaData.pages[0].imageData,
  },
  {
    target: formsMetaData.pages[1].uri,
    heading: formsMetaData.pages[1].menuText,
    description: `A sample form with server side validation. ${formsMetaData.pages[1].linkDescription}`,
    imageData: formsMetaData.pages[1].imageData,
  },
  {
    target: makingOfMetaData.pages[1].uri,
    heading: makingOfMetaData.pages[1].menuText,
    description: makingOfMetaData.pages[1].linkDescription,
    imageData: makingOfMetaData.pages[1].imageData,
  },
  {
    target: "/me-and-my-site",
    heading: "Me and my site",
    description:
      "A first page, with a little about who I am and why I'm doing this",
    imageData: makingOfMetaData.pages[3].imageData,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col justify-start h-full items-center">
      <PageHeading>mike james rust</PageHeading>
      <Image
        className="rounded-2xl"
        src="/profile.jpg"
        alt="My selfie. A handsome chap with long wavy hair, a tidy beard and a big smile"
        width={180}
        height={214}
        priority
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-2 sm:pt-16">
        {LINK_CARDS.map((item) => (
          <LinkCard
            key={item.target}
            target={item.target}
            heading={item.heading}
            description={item.description}
            imageData={item.imageData}
          />
        ))}
      </div>
    </div>
  );
}
