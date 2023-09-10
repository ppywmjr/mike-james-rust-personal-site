import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Menu from "../index";

jest.mock("next/navigation", () => ({
  usePathname() {
    return "/me-and-my-site";
  },
}));

describe("Menu", () => {
  test("renders the Menu with active URI /me-and-my-site", () => {
    render(<Menu />);

    const activeMenuLink = screen.getByText("Me and my site");
    const inactiveMenuLink = screen.getByText("Quality topics");

    expect(activeMenuLink).toHaveClass("border-mjr_light_blue");
    expect(inactiveMenuLink).toHaveClass("border-mjr_light_green");
  });

  test("link starts hidden", () => {
    render(<Menu />);

    expect(screen.queryAllByRole("list")).not.toBeInTheDocument;
  });

  test("burger menu reveals links", async () => {
    render(<Menu />);

    const burger = screen.getByRole("button");
    await userEvent.click(burger);

    await waitFor(() => {
      expect(screen.queryAllByRole("list")).toBeVisible;
    });
  });

  test("closing burger menu hides links", async () => {
    render(<Menu />);

    const burger = screen.getByRole("button");
    await userEvent.click(burger);

    await waitFor(() => {
      expect(screen.queryAllByRole("list")).toBeVisible;
    });

    await userEvent.click(burger);

    await waitFor(() => {
      expect(screen.queryAllByRole("list")).not.toBeInTheDocument;
    });
  });

  test("clicking link hides links", async () => {
    render(<Menu />);

    const burger = screen.getByRole("button");
    await userEvent.click(burger);

    await waitFor(() => {
      expect(screen.queryAllByRole("list")).toBeVisible;
    });

    await userEvent.click(screen.queryAllByRole("list")[0]);

    await waitFor(() => {
      expect(screen.queryAllByRole("list")).not.toBeInTheDocument;
    });
  });
});
