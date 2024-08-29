import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../components/Header.scss";
import icone from "../assets/icone_vv.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const navigate = useNavigate();

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavigation = (path, id) => {
    navigate(path);
    if (id) {
      setTimeout(() => scrollToElement(id), 0);
    }
  };

  return (
    <div className="header">
      <img className="header__logo" src={icone} alt="Logo Vanessa Viaud" />
      <nav>
        <ul className="header__navbar">
          <li>
            <NavLink
              to="/"
              onClick={scrollToTop}
              className={({ isActive }) =>
                isActive ? "header__navbar-active" : "header__navbar-inactive"
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/#apropos"
              onClick={() => handleNavigation("/", "apropos")}
              className="header__navbar-inactive"
            >
              À propos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/#skills"
              onClick={() => handleNavigation("/", "skills")}
              className="header__navbar-inactive"
            >
              Compétences
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/#projects"
              onClick={() => handleNavigation("/", "projects")}
              className="header__navbar-inactive"
            >
              Réalisations
            </NavLink>
          </li>
          <li>
            <a
              href="./CV_Vanessa_Viaud.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="header__navbar-inactive"
            >
              Mon CV&nbsp;
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
