"use client";

import Link from "next/link";
import MenuItem from "../menu-item";
import styles from "./Menu.module.css";
import React, { useState } from "react";

const MENU_LIST = [
  { target: "/me-and-my-site", text: "Me and my site" },
  { target: "/", text: "Quality topics" },
  { target: "/", text: "The making of" },
];

const navHidden = true;

const Menu = (props) => {
  const [navActive, setNavActive] = useState(null);

  return (
    <nav>
      <ul className={styles.menu}>
        <li className={styles.navBar}>
          <Link href="/">Home</Link>
          <div
            className={`${styles.burger} ${navActive ? styles.change : ""}`}
            onClick={() => setNavActive(!navActive)}
          >
            <div class={styles.bar1}></div>
            <div class={styles.bar2}></div>
          </div>
        </li>
        {MENU_LIST.map((item) => (
          <MenuItem
            className={!navActive ? styles.hidden : ""}
            key={item.text}
            target={item.target}
            text={item.text}
            active={props.currentUri === item.target ? true : false}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
