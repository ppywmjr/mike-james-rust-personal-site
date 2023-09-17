import { render, screen } from "@testing-library/react";
import MenuItem from "../index";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  usePathname() {
    return "/current-uri";
  },
}));

describe("MenuItem", () => {
  it("renders the non active MenuItem", () => {
    render(<MenuItem target={"/some/uri"} text={"some text"} onClick={() => {}}/>);

    const menuItem = screen.getByRole("listitem");
    const link = screen.getByRole("link");
    const text = screen.getByText("some text");

    expect(menuItem).toHaveTextContent("some text");
    expect(text).toHaveClass("border-transparent");
    expect(link).toHaveAttribute("href", "/some/uri");
  });

  it("renders the active MenuItem", () => {
    render(
      <MenuItem target={"/current-uri"} text={"some text"} onClick={() => {}} />
    );

    const text = screen.getByText("some text");

    expect(text).toHaveClass("border-mjr_orange");
  });
});
