const React = require("react");

function normalizeChildren(children) {
  return React.Children.toArray(children).join("");
}

function MockSyntaxHighlighter(props) {
  const {
    children,
    className,
    style: ignoredTheme,
    customStyle,
    showLineNumbers = true,
    startingLineNumber = 1,
    lineProps,
    highlightLines,
    wrapLines,
    wrapLongLines,
    "data-testid": dataTestId,
    ...rest
  } = props;

  const raw = normalizeChildren(children);
  const splitLines = raw ? raw.split(/\r?\n/) : [""];

  const renderedLines = splitLines.map((line, index) => {
    const lineNumber = startingLineNumber + index;
    const trimmedLine = line.trim();
    const extraProps = typeof lineProps === "function" ? lineProps(lineNumber) : {};
    const highlightStyle = extraProps?.style;

    const codeSpan = React.createElement(
      "span",
      {
        className: "code-line",
        style: highlightStyle,
        "data-highlighted": highlightLines?.includes(lineNumber) ? true : undefined,
      },
      trimmedLine
    );

    const lineChildren = [];

    if (showLineNumbers) {
      lineChildren.push(
        React.createElement(
          "span",
          {
            className: "line-number",
            "aria-hidden": true,
            key: `${lineNumber}-number`,
          },
          lineNumber
        )
      );
    }

    lineChildren.push(React.cloneElement(codeSpan, { key: `${lineNumber}-code` }));

    return React.createElement(
      "span",
      {
        key: lineNumber,
        "data-line-number": lineNumber,
        style: highlightStyle,
        className: extraProps?.className,
      },
      lineChildren
    );
  });

  return React.createElement(
    "pre",
    {
      ...rest,
      className,
      style: customStyle,
      "data-testid": dataTestId ?? "mock-syntax-highlighter",
      "data-wrap-lines": wrapLines,
      "data-wrap-long-lines": wrapLongLines,
    },
    renderedLines
  );
}

module.exports = MockSyntaxHighlighter;
module.exports.default = MockSyntaxHighlighter;
module.exports.Prism = MockSyntaxHighlighter;
module.exports.__esModule = true;
