import React from "react";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
