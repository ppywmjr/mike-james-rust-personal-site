import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import NeighbourNavigation from "../NeighbourNavigation";

describe("NeighbourNavigation", () => {
  test("renders the paragraph with children with default text", () => {
    render(
      <NeighbourNavigation
        nextTarget={"/uri-right"}
        previousTarget={"/uri-left"}
      />
    );

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(2);
    expect(links[0]).toBeVisible();
    expect(links[0]).toHaveAttribute("href", "/uri-left");
    expect(links[1]).toBeVisible();
    expect(links[1]).toHaveAttribute("href", "/uri-right");
  });

  test("Next link text longer than 10 characters hides the previous link", () => {
    render(
      <NeighbourNavigation
        nextTarget={"/uri-right"}
        nextText={"Eleven char"}
        previousTarget={"/uri-left"}
      />
    );

    const hiddenLink = screen.getByTestId("previous-link-wrapper");

    expect(hiddenLink).toHaveClass("hidden");
  });

  test("No previousTarget does not render left link", () => {
    render(<NeighbourNavigation nextTarget={"/uri-right"} />);

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/uri-right");
  });

  test("No nextTarget does not render right link", () => {
    render(<NeighbourNavigation nextTarget={"/uri-left"} />);

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/uri-left");
  });
});
