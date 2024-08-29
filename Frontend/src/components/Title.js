import React from "react";
import "../components/Title.scss";
import portrait from "../assets/PortraitVV.jpg";
import logo from "../assets/logo3_vv.png";
function Title() {
  return (
    <div className="presentation">
      <div className="presentation__title">
        {/*         <h1 className="presentation__title__h">Vanessa Viaud,</h1>
         */}{" "}
        <img
          className="presentation__title__logo"
          src={logo}
          alt="Vanessa Viaud"
        />
        {/*         <p className="presentation__title__text">développeuse front-end.</p>
         */}{" "}
      </div>
      <div>
        <img
          className="presentation__portrait"
          src={portrait}
          alt="Portrait de Vanessa Viaud"
        />
      </div>
    </div>
  );
}

export default Title;
