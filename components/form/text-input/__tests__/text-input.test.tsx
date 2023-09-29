import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import TextInput from "../TextInput";

describe("TextInput", () => {
  it("renders the TextInput", () => {
    render(<TextInput id={""} name={""} label={""}/>);

    const textInput = screen.getByText("Child text");

    expect(textInput).toBeVisible();
  });
});
