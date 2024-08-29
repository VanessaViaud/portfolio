import React from "react";
import Intro from "../components/Intro.js";
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
      <div id="skills">
        <Intro />
      </div>
      <div id="projects">
        <Card />
      </div>
    </div>
  );
}

export default Home;
