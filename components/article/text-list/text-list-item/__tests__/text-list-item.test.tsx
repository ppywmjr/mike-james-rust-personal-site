import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import TextListItem from "../TextListItem";

describe("TextListItem", () => {
  it("renders the TextListItem with children", () => {
    render(<TextListItem>Child text</TextListItem>);

    const textListItem = screen.getByRole("listitem");

    expect(textListItem).toBeVisible();
    expect(textListItem).toHaveTextContent("Child text");
  });
});
