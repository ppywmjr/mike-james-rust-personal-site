import React, { FunctionComponent } from "react";
import { SubmitProps } from "./types";

const Submit: FunctionComponent<SubmitProps> = ({ children }) => {
  return (
    <label htmlFor="hi" className="block">
      message:
      <input
        id="hi"
        className="border-2 border-mjr_orange ms-2"
        name="message"
      />
    </label>
  );
};

export default Submit;
