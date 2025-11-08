import React from "react";
import Navbar from "./Navbar";
import PageContent from "./PageContent";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <PageContent>{children}</PageContent>
      <Footer />
    </div>
  );
};

export default Layout;
