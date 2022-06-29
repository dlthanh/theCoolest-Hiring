import React, { ReactElement, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import TuyenDung from "./components/TuyenDung";

function App() {
  const [Component, setComponent] = useState<ReactElement>(<Home onDirect={() => setComponent(<TuyenDung />)} />);

  const handlePage = (page: string) => {
    if (page === "trang-chu") {
      setComponent(<Home onDirect={() => setComponent(<TuyenDung />)} />);
    } else if (page === "tuyen-dung") {
      setComponent(<TuyenDung />);
    }
  };

  return (
    <div className="wrapper">
      <Header onDirect={handlePage} />
      {Component}
      <Footer />
    </div>
  );
}

export default App;
