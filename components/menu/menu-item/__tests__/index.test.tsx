import { render, screen } from "@testing-library/react";
import MenuItem from "../index";
import styles from "../MenuItem.module.css";
import "@testing-library/jest-dom";

describe("MenuItem", () => {
  it("renders the non active MenuItem", () => {
    render(<MenuItem target={"/some/uri"} text={"some text"} active={false} />);

    const menuItem = screen.getByRole("listitem");
    const link = screen.getByRole("link");

    expect(menuItem).toHaveTextContent("some text");
    expect(link).toHaveClass("bg-secondary");
    expect(link).toHaveAttribute("href", "/some/uri");
  });

  it("renders the active MenuItem", () => {
    render(<MenuItem target={"/some/uri"} text={"some text"} active={true} />);

    const link = screen.getByRole("link");

    expect(link).toHaveClass("bg-primary");
  });
});
