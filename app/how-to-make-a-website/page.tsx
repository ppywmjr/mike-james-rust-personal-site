import React from "react";
import PageHeading from "@components/page-heading";
import Hero from "@components/hero";
import makingOfMetaData from "./makingOfMetadata";
import LinkCard from "@components/link-card";

export const metadata = {
  title: "The making of",
  description: "How this site was developed - a list of articles",
};

export default function TheMakingOf() {
  return (
    <>
      <div className="px-2">
        <PageHeading>How to make this site</PageHeading>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:pt-4 justify-items-center">
        <div className="m-6 max-w-[20rem]">
          <Hero
            imageSource={"/how-to-make-a-website/searching.jpg"}
            altText={
              "A red squirrel in a maze using a signpost to find the way to go "
            }
            text={"All the articles in one place"}
          />
        </div>
        {makingOfMetaData.pages.map((item) => (
          <LinkCard
            key={item.uri}
            target={item.uri}
            heading={item.menuText}
            description={item.linkDescription}
            imageData={item.imageData}
            landscape={true}
          />
        ))}
      </div>
    </>
  );
}
