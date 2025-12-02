import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


import Form from "../Form";

const mockAction = jest.fn();

describe("Form", () => {
  test("renders children inside the form", () => {
    render(
      <Form action={mockAction}>
        <span>Child text</span>
      </Form>
    );

    expect(screen.getByText("Child text")).toBeVisible();
  });

  test("shows error text when provided", () => {
    render(
      <Form action={mockAction} error="Something went wrong">
        <span>Child text</span>
      </Form>
    );

    expect(screen.getByText("Something went wrong")).toBeVisible();
  });
});
