import React, { FunctionComponent } from "react";
import { PageHeadingProps } from "./types";

const PageHeading: FunctionComponent<PageHeadingProps> = ({ text }) => {
  return <h1 className="text-3xl font-bold my-6 md:mt-8 md:mb-12">{text}</h1>;
};

export default PageHeading;
