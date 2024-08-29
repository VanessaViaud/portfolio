import React from "react";
import { NavLink } from "react-router-dom";
import "../components/Header.scss";
import icone from "../assets/icone_vv.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
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
            <a
              href="./CV_Vanessa_Viaud.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="header__navbar-inactive"
            >
              Mon CV <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            <a href="tel:">Mon tel</a>
            toototo <br></br>
            <a href="mailto:toto@wanadoo.fr&subject:Contact+Portfolio">
              Mon tel
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
