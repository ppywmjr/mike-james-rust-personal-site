import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TsxCodeBlock from "../TsxCodeBlock";

describe("TsxCodeBlock", () => {
  it("renders the TsxCodeBlock", () => {
    render(<TsxCodeBlock code={`import Image from 'next/image'`} />);

    const tsxCodeBlock = screen.getByTestId("TxsCodeBlock");

    expect(tsxCodeBlock).toBeVisible();
    expect(tsxCodeBlock).toHaveTextContent("import Image from 'next/image'");
  });
});
