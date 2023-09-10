import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import MeAndMySite from "../page";

describe("Me and my site", () => {
  it("renders with h1", () => {
    render(<MeAndMySite />);

    const nav = screen.getByRole("heading", { level: 1 });

    expect(nav).toBeVisible();
  });

  it("renders with img", () => {
    render(<MeAndMySite />);

    const image = screen.getByRole("img");

    expect(image).toBeVisible();
  });

  it("renders with text", () => {
    render(<MeAndMySite />);

    const text = screen.getByText(/Hi folks/);

    expect(text).toBeVisible();
  });
});
