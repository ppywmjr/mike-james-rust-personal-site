import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Illustration from "../index";

describe("Illustration", () => {
  test("renders the Illustration", () => {
    render(
      <Illustration
        imageSource={"/image"}
        altText={"image description"}
        labelText={"Some label text"}
      />
    );

    const image = screen.getByRole("img");
    const label = screen.getByText("Some label text");

    expect(image).toBeVisible();
    expect(label).toBeVisible();
    expect(image).toHaveAccessibleName("image description");
  });

    test("acessible name falls back to label text", () => {
    render(
      <Illustration imageSource={"/image"} labelText={"Some label text"} />
    );

    const image = screen.getByRole("img");

    expect(image).toHaveAccessibleName("Some label text");
  });
});

