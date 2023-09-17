"use client";

import MenuItem from "./menu-item";
import React, { FunctionComponent, useState } from "react";
import Logo from "../logo";
import Submenu from "./submenu";
import { MenuItemProps } from "./menu-item/types";

const MENU_LIST: {
  path: string;
  text: string;
  submenuItems?: MenuItemProps[];
}[] = [
  { path: "/", text: "Home" },
  {
    path: "/me-and-my-site",
    text: "Me and my site",
  },
  { path: "/quality-topics", text: "Quality topics" },
  {
    path: "/the-making-of",
    text: "The making of",
    submenuItems: [
      { target: "", text: "Starting choices" },
      { target: "/day-2-running", text: "Up and running" },
    ],
  },
];

const Menu: FunctionComponent<{}> = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleMenuItemClick = () => {setNavOpen(false), setSubmenuOpen(false);};
  const handleOnSubmenuItemClick = () => setSubmenuOpen(!submenuOpen);

  return (
    <div className="fixed w-full flex flex-col md:flex-row">
      <nav className="flex w-full flex-col md:flex-row bg-mjr_light_green">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <Logo />
            <p className="md:hidden lg:block">mike james rust</p>
          </div>
          <button
            aria-controls="menu"
            className={"p-3 md:hidden"}
            onClick={() => setNavOpen(!navOpen)}
            data-testid="burger-menu"
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
          {MENU_LIST.map((item) =>
            item.submenuItems ? (
              <Submenu
                key={item.text}
                path={item.path}
                text={item.text}
                submenuOpen={submenuOpen}
                onClick={handleMenuItemClick}
                onSubmenuItemClick={handleOnSubmenuItemClick}
                submenuItems={item.submenuItems}
              />
            ) : (
              <MenuItem
                key={item.text}
                target={item.path}
                text={item.text}
                onClick={handleMenuItemClick}
              />
            )
          )}
        </ul>
      </nav>
      <div
        role="presentation"
        data-testid="backdrop"
        onClick={() => setNavOpen(false)}
        className={`h-0 ${navOpen ? "min-h-screen" : ""} md:hidden`}
      ></div>
    </div>
  );
};

export default Menu;
