import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SubHeading from "../SubHeading";

describe("SubHeading", () => {
  it("renders the SubHeading with h2", () => {
    render(<SubHeading level={2}>Child text</SubHeading>);

    const subHeading = screen.getByRole("heading", { level: 2 });

    expect(subHeading).toBeVisible();
    expect(subHeading).toHaveTextContent("Child text");
  });
  it("renders the SubHeading with h3", () => {
    render(<SubHeading level={3}>Child text</SubHeading>);

    const subHeading = screen.getByRole("heading", { level: 3 });

    expect(subHeading).toBeVisible();
    expect(subHeading).toHaveTextContent("Child text");
  });
  it("renders the SubHeading with h4", () => {
    render(<SubHeading level={4}>Child text</SubHeading>);

    const subHeading = screen.getByRole("heading", { level: 4 });

    expect(subHeading).toBeVisible();
    expect(subHeading).toHaveTextContent("Child text");
  });
  it("renders the SubHeading with h5", () => {
    render(<SubHeading level={5}>Child text</SubHeading>);

    const subHeading = screen.getByRole("heading", { level: 5 });

    expect(subHeading).toBeVisible();
    expect(subHeading).toHaveTextContent("Child text");
  });
  it("renders the SubHeading with h2", () => {
    render(<SubHeading level={6}>Child text</SubHeading>);

    const subHeading = screen.getByRole("heading", { level: 6 });

    expect(subHeading).toBeVisible();
    expect(subHeading).toHaveTextContent("Child text");
  });
});
