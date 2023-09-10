import { render, screen } from "@testing-library/react";
import PageHeading from "../index";
import "@testing-library/jest-dom";

describe("PageHeading", () => {
  it("renders the page heading", () => {
    render(<PageHeading>Some text</PageHeading>);

    expect(screen.getByRole("heading")).toHaveTextContent("Some text");
  });
});
