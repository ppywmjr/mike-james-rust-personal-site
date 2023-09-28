import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TsxCodeBlock from "../TsxCodeBlock";

describe("TsxCodeBlock", () => {
  it("renders the TsxCodeBlock with default starting line number 1", () => {
    render(<TsxCodeBlock code={`import Image from 'next/image'`} />);

    const tsxCodeBlock = screen.getByTestId("TxsCodeBlock");

    expect(tsxCodeBlock).toBeVisible();
    expect(tsxCodeBlock).toHaveTextContent("1import Image from 'next/image'");
  });

  it("renders the TsxCodeBlock with starting line number 5", () => {
    render(
      <TsxCodeBlock
        code={`import Image from 'next/image'`}
        startingLineNumber={5}
      />
    );

    const tsxCodeBlock = screen.getByTestId("TxsCodeBlock");

    expect(tsxCodeBlock).toBeVisible();
    expect(tsxCodeBlock).toHaveTextContent("5import Image from 'next/image'");
  });

  it("renders the TsxCodeBlock with starting highlighted lines", () => {
    render(
      <TsxCodeBlock
        code={`first line
          second line`}
        highlightLines={[2]}
      />
    );

    const firstLine = screen.getByText("first line");
    const secondLine = screen.getByText("second line");

    
    expect(firstLine).not.toHaveStyle("backgroundColor: #1F3155");
    expect(secondLine).toHaveStyle("backgroundColor: #1F3155");
  });
});
