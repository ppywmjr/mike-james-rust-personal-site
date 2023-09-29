import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import Form from "../Form";

describe("Form", () => {
  const mockAction: (formData: FormData) => void = jest.fn((formData) => {});
  test("Renders with submit button and children", () => {
    render(
      <Form action={mockAction} submitText="Submit me">
        Child text
      </Form>
    );

    const children = screen.getByText("Child text");
    const submitButton = screen.getByRole("button");

    expect(children).toBeVisible();
    expect(submitButton).toBeVisible();
    expect(submitButton).toHaveTextContent("Submit me");
  });

  test("Renders with default submit button text ", () => {
    render(<Form action={mockAction}>Child text</Form>);

    const submitButton = screen.getByRole("button");

    expect(submitButton).toHaveTextContent("Submit form");
  });
});
