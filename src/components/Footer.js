import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../components/Footer.scss";
import Mentions from "./Mentions";

function Footer() {
  // Créez un état pour gérer l'ouverture de la modal
  const [isMentionsOpen, setIsMentionsOpen] = useState(false);

  // Fonction pour ouvrir la modal
  const openMentions = () => setIsMentionsOpen(true);

  // Fonction pour fermer la modal
  const closeMentions = () => setIsMentionsOpen(false);
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
      <p onClick={openMentions} style={{ cursor: "pointer" }}>
        Mentions Légales
      </p>

      {/* Affichez la modal Mentions et passez l'état et les fonctions */}
      <Mentions isOpen={isMentionsOpen} onClose={closeMentions} />
    </div>
  );
}

export default Footer;
