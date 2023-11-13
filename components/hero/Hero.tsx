import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroProps } from "./types";

const Hero: FunctionComponent<HeroProps> = ({
  imageSource,
  altText,
  text,
  socialMediaLinks,
}) => {
  const hasLongText = text.length > 41;

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
      <p
        className={`basis-40 ${
          hasLongText ? "sm:basis-52" : ""
        } shrink-0 mb-6 text-xl italic`}
      >
        {text}
      </p>
      {socialMediaLinks === "linkedin" && (
        <div className="self-end grow flex flex-row">
          <Link
            className="ml-auto inline-block"
            href={"https://www.linkedin.com/in/mike-james-rust/"}
          >
            <Image
              className="m-2 ml-auto border-l-8 border-transparent"
              src={"/LI-In-Bug.png"}
              alt={"Mike James Rust's linkedin profile"}
              width={30}
              height={30}
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Hero;
