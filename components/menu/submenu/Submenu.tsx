import React, { FunctionComponent, useState } from "react";
import { SubmenuProps } from "./types";
import { usePathname } from "next/navigation";
import MenuItem from "../menu-item";
import Image from "next/image";

const Submenu: FunctionComponent<SubmenuProps> = ({
  path,
  text,
  onClick,
  submenuItems,
}) => {
  const current = usePathname().startsWith(path);
  const [subnavOpen, setSubnavOpen] = useState(false);

  return (
    <li className="flex md:w-40 shrink-0 flex-col items-center justify-center">
      <button
        onClick={() => setSubnavOpen(!subnavOpen)}
        className="flex flex-row justify-center items-center bg-mjr_light_green w-full"
      >
        {" "}
        <p
          className={`my-4 md:mt-2 md:mb-0 text-center min-w-[6rem]
          ${
            current
              ? "border-mjr_orange border-b-2 md:border-b-2"
              : "border-transparent border-b-2"
          }
          `}
        >
          {text}
        </p>
        <span className="ms-3 mt-1">
          <Image
            className={`${subnavOpen ? "rotate-180" : ""} duration-500`}
            src="/chevron.svg"
            alt="chevron"
            width={16}
            height={6}
            priority
          />
        </span>
      </button>
      <ul className={`${!subnavOpen ? "hidden" : ""} w-full duration-500`}>
        {submenuItems.map((item) => (
          <MenuItem
            key={item.text}
            target={`${path}${item.target}`}
            text={item.text}
            isSubmenu={true}
            onClick={() => {
              onClick();
              setSubnavOpen(false);
            }}
          />
        ))}
      </ul>
    </li>
  );
};

export default Submenu;
