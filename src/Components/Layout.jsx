import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layoutMain">
        {children}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
