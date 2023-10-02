import React, { FunctionComponent } from "react";
import { NeighbourNavigationProps } from "./types";
import SignPost from "./SignPost";

const NeighbourNavigation: FunctionComponent<NeighbourNavigationProps> = ({
  nextTarget,
  previousTarget,
  nextDescription,
  previousDescription,
}) => {
  const largeSignPosts = nextDescription || previousDescription;
  return (
    <div
      className={`w-full 
    ${largeSignPosts ? "h-24" : "h-6"}
    flex 
    justify-between
    ${
      !previousTarget
        ? "flex-row-reverse"
        : largeSignPosts
        ? "flex-row-reverse sm:flex-row"
        : ""
    }`}
    >
      {previousTarget && (
        <div
          data-testid="previous-link-wrapper"
          className={`${largeSignPosts ? "hidden sm:flex align-start" : ""}`}
        >
          <SignPost direction="left" target={previousTarget}/>
        </div>
      )}
      {nextTarget && (
        <>
          <SignPost
            direction="right"
            description={nextDescription}
            target={nextTarget}
          />
        </>
      )}
    </div>
  );
};

export default NeighbourNavigation;
