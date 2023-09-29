import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import TextInput from "../TextInput";

describe("TextInput", () => {
  it("renders the TextInput", () => {
    render(<TextInput id={"an id"} name={"aName"} label={"A label"} />);

    const textBox = screen.getByRole("textbox");
    const label = screen.getByText("A label");

    expect(textBox).toBeVisible();
    expect(textBox).toHaveAccessibleName("A label");
    expect(textBox).toHaveAttribute("name", "aName");
    expect(label).toBeVisible();
  });

  it("renders the TextInput is linked to label by default when no id is provided", () => {
    render(<TextInput name={"aName"} label={"A label"} />);

    const textBox = screen.getByRole("textbox");
    const label = screen.getByText("A label");

    expect(textBox).toBeVisible();
    expect(textBox).toHaveAccessibleName("A label");
    expect(textBox).toHaveAttribute("name", "aName");
    expect(label).toBeVisible();
  });
});
