import Menu from "@/components/menu";

export default function RootLayout({ children }) {
  return (
    <>
      <Menu currentUri={"/me-and-my-site"} />
      {children}
    </>
  );
}
