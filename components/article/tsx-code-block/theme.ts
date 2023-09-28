// to make the style match the theme of the site, I have chosen a style and overridden key value.
// More properties can be found at:
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/src/styles/prism/a11y-dark.js

const theme = {
  'code[class*="language-"]': {
    color: "#f8f8f2",
    background: "none",
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    display: "block",
    minWidth: "max-content",
  },
  'pre[class*="language-"]': {
    color: "#f8f8f2",
    background: "#2b2b2b",
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: "0.5em 0",
    overflow: "auto",
    borderRadius: "0.3em",
  },
  ':not(pre) > code[class*="language-"]': {
    background: "#2b2b2b",
    padding: "0.1em",
    borderRadius: "0.3em",
    whiteSpace: "normal",
  },
  comment: {
    color: "#d4d0ab",
  },
  prolog: {
    color: "#d4d0ab",
  },
  doctype: {
    color: "#d4d0ab",
  },
  cdata: {
    color: "#d4d0ab",
  },
  punctuation: {
    color: "#fefefe",
  },
  property: {
    color: "#ffa07a",
  },
  tag: {
    color: "#E07A5F",
  },
  constant: {
    color: "#ffa07a",
  },
  symbol: {
    color: "#ffa07a",
  },
  deleted: {
    color: "#ffa07a",
  },
  boolean: {
    color: "#00e0e0",
  },
  number: {
    color: "#00e0e0",
  },
  selector: {
    color: "#abe338",
  },
  "attr-name": {
    color: "#F7B32A",
  },
  string: {
    color: "#f7b32b",
  },
  char: {
    color: "#abe338",
  },
  builtin: {
    color: "#abe338",
  },
  inserted: {
    color: "#abe338",
  },
  operator: {
    color: "#00e0e0",
  },
  entity: {
    color: "#00e0e0",
    cursor: "help",
  },
  url: {
    color: "#00e0e0",
  },
  ".language-css .token.string": {
    color: "#00e0e0",
  },
  ".style .token.string": {
    color: "#00e0e0",
  },
  variable: {
    color: "#00e0e0",
  },
  atrule: {
    color: "#ffd700",
  },
  "attr-value": {
    color: "#ffd700",
  },
  function: {
    color: "#92BE8F",
  },
  keyword: {
    color: "#6EA5DC",
  },
  regex: {
    color: "#ffd700",
  },
  important: {
    color: "#ffd700",
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
};

export default theme;
