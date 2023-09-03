import Link from "next/link";
import React, { FunctionComponent } from "react";
import { MenuItemProps } from "./types";

const MenuItem: FunctionComponent<MenuItemProps> = ({
  active,
  target,
  text,
}) => {
  return (
    <li className="flex md:w-40 shrink-0 flex-row items-center justify-center group">
      <Link
        href={target}
        className={`my-4 md:mt-2 md:mb-0 text-center bg-secondary min-w-[6rem]
          ${
            active
              ? "border-primary border-b-2 md:border-b-4"
              : "border-secondary border-b-4 group-hover:border-primary group-hover:font-bold"
          }
          `}
      >
        {text}
      </Link>
    </li>
  );
};

export default MenuItem;
