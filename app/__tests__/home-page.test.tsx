import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../page";

describe("Home page", () => {
  it("renders with h1", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeVisible();
  });

  it("renders with img", () => {
    render(<Home />);

    const image = screen.getByRole("img", { name: /My selfie/ });

    expect(image).toBeVisible();
  });

  it("renders with link card", () => {
    render(<Home />);

    const text = screen.getByRole("link", { name: /Me and my site/ });

    expect(text).toBeVisible();
  });
});
