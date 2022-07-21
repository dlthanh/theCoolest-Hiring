import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import TuyenDung from "./components/TuyenDung";
// import Contact from "./components/Contact";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home />
      <TuyenDung />
      {/*<Contact />*/}
      <Footer />
    </div>
  );
}

export default App;
