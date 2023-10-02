import React, { FunctionComponent } from "react";
import { SignPostProps } from "./types";
import Link from "next/link";
import Image from "next/image";

const SignPost: FunctionComponent<SignPostProps> = ({
  target,
  description,
  direction,
}) => {
  const descriptionContainerWidth =
    description?.length > 50
      ? "w-64"
      : description?.length > 28
      ? "w-52"
      : "w-64";
  const source =
    direction === "left" ? "/signpost-left.svg" : "/signpost-right.svg";
  return (
    <div
      className={`
        ${description ? descriptionContainerWidth : "w-24"}
         group flex flex-col ${
           direction === "left" ? "items-start" : "items-end"
         }`}
    >
      <Link
        href={target}
        className={`
        ${"w-24"}
         group flex items-center`}
      >
        <Image
          src={source}
          alt={""}
          width={96}
          height={24}
          className="absolute -z-10"
        />
        <p
          className={`text-mjr_very_dark_orange 
          ${direction === "left" ? "ms-2" : "ms-0"} 
          ${!description ? "w-56 ps-3 m-auto" : "w-20"}
          text-center group-hover:font-bold leading-normal`}
        >
          {direction === "left" ? "Previous" : "Next"}
        </p>
      </Link>
      <p className="flex text-right mt-1 text-mjr_very_dark_orange">
        {description}
      </p>
    </div>
  );
};

export default SignPost;
