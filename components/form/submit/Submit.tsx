import React, { FunctionComponent } from "react";
import { SubmitProps } from "./types";
import Button from "@components/button";

const Submit: FunctionComponent<SubmitProps> = ({
  importance = "primary",
  text,
  disabled,
  className,
}) => {
  return (
    <Button
      importance={importance}
      type="submit"
      disabled={disabled}
      className={`${className} disabled:bg-mjr_very_light_orange`}
      text={text}
    />
  );
};

export default Submit;
