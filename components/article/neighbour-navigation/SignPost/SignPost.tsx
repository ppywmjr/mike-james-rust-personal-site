import React, { FunctionComponent } from "react";
import { SignPostProps } from "./types";
import Link from "next/link";
import Image from "next/image";

const SignPost: FunctionComponent<SignPostProps> = ({
  target,
  text,
  direction,
  size,
}) => {
  const source =
    direction === "left" ? "/signpost-left.svg" : "/signpost-right.svg";
  const isSmall = size === "small";
  const isMedium = size === "medium";
  const isLarge = size === "large";
  return (
    <>
      <Link
        href={target}
        className={`
        ${isSmall ? "w-24" : isMedium ? "w-32" : "w-64"}
         group flex items-center`}
      >
        <Image
          src={source}
          alt={""}
          width={isLarge ? 270 : isMedium ? 135 : 96}
          height={isLarge ? 96 : isMedium ? 48 : 24}
          className="absolute -z-10"
        />
        <p
          className={`text-mjr_very_dark_orange 
          ${direction === "left" ? "ms-2" : "ms-0"} 
          ${isLarge ? "w-56 ps-3 m-auto" : "w-20"}
          ${isMedium ? "ps-2 m-auto" : ""}
          text-center group-hover:font-bold leading-normal`}
        >
          {text}
        </p>
      </Link>
    </>
  );
};

export default SignPost;
