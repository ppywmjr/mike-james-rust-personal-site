import React, { FunctionComponent } from "react";
import { CodeProps } from "./types";

const Code: FunctionComponent<CodeProps> = ({ children }) => {
  return (
    <code className="bg-[#212121] text-[#F8F8F2] px-1 not-prose">
      {children}
    </code>
  );
};

export default Code;
