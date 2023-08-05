import React from "react";
import Header from "../Shared/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      {noHeaderFooter || <Header />}
      <div className="min-h-screen">
        <Outlet />
      </div>
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default MainLayout;
