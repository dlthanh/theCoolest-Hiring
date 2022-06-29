import React, { ReactElement, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import TuyenDung from "./components/TuyenDung";
import { useRoutes } from "react-router-dom";

function App() {
  const RoutesComponent = useRoutes([
    {
      path: "",
      element: <Home />
    },
    {
      path: "/tuyen-dung",
      element: <TuyenDung />
    }
  ]);

  return (
    <div className="wrapper">
      <Header />
      {RoutesComponent}
      <Footer />
    </div>
  );
}

export default App;
