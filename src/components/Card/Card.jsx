import React from "react";
import Person from "./katie-zaferes.png";
import star from "./star.png";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <img src={Person} alt="" className="person-img" />
      <div className="rating">
        <img src={star} alt="" width={14} height={14} />
        <p>
          5.0 <span className="gray-text">(6) . USA</span>
        </p>
      </div>
      <p className="lesson">Life lessons with Katie Zaferes</p>
      <p>
        <span className="text-bold">From $136</span> / person
      </p>
    </div>
  );
};

export default Card;
