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
    const listItem = screen.getByRole("listitem");

    expect(menuItem).toHaveTextContent("some text");
    expect(text).toHaveClass("border-transparent");
    expect(link).toHaveAttribute("href", "/some/uri");
    expect(listItem).toHaveClass("bg-mjr_light_green");
  });

  it("renders the active MenuItem", () => {
    render(
      <MenuItem target={"/current-uri"} text={"some text"} onClick={() => {}} />
    );

    const text = screen.getByText("some text");

    expect(text).toHaveClass("border-mjr_orange");
  });

  it("renders the submenu MenuItem", () => {
    render(
      <MenuItem
        target={"/current-uri"}
        text={"some text"}
        isSubmenu={true}
        onClick={() => {}}
      />
    );

    const listItem = screen.getByRole("listitem");

    expect(listItem).toHaveClass("bg-mjr_very_light_green");
  });

  
});
