"use client";

import React, { FunctionComponent, useState } from "react";
import Image from "next/image";
import { IllustrationProps } from "./types";

const Illustration: FunctionComponent<IllustrationProps> = ({
  imageSource,
  labelText,
  altText,
  isPortraitOrientation,
}) => {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);

  const width = isPortraitOrientation ? 400 : 600;
  const image = (className: string = "") => (
    <Image
      onClick={
        lightBoxOpen ? (e) => e.stopPropagation() : () => setLightBoxOpen(true)
      }
      className={className}
      id={lightBoxOpen ? `${imageSource}-large` : imageSource}
      src={lightBoxOpen ? `${imageSource}-large` : imageSource}
      alt={altText ?? labelText}
      width={width}
      height={143}
      priority
    />
  );

  return (
    <div className="flex flex-col items-stretch w-full justify-center my-6 ps-1 md:ps-2 border-s-4 border-mjr_orange">
      <div
        onClick={() => setLightBoxOpen(!lightBoxOpen)}
        className={
          lightBoxOpen
            ? "fixed top-0 left-0 right-0 bottom-0 bg-slate-900 bg-opacity-90 duration-500"
            : ""
        }
      >
        <Image
          onClick={
            lightBoxOpen
              ? (e) => e.stopPropagation()
              : () => setLightBoxOpen(true)
          }
          className={`${lightBoxOpen ? "w-5/6 mt-20 m-auto duration-500" : ""}`}
          id={imageSource}
          src={lightBoxOpen ? `${imageSource}-large` : imageSource}
          alt={altText ?? labelText}
          width={width}
          height={143}
          priority
        />
      </div>

      <label className="italic text-mjr_very_dark_orange" htmlFor={imageSource}>
        {labelText}
      </label>
    </div>
  );
};

export default Illustration;
