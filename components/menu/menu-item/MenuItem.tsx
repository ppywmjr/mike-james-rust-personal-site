import Link from "next/link";
import React, { FunctionComponent, useState } from "react";
import { MenuItemProps } from "./types";
import { usePathname } from "next/navigation";

const MenuItem: FunctionComponent<MenuItemProps> = ({
  target,
  text,
  isSubmenu,
  onClick,
}) => {
  const current = usePathname() === target;
  const backgroundColour = isSubmenu
    ? "bg-mjr_very_light_green"
    : "bg-mjr_light_green";
  const borderColour = isSubmenu
    ? "border-mjr_light_orange"
    : "border-mjr_orange";
  const subGroup = isSubmenu ? "/submenuitem" : "";

  return (
    <li
      className={`flex md:w-40 shrink-0 flex-col items-center justify-center ${backgroundColour} group${subGroup}`}
    >
      <Link
        href={target}
        className="flex flex-row justify-center  w-full"
        onClick={onClick}
      >
        <p
          className={`my-4 md:mt-2 md:mb-0 text-center min-w-[6rem]
          ${
            current
              ? `${borderColour} border-b-2 md:border-b-2`
              : `border-transparent border-b-2 group-hover${subGroup}:${borderColour} group-hover${subGroup}:font-bold`
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
