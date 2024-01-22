import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Header>
        <img src="logo.png" width={"280px"} alt="Monument" />
      </Header>
      <main className="main-container"><Outlet /></main>
      <Navbar />
    </>
  );
}

export default App;
