import React, { useEffect, useState } from "react";
import Works from "../datas/works.json";
import "../components/Card.scss";
import ProjectDetails from "./MarkDown.js";
import Modal from "./Modal.js"; // Importer le composant Modal

function Card() {
  const [works, setWorks] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null); // État pour gérer l'index actif

  useEffect(() => {
    setWorks(Works);
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index); // Définir l'index actif pour ouvrir la modal
  };

  const closeModal = () => {
    setActiveIndex(null); // Réinitialiser l'index actif pour fermer la modal
  };

  return (
    <div className="card">
      <h2 className="card__title">MES RÉALISATIONS</h2>
      <div className="card__intro">
        <p className="card__intro-content">
          Voici un aperçu des projets que j'ai réalisés dans le cadre de ma
          formation de développeuse web chez OpenClassrooms. Cette expérience
          m'a permis d'acquérir des compétences clés en développement front-end
          et back-end, en travaillant avec des technologies telles que HTML,
          CSS, JavaScript, React, et Node.js. J'ai également pu approfondir mes
          connaissances en optimisation et en débogage, en utilisant des outils
          tels que Chrome DevTools, Wave, et Lighthouse.
        </p>
      </div>
      <ul className="card__content">
        {works.map((work, index) => (
          <li
            className="card__content-item"
            key={work.id}
            onClick={() => handleClick(index)} // Appeler handleClick au clic
          >
            <img
              className="card__content-img"
              src={work.picture}
              alt={work.title}
            />
            <div className="card__content-container">
              <p className="card__content-title">{work.title}</p>
            </div>
          </li>
        ))}
      </ul>

      <Modal isOpen={activeIndex !== null} onClose={closeModal}>
        {activeIndex !== null && (
          <ProjectDetails detailsPath={works[activeIndex].details} />
        )}
      </Modal>
    </div>
  );
}

export default Card;
