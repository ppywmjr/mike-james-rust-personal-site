import React, { FunctionComponent } from "react";
import Image from "next/image";

const Logo: FunctionComponent<{}>
 = () => {
  return (
    <div className="px-4 flex flex-row items-center">
      <Image
        src="/logo.svg"
        alt="Mike James Rust Logo"
        width={25}
        height={6}
        priority
      />
    </div>
  );
};

export default Logo;
