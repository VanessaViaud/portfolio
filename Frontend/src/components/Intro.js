import React from "react";
import "../components/Intro.scss";
import Front from "../assets/DevFront.png";
import Tools from "../assets/OutilsBackend.png";

function Intro() {
  return (
    <div className="intro">
      <h2 className="intro__title">Mes Compétences</h2>
      <div className="intro__content">
        <div className="intro__skills">
          <h2 className="intro__skills-subtitle">Développement Frontend</h2>
          <img
            className="intro__skills-img"
            src={Front}
            alt="Liste des compétences en développement Frontend"
          />
        </div>
        <div className="intro__skills">
          <h2 className="intro__skills-subtitle">Outils et Backend</h2>
          <img
            className="intro__skills-img"
            src={Tools}
            alt="Liste des compétences en développement Frontend"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
