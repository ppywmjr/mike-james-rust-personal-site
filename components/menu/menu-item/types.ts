import { ReactNode } from "react";

export type MenuItemProps = {
  target: string;
  text: string;
  isSubmenu?: boolean;
  onClick?: () => void;
};
