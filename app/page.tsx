import Image from "next/image";
import React from "react";
import LinkCard from "../components/link-card";
import PageHeading from "../components/page-heading";

const LINK_CARDS: { target: string; heading: string; description: string }[] = [
  {
    target: "/me-and-my-site",
    heading: "Me and my site",
    description:
      "A first page, with a little about who I am and why I'm doing this.",
  },
  {
    target: "/quality-topics",
    heading: "Quality topics",
    description: "THIS DOES NOT EXIST YET",
  },
  {
    target: "/the-making-of",
    heading: "The making of",
    description: "THIS DOES NOT EXIST YET",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col justify-start md:justify-evenly h-full items-center">
      <PageHeading>mike james rust</PageHeading>
      <div>
        <Image
          className="rounded-2xl"
          src="/profile.jpg"
          alt="My selfie. A handsome chap with long wavy hair, a tidy beard and a big smile"
          width={180}
          height={214}
          priority
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
