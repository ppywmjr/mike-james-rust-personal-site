import React, { FunctionComponent } from "react";
import { SubmitProps } from "./types";

const Submit: FunctionComponent<SubmitProps> = ({ children }) => {
  return (
    <button
      type="submit"
      className="block bg-mjr_orange hover:bg-mjr_very_dark_orange p-2 my-3 w-40 center"
    >
      {children}
    </button>
  );
};

export default Submit;
