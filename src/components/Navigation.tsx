import React from 'react'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "./pages/Home";
import Location from "./pages/Location";
import Catalog from "./pages/Catalog";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/single-catalog" element={<Catalog />} />
          <Route path="/double-catalog" element={<Catalog />} />
          <Route path="/sales-catalog" element={<Catalog />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Navigation;
