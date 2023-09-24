import React, { FunctionComponent } from "react";
import { SignPostProps } from "./types";
import Link from "next/link";
import Image from "next/image";

const NeighbourNavigation: FunctionComponent<SignPostProps> = ({
  target,
  text,
  direction,
}) => {
  const source =
    direction === "left" ? "/signpost-left.svg" : "/signpost-right.svg";
  const textPadding = direction === "left" ? "ps-1" : "pe-1";
  return (
    <>
      <Link href={target} className="group w-24 inline-block h-7">
        <Image
          src={source}
          alt={"hello"}
          width={94}
          height={24}
          className="absolute -z-10"
        />
        <p
          className={`text-mjr_very_dark_orange w-full text-center group-hover:font-bold leading-normal ${textPadding}`}
        >
          {text}
        </p>
      </Link>
    </>
  );
};

export default NeighbourNavigation;
