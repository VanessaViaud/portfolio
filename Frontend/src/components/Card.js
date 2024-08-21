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
    <div>
      <h2 className="card__title">Mes Réalisations</h2>
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
