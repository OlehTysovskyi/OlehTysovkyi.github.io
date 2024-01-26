import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import logo from "./assets/images/logo.png";

function App() {
  return (
    <>
      <Header>
        <img className="header-img" src={logo} title="Головна" alt="ПАМ'ЯТНИК" />
      </Header>
      <main className="main-container">
        <Outlet />
      </main>
      <Navbar />
    </>
  );
}

export default App;
