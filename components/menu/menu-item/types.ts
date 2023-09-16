import { ReactNode } from "react";

export type MenuItemProps = {
  className?: string;
  target: string;
  text: string;
  onClick: () => void;
  submenuItems?: ReactNode[];
};
