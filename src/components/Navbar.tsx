import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import menuIcon from '../assets/images/menu.png';
import closeIcon from '../assets/images/close.png';
import homeIcon from '../assets/images/home.png';
import locationIcon from '../assets/images/location.png';
import phoneIcon from '../assets/images/phone.png';

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const callPhoneNumber = (phoneNumber: string) => {
    closeMenu();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = 'tel:' + phoneNumber;
    } else {
      alert('Дзвінки не підтримуються на цьому пристрої.');
    }
  };

  const phoneNumber = '+380989684475';

  // useEffect(() => {
  //   const handleClickOutsideMenu = (event: MouseEvent) => {
  //     const navbarElement = document.querySelector('.navbar');

  //     if (menuIsOpen && navbarElement && !navbarElement.contains(event.target as Node)) {
  //       toggleMenu();
  //     }
  //   };

  //   document.addEventListener('click', handleClickOutsideMenu);

  //   return () => {
  //     document.removeEventListener('click', handleClickOutsideMenu);
  //   };
  // }, [menuIsOpen]);

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary ${menuIsOpen ? 'menu-open' : ''}`}>
        <img
          className="nav-icon"
          src={menuIsOpen ? closeIcon : menuIcon}
          width="27px"
          title={menuIsOpen ? 'Закрити' : 'Меню'}
          alt={menuIsOpen ? 'Закрити' : 'Меню'}
          onClick={toggleMenu}
        />
        <NavLink key="home" to="/">
          <img className="nav-icon" src={homeIcon} width="30px" title="Головна" alt="Головна" onClick={closeMenu} />
        </NavLink>
        <NavLink key="location" to="/location">
          <img className="nav-icon" src={locationIcon} width="42px" title="Локація" alt="Локація" onClick={closeMenu} />
        </NavLink>
        <img
          className="nav-icon"
          src={phoneIcon}
          width="30px"
          title="Телефон"
          alt="Телефон"
          onClick={() => callPhoneNumber(phoneNumber)}
        />
      </nav>

      <div className={`menu-overlay ${menuIsOpen ? 'visible' : 'hidden'}`} onClick={toggleMenu}></div>
      <div className={`off-canvas-menu ${menuIsOpen ? 'open' : ''}`}>
        <ul>
          <li>Пункт 1</li>
          <li>Пункт 2</li>
          <li>Пункт 3</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
