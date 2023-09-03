import Menu from "../../components/menu";
import React from "react";

export const metadata = {
  title: "Me and my site",
  description:
    "A description of the purpose of the site and why I am building it.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Menu currentUri={"/me-and-my-site"} />
      <main className="flex flex-col justify-start items-center p-4 md:p-12 py-12 min-h-screen">
        {children}
      </main>
    </>
  );
}
