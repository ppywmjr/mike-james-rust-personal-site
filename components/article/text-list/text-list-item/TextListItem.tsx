import React, { FunctionComponent } from "react";
import { TextListItemProps } from "./types";

const TextListItem: FunctionComponent<TextListItemProps> = ({ children }) => {
  return <li className="">{children}</li>;
};

export default TextListItem;
