import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Page from "../page";

describe("Day 2 Running", () => {
  test("renders with h1", () => {
    render(<Page />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent("Day 3 - A website on my computer");
  });

  test("renders with img", () => {
    render(<Page />);

    const image = screen.getByRole("img", {
      name: "A red squirrel poses like a superhero",
    });

    expect(image).toBeVisible();
  });
});
