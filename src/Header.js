import React from "react";
import "../components/Header.scss";
import { NavLink } from "react-router-dom";

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
          <NavLink
            to="/works"
            className={({ isActive }) =>
              isActive ? "header__navbar-active" : "header__navbar-inactive"
            }
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
