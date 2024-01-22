import React from 'react'
import { NavLink } from "react-router-dom";
import CatalogCover from "../CatalogCover";

const Home = () => {
  return (
    <>
      <NavLink key="catalog" to="/catalog">
        <CatalogCover
          imageUrl="single-monument.jpg"
          text="Каталог одинарних пам'ятників"
        />
      </NavLink>
      <NavLink key="catalog" to="/catalog">
        <CatalogCover
          imageUrl="double-monument.jpg"
          text="Каталог подвійних пам'ятників"
        />
      </NavLink>
    </>
  );
};

export default Home;
