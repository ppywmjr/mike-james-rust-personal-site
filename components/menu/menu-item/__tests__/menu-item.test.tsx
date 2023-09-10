import { render, screen } from "@testing-library/react";
import MenuItem from "../index";
import "@testing-library/jest-dom";

describe("MenuItem", () => {
  it("renders the non active MenuItem", () => {
    render(<MenuItem target={"/some/uri"} text={"some text"} active={false} onClick={() => {}}/>);

    const menuItem = screen.getByRole("listitem");
    const link = screen.getByRole("link");
    const text = screen.getByText("some text");

    expect(menuItem).toHaveTextContent("some text");
    expect(text).toHaveClass("border-mjr_light_green");
    expect(link).toHaveAttribute("href", "/some/uri");
  });

  it("renders the active MenuItem", () => {
    render(
      <MenuItem
        target={"/some/uri"}
        text={"some text"}
        active={true}
        onClick={() => {}}
      />
    );

    const text = screen.getByText("some text");

    expect(text).toHaveClass("border-mjr_orange");
  });
});
