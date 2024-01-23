import React from 'react'
import { NavLink } from "react-router-dom";
import CatalogCover from "../CatalogCover";
import singleMonument from '../../assets/images/single-monument.jpg';
import doubleMonument from "../../assets/images/double-monument.jpg"

const Home = () => {
  return (
    <>
      <NavLink key="catalog" to="/catalog">
        <CatalogCover
          image_url={singleMonument}
          text="Каталог одинарних пам'ятників"
        />
      </NavLink>
      <NavLink key="catalog" to="/catalog">
        <CatalogCover
          image_url={doubleMonument}
          text="Каталог подвійних пам'ятників"
        />
      </NavLink>
    </>
  );
};

export default Home;
