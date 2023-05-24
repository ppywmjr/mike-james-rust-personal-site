"use client";

import Link from "next/link";
import MenuItem from "../menu-item";
import styles from "./Menu.module.css";
import React, { FunctionComponent, useState } from "react";
import { MenuProps } from "./types";

const MENU_LIST: { target: string; text: string }[] = [
  { target: "/me-and-my-site", text: "Me and my site" },
  { target: "/", text: "Quality topics" },
  { target: "/", text: "The making of" },
];

const navHidden = true;

const Menu: FunctionComponent<MenuProps> = ({ currentUri }) => {
  const [navActive, setNavActive] = useState(null);

  return (
    <nav id="nav">
      <ul className={styles.menu}>
        <li className={"container flex flex-row"}>
          <Link
            href="/"
            className={
              "flex px-8 py-4 text-black bg-white hover:text-white hover:bg-black"
            }
          >
            Home
          </Link>
          <button
            aria-controls="menu"
            className={`${styles.burger} p-4 justify-self-end ${
              navActive ? styles.change : ""
            }`}
            onClick={() => setNavActive(!navActive)}
          >
            <div className={styles.bar1} role="presentation"></div>
            <div className={styles.bar2} role="presentation"></div>
          </button>
        </li>
        {MENU_LIST.map((item) => (
          <MenuItem
            className={`md: ${navActive ? "hidden" : "hidden"}`}
            key={item.text}
            target={item.target}
            text={item.text}
            active={currentUri === item.target ? true : false}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
