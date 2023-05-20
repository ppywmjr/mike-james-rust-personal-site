import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Menu from "../index";
import styles from "../../menu-item/MenuItem.module.css";

describe("Home", () => {
  it("renders the Menu with current URI /me-and-my-site", () => {
    render(<Menu currentUri={"/me-and-my-site"} />);

    const currentMenuItem = screen.getByRole("listitem", {
      name: /Me and my site/i,
    });

    expect(currentMenuItem).toHaveTextContent("Me and my site");
    expect(currentMenuItem).toHaveClass(styles.active);
  });
});
