import React, { FunctionComponent } from "react";
import { NeighbourNavigationProps } from "./types";
import SignPost from "./SignPost";

const NeighbourNavigation: FunctionComponent<NeighbourNavigationProps> = ({
  nextTarget,
  previousTarget,
  nextDescription,
  previousDescription,
}) => {
  const nextText = nextDescription ? `Next - ${nextDescription}` : 'Next';
  const previousText = previousDescription ? `Previous - ${previousDescription}` : "Previous";
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
        <div data-testid="previous-link-wrapper" 
          className={`${largeSignPosts ? "hidden sm:flex align-start" : ""}`}
        >
          <SignPost
            direction="left"
            text={`Previous - ${previousText}`}
            target={previousTarget}
            size={
              largeSignPosts
                ? previousText.length > 10
                  ? "large"
                  : "medium"
                : "small"
            }
          />
        </div>
      )}
      {nextTarget && (
        <SignPost
          direction="right"
          text={`Next - ${nextText}`}
          target={nextTarget}
          size={largeSignPosts ? "large" : "small"}
        />
      )}
    </div>
  );
};

export default NeighbourNavigation;
