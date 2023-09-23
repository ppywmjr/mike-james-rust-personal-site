import React, { FunctionComponent } from "react";
import Image from "next/image";
import { IllustrationProps } from "./types";

const Illustration: FunctionComponent<IllustrationProps> = ({
  imageSource,
  labelText,
  altText,
  isPortraitOrientation,
}) => {
  const width = isPortraitOrientation ? 400 : 600;
  return (
    <div className="flex flex-col items-stretch w-full justify-center my-6 ps-1 md:ps-2 border-s-4 border-mjr_orange">
      <Image
        id={imageSource}
        src={imageSource}
        alt={altText ?? labelText}
        width={width}
        height={143}
        priority
      />
      <label className="italic text-mjr_very_dark_orange" htmlFor={imageSource}>
        {labelText}
      </label>
    </div>
  );
};

export default Illustration;
