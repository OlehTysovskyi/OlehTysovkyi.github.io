import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import logo from "./assets/images/logo.png"

function App() {
  return (
    <>
      <Header>
        <img src={logo} width={"280px"} alt="ПАМ'ЯТНИК" />
      </Header>
      <main className="main-container"><Outlet /></main>
      <Navbar />
    </>
  );
}

export default App;
