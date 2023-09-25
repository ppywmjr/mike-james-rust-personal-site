import React, { FunctionComponent } from "react";
import { NeighbourNavigationProps } from "./types";
import SignPost from "./SignPost";

const NeighbourNavigation: FunctionComponent<NeighbourNavigationProps> = ({
  nextTarget,
  previousTarget,
  nextText = "Next",
  previousText = "Previous",
}) => {
  const largeSignPosts =
    nextText.length > 10 || previousText.length > 10 ? true : false;
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
            text={previousText}
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
          text={nextText}
          target={nextTarget}
          size={largeSignPosts ? "large" : "small"}
        />
      )}
    </div>
  );
};

export default NeighbourNavigation;