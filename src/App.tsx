import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import logo from "./assets/images/logo.png";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <Header>
        <NavLink key="home" to="/">
          <img src={logo} width={"280px"} alt="ПАМ'ЯТНИК" />
        </NavLink>
      </Header>
      <main className="main-container">
        <Outlet />
      </main>
      <Navbar />
    </>
  );
}

export default App;
