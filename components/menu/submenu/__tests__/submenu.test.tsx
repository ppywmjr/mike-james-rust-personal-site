import { render, screen, waitFor } from "@testing-library/react";
import Submenu from "../index";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

jest.mock("next/navigation", () => ({
  usePathname() {
    return "/current/uri/item-1";
  },
}));

describe("Submenu", () => {
  it("renders the current Submenu", () => {
    render(
      <Submenu
        path={"/current/uri"}
        text={"some text"}
        onClick={() => {}}
        submenuItems={[
          { target: "/item-1", text: "item 1" },
          { target: "/item-2", text: "item 2" },
        ]}
      />
    );

    const submenuButton = screen.getByRole("button");
    const submenuLabel = screen.getByText("some text");
    const links = screen.getAllByRole("link");

    expect(submenuButton).toHaveTextContent("some text");
    expect(submenuLabel).toBeVisible();
    expect(submenuLabel).toHaveClass("border-mjr_orange");
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute("href", "/current/uri/item-1");
    expect(links[0]).toHaveTextContent("item 1");
    expect(links[1]).toHaveAttribute("href", "/current/uri/item-2");
    expect(links[1]).toHaveTextContent("item 2");
  });

  it("renders the non current Submenu with no underline border", () => {
    render(
      <Submenu
        path={"/non-current/uri"}
        text={"some text"}
        onClick={() => {}}
        submenuItems={[
          { target: "/item-1", text: "item 1" },
        ]}
      />
    );

    const submenuLabel = screen.getByText("some text");

    expect(submenuLabel).toHaveClass("border-transparent");
  });

  it("clicking the button opens the submenu", async () => {
    render(
      <Submenu
        path={"/current/uri"}
        text={"some text"}
        onClick={() => {}}
        submenuItems={[{ target: "/item-1", text: "item 1" }]}
      />
    );

    const submenuButton = screen.getByRole("button");

    await userEvent.click(submenuButton);

    await waitFor(() => {
      expect(screen.getAllByRole("link")).toBeVisible;
    });
  });

  it("clicking the button again closes the submenu", async () => {
    render(
      <Submenu
        path={"/current/uri"}
        text={"some text"}
        onClick={() => {}}
        submenuItems={[
          { target: "/item-1", text: "item 1" },
        ]}
      />
    );

    const submenuButton = screen.getByRole("button");

    await userEvent.click(submenuButton);

    await waitFor(() => {
      expect(screen.getAllByRole("link")).toBeVisible;
    });    
    
    await userEvent.click(submenuButton);

    await waitFor(() => {
      expect(screen.getAllByRole("link")).not.toBeVisible;
    });
  });
});
