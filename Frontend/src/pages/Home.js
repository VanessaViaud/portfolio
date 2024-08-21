import React from "react";
import Intro from "../components/Intro.js";
import Card from "../components/Card.js";
import APropos from "../components/APropos.js";
import Contact from "../components/Contact.js";

function Home() {
  return (
    <div>
      <div id="apropos">
        <APropos />
      </div>
      <Intro />
      <div id="projects">
        <Card />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
