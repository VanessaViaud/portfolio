import React from "react";
import Skills from "../components/Skills.js";
import Card from "../components/Card.js";
import APropos from "../components/APropos.js";
import Title from "../components/Title.js";

function Home() {
  return (
    <div>
      <div id="title">
        <Title />
      </div>
      <div id="apropos">
        <APropos />
      </div>
      <div id="competences">
        <Skills />
      </div>
      <div id="realisations">
        <Card />
      </div>
    </div>
  );
}

export default Home;
