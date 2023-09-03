import Image from "next/image";

const Logo = () => {
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
