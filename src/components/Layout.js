import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mx-4 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-60">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
