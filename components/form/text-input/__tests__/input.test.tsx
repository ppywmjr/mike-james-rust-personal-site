import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Input from "../Input";

describe.skip("Input", () => {
  it("renders the Input", () => {
    render(
      <Input
        id={"an id"}
        name={"aName"}
        label={"A label"}
        register={register}
      />
    );

    const textBox = screen.getByRole("textbox");
    const label = screen.getByText("A label");

    expect(textBox).toBeVisible();
    expect(textBox).toHaveAccessibleName("A label");
    expect(textBox).toHaveAttribute("name", "aName");
    expect(label).toBeVisible();
  });

  it("renders the Input is linked to label by default when no id is provided", () => {
    render(<Input name={"aName"} label={"A label"} register={register} />);

    const textBox = screen.getByRole("textbox");
    const label = screen.getByText("A label");

    expect(textBox).toBeVisible();
    expect(textBox).toHaveAccessibleName("A label");
    expect(textBox).toHaveAttribute("name", "aName");
    expect(label).toBeVisible();
  });
});
