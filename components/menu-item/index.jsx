import Link from "next/link";
import styles from "./MenuItem.module.css"

export default function MenuItem(props) {
  return (
    <li className={`${styles.link} ${props.active ? styles.active : ''}`}>
      <Link href={props.target}>{props.text}</Link>
    </li>
  );
}
