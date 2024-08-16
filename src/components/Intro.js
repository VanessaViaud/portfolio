import React from "react";
import "../components/Intro.scss";
import Portrait from "../datas/PortraitVV.jpg";
function Intro() {
  return (
    <div className="intro">
      <img
        src={Portrait}
        alt="Portrait de Vanessa Viaud"
        className="intro__img"
      />
      <p className="intro__text">Vanessa Viaud, développeuse front-end</p>
      <div>
        <div className="intro__skills">
          <h1 className="intro__skills-title">Mes compétences</h1>
          <div className="intro-__skills-content">
            <ul className="intro-__skills-content-list">
              <h2 className="intro-__skills-content-subtitle">
                Développement Frontend
              </h2>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>Javascript</li>
              <li>React</li>
            </ul>
            <ul className="intro-__skills-content-list">
              <h2 className="intro-__skills-content-subtitle">
                Outils et Backend
              </h2>
              <li>VS Code</li>
              <li>Git / Github</li>
              <li>Notion</li>
              <li>Mongo DB</li>
              <li>Node / npm</li>
              <li>Express.js</li>
            </ul>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Intro;
