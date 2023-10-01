"use client";

import MenuItem from "./menu-item";
import React, { FunctionComponent, useState } from "react";
import Logo from "../logo";
import Submenu from "./submenu";
import { MenuItemProps } from "./menu-item/types";
import makingOfMetaData from "../../app/the-making-of/makingOfMetadata";
import formsMetaData from "app/forms/formsMetadata";

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
  {
    path: "/the-making-of",
    text: "How to make this site",
    submenuItems: makingOfMetaData.pages.map((page) => {
      return { target: page.uri, text: page.menuText };
    }),
  },
  {
    path: "/forms",
    text: "Sample forms",
    submenuItems: formsMetaData.pages.map((page) => {
      return { target: page.uri, text: page.menuText };
    }),
  },
];

const Menu: FunctionComponent<{}> = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState([false,false]);

  const handleMenuItemClick = () => {
    setNavOpen(false),
      setSubmenuOpen([false,false]);
  };
  const handleSubmenuItemClick = [
    () => setSubmenuOpen([!submenuOpen[0], false]),
    () => setSubmenuOpen([false, !submenuOpen[1]]),
  ];

  const MENU_LIST: {
    path: string;
    text: string;
    submenuItems?: MenuItemProps[];
    handleClick?: any;
    index?: number;
  }[] = [
    { path: "/", text: "Home" },
    {
      path: "/me-and-my-site",
      text: "Me and my site",
    },
    {
      path: "/the-making-of",
      text: "How to make this site",
      index: 0,
      submenuItems: makingOfMetaData.pages.map((page) => {
        return { target: page.uri, text: page.menuText };
      }),
    },
    {
      path: "/forms",
      text: "Sample forms",
      index: 1,
      submenuItems: formsMetaData.pages.map((page) => {
        return { target: page.uri, text: page.menuText };
      }),
    },
  ];

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
                submenuOpen={submenuOpen[item.index]}
                onClick={handleMenuItemClick}
                onSubmenuItemClick={handleSubmenuItemClick[item.index]}
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
