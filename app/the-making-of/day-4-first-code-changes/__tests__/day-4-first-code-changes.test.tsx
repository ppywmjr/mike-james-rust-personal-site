import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Page from "../page";

describe("Day 4", () => {
  test("renders with h1", () => {
    render(<Page />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent("Day 4 - First code changes");
  });

  test("renders with img", () => {
    render(<Page />);

    const image = screen.getByRole("img", {
      name: "A mischievous red squirrel throws around building blocks",
    });

    expect(image).toBeVisible();
  });
});
