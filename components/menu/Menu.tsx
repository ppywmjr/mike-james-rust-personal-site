"use client";

import MenuItem from "./menu-item";
import React, { useEffect, FunctionComponent, useState } from "react";
import anime from "animejs";
import Logo from "../logo";
import Submenu from "./submenu";
import { MenuItemProps } from "./menu-item/types";
import makingOfMetaData from "../../app/how-to-make-a-website/makingOfMetadata";
import formsMetaData from "../../app/forms/formsMetadata";
import Link from "next/link";

const MENU_LIST: {
  path: string;
  text: string;
  submenuItems?: MenuItemProps[];
  index?: number;
}[] = [
  { path: "/", text: "Home" },
  {
    path: "/me-and-my-site",
    text: "Me and my site",
  },
  {
    path: "/how-to-make-a-website",
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

const Menu: FunctionComponent<{}> = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState([false, false]);
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const baseAnimationDuration =
      !prefersReducedMotion || prefersReducedMotion.matches ? 0 : 100;
    let mobileMenuTopArray = [0, -200];
    let topBurgerBar = {
      rotation: 0,
      translateX: "0",
      translateY: "0",
    };
    let bottomBurgerBar = {
      rotation: 0,
      translateX: "0",
      translateY: "0",
    };
    if (navOpen) {
      mobileMenuTopArray = [-200, 0];
      topBurgerBar = {
        rotation: -45,
        translateX: "-28.8px",
        translateY: "140.8px",
      };
      bottomBurgerBar = {
        rotation: 45,
        translateX: "140.8px",
        translateY: "-70.4px",
      };
    }
    anime({
      targets: ".mobileMenu",
      top: mobileMenuTopArray,
      duration: baseAnimationDuration * 6,
      easing: "easeOutElastic(1, 1)",
    });
    anime({
      targets: ".topbar",
      translateX: topBurgerBar.translateX,
      translateY: topBurgerBar.translateY,
      rotate: topBurgerBar.rotation,
      duration: baseAnimationDuration * 4,
      easing: "easeOutQuint",
    });
    anime({
      targets: ".bottombar",
      translateX: bottomBurgerBar.translateX,
      translateY: bottomBurgerBar.translateY,
      rotate: bottomBurgerBar.rotation,
      duration: baseAnimationDuration * 4,
      easing: "easeOutQuint",
    });
  }, [navOpen]);

  const handleMenuItemClick = () => {
    setNavOpen(false), setSubmenuOpen([false, false]);
  };
  const handleSubmenuItemClick = [
    () => setSubmenuOpen([!submenuOpen[0], false]),
    () => setSubmenuOpen([false, !submenuOpen[1]]),
  ];

  return (
    <div className="fixed w-full flex flex-col md:flex-row z-10">
      <nav
        id="main-menu"
        className="flex w-full flex-col md:flex-row bg-mjr_light_green"
      >
        <div className="flex flex-row justify-between">
          <Link
            href="/"
            className="flex flex-row items-center"
            aria-hidden="true"
          >
            <Logo />
            <p className="md:hidden lg:block">mike james rust</p>
          </Link>
          <button
            aria-label="Menu"
            aria-expanded={navOpen}
            aria-controls="main-menu"
            className={"md:hidden p-2"}
            onClick={() => setNavOpen(!navOpen)}
            data-testid="burger-menu"
          >
            {
              <svg
                height="36px"
                width="36px"
                viewBox="0 0 240 240"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  fill="transparent"
                  stroke="#0D2B57"
                  strokeWidth="8"
                  d="M40 90 L 200 90"
                  className="topbar"
                  strokeLinecap="round"
                ></path>
                <path
                  fill="transparent"
                  stroke="#0D2B57"
                  strokeWidth="8"
                  d="M40 150 L 200 150"
                  className="bottombar"
                  strokeLinecap="round"
                ></path>
              </svg>
            }
          </button>
        </div>
        <ul
          className={`relative ${
            navOpen ? "mobileMenu flex" : "hidden md:flex"
          } 
        flex-col md:flex-row flex-auto flex-wrap items-stretc`}
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
