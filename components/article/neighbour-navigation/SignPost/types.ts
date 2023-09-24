import { TailWindSize } from "@components/tailwindSizeType";

export type SignPostProps = {
  target: string;
  text: string;
  direction: "left" | "right";
  size: "small" | "medium" | "large";
};
