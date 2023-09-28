import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CodeBlock from "../CodeBlock";

describe("CodeBlock", () => {
  it("renders the CodeBlock with default starting line number 1", () => {
    render(<CodeBlock code={`import Image from 'next/image'`} language="tsx"/>);

    const codeBlock = screen.getByTestId("CodeBlock");

    expect(codeBlock).toBeVisible();
    expect(codeBlock).toHaveTextContent("1import Image from 'next/image'");
  });

  it("renders the CodeBlock with starting line number 5", () => {
    render(
      <CodeBlock
        code={`import Image from 'next/image'`}
        startingLineNumber={5}
        language="css"
      />
    );

    const codeBlock = screen.getByTestId("CodeBlock");

    expect(codeBlock).toBeVisible();
    expect(codeBlock).toHaveTextContent("5import Image from 'next/image'");
  });

  it("renders the CodeBlock with starting highlighted lines", () => {
    render(
      <CodeBlock
        code={`first line
          second line`}
        highlightLines={[2]}
        language="tsx"
      />
    );

    const firstLine = screen.getByText("first line");
    const secondLine = screen.getByText("second line");

    
    expect(firstLine).not.toHaveStyle("backgroundColor: #1F3155");
    expect(secondLine).toHaveStyle("backgroundColor: #1F3155");
  });
});
