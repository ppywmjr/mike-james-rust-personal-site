import React, { FunctionComponent, Children } from "react";
import { ParagraphProps } from "./types";

const Paragraph: FunctionComponent<ParagraphProps> = ({ children }) => {
  return <p className="mb-2">{children}</p>;
};

export default Paragraph;
