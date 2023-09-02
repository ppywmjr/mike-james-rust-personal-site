import Link from "next/link";
import React, { FunctionComponent } from "react";
import { LinkCardProps } from "./types";

const LinkCard: FunctionComponent<LinkCardProps> = ({
  target,
  heading,
  description,
}) => {
  return (
    <Link href={target} className="p-4 max-w-[16rem] group">
      <h2 className="font-bold my-4">
        {heading}{" "}
        <span className="inline-block transition-all group-hover:translate-x-1">
          -&gt;
        </span>
      </h2>
      <p className="text-sm">{description}</p>
    </Link>
  );
};

export default LinkCard;
