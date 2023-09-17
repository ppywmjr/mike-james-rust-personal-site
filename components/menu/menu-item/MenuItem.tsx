import Link from "next/link";
import React, { FunctionComponent } from "react";
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

  return (
    <li
      className={`flex md:w-44 shrink-0 flex-col items-center justify-center ${backgroundColour} ${
        isSubmenu ? "group/submenuitem" : "group"
      }`}
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
              ? `border-b-2 md:border-b-2 ${
                  isSubmenu ? "border-mjr_light_orange" : "border-mjr_orange"
                }`
              : `border-transparent border-b-2 ${
                  isSubmenu
                    ? `group-hover/submenuitem:border-mjr_light_orange group-hover/submenuitem:font-bold`
                    : `group-hover:border-mjr_orange group-hover:font-bold`
                }`
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
