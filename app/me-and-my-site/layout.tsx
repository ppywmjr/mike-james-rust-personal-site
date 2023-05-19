import Menu from "../../components/menu";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Menu currentUri={"/me-and-my-site"} />
      {children}
    </>
  );
}
