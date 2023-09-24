import React, { FunctionComponent } from "react";
import { NeighbourNavigationProps } from "./types";
import SignPost from "./SignPost";

const NeighbourNavigation: FunctionComponent<NeighbourNavigationProps> = ({
  nextTarget,
  previousTarget,
  nextText,
  previousText,
}) => {
  const justify = previousTarget ? "justify-between" : "flex-row-reverse";
  return (
    <div className={`w-full flex ${justify}`}>
      {previousTarget && (
        <SignPost
          direction="left"
          text={previousText || "Previous"}
          target={previousTarget}
        />
      )}
      {nextTarget && (
        <SignPost
          direction="right"
          text={nextText || "Next"}
          target={nextTarget}
        />
      )}
    </div>
  );
};

export default NeighbourNavigation;
