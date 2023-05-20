import { render, screen } from "@testing-library/react";
import Home from "../page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders the card headings", () => {
    render(<Home />);

    const heading = screen.getAllByRole("heading");

    expect(heading[0]).toHaveTextContent("Me and my site ->");
    expect(heading[1]).toHaveTextContent("The making of ->");
    expect(heading[2]).toHaveTextContent("Quality topics ->");
  });
});
