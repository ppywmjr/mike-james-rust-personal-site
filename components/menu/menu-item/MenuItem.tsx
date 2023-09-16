import Link from "next/link";
import React, { FunctionComponent, useState } from "react";
import { MenuItemProps } from "./types";
import { usePathname } from "next/navigation";

const MenuItem: FunctionComponent<MenuItemProps> = ({
  target,
  text,
  onClick,
  submenuItems,
}) => {
  const [subnavOpen, setSubnavOpen] = useState(false);
  const current = usePathname() === target;
  const hasSubnav = submenuItems?.length > 0 ? true : false;

  return (
    <>
      <li className="flex md:w-40 shrink-0 flex-col items-center justify-center group">
        {hasSubnav ? (
          <>
            <span
              onClick={() => setSubnavOpen(!subnavOpen)}
              className="flex flex-row justify-center bg-mjr_light_green w-full"
            >
              {" "}
              <p
                className={`my-4 md:mt-2 md:mb-0 text-center min-w-[6rem]
          ${
            current
              ? "border-mjr_orange border-b-2 md:border-b-2"
              : "border-transparent border-b-2 group-hover:border-mjr_orange group-hover:font-bold"
          }
          `}
              >
                {text}
              </p>
              <button
                className={`${
                  subnavOpen ? "rotate-180" : ""
                } duration-500 ms-3 inline`}
              >
                more
              </button>
            </span>
            <ul
              className={`${!subnavOpen ? "hidden" : ""} w-full duration-500`}
            >
              {submenuItems}
            </ul>
          </>
        ) : (
          <Link
            href={target}
            className="flex flex-row justify-center bg-mjr_light_green w-full"
            onClick={onClick}
          >
            <p
              className={`my-4 md:mt-2 md:mb-0 text-center min-w-[6rem]
          ${
            current
              ? "border-mjr_orange border-b-2 md:border-b-2"
              : "border-transparent border-b-2 group-hover:border-mjr_orange group-hover:font-bold"
          }
          `}
            >
              {text}
            </p>
          </Link>
        )}
      </li>
    </>
  );
};

export default MenuItem;
