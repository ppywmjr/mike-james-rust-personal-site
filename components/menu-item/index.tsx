import Link from "next/link";
import React, { FunctionComponent } from "react";
import { MenuItemProps } from "./types";

const MenuItem: FunctionComponent<MenuItemProps> = ({
  active,
  target,
  text,
}) => {
  return (
    <li className="flex flex-auto flex-row items-stretch justify-stretch">
      <Link
        href={target}
        className={`flex-auto px-8 py-4 w-48 text-center 
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
