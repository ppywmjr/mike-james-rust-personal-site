import Link from "next/link";
import styles from "./MenuItem.module.css";
import React, { FunctionComponent } from "react";
import { MenuItemProps } from "./types";

const MenuItem: FunctionComponent<MenuItemProps> = ({
  active,
  className,
  target,
  text,
}) => {
  return (
    <li
      className={`${styles.link}
      ${className ?? ""}`}
    >
      <Link
        href={target}
        className={`flex px-8 py-4 
          ${active ? "text-white bg-black" : "text-black bg-white"}
          hover:text-white bg-black`}
      >
        {text}
      </Link>
    </li>
  );
};

export default MenuItem;
