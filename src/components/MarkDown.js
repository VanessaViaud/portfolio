import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function ProjectDetails({ detailsPath }) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(detailsPath)
      .then((response) => response.text())
      .then((text) => setMarkdown(text))
      .catch((error) => console.error("Error loading markdown:", error));
  }, [detailsPath]);

  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default ProjectDetails;
