import React, { FunctionComponent } from "react";
import Image from "next/image";
import { HeroProps } from "./types";

const Hero: FunctionComponent<HeroProps> = ({ imageSource, altText, text }) => {
  return (
    <div className="flex flex-row flex-wrap">
      <div className="basis-32 shrink-0 mr-6 mb-6">
        <Image
          className="rounded-lg"
          src={imageSource}
          alt={altText}
          width={120}
          height={143}
          priority
        />
      </div>
      <p className="basis-40 shrink-0 mb-6 text-xl italic">{text}</p>
    </div>
  );
};

export default Hero;
