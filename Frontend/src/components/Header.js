import React from "react";
import { NavLink } from "react-router-dom";
import "../components/Header.scss";

function Header() {
  return (
    <div>
      <hr />
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
              Réalisations
            </a>
          </li>
          <li>
            <a href="#apropos" className="header__navbar-inactive">
              À propos
            </a>
          </li>
          <li>
            <a href="#contact" className="header__navbar-inactive">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
