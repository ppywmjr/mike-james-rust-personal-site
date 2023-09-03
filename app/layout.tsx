import React from "react";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Mike James Rust",
    default: "Mike James Rust",
  },
  description: "A QA's playground",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-dark">{children}</body>
    </html>
  );
}
