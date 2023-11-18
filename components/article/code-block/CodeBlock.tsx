"use client";

import { FunctionComponent } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import theme from "./theme";
import styles from "./CodeBlock.module.css";
import { CodeBlockProps } from "./types";

const CodeBlock: FunctionComponent<CodeBlockProps> = ({
  code,
  startingLineNumber = 1,
  wrapLongLines = false,
  highlightLines,
  language,
}) => {
  const wrapLines = highlightLines ? true : false;

  return (
    <SyntaxHighlighter
      data-testid="CodeBlock"
      language={language}
      style={theme}
      wrapLines={wrapLines}
      lineProps={(lineNumber) => {
        let style: {
          display: string;
          backgroundColor?: string;
          borderColor?: string;
          borderWidth?: string;
        } = {
          display: "block",
          borderWidth: "0 0 0 2px",
          borderColor: "transparent",
        };
        if (highlightLines?.includes(lineNumber)) {
          style.backgroundColor = "#1F3155";
          style.borderColor = "#8DAFF3";
        }
        return { style };
      }}
      wrapLongLines={wrapLongLines}
      showLineNumbers={language === 'log' ? false : true}
      startingLineNumber={startingLineNumber}
      customStyle={{ borderRadius: "0px", padding: "0.5rem" }}
      className={`leading-tight block text-sm rounded-none ${styles.scrollbar}`}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
