import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import TextLink from "../index";

describe("TextLink", () => {
  test("renders the TextLink", () => {
    render(
      <TextLink
        target={"/my-url"}
      >My Link</TextLink>
    );

    const link = screen.getByRole("link");

    expect(link).toBeVisible();
    expect(link).toHaveAttribute("href", "/my-url");
    expect(link).toHaveTextContent("My Link");
  });

  test("default text is the target url", () => {
    render(<TextLink target={"/my-url"} />);

    const link = screen.getByRole("link");

    expect(link).toBeVisible();
    expect(link).toHaveAttribute("href", "/my-url");
    expect(link).toHaveTextContent("/my-url");
  });
});
