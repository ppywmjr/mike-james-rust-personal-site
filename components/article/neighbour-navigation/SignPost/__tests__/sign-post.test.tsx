import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SignPost from "../SignPost";

describe("SignPost", () => {

  test("Render the left signpost", () => {
    render(
      <SignPost
        target={"/uri"}
        text={"My text"}
        direction={"left"}
        size={"small"}
      />
    );

    const signPost = screen.getByRole("link");
    const outlineImage = screen.getByRole("img");

    expect(signPost).toBeVisible();
    expect(signPost).toHaveAttribute("href", "/uri");
    expect(outlineImage).toBeVisible();
    expect(outlineImage).toHaveAttribute("src", "/signpost-left.svg");
  });
  
  test("Render the right signpost", () => {
    render(
      <SignPost
        target={"/uri"}
        text={"My text"}
        direction={"right"}
        size={"large"}
      />
    );

    const signPost = screen.getByRole("link");
    const outlineImage = screen.getByRole("img");

    expect(signPost).toBeVisible();
    expect(signPost).toHaveAttribute("href", "/uri");
    expect(outlineImage).toBeVisible();
    expect(outlineImage).toHaveAttribute("src", "/signpost-right.svg");
  });
});
