import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import menu from '../assets/images/menu.png'
import close from '../assets/images/close.png'
import home from '../assets/images/home.png'
import location from '../assets/images/location.png'
import phone from '../assets/images/phone.png'


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const callPhoneNumber = (phoneNumber: string) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = 'tel:' + phoneNumber;
    } else {
      alert('Дзвінки не підтримуються на цьому пристрої.');
    }
  };

  const phoneNumber = '+380989684475';

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <img
          className="nav-icon"
          src={isMenuOpen ? close : menu}
          width="27px"
          title={isMenuOpen ? 'Закрити' : 'Меню'}
          alt={isMenuOpen ? 'Закрити' : 'Меню'}
          onClick={toggleMenu}
        />
        <NavLink key="home" to="/">
          <img className="nav-icon" src={home} width="30px" title="Головна" alt="Головна" />
        </NavLink>
        <NavLink key="location" to="/location">
          <img className="nav-icon" src={location} width="42px" title="Локація" alt="Локація" />
        </NavLink>
        <img
          className="nav-icon"
          src={phone}
          width="30px"
          title="Телефон"
          alt="Телефон"
          onClick={() => callPhoneNumber(phoneNumber)}
        />
      </nav>
      <div className={`menu ${isMenuOpen ? 'visible' : 'hidden'}`}></div>
    </>
  );
};

export default Navbar;
