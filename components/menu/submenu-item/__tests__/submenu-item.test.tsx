import { render, screen } from "@testing-library/react";
import SubmenuItem from "../index";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  usePathname() {
    return "/current-uri";
  },
}));

describe("SubmenuItem", () => {
  it("renders the non active SubmenuItem", () => {
    render(
      <SubmenuItem target={"/some/uri"} text={"some text"} onClick={() => {}} />
    );

    const menuItem = screen.getByRole("listitem");
    const link = screen.getByRole("link");
    const text = screen.getByText("some text");

    expect(menuItem).toHaveTextContent("some text");
    expect(text).toHaveClass("border-transparent");
    expect(link).toHaveAttribute("href", "/some/uri");
  });

  it("renders the active SubmenuItem", () => {
    render(
      <SubmenuItem
        target={"/current-uri"}
        text={"some text"}
        onClick={() => {}}
      />
    );

    const text = screen.getByText("some text");

    expect(text).toHaveClass("border-mjr_orange");
  });
});
