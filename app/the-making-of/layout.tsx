import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-prose lg:max-w-3xl">{children}</div>;
}
