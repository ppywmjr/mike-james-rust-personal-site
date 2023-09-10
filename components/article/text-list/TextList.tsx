import React, { FunctionComponent } from "react";
import { TextListProps } from "./types";

const TextList: FunctionComponent<TextListProps> = ({ children }) => {
  return (
    <ul className="list-disc list-outside ps-10 sm:ps-12 my-2 leading-normal">
      {children}
    </ul>
  );
};

export default TextList;
