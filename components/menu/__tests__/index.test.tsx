import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Menu from "../index";

describe("Home", () => {
  it("renders the Menu with active URI /me-and-my-site", () => {
    render(<Menu currentUri={"/me-and-my-site"} />);

    const activeMenuLink = screen.getAllByRole("listitem").find(listitem => listitem.textContent === 'Me and my site');
    const inactiveMenuLink = screen.getAllByRole("listitem").find(listitem => listitem.textContent === 'Home');

    expect(activeMenuLink).toHaveClass("active");
    expect(inactiveMenuLink).not.toHaveClass("active");
  });

  it("only home link starts not hidden", () => {
    render(<Menu currentUri={"/me-and-my-site"} />);

    const navBarMenuLink = screen.getAllByRole("listitem").find(listitem => listitem.textContent === 'Home');
    const subMenuLink = screen.getAllByRole("listitem").find(listitem => listitem.textContent === 'Me and my site');

    expect(navBarMenuLink).not.toHaveClass("hidden");
    expect(subMenuLink).toHaveClass("hidden");
  });
  
  it("burger menu reveals links", async () => {
    render(<Menu currentUri={"/me-and-my-site"} />);

    const burger = screen.getByRole("button");
    const subMenuLink = screen.getAllByRole("listitem").find(listitem => listitem.textContent === 'Me and my site');

    userEvent.click(burger);

    await waitFor(() => {
      expect(subMenuLink).not.toHaveClass("hidden");
    })

  });
});
