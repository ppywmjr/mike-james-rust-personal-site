import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Paragraph from "../Paragraph";

describe("Paragraph", () => {
    it("renders the paragraph with children", () => {
        render(<Paragraph>Child text</Paragraph>);

        const paragraph = screen.getByText("Child text");
        
        expect(paragraph).toBeVisible();
    })
})
