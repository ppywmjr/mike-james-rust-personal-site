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
      className={`${styles.link} ${active ? styles.active : ""} 
      ${className ?? ""}`}
    >
      <Link href={target}>{text}</Link>
    </li>
  );
};

export default MenuItem;
