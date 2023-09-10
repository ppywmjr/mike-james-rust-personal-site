import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import TextList from "../TextList";
import TextListItem from "../text-list-item";

describe("TextList", () => {
  it("renders the TextList with children", () => {
    render(<TextList>Child text</TextList>);

    const textList = screen.getByRole("list");

    expect(textList).toBeVisible();
    expect(textList).toHaveTextContent("Child text");
  });
  it("renders the TextList with multiple TextListItem children", () => {
    render(
      <TextList>
        <TextListItem>item 1</TextListItem>
        <TextListItem>item 2</TextListItem>
      </TextList>
    );

    const textListItems = screen.getAllByRole("listitem");

    expect(textListItems).toHaveLength(2);
    expect(textListItems[0]).toBeVisible();
    expect(textListItems[1]).toBeVisible();
  });
});
