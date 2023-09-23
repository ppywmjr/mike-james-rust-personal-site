import React, { FunctionComponent } from "react";
import { CodeProps } from "./types";

const Code: FunctionComponent<CodeProps> = ({ children }) => {
  return (
    <code className="bg-slate-800 text-slate-300 font-mono px-2 not-prose tracking-wide rounded-sm">
      {children}
    </code>
  );
};

export default Code;
