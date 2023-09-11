import React, { FunctionComponent } from "react";
import { TextLinkProps } from "./types";
import Link from "next/link";

const TextLink: FunctionComponent<TextLinkProps> = ({ target, children }) => {
  return (
    <Link
      className="text-mjr_very_dark_orange font-bold underline italic"
      href={target}
    >
      {children}
    </Link>
  );
};

export default TextLink;
