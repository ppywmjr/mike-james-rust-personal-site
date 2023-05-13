import MenuItem from "../menu-item";
import styles from "./Menu.module.css";

const MENU_LIST = [
  { target: "/", text: "Home" },
  { target: "/me-and-my-site", text: "Me and my site" },
  { target: "/", text: "Quality topics" },
  { target: "/", text: "The making of" },
];

const Menu = (props) => {
  return (
    <nav>
      <ul className={styles.menu}>
        {MENU_LIST.map((item) => (
          <MenuItem
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
