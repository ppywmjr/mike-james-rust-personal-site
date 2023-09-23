import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Code from "../Code";

describe("Code", () => {
  it("renders the Code with children", () => {
    render(<Code>Child text</Code>);

    const code = screen.getByText("Child text");

    expect(code).toBeVisible();
  });
});
