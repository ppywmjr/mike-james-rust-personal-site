import Link from "next/link";
import React, { FunctionComponent } from "react";
import { LinkCardProps } from "./types";

const LinkCard: FunctionComponent<LinkCardProps> = ({
  target,
  heading,
  description,
}) => {
  return (
    <Link
      href={target}
      className="p-2 m-2 max-w-[16rem] min-h-[8rem] group border-2 border-mjr_very_light_orange rounded-lg flex"
    >
      <div className="p-2 rounded-md bg-mjr_very_light_green hover:bg-mjr_light_green ease-out flex-stretch w-full">
        <h2 className="font-bold my-2">
          {heading}{" "}
          <span className="ms-4 inline-block text-mjr_orange text-lg transition-all group-hover:translate-x-1">
            &gt;
          </span>
        </h2>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default LinkCard;
