import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import menuIcon from "../assets/images/menu.png";
import closeIcon from "../assets/images/close.png";
import homeIcon from "../assets/images/home.png";
import locationIcon from "../assets/images/location.png";
import phoneIcon from "../assets/images/phone.png";

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
      window.location.href = "tel:" + phoneNumber;
    } else {
      alert("Дзвінки не підтримуються на цьому пристрої.");
    }
  };

  const phoneNumber = "+380989684475";

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
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary ${
          menuIsOpen ? "menu-open" : ""
        }`}
      >
        <button type="button" className="nav-but">
          <img
            className="nav-icon"
            src={menuIsOpen ? closeIcon : menuIcon}
            width="27px"
            title={menuIsOpen ? "Закрити" : "Меню"}
            alt={menuIsOpen ? "Закрити" : "Меню"}
            onClick={toggleMenu}
          />
        </button>
        <NavLink key="home" to="/">
          <img
            className="nav-icon"
            src={homeIcon}
            width="30px"
            title="Головна"
            alt="Головна"
            onClick={closeMenu}
          />
        </NavLink>
        <NavLink key="location" to="/location">
          <img
            className="nav-icon"
            src={locationIcon}
            width="42px"
            title="Локація"
            alt="Локація"
            onClick={closeMenu}
          />
        </NavLink>
        <button type="button" className="nav-but">
          <img
            className="nav-icon"
            src={phoneIcon}
            width="30px"
            title="Телефон"
            alt="Телефон"
            onClick={() => callPhoneNumber(phoneNumber)}
          />
        </button>
      </nav>

      <div
        className={`menu-overlay ${menuIsOpen ? "visible" : "hidden"}`}
        onClick={toggleMenu}
      />
      <div className={`menu ${menuIsOpen ? "open" : ""}`}>
        <div className="menu-header">Меню</div>
        <div className="menu-body">
          <ul>
            <li>Одинарні пам'ятники</li>
            <li>Подвійні пам'ятники</li>
            <li>Акційні пам'ятникиі</li>
            <li>Політика конфеденційності</li>
            <li>Оплата та доставка</li>
            <li>Гарантія та обмін</li>
            <li>Зв'язок з нами</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
