import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { isUserLoggedIn } from "../Store/Slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

const Layout = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isUserLoggedIn());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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
