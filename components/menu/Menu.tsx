"use client";

import MenuItem from "./menu-item";
import React, { FunctionComponent, useState } from "react";
import Logo from "../logo";
import { usePathname } from "next/navigation";

const MENU_LIST: { target: string; text: string }[] = [
  { target: "/", text: "Home" },
  { target: "/me-and-my-site", text: "Me and my site" },
  { target: "/quality-topics", text: "Quality topics" },
  { target: "/the-making-of", text: "The making of" },
];

const Menu: FunctionComponent<{}> = () => {
  const [navOpen, setNavOpen] = useState(null);
  const pathname = usePathname();

  const handleMenuItemClick = () => setNavOpen(false);

  return (
    <nav className="fixed w-full flex flex-col md:flex-row bg-mjr_light_green">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <Logo />
          <p className="md:hidden lg:block">mike james rust</p>
        </div>
        <button
          aria-controls="menu"
          className={"p-3 md:hidden"}
          onClick={() => setNavOpen(!navOpen)}
        >
          <div
            className={`w-6 h-0.5 bg-mjr_very_dark_orange my-1 mx-0 block duration-500
            ${navOpen ? "-rotate-45 translate-y-[0.2rem]" : ""}`}
            role="presentation"
          ></div>
          <div
            className={`w-6 h-0.5 bg-mjr_very_dark_orange my-1 mx-0 block duration-500
            ${navOpen ? "rotate-45 -translate-y-[0.2rem]" : ""}`}
            role="presentation"
          ></div>
        </button>
      </div>
      <ul
        className={`${navOpen ? "flex" : "hidden md:flex"} 
        flex-col md:flex-row flex-auto flex-wrap items-stretch`}
      >
        {MENU_LIST.map((item) => (
          <MenuItem
            key={item.text}
            target={item.target}
            text={item.text}
            active={pathname === item.target}
            onClick={handleMenuItemClick}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
