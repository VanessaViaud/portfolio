import React from "react";
import "../components/Title.scss";
import logo from "../assets/logo_vv.png";

function Title() {
  return (
    <div className="title">
      <img src={logo} alt="Vanessa Viaud" className="title__img" />
      <p className="title__text">développeuse front-end</p>
    </div>
  );
}

export default Title;
