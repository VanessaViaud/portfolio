import React, { useState } from "react";
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
    closeMenu(); // Fermer le menu après le scroll vers le haut
  };

  const handleNavigation = (path, id) => {
    navigate(path);
    if (id) {
      setTimeout(() => {
        scrollToElement(id);
        closeMenu(); // Fermer le menu après le scroll vers l'ancre
      }, 0);
    } else {
      closeMenu(); // Fermer le menu si pas de scrolling spécifique
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="header">
      <NavLink
        to="/"
        aria-label="Vers l'accueil"
        onClick={scrollToTop}
        className={({ isActive }) =>
          isActive ? "header__navbar-active" : "header__navbar-inactive"
        }
      >
        <img className="header__logo" src={icone} alt="Logo Vanessa Viaud" />
      </NavLink>
      <nav>
        <ul className={`header__navbar ${isOpen ? "active" : ""}`}>
          <li>
            <NavLink
              to="/"
              aria-label="Vers l'accueil"
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
              aria-label="Vers la section à propos"
              to="/#apropos"
              onClick={() => handleNavigation("/", "apropos")}
              className="header__navbar-inactive"
            >
              À propos
            </NavLink>
          </li>
          <li>
            <NavLink
              aria-label="Vers la section Mes compétences"
              to="/#competences"
              onClick={() => handleNavigation("/", "competences")}
              className="header__navbar-inactive"
            >
              Compétences
            </NavLink>
          </li>
          <li>
            <NavLink
              aria-label="Vers la section Mes Réalisations"
              to="/#realisations"
              onClick={() => handleNavigation("/", "realisations")}
              className="header__navbar-inactive"
            >
              Réalisations
            </NavLink>
          </li>
          <li>
            <a
              aria-label="Cliquez pour télécharger le CV"
              href="./CV_Vanessa_Viaud.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="header__navbar-inactive"
              onClick={closeMenu} // Fermer le menu après le clic sur ce lien
            >
              Mon CV&nbsp;
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
            </a>
          </li>
        </ul>
        <div className="burger" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>
    </div>
  );
}

export default Header;
