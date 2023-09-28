export type CodeBlockProps = {
  code: string;
  startingLineNumber?: number;
  wrapLongLines?: boolean;
  highlightLines?: number[];
  language: "tsx" | "css";
};
