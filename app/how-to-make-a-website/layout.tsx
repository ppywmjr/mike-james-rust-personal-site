import React from "react";

export default function MakingOfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-prose lg:max-w-3xl mx-auto">{children}</div>;
}
