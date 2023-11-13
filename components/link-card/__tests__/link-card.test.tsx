import React from "react";
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
        imageData={{
          source: "/profile.jpg",
          altText: "An emotive image",
        }}
      />
    );

    const link = screen.getByRole("link");
    const heading = screen.getByRole("heading");
    const image = screen.getAllByRole("img", { name: "An emotive image"})
    const description = screen.getByText("A first page, with a...");

    expect(link).toHaveAttribute("href", "/me-and-my-site");
    expect(image).toBeVisible;
    expect(heading).toHaveTextContent("Me and my site");
    expect(description).toBeVisible;
  });
});
