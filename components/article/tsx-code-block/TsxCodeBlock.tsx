"use client";

import { FunctionComponent } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import theme from "./theme";
import styles from "./TsxCodeBlock.module.css";
import { TsxCodeBlockProps } from "./types";

const TsxCodeBlock: FunctionComponent<TsxCodeBlockProps> = ({
  code,
  startingLineNumber = 1,
  wrapLongLines = false,
  highlightLines,
}) => {
  const wrapLines = highlightLines ? true : false;

  return (
    <SyntaxHighlighter
      data-testid="TxsCodeBlock"
      language="tsx"
      style={theme}
      wrapLines={wrapLines}
      lineProps={(lineNumber) => {
        let style:{ display:string, backgroundColor?: string} = { display: "block" };
        if (highlightLines?.includes(lineNumber)) {
          style.backgroundColor = "#1F3155";
        }
        return { style };
      }}
      wrapLongLines={wrapLongLines}
      showLineNumbers={true}
      startingLineNumber={startingLineNumber}
      customStyle={{ "borderRadius": "0px", padding: "0.5rem" }}
      className={`leading-tight block text-sm rounded-none ${styles.scrollbar}`}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default TsxCodeBlock;
