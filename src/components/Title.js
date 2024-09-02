import React from "react";
import "../components/Title.scss";
import portrait from "../assets/PortraitVV.jpg";
import logo from "../assets/logo4_vv.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Title() {
  return (
    <div className="presentation">
      <div className="presentation__title">
        <h1>VANESSA VIAUD</h1>
        <h2>développeuse web</h2>
        <img
          className="presentation__title__logo"
          src={logo}
          alt="Vanessa Viaud"
        />
        <div className="presentation__icon">
          <a href="https://github.com/VanessaViaud">
            <FontAwesomeIcon
              className="presentation__icons"
              icon={faGithub}
              size="2x"
              aria-label="Lien vers Github Vanessa Viaud"
            />
          </a>
          <FontAwesomeIcon
            className="presentation__icons"
            icon={faLinkedin}
            size="2x"
            aria-label="Lien vers Linkedin Vanessa Viaud"
          />
          <a href="mailto:contactvvportfolio?subject=Contact from portfolio">
            <FontAwesomeIcon
              className="presentation__icons"
              icon={faEnvelope}
              size="2x"
              aria-label="Envoyer un email à Vanessa Viaud"
            />
          </a>
        </div>
      </div>
      <div className="presentation__portrait">
        <img
          className="presentation__portrait-img"
          src={portrait}
          alt="Portrait de Vanessa Viaud"
        />
      </div>
    </div>
  );
}

export default Title;
