import Link from "next/link";
import Image from "next/image";
import React, { FunctionComponent } from "react";
import { LinkCardProps } from "./types";

const LinkCard: FunctionComponent<LinkCardProps> = ({
  target,
  heading,
  description,
  imageData,
  landscape,
}) => {
  return (
    <Link
      href={target}
      className="p-2 m-2 max-w-[20rem] w-full min-h-[8rem] group border-2 border-mjr_very_light_orange rounded-lg flex"
    >
      <div className="p-2 rounded-md bg-mjr_very_light_green hover:bg-mjr_light_green flex-stretch w-full">
        <h2 className="font-bold py-2 text-center">{heading}</h2>
        <Image
          className={`rounded-lg ${landscape ? "float-left mr-2" : ""}`}
          src={imageData.source}
          alt={imageData.altText}
          width={landscape ? 100 : 260}
          height={landscape ? 100 : 260}
        />
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default LinkCard;
