import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons">
        <a href="https://github.com/VanessaViaud">
          <FontAwesomeIcon icon={faGithub} size="1x" />
        </a>
        <FontAwesomeIcon icon={faLinkedin} size="1x" />
        <a href="mailto:contactvvportfolio?subject=Contact from portfolio">
          <FontAwesomeIcon icon={faEnvelope} size="1x" />
        </a>
      </div>
      <p>Mentions Légales</p>
    </div>
  );
}

export default Footer;
