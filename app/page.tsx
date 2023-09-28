import Image from "next/image";
import React from "react";
import LinkCard from "../components/link-card";
import PageHeading from "../components/page-heading";
import makingOfMetaData from "./the-making-of/makingOfMetadata";

const LINK_CARDS: { target: string; heading: string; description: string }[] = [
  {
    target: "/me-and-my-site",
    heading: "Me and my site",
    description:
      "A first page, with a little about who I am and why I'm doing this.",
  },
  {
    target: makingOfMetaData.pages[0].uri,
    heading: makingOfMetaData.pages[0].menuText,
    description: makingOfMetaData.pages[0].linkDescription,
  },
  {
    target: makingOfMetaData.pages[1].uri,
    heading: makingOfMetaData.pages[1].menuText,
    description: makingOfMetaData.pages[1].linkDescription,
  },
  {
    target: makingOfMetaData.pages[2].uri,
    heading: makingOfMetaData.pages[2].menuText,
    description: makingOfMetaData.pages[2].linkDescription,
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:pt-16">
        {LINK_CARDS.map((item) => (
          <LinkCard
            key={item.target}
            target={item.target}
            heading={item.heading}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
