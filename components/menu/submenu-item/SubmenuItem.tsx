import Link from "next/link";
import React, { FunctionComponent } from "react";
import { SubmenuItemProps } from "./types";

const SubmenuItem: FunctionComponent<SubmenuItemProps> = ({
  active,
  target,
  text,
  onClick,
}) => {
  return (
    <li className="flex md:w-40 shrink-0 flex-row items-center justify-center group/submenuitem">
      <Link
        href={target}
        className="flex flex-row justify-center bg-mjr_very_light_green w-full"
        onClick={onClick}
      >
        <p
          className={`my-4 md:mt-2 md:mb-0 text-center min-w-[6rem]
          ${
            active
              ? "border-mjr_orange border-b-2 md:border-b-2"
              : "border-transparent border-b-2 group-hover/submenuitem:border-mjr_orange group-hover/submenuitem:font-bold"
          }
          `}
        >
          {text}
        </p>
      </Link>
    </li>
  );
};

export default SubmenuItem;
