import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "../components/Modal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

const fetchMarkdown = async (setContent) => {
  const response = await fetch("./mentionslegales.md");
  const text = await response.text();
  setContent(text);
};

function Mentions({ isOpen, onClose }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
      fetchMarkdown(setContent);
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FontAwesomeIcon icon={faSquareXmark} size="1x" />
        </button>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Mentions;
