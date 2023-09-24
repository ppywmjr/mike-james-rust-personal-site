import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import NeighbourNavigation from "../NeighbourNavigation";

describe("Paragraph", () => {
  it("renders the paragraph with children", () => {
    render(<NeighbourNavigation>Child text</NeighbourNavigation>);

    const paragraph = screen.getByText("Child text");

    expect(paragraph).toBeVisible();
  });
});
