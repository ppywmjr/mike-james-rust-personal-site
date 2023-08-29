"use client";

import MenuItem from "../menu-item";
import styles from "./Menu.module.css";
import React, { FunctionComponent, useState } from "react";
import { MenuProps } from "./types";

const MENU_LIST: { target: string; text: string }[] = [
  { target: "/", text: "Home" },
  { target: "/me-and-my-site", text: "Me and my site" },
  { target: "/", text: "Quality topics" },
  { target: "/", text: "The making of" },
];

const Menu: FunctionComponent<MenuProps> = ({ currentUri }) => {
  const [navOpen, setNavOpen] = useState(null);

  return (
    <nav className="flex flex-col md:flex-row items-stretch justify-stretch bg-secondary">
      <div className="flex flex-row-reverse md:hidden">
        <button
          aria-controls="menu"
          className={`p-4 ${navOpen ? styles.navOpen : ""}`}
          onClick={() => setNavOpen(!navOpen)}
        >
          <div className={styles.bar1} role="presentation"></div>
          <div className={styles.bar2} role="presentation"></div>
        </button>
      </div>
      <ul
        className={`${navOpen ? "flex" : "hidden md:flex"} 
        flex-auto flex-col md:flex-row items-stretch justify-stretch`}
      >
        {MENU_LIST.map((item) => (
          <MenuItem
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
