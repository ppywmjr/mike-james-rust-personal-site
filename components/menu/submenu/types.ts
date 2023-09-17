import { MenuItemProps } from "../menu-item/types";

export type SubmenuProps = {
  path: string;
  text: string;
  submenuOpen: boolean;
  onSubmenuItemClick: () => void;
  onClick?: () => void;
  submenuItems: MenuItemProps[];
};
