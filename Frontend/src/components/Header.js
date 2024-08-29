import React from "react";
import { NavLink } from "react-router-dom";
import "../components/Header.scss";
import icone from "../assets/icone_vv.png";
function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={icone} alt="Logo Vanessa Viaud" />
      <nav>
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
            <a href="#apropos" className="header__navbar-inactive">
              À propos
            </a>
          </li>
          <li>
            <a href="#skills" className="header__navbar-inactive">
              Compétences
            </a>
          </li>
          <li>
            <a href="#projects" className="header__navbar-inactive">
              Réalisations
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
