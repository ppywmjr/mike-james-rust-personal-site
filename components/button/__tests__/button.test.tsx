import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "../Button";
import userEvent from "@testing-library/user-event";

const onclick = jest.fn(()=>{});

describe("Button", () => {
  it("renders the Button with text", () => {
    render(<Button text={"my button"} onClick={onclick} />);

    const button = screen.getByRole("button");

    expect(button).toBeVisible();
    expect(button).toHaveTextContent("my button");
  });

  it("clicking the Button calls the function", async () => {
    render(<Button text={"my button"} onClick={onclick} />);

    const button = screen.getByRole("button");
    await userEvent.click(button)

    await waitFor(() => expect(onclick).toHaveBeenCalled());
  });
});
