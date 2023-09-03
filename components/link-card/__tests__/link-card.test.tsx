import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import LinkCard from "../index";

describe("LinkCard", () => {
  test("renders the LinkCard", () => {
    render(
      <LinkCard
        key="/me-and-my-site"
        target="/me-and-my-site"
        heading="Me and my site"
        description="A first page, with a..."
      />
    );

    const link = screen.getByRole("link");
    const heading = screen.getByRole("heading");
    const description = screen.getByText("A first page, with a...");

    expect(link).toHaveAttribute("href", "/me-and-my-site");
    expect(heading).toHaveTextContent("Me and my site");
    expect(description).toBeVisible;
  });
});
