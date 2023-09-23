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

  test("Default width is 600", () => {
    render(
      <Illustration imageSource={"/image"} labelText={"Some label text"} />
    );

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("width", "600");
  });

  test("Landscape width is 600", () => {
    render(
      <Illustration
        imageSource={"/image"}
        labelText={"Some label text"}
        isPortraitOrientation={false}
      />
    );

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("width", "600");
  });

  test("Portrait width is 400", () => {
    render(
      <Illustration
        imageSource={"/image"}
        labelText={"Some label text"}
        isPortraitOrientation={true}
      />
    );

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("width", "400");
  });
});
