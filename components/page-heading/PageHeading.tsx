import React, { FunctionComponent } from "react";
import { PageHeadingProps } from "./types";

const PageHeading: FunctionComponent<PageHeadingProps> = ({ children }) => {
  return (
    <h1 className="text-3xl text-mjr_dark_orange font-bold my-6 md:my-8">
      {children}
    </h1>
  );
};

export default PageHeading;
