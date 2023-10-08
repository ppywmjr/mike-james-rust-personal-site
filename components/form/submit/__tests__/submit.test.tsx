import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Submit from "../Submit";

describe("Submit", () => {
  it("renders the Submit with children", () => {
    render(<Submit text="Child text" />);

    const submitButton = screen.getByRole("button");

    expect(submitButton).toBeVisible();
    expect(submitButton).toHaveTextContent("Child text");
    expect(submitButton).toHaveAttribute("type", "submit");
  });
});
