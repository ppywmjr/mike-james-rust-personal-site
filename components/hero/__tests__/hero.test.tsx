import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Hero from "../index";

describe("LinkCard", () => {
  test("renders the LinkCard", () => {
    render(
      <Hero
        imageSource={"/image"}
        altText={"image description"}
        text={"And some text"}
      />
    );

    const image = screen.getByRole("img", { name: "image description" });
    const description = screen.getByText("And some text");

    expect(image).toBeVisible();
    expect(description).toBeVisible();
    expect(description).not.toHaveClass("sm:basis-52");
  });
  test("text element is wider when over 41 characters", () => {
    render(
      <Hero
        imageSource={"/image"}
        altText={"image description"}
        text={"A long ish hero text prop of 42 characters"}
      />
    );

    const description = screen.getByText(
      "A long ish hero text prop of 42 characters"
    );

    expect(description).toHaveClass("sm:basis-52");
  });
});
