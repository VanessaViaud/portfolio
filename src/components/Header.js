import React from "react";
import { NavLink } from "react-router-dom";
import "../components/Header.scss";

function Header() {
  return (
    <nav className="header">
      <ul className="header__navbar">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "header__navbar-active" : "header__navbar-inactive"
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <a href="#projects" className="header__navbar-inactive">
            Projets
          </a>
        </li>
        <li>
          <a href="#apropos" className="header__navbar-inactive">
            A propos
          </a>
        </li>
        <li>
          <a href="#contact" className="header__navbar-inactive">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
