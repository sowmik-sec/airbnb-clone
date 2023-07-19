import React from "react";
import "./Card.css";

const Card = ({ img, rating, reviewCount, country, title, price }) => {
  return (
    <div className="card">
      <img src={img} alt="" className="person-img" />
      <div className="rating">
        <img src={rating} alt="" width={14} height={14} />
        <p>
          5.0{" "}
          <span className="gray-text">
            ({reviewCount}) . {country}
          </span>
        </p>
      </div>
      <p className="lesson">{title}</p>
      <p>
        <span className="text-bold">From ${price}</span> / person
      </p>
    </div>
  );
};

export default Card;
