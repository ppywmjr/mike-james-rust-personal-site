import { render, screen } from "@testing-library/react";
import PageHeading from "../index";
import "@testing-library/jest-dom";

describe("PageHeading", () => {
  it("renders the page heading", () => {
    render(<PageHeading text="Some text" />);

    expect(screen.getByRole("heading")).toHaveTextContent("Some text");
  });
});
