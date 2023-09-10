import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import TheMakingOf from "../page";

describe("Me and my site", () => {
  it("renders with h1", () => {
    render(<TheMakingOf />);

    const nav = screen.getByRole("heading", { level: 1 });

    expect(nav).toBeVisible();
  });

  it("renders with img", () => {
    render(<TheMakingOf />);

    const image = screen.getByRole("img");

    expect(image).toBeVisible();
  });

  it("renders with text", () => {
    render(<TheMakingOf />);

    const heading = screen.getByRole("heading", { level: 1});

    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent("Day 1 - Choices");
  });
});
