import React from "react";
import "./globals.css";
import Menu from "../components/menu";

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
      <body className="text-mjr_dark_blue">
        <Menu />
        <main className="flex flex-col justify-start items-center px-4 pt-12 pb-16 leading-relaxed">
          {children}
        </main>
      </body>
    </html>
  );
}
