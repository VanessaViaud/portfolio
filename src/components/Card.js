import React, { useEffect, useState } from "react";
import Works from "../datas/works.json";
import "../components/Card.scss";
import ProjectDetails from "./MarkDown.js";

function Card() {
  const [works, setWorks] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null); // État pour gérer l'index actif

  useEffect(() => {
    setWorks(Works);
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Basculer l'état actif
  };

  return (
    <div>
      <h1 className="title">Mes Projets</h1>
      <ul className="card">
        {works.map((work, index) => (
          <li
            className="card__item"
            key={work.id}
            onClick={() => handleClick(index)} // Appeler handleClick au clic
          >
            <img className="card__img" src={work.picture} alt={work.title} />
            <div className="card__container">
              <p className="card__title">{work.title}</p>
            </div>
            {activeIndex === index && ( // Afficher le contenu si l'élément est actif
              <div className="card__content">
                <ProjectDetails detailsPath={work.details} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
