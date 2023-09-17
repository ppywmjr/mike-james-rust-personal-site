import { MenuItemProps } from "../menu-item/types";

export type SubmenuProps = {
  path: string;
  text: string;
  onClick?: () => void;
  submenuItems: MenuItemProps[];
};
