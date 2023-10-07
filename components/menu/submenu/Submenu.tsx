import React, { FunctionComponent } from "react";
import { SubmenuProps } from "./types";
import { usePathname } from "next/navigation";
import MenuItem from "../menu-item";
import Image from "next/image";

const Submenu: FunctionComponent<SubmenuProps> = ({
  path,
  text,
  submenuOpen,
  onClick,
  onSubmenuItemClick,
  submenuItems,
}) => {
  const current = usePathname().startsWith(path);
  const handleOnClick = () => onClick();

  return (
    <li
      id={`${text}-menu`}
      className="flex md:w-44 shrink-0 flex-col items-center justify-center group"
    >
      <button
        aria-label={`${text} sub menu`}
        aria-expanded={submenuOpen}
        aria-controls={`${text}-menu`}
        onClick={onSubmenuItemClick}
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
        <span className="ms-3 mt-1 md:hidden">
          <Image
            className={`${submenuOpen ? "rotate-180" : ""} duration-500`}
            src="/chevron.svg"
            alt="chevron"
            width={12}
            height={6}
            priority
          />
        </span>
      </button>
      <ul
        className={`${
          !submenuOpen ? "hidden" : ""
        } w-full duration-500 md:group-hover:block`}
      >
        <div className="md:absolute">
          {submenuItems.map((item) => (
            <MenuItem
              key={item.text}
              target={`${item.target}`}
              text={item.text}
              isSubmenu={true}
              onClick={handleOnClick}
            />
          ))}
        </div>
      </ul>
    </li>
  );
};

export default Submenu;
