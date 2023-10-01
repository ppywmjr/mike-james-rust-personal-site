import React, { FunctionComponent } from "react";
import { SubmitProps } from "./types";

const Submit: FunctionComponent<SubmitProps> = ({ children, disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="block bg-mjr_orange hover:bg-mjr_very_dark_orange p-2 my-3 w-40 center disabled:bg-mjr_light_orange"
    >
      {children}
    </button>
  );
};

export default Submit;
