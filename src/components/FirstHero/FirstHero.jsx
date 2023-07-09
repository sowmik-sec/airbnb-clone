import React from "react";
import Image from "./photo-grid.png";
import "./FirstHero.css";

const FirstHero = () => {
  return (
    <div>
      <div className="hero">
        <img src={Image} alt="" className="hero-img" />
      </div>
      <div className="experiences">
        <h3>Online Experiences</h3>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default FirstHero;
