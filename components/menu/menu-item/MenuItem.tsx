import Link from "next/link";
import React, { FunctionComponent } from "react";
import { MenuItemProps } from "./types";

const MenuItem: FunctionComponent<MenuItemProps> = ({
  active,
  target,
  text,
  onClick,
}) => {
  return (
    <li className="flex md:w-40 shrink-0 flex-row items-center justify-center group bg-mjr_light_green">
      <Link
        href={target}
        className="flex flex-row justify-center w-full"
        onClick={onClick}
      >
        <p
          className={`my-4 md:mt-2 md:mb-0 text-center min-w-[6rem]
          ${
            active
              ? "border-mjr_orange border-b-2 md:border-b-2"
              : "border-transparent border-b-2 group-hover:border-mjr_orange group-hover:font-bold"
          }
          `}
        >
          {text}
        </p>
      </Link>
    </li>
  );
};

export default MenuItem;
