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
  });
});
