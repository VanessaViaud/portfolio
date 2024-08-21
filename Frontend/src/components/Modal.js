import React from "react";
import "../components/Modal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // Ne rien rendre si la modal n'est pas ouverte

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FontAwesomeIcon icon={faCircleXmark} size="2x" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
