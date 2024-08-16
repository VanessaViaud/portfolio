import React from "react";
import Intro from "../components/Intro.js";
import Card from "../components/Card.js";
import APropos from "../components/APropos.js";

function Home() {
  return (
    <div>
      <Intro />
      <div id="projects">
        <Card />
      </div>
      <div id="apropos">
        <APropos />
      </div>
    </div>
  );
}

export default Home;
