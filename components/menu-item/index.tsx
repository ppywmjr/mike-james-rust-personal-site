import Link from "next/link";
import React, { FunctionComponent } from "react";
import { MenuItemProps } from "./types";

const MenuItem: FunctionComponent<MenuItemProps> = ({
  active,
  target,
  text,
}) => {
  return (
    <li className="flex md:w-40 shrink-0 flex-row items-center">
      <Link
        href={target}
        className={`flex-auto px-2 py-2 text-center
          ${
            active
              ? "text-text_primary bg-primary hover:bg-secondary"
              : "text-text_primary bg-secondary hover:bg-primary"
          }
          `}
      >
        {text}
      </Link>
    </li>
  );
};

export default MenuItem;
