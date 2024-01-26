import React from 'react'
import { NavLink } from "react-router-dom";
import CatalogCover from "../CatalogCover";
import singleMonument from '../../assets/images/single-monument.jpg';
import doubleMonument from "../../assets/images/double-monument.jpg"

const Home = () => {
  return (
    <>
      <NavLink key="catalog" to="/single-catalog">
        <CatalogCover
          image_url={singleMonument}
          coverName="Каталог одинарних пам'ятників"
        />
      </NavLink>
      <NavLink key="catalog" to="/double-catalog">
        <CatalogCover
          image_url={doubleMonument}
          coverName="Каталог подвійних пам'ятників"
        />
      </NavLink>
    </>
  );
};

export default Home;
