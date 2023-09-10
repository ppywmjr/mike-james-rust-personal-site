import React, { FunctionComponent } from "react";
import { SubHeadingProps } from "./types";

const SubHeading: FunctionComponent<SubHeadingProps> = ({
  level,
  children,
}) => {
  const className = "font-bold text-mjr_very_dark_orange text-xl";

  switch (level) {
    case 2:
      return <h2 className={className}>{children}</h2>;
    case 3:
      return <h3 className={className}>{children}</h3>;
    case 4:
      return <h4 className={className}>{children}</h4>;
    case 5:
      return <h5 className={className}>{children}</h5>;
    case 6:
      return <h6 className={className}>{children}</h6>;
  }
};

export default SubHeading;
