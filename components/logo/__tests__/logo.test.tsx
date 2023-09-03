import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Logo from "../index";

describe("Logo", () => {
  test("renders the Logo", () => {
    render(<Logo />);

    const image = screen.getByRole("img");

    expect(image).toBeVisible();
    expect(image).toHaveAttribute("src", "/logo.svg");
    expect(image).toHaveAccessibleName("Mike James Rust Logo");
  });
});
