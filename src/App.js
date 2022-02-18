import React from "react";
import MainNavigation from "./components/Layout/Navigation/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "./components/Layout/Footer/Footer";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const token = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      {pathname === "/" && <Footer />}
    </>
  );
};

export default App;
