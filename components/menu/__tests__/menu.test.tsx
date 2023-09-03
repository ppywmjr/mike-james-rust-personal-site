import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Menu from "../index";

describe("Menu", () => {
  test("renders the Menu with active URI /me-and-my-site", () => {
    render(<Menu currentUri={"/me-and-my-site"} />);

    const activeMenuLink = screen.getByText("Me and my site")
    const inactiveMenuLink = screen.getByText("Quality topics");

    expect(activeMenuLink).toHaveClass("border-primary");
    expect(inactiveMenuLink).toHaveClass("border-secondary");
  });

  test("link starts hidden", () => {
    render(<Menu currentUri={"/me-and-my-site"} />);

    expect(screen.queryAllByRole("list")).not.toBeInTheDocument;
  });

  test("burger menu reveals links", async () => {
    render(<Menu currentUri={"/me-and-my-site"} />);

    const burger = screen.getByRole("button");
    userEvent.click(burger);

    await waitFor(() => {
      expect(screen.queryAllByRole("list")).toBeVisible;
    });
  });
});
