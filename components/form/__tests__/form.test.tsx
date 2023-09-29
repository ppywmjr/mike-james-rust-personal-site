import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Form from "../Form";

describe("Form", () => {
    const sampleFunction: (formData: FormData) => void = (formData) => {};
  it("renders the Form with children", () => {
    render(<Form action={sampleFunction}>Child text</Form>);

    const form = screen.getByText("Child text");

    expect(form).toBeVisible();
  });
});
