import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkCard from "../components/link-card";
import Logo from "../components/logo";

const LINK_CARDS: { target: string; heading: string; description: string }[] = [
  {
    target: "/me-and-my-site",
    heading: "Me and my site",
    description:
      "A first page, with a little about who I am and why I'm doing this.",
  },
  {
    target: "/",
    heading: "Quality topics",
    description: "THIS DOES NOT EXIST YET",
  },
  {
    target: "/",
    heading: "The making of",
    description: "THIS DOES NOT EXIST YET",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center p-12 pt-1 min-h-screen">
      <div className="flex flex-row self-stretch items-center justify-between">
        <h1 className="font-bold">Mike James Rust - a QA&apos;s playground</h1>
        <div>
          <Logo/>
        </div>
      </div>

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {LINK_CARDS.map((item) => (
          <LinkCard
            key={item.target}
            target={item.target}
            heading={item.heading}
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
}
